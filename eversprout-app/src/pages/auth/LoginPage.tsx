import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    AlertCircle,
    ArrowRight,
    CircleCheck,
    Eye,
    EyeOff,
    Lock,
    Mail,
    Sprout
} from "lucide-react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../styles/pages/auth/auth.css";

export default function LoginPage() {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        const trimmed = identifier.trim();
        if (!trimmed) {
            setError("Vui lòng nhập địa chỉ Email hoặc Số điện thoại đã đăng ký tại EverSprout.");
            return;
        }

        if (password.length < 6) {
            setError("Mật khẩu phải có ít nhất 6 ký tự.");
            return;
        }

        setSuccessMessage(
            "Đăng nhập thành công! Chào mừng bạn trở lại vườn ươm EverSprout. Đang chuyển về trang chủ..."
        );

        setTimeout(() => {
            navigate("/");
        }, 1400);
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
                                <Link to="/login" className="auth-tab active">
                                    Đăng nhập
                                </Link>
                                <Link to="/register" className="auth-tab">
                                    Đăng ký thành viên
                                </Link>
                            </div>

                            <div className="auth-header">
                                <span className="auth-header-eyebrow">
                                    <Sprout size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />
                                    Tài khoản nhà vườn EverSprout
                                </span>
                                <h1>Chào mừng trở lại!</h1>
                                <p>
                                    Đăng nhập để quản lý đơn hàng cây giống, tra cứu bảo hành cây sống và nhận tư vấn kỹ thuật.
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
                                <div className="auth-field">
                                    <label htmlFor="login-identifier">
                                        <span>
                                            Email hoặc Số điện thoại <span className="required">*</span>
                                        </span>
                                    </label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon">
                                            <Mail size={18} />
                                        </span>
                                        <input
                                            id="login-identifier"
                                            type="text"
                                            placeholder="Nhập email hoặc SĐT đặt cây (VD: 0901234567)"
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            autoComplete="username"
                                        />
                                    </div>
                                </div>

                                <div className="auth-field">
                                    <label htmlFor="login-password">
                                        <span>
                                            Mật khẩu <span className="required">*</span>
                                        </span>
                                    </label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon">
                                            <Lock size={18} />
                                        </span>
                                        <input
                                            id="login-password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Nhập mật khẩu của bạn"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"
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

                                <div className="auth-options-row">
                                    <label className="auth-checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        <span>Ghi nhớ phiên đăng nhập</span>
                                    </label>

                                    <Link to="/forgot-password" className="auth-forgot-link">
                                        Quên mật khẩu?
                                    </Link>
                                </div>

                                <button type="submit" className="auth-submit-btn">
                                    <span>Đăng nhập vào vườn</span>
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            <div className="auth-divider">
                                <span>Hoặc đăng nhập nhanh bằng</span>
                            </div>

                            <div className="auth-social-grid">
                                <button
                                    type="button"
                                    className="auth-social-btn"
                                    onClick={() =>
                                        setSuccessMessage("Đang kết nối cổng xác thực Google của EverSprout...")
                                    }
                                >
                                    <span>Google</span>
                                </button>
                                <button
                                    type="button"
                                    className="auth-social-btn"
                                    onClick={() =>
                                        setSuccessMessage("Đang kết nối cổng xác thực Facebook của EverSprout...")
                                    }
                                >
                                    <span>Facebook</span>
                                </button>
                            </div>

                            <div className="auth-footer-switch">
                                Bạn mới biết đến sàn cây giống EverSprout?
                                <Link to="/register">Đăng ký nhận mã giảm 10%</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
