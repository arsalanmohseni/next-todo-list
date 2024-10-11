"use client";
import React from "react";

interface TodoProps {
    children: React.ReactNode;
}
const Todo: React.FC<TodoProps> = ({ children }) => {
    return (
        <li
            key={Math.random().toString(36).substring(2, 15)}
            className="mt-5 rounded-md p-2 text-xl transition-all duration-300 ease-in-out hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        >
            &#xf111; {children}
        </li>
    );
};

export default Todo;
