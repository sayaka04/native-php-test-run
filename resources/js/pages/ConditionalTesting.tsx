import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function ConditionalTesting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSecret, setShowSecret] = useState(false);
    const [userRole, setUserRole] = useState<'guest' | 'admin'>('guest');

    // --- 1. THE EARLY RETURN (The "Non-Ternary" way) ---
    // This is best for full-page states (like "Access Denied" or "Loading")
    if (userRole === 'admin') {
        return (
            <div className="p-20 bg-red-100 min-h-screen text-center">
                <h1 className="text-4xl font-black text-red-600">ADMIN CONSOLE</h1>
                <p className="mt-4">You are seeing this because of an "Early Return" statement.</p>
                <button
                    onClick={() => setUserRole('guest')}
                    className="mt-6 bg-red-600 text-white px-6 py-2 rounded"
                >
                    Exit Admin Mode
                </button>
            </div>
        );
    }

    return (
        <div className="p-10 max-w-2xl mx-auto space-y-10">
            <Head title="Conditionals Lab" />

            <section className="border-b pb-6">
                <h2 className="text-sm font-bold text-gray-400 uppercase mb-4">1. Ternary Operator</h2>
                {/* Syntax: condition ? true : false */}
                <div className={`p-6 rounded-xl border-2 transition ${isLoggedIn ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                    <p className="mb-4 text-lg">
                        User is currently: <strong>{isLoggedIn ? 'Logged In ✅' : 'Logged Out ❌'}</strong>
                    </p>
                    <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        className="bg-black text-white px-4 py-2 rounded shadow-lg"
                    >
                        {isLoggedIn ? 'Log Me Out' : 'Log Me In'}
                    </button>
                </div>
            </section>

            <section className="border-b pb-6">
                <h2 className="text-sm font-bold text-gray-400 uppercase mb-4">2. Logical AND (&&)</h2>
                {/* Syntax: condition && element (Used when there is no "else") */}
                <button
                    onClick={() => setShowSecret(!showSecret)}
                    className="text-blue-600 underline"
                >
                    {showSecret ? 'Hide Secret' : 'Reveal Secret Message'}
                </button>

                {showSecret && (
                    <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 animate-bounce">
                        🤫 React is just JavaScript with HTML-colored glasses!
                    </div>
                )}
            </section>

            <section>
                <h2 className="text-sm font-bold text-gray-400 uppercase mb-4">3. Triggering an Early Return</h2>
                <p className="text-gray-600 mb-4">Clicking this will trigger the "Non-Ternary" IF block at the top of the code.</p>
                <button
                    onClick={() => setUserRole('admin')}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Enter Admin Mode
                </button>
            </section>

            <div className="pt-10">
                <Link href="/" className="text-gray-400 hover:text-black">&larr; Back Home</Link>
            </div>
        </div>
    );
}