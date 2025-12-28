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
    votes: number;
    onUpvote: (id: number) => void;
    onDownvote: (id: number) => void;
}

const BasicThreadItem: React.FC<ThreadItemProps> = ({ thread, votes, onUpvote, onDownvote }) => {
    return (
        <li className="thread-item">
            <div className="thread-content">
                <Link to={`/thread/${thread.id}`} className="thread-link">
                    {thread.name}
                </Link>
                <div className="thread-author"> Posted by {thread.author}</div>
            </div>
            <div className="vote-column">
                <button className="vote-button" onClick={() => onUpvote(thread.id)}>
                    ▲
                </button>
                <div className="vote-count">{votes}</div>
                <button className="vote-button" onClick={() => onDownvote(thread.id)}>
                    ▼
                </button>
            </div>
        </li>
    );
};

export default BasicThreadItem;
