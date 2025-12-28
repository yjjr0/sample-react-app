import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

interface Thread {
    id: number;
    name: string;
    author: string;
}

interface ThreadItemProps {
    thread: Thread;
    voteState: Record<number, number>; // map of threadId -> vote
    handleVote: (threadId: number, value: 1 | -1) => void;
}

const BasicThreadItem: React.FC<ThreadItemProps> = ({ thread, voteState, handleVote }) => {
    const username = localStorage.getItem("username");
    const currentVote = voteState[thread.id] ?? 0;

    return (
        <li className="thread-item">
            <div className="thread-content">
                <Link to={`/thread/${thread.id}`} className="thread-link">
                    {thread.name}
                </Link>
                <div className="thread-author">Posted by {thread.author}</div>
                {!username && <div className="vote-warning">Log in to vote</div>}
            </div>
            <div className="vote-column">
                <button
                    className={`vote-button ${currentVote === 1 ? "active-upvote" : ""}`}
                    onClick={() => handleVote(thread.id, 1)}
                    disabled={!username}
                >
                    ▲
                </button>

                <div className="vote-count">{currentVote}</div>

                <button
                    className={`vote-button ${currentVote === -1 ? "active-downvote" : ""}`}
                    onClick={() => handleVote(thread.id, -1)}
                    disabled={!username}
                >
                    ▼
                </button>
            </div>
        </li>
    );
};

export default BasicThreadItem;
