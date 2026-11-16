import {Clock, Eye} from "lucide-react";
import type {Guide} from "../../../data/guides";
import "../../../styles/pages/guides/guide-card.css";

interface GuideCardProps {
    guide: Guide;
}

export default function GuideCard({guide}: GuideCardProps) {
    return (
        <article className="guide-card">
            <div className="guide-card-img">
                <img src={guide.image} alt={guide.title} loading="lazy"/>
                <span>{guide.category}</span>
            </div>

            <div className="guide-card-content">
                <h3>{guide.title}</h3>
                <p>{guide.desc}</p>

                <div className="guide-card-info">
                    <span><Clock size={14}/>{guide.readTime} phút đọc</span>
                    <span><Eye size={14}/>{guide.views}</span>
                </div>

                <button type="button" className="guide-card-btn">Xem hướng dẫn</button>
            </div>
        </article>
    );
}