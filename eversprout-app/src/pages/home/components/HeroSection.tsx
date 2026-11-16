import {useEffect, useState} from "react";
import {ArrowRight, BookOpen, CircleCheck} from "lucide-react";
import {Link} from "react-router-dom";

import "../../../styles/pages/home/hero-section.css";

import img1 from "../../../assets/1.webp";
import img2 from "../../../assets/2.webp";
import img3 from "../../../assets/3.webp";

export default function HeroSection() {
    const [activeImg, setActiveImg] = useState(0);
    const heroImgs = [img1, img2, img3];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveImg((current) => current === heroImgs.length - 1 ? 0 : current + 1);
        }, 4500);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="home-hero">
            <div className="home-hero-bg">
                {heroImgs.map((img, index) => (
                    <img key={img} src={img} alt="" className={activeImg === index ? "active" : ""}/>
                ))}
            </div>

            <div className="home-hero-overlay"/>

            <div className="container home-hero-inner">
                <div className="home-hero-content">
                    <span className="home-hero-label">
                        <CircleCheck size={14}/>
                        Chuẩn vườn ươm sinh thái F1
                    </span>

                    <h1>Ươm mầm xanh -<span> Gieo tương lai</span></h1>

                    <p className="home-hero-description">
                        Cung cấp hơn 200+ giống cây ăn trái, hoa cảnh và rau sạch
                        chuẩn F1 được ươm dưỡng khỏe mạnh, bầu rễ phát triển thuần
                        thục, tỉ lệ sống thực nghiệm đạt 99%.
                    </p>

                    <div className="home-hero-actions">
                        <Link to="/products" className="home-hero-primary-btn">Khám phá cây giống<ArrowRight size={17}/></Link>
                        <Link to="/guides" className="home-hero-secondary-btn"><BookOpen size={17}/>Cẩm nang chăm
                            sóc</Link>
                    </div>

                    <div className="home-hero-stats">
                        <div>
                            <strong>200+</strong>
                            <span>Giống thuần F1</span>
                        </div>

                        <div>
                            <strong>99%</strong>
                            <span>Tỉ lệ cây sống</span>
                        </div>

                        <div>
                            <strong>24h</strong>
                            <span>Giao bọc ẩm</span>
                        </div>
                    </div>

                    <div className="home-hero-guarantee">
                        <CircleCheck size={22}/>

                        <div>
                            <strong>Cam kết nguồn giống chuẩn</strong>
                            <p>Bảo hiểm 1 đổi 1 nếu mầm sinh trưởng không đạt.</p>
                        </div>
                    </div>
                </div>

                <div className="home-hero-dots">
                    {heroImgs.map((_, index) => (
                        <button key={index} type="button" className={activeImg === index ? "active" : ""}
                                onClick={() => setActiveImg(index)} aria-label={`Ảnh ${index + 1}`}/>
                    ))}
                </div>
            </div>
        </section>
    );
}