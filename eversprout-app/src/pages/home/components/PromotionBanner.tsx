import "../../../styles/pages/home/promotion-banner.css";

export default function PromotionBanner() {
    return (
        <section className="promotion-section">
            <div className="container">
                <div className="promotion-banner">
                    <div>
                        <span>Ưu đãi mùa vụ mới</span>
                        <h2>Giảm 15% cho combo vườn sân thượng mini</h2>
                        <p>Bao gồm 5 cây ăn trái F1 + Túi giá thể trộn sẵn + Bộ kích rễ sinh học thế hệ mới.</p>
                    </div>

                    <button type="button">Nhận mã ưu đãi: VUONXANH15</button>
                </div>
            </div>
        </section>
    );
}