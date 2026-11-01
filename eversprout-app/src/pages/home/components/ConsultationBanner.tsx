import {CircleHelp, Phone} from "lucide-react";
import "../../../styles/pages/home/consultation-banner.css";

export default function ConsultationBanner() {
    return (
        <section className="consultation-section">
            <div className="container">
                <div className="consultation-banner">
                    <div className="consultation-left">
                        <div className="consultation-icon">
                            <CircleHelp size={24} />
                        </div>

                        <div>
                            <h3>Chưa biết khu vườn của bạn hợp cây giống nào?</h3>
                            <p>Gửi hình ảnh ban công hoặc diện tích đất vườn, EverSprout sẽ lên danh sách giống phù hợp miễn phí.</p>
                        </div>
                    </div>

                    <a href="tel:19006868"><Phone size={16} />Gọi ngay 1900 6868</a>
                </div>
            </div>
        </section>
    );
}