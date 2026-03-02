// resources/js/components/InfoCard.tsx

// We define the shape of the data this component needs
interface InfoCardProps {
    title: string;
    value: string;
    color: string;
}

// We add "export" so other files can see it
export default function InfoCard({ title, value, color }: InfoCardProps) {
    return (
        <div className={`p-4 rounded-lg shadow ${color} text-white mb-4`}>
            <h3 className="text-xs uppercase opacity-80">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
}