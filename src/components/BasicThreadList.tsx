import "../App.css";
import BasicThreadItem from "./BasicThreadItem";
import React, { useState } from "react";

interface Thread {
    id: number;
    name: string;
    author: string;
}

interface BasicThreadListProps {
    title: string;
    threads: Thread[];
}

type VoteValue = 1 | -1 | 0;

const BasicThreadList: React.FC<BasicThreadListProps> = ({ title, threads }) => {
    const username = localStorage.getItem("username");
    const [voteState, setVoteState] = useState<Record<number, VoteValue>>({});

    const handleVote = (threadId: number, value: VoteValue) => {
        if (!username) {
            return;
        }

        setVoteState((prev) => {
            const currentVote = prev[threadId] ?? 0;

            // If clicking the same vote again, remove vote
            if (currentVote === value) {
                return {
                    ...prev,
                    [threadId]: 0,
                };
            }

            // Otherwise set new vote
            return {
                ...prev,
                [threadId]: value,
            };
        });
    };

    // Sort threads by vote count (descending)
    const sortedThreads = [...threads].sort((a, b) => {
        const votesA = voteState[a.id] ?? 0;
        const votesB = voteState[b.id] ?? 0;
        return votesB - votesA;
    });

    return (
        <div className="thread-card">
            <h4 className="thread-card-title">{title}</h4>

            <ul className="thread-list">
                {sortedThreads.map((thread) => (
                    <BasicThreadItem key={thread.id} thread={thread} voteState={voteState} handleVote={handleVote} />
                ))}
            </ul>
        </div>
    );
};

export default BasicThreadList;
