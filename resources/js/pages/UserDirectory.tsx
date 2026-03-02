import React from 'react';
import { Head, Link } from '@inertiajs/react';

// Define what a "User" looks like for TypeScript
interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export default function UserDirectory({ users }: { users: User[] }) {
    return (
        <div className="p-10 bg-white min-h-screen">
            <Head title="User Directory" />

            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">User Directory (Without Controller)</h1>
                    <Link href="/" className="text-sm text-blue-600 hover:underline">&larr; Back Home</Link>
                </div>

                <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 text-sm text-gray-500">#{user.id}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{user.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">
                                            {new Date(user.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                                        No users found in database.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 text-xs text-gray-400 text-center">
                    Total Records: {users.length}
                </p>
            </div>
        </div>
    );
}