import React from "react";

const page = () => {

    // TODO: Add a functionality to `add a task` button

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Todo List</h1>
            <div className="mt-10 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-2xl">
                <input
                    type="text"
                    className="border-none outline-none rounded-l-full px-10 py-3 transition-all duration-300 ease-in-out dark:border-white"
                />
                <button className="rounded-r-full bg-sky-400 p-3 font-bold text-white">
                    Add task
                </button>
            </div>
        </div>
    );
};

export default page;
