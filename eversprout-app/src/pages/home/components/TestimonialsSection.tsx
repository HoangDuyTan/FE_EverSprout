import TestimonialCard from "../../../components/common/TestimonialCard";
import "../../../styles/pages/home/testimonials-section.css";

export default function TestimonialsSection() {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-heading">
                    <div>
                        <span>Đánh giá thực tế</span>
                        <h2>Khách hàng nói gì về EverSprout?</h2>
                    </div>

                    <div className="testimonials-summary">
                        <span>★★★★★</span>
                        <strong>4.9 / 5.0</strong>
                        <small>Hơn 1.200 lượt phản hồi</small>
                    </div>
                </div>

                <div className="testimonials-grid">
                    <TestimonialCard
                        initials="BH"
                        name="Anh Bùi Hoàng"
                        location="Vườn gia đình tại Lâm Đồng"
                        content="Đặt cây giống về Đà Lạt. Đóng thùng rất kỹ, cây đến nơi lá vẫn xanh tốt và bộ rễ khỏe."
                    />

                    <TestimonialCard
                        initials="TN"
                        name="Chị Thảo Nguyên"
                        location="Quận 7, TP. Hồ Chí Minh"
                        content="Mình mới tập trồng rau sân thượng và được tư vấn cách phối đất, lượng nước rất tận tình."
                    />

                    <TestimonialCard
                        initials="ĐM"
                        name="Bác Đặng Minh"
                        location="Trang trại tại Đồng Nai"
                        content="Cây giống đúng chuẩn, mắt ghép lành và bộ rễ khỏe. Sau một tuần cây đã bắt đầu bật mầm mới."
                    />
                </div>
            </div>
        </section>
    );
}