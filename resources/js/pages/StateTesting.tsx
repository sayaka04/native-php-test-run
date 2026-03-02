import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function StateTesting() {
    // --- STATE GALLERY ---

    // 1. String: For inputs
    const [task, setTask] = useState('');

    // 2. Array: For lists (like a Todo list)
    const [todoList, setTodoList] = useState<string[]>(['Learn React', 'Setup Vite']);

    // 3. Boolean: For UI toggles
    const [isLocked, setIsLocked] = useState(false);

    // --- LOGIC ---
    const addItem = () => {
        if (task.trim() !== '') {
            setTodoList([...todoList, task]); // Add new task to array
            setTask(''); // Clear the input string
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 p-10 font-sans">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Header with Boolean Logic */}
                <div className={`p-6 text-white flex justify-between ${isLocked ? 'bg-red-500' : 'bg-indigo-600'}`}>
                    <h1 className="text-2xl font-bold uppercase tracking-widest">
                        {isLocked ? '🔒 System Locked' : '🚀 React Playground'}
                    </h1>
                    <button
                        onClick={() => setIsLocked(!isLocked)}
                        className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-sm transition"
                    >
                        {isLocked ? 'Unlock' : 'Lock Editor'}
                    </button>
                </div>

                <div className="p-8">
                    {/* Input Section - Only works if not locked */}
                    <div className="flex gap-2 mb-8">
                        <input
                            type="text"
                            value={task}
                            disabled={isLocked}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder={isLocked ? "Unlock to type..." : "Enter a new task..."}
                            className="text-blue-600 flex-1 border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-indigo-500 outline-none disabled:bg-slate-100 transition"
                        />
                        <button
                            onClick={addItem}
                            disabled={isLocked || !task}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 disabled:opacity-50"
                        >
                            Add
                        </button>
                    </div>

                    {/* Array Mapping Section */}
                    <div className="space-y-3">
                        <h2 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Current Stack</h2>
                        {todoList.length === 0 ? (
                            <p className="text-slate-400 italic">No tasks yet...</p>
                        ) : (
                            todoList.map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100 group">
                                    <span className="text-slate-700 font-medium">{item}</span>
                                    <button
                                        onClick={() => setTodoList(todoList.filter((_, i) => i !== index))}
                                        className="text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 p-4 border-t flex justify-between items-center">
                    <span className="text-xs text-slate-400">Total Items: {todoList.length}</span>
                    <Link href="/" className="text-xs text-indigo-500 hover:underline">Return to App</Link>
                </div>
            </div>
        </div>
    );
}