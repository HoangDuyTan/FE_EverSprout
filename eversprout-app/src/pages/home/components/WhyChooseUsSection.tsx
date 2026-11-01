import {Headphones, Leaf, PackageCheck, RefreshCw} from "lucide-react";
import FeatureCard from "../../../components/common/FeatureCard";
import "../../../styles/pages/home/why-choose-us-section.css";

export default function WhyChooseUsSection() {
    return (
        <section className="why-choose-us-section">
            <div className="container">
                <div className="why-choose-us-heading">
                    <span>Tiêu chuẩn vườn ươm</span>
                    <h2>Vì sao chọn EverSprout?</h2>
                    <p>Chúng tôi không chỉ gửi một mầm cây, chúng tôi đồng hành cùng sự phát triển khu vườn của bạn.</p>
                </div>

                <div className="why-choose-us-grid">
                    <FeatureCard icon={Leaf} title="Cây giống khỏe mạnh 100%" description="Tuyển chọn kỹ từ vườn ươm, tỉ lệ sống cao khi trồng theo đúng hướng dẫn kỹ thuật."/>
                    <FeatureCard icon={PackageCheck} title="Đóng gói bọc rễ chuyên dụng" description="Đảm bảo cây không dập gãy ngọn và giữ ẩm đất trong quá trình vận chuyển."/>
                    <FeatureCard icon={RefreshCw} title="Bảo hành 1 đổi 1 trong 7 ngày" description="Hỗ trợ đổi cây nếu phát hiện cây yếu hoặc hư hại trong quá trình giao nhận."/>
                    <FeatureCard icon={Headphones} title="Tư vấn kỹ thuật trọn đời" description="Đội ngũ tư vấn hỗ trợ sâu bệnh, dinh dưỡng và chăm sóc cây theo từng giai đoạn."/>
                </div>
            </div>
        </section>
    );
}