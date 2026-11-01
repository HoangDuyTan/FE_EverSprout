import "../../styles/layout/footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h2>EverSprout</h2>

                        <p>
                            Cửa hàng cây giống uy tín hàng đầu,
                            chuyên cung cấp các giống cây ăn trái
                            F1 chuẩn sinh thái, cây giống rau sạch
                            và giải pháp kỹ thuật nông nghiệp đô thị.
                        </p>

                        <div className="footer-contact">
                            <p>📍 Vườn ươm Củ Chi, TP. Hồ Chí Minh</p>
                            <p>☎ Hotline: 1900 6868</p>
                            <p>✉ hotro@greenseed.vn</p>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Danh mục sản phẩm</h3>

                        <a href="/products">Cây ăn trái F1 thuần chủng</a>
                        <a href="/products">Cây rau hữu cơ mầm khỏe</a>
                        <a href="/products">Cây hoa kiểng sân vườn</a>
                        <a href="/products">Dụng cụ & phân bón hữu cơ</a>
                        <a href="/products">Cây dược liệu & thảo mộc</a>
                    </div>

                    <div className="footer-column">
                        <h3>Chính sách & Hỗ trợ</h3>

                        <a href="#">Chính sách 1 đổi 1 trong 7 ngày</a>
                        <a href="#">Hướng dẫn đặt hàng & COD</a>
                        <a href="/guides">Cẩm nang kỹ thuật chăm sóc cây</a>
                        <a href="#">Quy chuẩn đóng gói cây sống</a>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Đăng ký nhận tin</h3>

                        <p>
                            Nhận ngay cẩm nang gieo trồng tại nhà
                            và mã giảm giá 10% cho đơn hàng cây
                            giống đầu tiên.
                        </p>

                        <form>
                            <input type="email" placeholder="Nhập địa chỉ email"/>
                            <button type="submit">Đăng ký ngay</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 GreenSeed - Bảo lưu mọi quyền.</p>

                    <div>
                        <a href="#">Chính sách bảo mật</a>
                        <a href="#">Điều khoản trang web</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}