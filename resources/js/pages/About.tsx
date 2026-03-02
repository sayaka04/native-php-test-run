import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

interface Props {
    title: string;
    description?: string;
}

export default function About({ title, description }: Props) {
    // 1. THIS IS THE "SOURCE OF TRUTH"
    // Everything on the screen depends on this one variable.
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">

            {/* --- HEADER SECTION --- */}
            <nav className="flex justify-between items-center bg-white p-4 shadow-sm rounded-lg mb-8">
                <h1 className="text-xl font-bold text-gray-800">My React Shop</h1>

                {/* Notice: The Header updates automatically because it uses {cartCount} */}
                <div className="relative p-2 bg-blue-100 rounded-full text-blue-700 font-bold">
                    🛒 Cart: <span className="text-blue-900">{cartCount}</span>
                </div>
            </nav>

            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <p className="text-gray-500 mb-6">{description}</p>

                {/* --- LOGIC SECTION --- */}
                <div className="space-y-4 border-t pt-4">

                    {/* Feature 1: The Counter */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Premium Subscription</span>
                        <button
                            onClick={() => setCartCount(cartCount + 1)}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            + Add to Cart
                        </button>
                    </div>

                    {/* Feature 2: Conditional Rendering (The Discount Message) */}
                    {/* This ONLY appears if the count is more than 5 */}
                    {cartCount > 5 && (
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 text-yellow-700 text-sm italic">
                            🔥 Power User! You've unlocked a 20% discount!
                        </div>
                    )}

                    {/* Feature 3: Dynamic Styling (The Checkout Button) */}
                    {/* The button changes color and disables itself based on the count */}
                    <button
                        disabled={cartCount === 0}
                        className={`w-full py-3 rounded-lg font-bold transition ${cartCount === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        {cartCount === 0 ? 'Your Cart is Empty' : `Checkout (${cartCount} items)`}
                    </button>

                    {/* Feature 4: Resetting the State */}
                    {cartCount > 0 && (
                        <button
                            onClick={() => setCartCount(0)}
                            className="w-full text-xs text-red-400 hover:text-red-600 underline"
                        >
                            Clear Cart
                        </button>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">
                        &larr; Back to Laravel Home
                    </Link>
                </div>
            </div>
        </div>
    );
}