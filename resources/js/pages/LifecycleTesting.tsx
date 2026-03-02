import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function LifecycleTesting() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<string | null>(null);

    // useEffect runs AUTOMATICALLY after the component mounts
    useEffect(() => {
        console.log("1. The component is now on the screen!");

        // We simulate an API call to Laravel
        const timer = setTimeout(() => {
            setData("Successfully fetched data from 'Database'!");
            setIsLoading(false);
            console.log("2. Data has arrived and loading is finished.");
        }, 2000);

        // Optional: Cleanup function (runs when you leave the page)
        return () => {
            clearTimeout(timer);
            console.log("3. User left the page. Cleaning up...");
        };
    }, []); // [] means: "Only run once when the page opens"

    return (
        <div className="p-10 min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center">
            <Head title="Lifecycle Lab" />

            {isLoading ? (
                <div className="space-y-4">
                    {/* A simple CSS spinner */}
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-slate-500 animate-pulse">Connecting to Laravel...</p>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                    <h1 className="text-2xl font-bold text-green-600 mb-2">Success!</h1>
                    <p className="text-slate-700">{data}</p>

                    <Link href="/" className="mt-6 inline-block text-blue-500 hover:underline text-sm">
                        &larr; Back to Welcome
                    </Link>
                </div>
            )}
        </div>
    );
}