import {BadgeCheck, Headphones, HeartHandshake, Leaf, ShieldCheck, Sprout} from "lucide-react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import aboutImage from "../../assets/1.webp";
import "../../styles/pages/about/about-page.css";

export default function AboutPage() {
    return (
        <>
            <Header />
            <Navbar />

            <main className="about-page">
                <section className="about-hero">
                    <div className="container about-hero-content">
                        <span className="about-label">Về EverSprout</span>

                        <h1>Gieo một mầm xanh,<span> nuôi một tương lai bền vững</span></h1>

                        <p>
                            EverSprout cung cấp cây giống khỏe mạnh,
                            nguồn gốc rõ ràng và đồng hành cùng khách hàng
                            trong suốt quá trình chăm sóc khu vườn.
                        </p>
                    </div>
                </section>

                <section className="about-story">
                    <div className="container about-story-grid">
                        <div className="about-story-image">
                            <img src={aboutImage} alt="Vườn ươm EverSprout"/>
                        </div>

                        <div className="about-story-content">
                            <span className="about-label">Câu chuyện của chúng tôi</span>
                            <h2>Từ những cây giống nhỏ đến những khu vườn xanh</h2>

                            <p>
                                EverSprout được xây dựng với mong muốn giúp
                                việc bắt đầu một khu vườn trở nên đơn giản hơn.
                                Chúng tôi lựa chọn những giống cây phù hợp,
                                khỏe mạnh và dễ chăm sóc cho cả người mới bắt đầu.
                            </p>

                            <p>
                                Mỗi cây giống trước khi giao đều được kiểm tra
                                tình trạng lá, thân và bộ rễ để hạn chế tối đa
                                cây yếu hoặc hư hỏng trong quá trình vận chuyển.
                            </p>

                            <div className="about-story-note">
                                <Sprout size={22} />

                                <div>
                                    <strong>Cội nguồn cây giống</strong>
                                    <span>Khỏe từ gốc, xanh dài lâu.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-stats">
                    <div className="container about-stats-grid">
                        <div>
                            <strong>200+</strong>
                            <span>Giống cây</span>
                        </div>

                        <div>
                            <strong>99%</strong>
                            <span>Tỉ lệ cây sống</span>
                        </div>

                        <div>
                            <strong>1.200+</strong>
                            <span>Khách hàng</span>
                        </div>

                        <div>
                            <strong>24h</strong>
                            <span>Hỗ trợ tư vấn</span>
                        </div>
                    </div>
                </section>

                <section className="about-values">
                    <div className="container">
                        <div className="about-section-heading">
                            <span className="about-label">Giá trị EverSprout</span>
                            <h2>Điều chúng tôi luôn theo đuổi</h2>
                            <p>Tập trung vào chất lượng cây giống, trải nghiệm khách hàng và giá trị lâu dài.</p>
                        </div>

                        <div className="about-values-grid">
                            <article className="about-value-card">
                                <div className="about-value-icon"><Leaf size={24} /></div>
                                <h3>Cây giống khỏe mạnh</h3>
                                <p>Ưu tiên cây có bộ rễ phát triển tốt, thân khỏe và không có dấu hiệu sâu bệnh.</p>
                            </article>

                            <article className="about-value-card">
                                <div className="about-value-icon"><ShieldCheck size={24} /></div>
                                <h3>Nguồn gốc rõ ràng</h3>
                                <p>Thông tin giống cây và xuất xứ được cung cấp rõ ràng để khách hàng dễ lựa chọn.</p>
                            </article>

                            <article className="about-value-card">
                                <div className="about-value-icon"><HeartHandshake size={24} /></div>
                                <h3>Đồng hành lâu dài</h3>
                                <p>Không chỉ bán cây, EverSprout còn hỗ trợ kiến thức chăm sóc sau khi khách nhận hàng.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="about-commitment">
                    <div className="container about-commitment-box">
                        <div className="about-commitment-content">
                            <span className="about-label">Cam kết của chúng tôi</span>
                            <h2>Một trải nghiệm mua cây đơn giản và an tâm</h2>
                        </div>

                        <div className="about-commitment-list">
                            <div><BadgeCheck size={21}/><span>Kiểm tra cây trước khi xuất vườn</span></div>
                            <div><ShieldCheck size={21} /><span>Hỗ trợ đổi cây nếu có vấn đề khi nhận</span></div>
                            <div><Headphones size={21} /><span>Hỗ trợ kỹ thuật trong quá trình chăm sóc</span></div>
                        </div>
                    </div>
                </section>

                <section className="about-cta">
                    <div className="container">
                        <div className="about-cta-box">
                            <div>
                                <h2>Bắt đầu khu vườn của bạn cùng EverSprout</h2>
                                <p>Khám phá các giống cây phù hợp với không gian và nhu cầu của bạn.</p>
                            </div>

                            <a href="/products">Khám phá sản phẩm</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}