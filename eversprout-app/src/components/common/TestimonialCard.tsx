import { Star } from "lucide-react";
import "../../styles/common/testimonial-card.css";

interface TestimonialCardProps {
    content: string;
    name: string;
    location: string;
    initials: string;
}

export default function TestimonialCard({content, name, location, initials}: TestimonialCardProps) {
    return (
        <article className="testimonial-card">
            <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={13} fill="currentColor"/>
                ))}
            </div>

            <p>"{content}"</p>

            <div className="testimonial-user">
                <div className="testimonial-avatar">{initials}</div>
                <div>
                    <strong>{name}</strong>
                    <span>{location}</span>
                </div>
            </div>
        </article>
    );
}