import React from "react";

interface TodoProps {
    children: React.ReactNode;
}
const Todo: React.FC<TodoProps> = ({ children }) => {
    return (
        <li key={Math.random().toString(36).substring(2, 15)}>{children}</li>
    );
};

export default Todo;
