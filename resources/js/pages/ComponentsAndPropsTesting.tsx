import { Link } from '@inertiajs/react';
import InfoCard from '@/mycomponents/InfoCard';

// This is a small "Child" component
function PrivateInfoCard({ title, value, color }: { title: string, value: string, color: string }) {
    return (
        <div className={`p-4 rounded-lg shadow ${color} text-white`}>
            <h3 className="text-xs uppercase opacity-80">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
}

export default function ComponentsAndPropsTesting() {
    return (
        <div>
            <div>
                <InfoCard title="From mycomponents" value="1,200,000" color="bg-green-500" />
            </div>
            {/* In your main page, you just use it like a tag: */}
            <div>
                <PrivateInfoCard title="Users" value="1,200" color="bg-blue-500" />
                <PrivateInfoCard title="Revenue" value="$4,500" color="bg-green-500" />
            </div>
            <div>
                <Link href="/" className="text-xs text-indigo-500 hover:underline">Return to App</Link>
            </div>
        </div>

    );
}
