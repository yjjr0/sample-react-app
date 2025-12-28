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

const BasicThreadList: React.FC<BasicThreadListProps> = ({ title, threads }) => {
    const [votes, setVotes] = useState<Record<number, number>>({});

    const handleUpvote = (id: number) => {
        setVotes((prev) => ({
            ...prev,
            [id]: (prev[id] ?? 0) + 1,
        }));
    };

    const handleDownvote = (id: number) => {
        setVotes((prev) => ({
            ...prev,
            [id]: (prev[id] ?? 0) - 1,
        }));
    };

    // Sort threads by vote count (descending)
    const sortedThreads = [...threads].sort((a, b) => {
        const votesA = votes[a.id] ?? 0;
        const votesB = votes[b.id] ?? 0;
        return votesB - votesA;
    });

    return (
        <div className="thread-card">
            <h4 className="thread-card-title">{title}</h4>

            <ul className="thread-list">
                {sortedThreads.map((thread) => (
                    <BasicThreadItem
                        key={thread.id}
                        thread={thread}
                        votes={votes[thread.id] ?? 0}
                        onUpvote={handleUpvote}
                        onDownvote={handleDownvote}
                    />
                ))}
            </ul>
        </div>
    );
};

export default BasicThreadList;
