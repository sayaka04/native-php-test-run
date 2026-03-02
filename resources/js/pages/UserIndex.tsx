import React from 'react';

// 'users' and 'status' must match the array keys in the Controller!
interface Props {
    users: any[];
    status: string;
}

export default function Index({ users, status }: Props) {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">{status} (Using Controller)</h1>

            <ul className="mt-4">
                {users.map(user => (
                    <li key={user.id} className="border-b py-2">
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}