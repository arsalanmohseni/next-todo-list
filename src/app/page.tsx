"use client";
import { useState } from "react";
import Todo from "../lib/components/Todo";

interface Todos {
    name: string;
    id: string;
}

const page = () => {
    /*
        TODO: Create "Mark as completed" button
    */

    const [todos, setTodos] = useState<Todos[]>([]);
    const [todoname, setTodoname] = useState<string>();

    const addTodo = () => {
        if (todoname) {
            // Update the todos state with the new todo
            setTodos([
                ...todos,
                {
                    name: todoname,
                    id: Math.random().toString(36).substring(2, 15),
                },
            ]);
            setTodoname(""); // Clear the input field after adding
        }
    };

    const removeTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
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
                    className="rounded-r-full bg-blue-500 p-3 py-4 font-bold text-white"
                    onClick={addTodo} // Call addTodo function on click
                >
                    Add
                </button>
            </section>
            <ul className="*:text-left *:text-3xl *:hover:*:line-through">
                {todos.map((todo) => (
                    <li key={todo.id} onClick={() => removeTodo(todo.id)}>
                        <Todo>{todo.name}</Todo>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;
