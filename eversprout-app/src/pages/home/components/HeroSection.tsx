import {ArrowRight, BookOpen, CircleCheck} from "lucide-react";
import "../../../styles/pages/home/hero-section.css"

export default function HeroSection() {
    return (
        <section className="home-hero">
            <div className="container home-hero-inner">
                <div className="home-hero-content">
                    <span className="home-hero-label">
                        <CircleCheck size={14} />
                        Chuẩn vườn ươm sinh thái F1
                    </span>

                    <h1>Ươm mầm xanh -<span> Gieo tương lai</span></h1>

                    <p className="home-hero-description">
                        Cung cấp hơn 200+ giống cây ăn trái, hoa cảnh và rau sạch
                        chuẩn F1 được ươm dưỡng khỏe mạnh, bầu rễ phát triển thuần
                        thục, tỉ lệ sống thực nghiệm đạt 99%.
                    </p>

                    <div className="home-hero-actions">
                        <a href="/products" className="home-hero-primary-button">Khám phá cây giống<ArrowRight size={17} /></a>
                        <a href="/guides" className="home-hero-secondary-button"><BookOpen size={17} />Cẩm nang chăm sóc</a>
                    </div>

                    <div className="home-hero-keywords">
                        <span>Tìm kiếm nhanh:</span>

                        <button type="button">Cây ăn trái</button>
                        <button type="button">Ổi Ruby</button>
                        <button type="button">Bưởi da xanh</button>
                        <button type="button">Giao cây tận nhà</button>
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
                </div>

                <div className="home-hero-image-wrapper">
                    <img src="../../../assets/hero.png" alt="Cây giống EverSprout" className="home-hero-image"/>

                    <div className="home-hero-organic">
                        <span>Ươm tự nhiên</span>
                        <strong>100% Hữu cơ</strong>
                    </div>

                    <div className="home-hero-guarantee"><CircleCheck size={22} />
                        <div>
                            <strong>Cam kết nguồn giống chuẩn</strong>
                            <p>Bảo hiểm 1 đổi 1 nếu mầm sinh trưởng không đạt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}