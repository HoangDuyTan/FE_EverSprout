import {LucideIcon} from "lucide-react";
import "../../styles/common/category-card.css"

interface CategoryCardProps {
    icon: LucideIcon;
    title: string;
    count: string;
}

export default function CategoryCard({icon: Icon, title, count}: CategoryCardProps) {
    return (
        <article className="category-card">
            <div className="category-card-icon">
                <Icon size={24} />
            </div>

            <h3>{title}</h3>
            <span>{count}</span>
        </article>
    );
}