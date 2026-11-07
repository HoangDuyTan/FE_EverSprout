import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    CircleCheck,
    Eye,
    EyeOff,
    KeyRound,
    Lock,
    Mail,
    RefreshCw,
    ShieldCheck
} from "lucide-react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../styles/pages/auth/auth.css";

type Step = 1 | 2 | 3;

export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState<Step>(1);
    const [contact, setContact] = useState("");
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [infoMessage, setInfoMessage] = useState("");
    const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

    const handleSendOtp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setInfoMessage("");

        const trimmed = contact.trim();
        if (!trimmed) {
            setError("Vui lòng nhập Email hoặc Số điện thoại đã dùng để đặt mua cây giống.");
            return;
        }

        const isEmail = trimmed.includes("@");
        const isPhone = /^[0-9+\s]{9,12}$/.test(trimmed);
        if (!isEmail && !isPhone) {
            setError("Định dạng Email hoặc Số điện thoại chưa hợp lệ.");
            return;
        }

        setStep(2);
        setInfoMessage(
            `Mã xác thực OTP 6 chữ số đã được gửi tới "${trimmed}".`
        );
    };

    const handleOtpChange = (index: number, value: string) => {
        const digit = value.replace(/\D/g, "").slice(-1);
        const updated = [...otp];
        updated[index] = digit;
        setOtp(updated);

        if (digit && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyOtp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setInfoMessage("");

        const code = otp.join("");
        if (code.length < 6) {
            setError("Vui lòng nhập đầy đủ 6 chữ số của mã OTP.");
            return;
        }

        setStep(3);
        setInfoMessage("Xác thực OTP thành công! Vui lòng thiết lập mật khẩu mới cho tài khoản của bạn.");
    };

    const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setInfoMessage("");

        if (newPassword.length < 6) {
            setError("Mật khẩu mới phải có tối thiểu 6 ký tự.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp với mật khẩu mới.");
            return;
        }

        setInfoMessage(
            "Cập nhật mật khẩu mới thành công! Đang chuyển hướng bạn về trang Đăng nhập..."
        );

        setTimeout(() => {
            navigate("/login");
        }, 1500);
    };

    return (
        <>
            <Header />
            <Navbar />
            <main className="auth-page">
                <div className="container">
                    <div className="auth-container">
                        <section className="auth-form-panel">
                            <Link to="/login" className="auth-back-link">
                                <ArrowLeft size={15} />
                                <span>Quay lại Đăng nhập</span>
                            </Link>

                            <div className="auth-header">
                                <span className="auth-header-eyebrow">
                                    <KeyRound size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />
                                    Khôi phục mật khẩu
                                </span>
                                <h1>Quên mật khẩu?</h1>
                                <p>
                                    Thực hiện 3 bước đơn giản dưới đây để lấy lại quyền truy cập tài khoản nhà vườn EverSprout.
                                </p>
                            </div>

                            <div className="auth-stepper" aria-label="Tiến trình khôi phục mật khẩu">
                                <div className={`auth-step ${step === 1 ? "active" : "completed"}`}>
                                    <span className="auth-step-circle">1</span>
                                    <span>Xác minh</span>
                                </div>
                                <div className="auth-step-line" />
                                <div
                                    className={`auth-step ${
                                        step === 2 ? "active" : step > 2 ? "completed" : ""
                                    }`}
                                >
                                    <span className="auth-step-circle">2</span>
                                    <span>Mã OTP</span>
                                </div>
                                <div className="auth-step-line" />
                                <div className={`auth-step ${step === 3 ? "active" : ""}`}>
                                    <span className="auth-step-circle">3</span>
                                    <span>Mật khẩu mới</span>
                                </div>
                            </div>

                            {error && (
                                <div className="auth-alert error" role="alert">
                                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                                    <span>{error}</span>
                                </div>
                            )}

                            {infoMessage && (
                                <div className="auth-alert success" role="status">
                                    <CircleCheck size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                                    <span>{infoMessage}</span>
                                </div>
                            )}

                            {step === 1 && (
                                <form className="auth-form" onSubmit={handleSendOtp} noValidate>
                                    <div className="auth-field">
                                        <label htmlFor="forgot-contact">
                                            <span>
                                                Email hoặc Số điện thoại đăng ký <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <Mail size={18} />
                                            </span>
                                            <input
                                                id="forgot-contact"
                                                type="text"
                                                placeholder="Nhập email hoặc số điện thoại (VD: 0901234567)"
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="auth-submit-btn">
                                        <span>Nhận mã xác nhận OTP</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </form>
                            )}

                            {step === 2 && (
                                <form className="auth-form" onSubmit={handleVerifyOtp} noValidate>
                                    <div className="auth-field">
                                        <label>
                                            <span>
                                                Nhập mã xác thực 6 chữ số <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="otp-inputs-grid">
                                            {otp.map((digit, index) => (
                                                <input
                                                    key={index}
                                                    ref={(el) => {
                                                        otpRefs.current[index] = el;
                                                    }}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    className="otp-input"
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                    aria-label={`Chữ số OTP thứ ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="otp-resend-row">
                                        <span>Chưa nhận được mã xác nhận?</span>
                                        <button
                                            type="button"
                                            className="otp-resend-btn"
                                            onClick={() => {
                                                setOtp(["1", "2", "3", "4", "5", "6"]);
                                                setInfoMessage("Đã gửi lại mã xác thực OTP.");
                                            }}
                                        >
                                            <RefreshCw
                                                size={13}
                                                style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }}
                                            />
                                            Gửi lại mã
                                        </button>
                                    </div>

                                    <div className="auth-form-row">
                                        <button
                                            type="button"
                                            className="auth-secondary-btn"
                                            onClick={() => {
                                                setStep(1);
                                                setError("");
                                            }}
                                        >
                                            Đổi Email / SĐT
                                        </button>
                                        <button type="submit" className="auth-submit-btn">
                                            <span>Xác nhận mã OTP</span>
                                            <ShieldCheck size={18} />
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 3 && (
                                <form className="auth-form" onSubmit={handleResetPassword} noValidate>
                                    <div className="auth-field">
                                        <label htmlFor="forgot-new-password">
                                            <span>
                                                Mật khẩu mới <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <Lock size={18} />
                                            </span>
                                            <input
                                                id="forgot-new-password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Nhập mật khẩu mới (ít nhất 6 ký tự)"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                autoFocus
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
                                        <label htmlFor="forgot-confirm-password">
                                            <span>
                                                Xác nhận mật khẩu mới <span className="required">*</span>
                                            </span>
                                        </label>
                                        <div className="auth-input-wrapper">
                                            <span className="auth-input-icon">
                                                <Lock size={18} />
                                            </span>
                                            <input
                                                id="forgot-confirm-password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Nhập lại mật khẩu mới"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="auth-submit-btn">
                                        <span>Hoàn tất đặt lại mật khẩu</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </form>
                            )}

                            <div className="auth-footer-switch">
                                Bạn chưa có tài khoản?
                                <Link to="/register">Đăng ký thành viên</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
