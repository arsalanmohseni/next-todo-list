"use client";
import { useState } from "react";
import Todo from "../lib/components/Todo";

const page = () => {
    /*
        TODO: Create "Delete task" button
        TODO: Create "Mark as completed" button or when clicked a todo, set it to completed
    */

    const [todos, setTodos] = useState<string[]>([]);
    const [completedTodos, setCompletedTodos] = useState<string[]>([]);
    const [todoname, setTodoname] = useState<string>();

    const addTodo = () => {
        if (todoname) {
            // Update the todos state with the new todo
            setTodos([...todos, todoname]);
            setTodoname(""); // Clear the input field after adding
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Todo List</h1>
            <section className="mt-10 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-2xl">
                <input
                    type="text"
                    className="rounded-l-full border-none px-10 py-3 text-2xl outline-none transition-all duration-300 ease-in-out dark:border-white"
                    value={todoname || ""} // Ensure value is empty if todoname is null
                    onChange={(e) => setTodoname(e.target.value)} // Update todoname on input change
                />
                <button
                    className="rounded-r-full bg-sky-400 p-3 font-bold text-white"
                    onClick={addTodo} // Call addTodo function on click
                >
                    Add
                </button>
            </section>
            <ul className="*:text-3xl *:text-left *:hover:line-through">
                {todos.map((todo) => (
                    <Todo key={todo}>{todo}</Todo>
                ))}
            </ul>
        </div>
    );
};

export default page;
