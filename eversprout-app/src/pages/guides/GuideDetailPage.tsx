import {ArrowLeft, Clock, Eye, Lightbulb} from "lucide-react";
import {Link, Navigate, useParams} from "react-router-dom";

import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import {guides} from "../../data/guides";
import {guideDetails} from "../../data/guideDetails";

import "../../styles/pages/guides/guide-detail-page.css";

export default function GuideDetailPage() {
    const {id} = useParams();
    const guideId = Number(id);
    const guide = guides.find((item) => item.id === guideId);
    const detail = guideDetails.find((item) => item.id === guideId);

    if (!guide) {
        return <Navigate to="/guides" replace/>;
    }

    return (
        <>
            <Header/>
            <Navbar/>

            <main className="guide-detail-page">
                <div className="container">
                    <Link to="/guides" className="guide-back"><ArrowLeft size={16}/>Quay lại cẩm nang</Link>

                    <article className="guide-detail">
                        <header className="guide-detail-header">
                            <span className="guide-detail-category">{guide.category}</span>
                            <h1>{guide.title}</h1>
                            <p>{guide.desc}</p>
                            <div className="guide-detail-meta">
                                <span><Clock size={15}/>{guide.readTime} phút đọc</span>
                                <span><Eye size={15}/>{guide.views} lượt xem</span>
                                <span>{new Date(guide.date).toLocaleDateString("vi-VN")}</span>
                            </div>
                        </header>

                        <div className="guide-detail-img">
                            <img src={guide.image} alt={guide.title}/>
                        </div>

                        <div className="guide-detail-content">
                            {detail ? (
                                <>
                                    <p className="guide-intro">{detail.intro}</p>

                                    {detail.sections.map((section) => (
                                        <section key={section.title} className="guide-detail-section">
                                            <h2>{section.title}</h2>

                                            {section.content.map((text, index) => (
                                                <p key={index}>{text}</p>
                                            ))}
                                        </section>
                                    ))}

                                    <div className="guide-tips">
                                        <div className="guide-tips-title">
                                            <Lightbulb size={20}/>
                                            <h3>Một số lưu ý</h3>
                                        </div>

                                        <ul>
                                            {detail.tips.map((tip) => (
                                                <li key={tip}>{tip}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <div className="guide-detail-empty">
                                    <h2>Nội dung đang được cập nhật</h2>
                                    <p>
                                        EverSprout đang hoàn thiện bài hướng dẫn này.
                                        Bạn có thể xem thêm các bài viết khác trong cẩm nang.
                                    </p>

                                    <Link to="/guides">Xem các bài khác</Link>
                                </div>
                            )}
                        </div>
                    </article>
                </div>
            </main>

            <Footer/>
        </>
    );
}