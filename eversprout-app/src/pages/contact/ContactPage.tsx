import {useState} from "react";
import {Clock, Mail, MapPin, Phone, Send} from "lucide-react";
import {type Contact, createContact} from "../../service/contactService.ts";

import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "../../styles/pages/contact/contact-page.css";

const contactInfo = [
    {
        icon: Phone,
        title: "Hotline",
        content: "1900 6868"
    },
    {
        icon: Mail,
        title: "Email",
        content: "hotro@eversprout.vn"
    },
    {
        icon: MapPin,
        title: "Địa chỉ",
        content: "Biên Hòa, Đồng Nai"
    },
    {
        icon: Clock,
        title: "Thời gian hỗ trợ",
        content: "08:00 - 21:00 mỗi ngày"
    }
];

export default function ContactPage() {
    const [form, setForm] = useState<Contact>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        });

        if (submitted) {
            setSubmitted(false);
        }

        setError("");
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        setSubmitted(false);
        setError("");

        try {
            await createContact(form);

            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        } catch {
            setError("Không thể gửi yêu cầu. Vui lòng thử lại.");
        }

        setLoading(false);
    }

    return (
        <>
            <Header/>
            <Navbar/>

            <main className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <span className="contact-label">Liên hệ EverSprout</span>
                        <h1>Chúng tôi luôn sẵn sàng hỗ trợ bạn</h1>
                        <p>Bạn cần tư vấn chọn cây, chăm sóc cây hoặc hỗ trợ đơn hàng? Hãy để lại thông tin, EverSprout
                            sẽ hỗ trợ sớm nhất có thể.</p>
                    </div>
                </section>

                <section className="contact-main">
                    <div className="container contact-layout">
                        <div className="contact-info">
                            <div className="contact-info-heading">
                                <h2>Thông tin liên hệ</h2>
                                <p>Chọn hình thức liên hệ phù hợp với bạn.</p>
                            </div>

                            <div className="contact-info-list">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div className="contact-info-item" key={item.title}>
                                            <div className="contact-info-icon"><Icon size={20}/></div>

                                            <div>
                                                <span>{item.title}</span>
                                                <strong>{item.content}</strong>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="contact-note">
                                <strong>Tư vấn cây giống miễn phí</strong>

                                <p>
                                    Bạn có thể mô tả diện tích vườn, điều kiện ánh sáng
                                    và loại cây muốn trồng để được tư vấn phù hợp hơn.
                                </p>
                            </div>
                        </div>

                        <div className="contact-form-box">
                            <div className="contact-form-heading">
                                <h2>Gửi yêu cầu hỗ trợ</h2>
                                <p>Điền thông tin bên dưới để EverSprout hỗ trợ bạn.</p>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label htmlFor="name">Họ và tên</label>
                                        <input id="name" name="name" type="text" value={form.name}
                                               placeholder="Nguyễn Văn A" onChange={handleChange} required/>
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="phone">Số điện thoại</label>
                                        <input id="phone" name="phone" type="tel" value={form.phone}
                                               placeholder="09xxxxxxxx" onChange={handleChange} required/>
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" value={form.email}
                                           placeholder="example@gmail.com" onChange={handleChange} required/>
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="subject">Nội dung cần hỗ trợ</label>
                                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}
                                            required>
                                        <option value="">Chọn nội dung</option>
                                        <option value="product">Tư vấn cây giống</option>
                                        <option value="care">Hướng dẫn chăm sóc</option>
                                        <option value="order">Hỗ trợ đơn hàng</option>
                                        <option value="other">Nội dung khác</option>
                                    </select>
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="message">Lời nhắn</label>
                                    <textarea id="message" name="message" value={form.message}
                                              placeholder="Nhập nội dung bạn cần hỗ trợ..." onChange={handleChange}
                                              rows={5} required/>
                                </div>

                                {submitted && (
                                    <div className="contact-success">Yêu cầu đã được gửi thành công.</div>
                                )}

                                {error && (
                                    <div className="contact-error">{error}</div>
                                )}

                                <button type="submit" className="contact-submit-btn" disabled={loading}>
                                    <Send size={16}/>
                                    {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="contact-support">
                    <div className="container contact-support-box">
                        <div>
                            <h2>Bạn cần hỗ trợ nhanh?</h2>
                            <p>Gọi trực tiếp hotline để được tư vấn cây giống và kỹ thuật trồng.</p>
                        </div>

                        <a href="tel:19006868"><Phone size={16}/>1900 6868</a>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    );
}