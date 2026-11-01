import type { LucideIcon } from "lucide-react";
import "../../styles/common/feature-card.css";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({icon: Icon, title, description}: FeatureCardProps) {
    return (
        <article className="feature-card">
            <div className="feature-card-icon"><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}