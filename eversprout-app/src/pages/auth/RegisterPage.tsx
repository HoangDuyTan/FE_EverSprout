import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    AlertCircle,
    ArrowRight,
    CircleCheck,
    Eye,
    EyeOff,
    Leaf,
    Lock,
    Mail,
    Phone,
    User
} from "lucide-react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../styles/pages/auth/auth.css";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(true);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        if (!fullName.trim()) {
            setError("Vui lòng nhập họ và tên người nhận cây giống.");
            return;
        }

        if (!/^[0-9+\s]{9,12}$/.test(phone.trim())) {
            setError("Vui lòng nhập số điện thoại hợp lệ (9 - 11 chữ số) để nhà vườn liên hệ giao cây.");
            return;
        }

        if (!email.includes("@")) {
            setError("Vui lòng nhập địa chỉ Email hợp lệ để nhận cẩm nang chăm sóc và hóa đơn.");
            return;
        }

        if (password.length < 6) {
            setError("Mật khẩu phải có từ 6 ký tự trở lên.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không trùng khớp.");
            return;
        }

        if (!agreePolicy) {
            setError("Vui lòng đồng ý với điều khoản & chính sách bảo hành cây sống của EverSprout.");
            return;
        }

        setSuccessMessage(
            "Đăng ký thành viên thành công! Mã ưu đãi 10% (EVERSPROUT10) đã được lưu vào tài khoản của bạn."
        );

        setTimeout(() => {
            navigate("/login");
        }, 1600);
    };

    return (
        <>
            <Header />
            <Navbar />
            <main className="auth-page">
                <div className="container">
                    <div className="auth-container">
                        <section className="auth-form-panel">
                            <div className="auth-tabs" role="tablist" aria-label="Chuyển đổi Đăng nhập và Đăng ký">
                                <Link to="/login" className="auth-tab">
                                    Đăng nhập
                                </Link>
                                <Link to="/register" className="auth-tab active">
                                    Đăng ký thành viên
                                </Link>
                            </div>

                            <div className="auth-header">
                                <span className="auth-header-eyebrow">
                                    <Leaf size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />
                                    Cộng đồng yêu cây xanh EverSprout
                                </span>
                                <h1>Tạo tài khoản mới</h1>
                                <p>
                                    Nhận ngay mã giảm 10% cho đơn cây giống đầu tiên và cẩm nang kỹ thuật ươm trồng chuẩn F1.
                                </p>
                            </div>

                            {error && (
                                <div className="auth-alert error" role="alert">
                                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                                    <span>{error}</span>
                                </div>
                            )}

                            {successMessage && (
                                <div className="auth-alert success" role="status">
                                    <CircleCheck size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                                    <span>{successMessage}</span>
                                </div>
                            )}

                            <form className="auth-form" onSubmit={handleSubmit} noValidate>
                                <div className="auth-form-row">
                                    <div className="auth-field">
                                        <label htmlFor="register-fullname">
                                            <span>
                                                Họ và tên <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <User size={18} />
                                            </span>
                                            <input
                                                id="register-fullname"
                                                type="text"
                                                placeholder="Nguyễn Văn A"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                autoComplete="name"
                                            />
                                        </div>
                                    </div>

                                    <div className="auth-field">
                                        <label htmlFor="register-phone">
                                            <span>
                                                Số điện thoại nhận cây <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <Phone size={18} />
                                            </span>
                                            <input
                                                id="register-phone"
                                                type="tel"
                                                placeholder="0901 234 567"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                autoComplete="tel"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="auth-field">
                                    <label htmlFor="register-email">
                                        <span>
                                            Địa chỉ Email <span className="required">*</span>
                                        </span>
                                    </label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon">
                                            <Mail size={18} />
                                        </span>
                                        <input
                                            id="register-email"
                                            type="email"
                                            placeholder="nhapemail@vidu.com (Nhận lịch nhắc chăm sóc cây)"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>

                                <div className="auth-form-row">
                                    <div className="auth-field">
                                        <label htmlFor="register-password">
                                            <span>
                                                Mật khẩu <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <Lock size={18} />
                                            </span>
                                            <input
                                                id="register-password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Tối thiểu 6 ký tự"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                className="auth-password-toggle"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                                            >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="auth-field">
                                        <label htmlFor="register-confirm-password">
                                            <span>
                                                Xác nhận mật khẩu <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <Lock size={18} />
                                            </span>
                                            <input
                                                id="register-confirm-password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Nhập lại mật khẩu"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                autoComplete="new-password"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <label className="auth-checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={agreePolicy}
                                        onChange={(e) => setAgreePolicy(e.target.checked)}
                                    />
                                    <span>
                                        Tôi đồng ý với <a href="#terms">Điều khoản dịch vụ</a> và{" "}
                                        <a href="#warranty">Chính sách bảo hành cây sống 1 đổi 1</a> của EverSprout.
                                    </span>
                                </label>

                                <button type="submit" className="auth-submit-btn">
                                    <span>Đăng ký & Nhận ưu đãi 10%</span>
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            <div className="auth-footer-switch">
                                Đã có tài khoản thành viên EverSprout?
                                <Link to="/login">Đăng nhập ngay</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
