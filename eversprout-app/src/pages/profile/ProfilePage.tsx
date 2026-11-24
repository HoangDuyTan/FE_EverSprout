import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Home, User } from "lucide-react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProfileSidebar, { ProfileTab } from "./components/ProfileSidebar";
import ProfileInfoTab, { UserProfile } from "./components/ProfileInfoTab";
import AddressBookTab from "./components/AddressBookTab";
import OrdersTab from "./components/OrdersTab";
import "./tailwind.css";

export default function ProfilePage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<ProfileTab>("info");
    const [profile, setProfile] = useState<UserProfile>({
        memberId: "ES-202601",
        joinedAt: "01/11/2026",
        fullName: "Nguyễn Văn An",
        phone: "0912 345 678",
        email: "nguyenvanan@gmail.com",
        birthday: "1998-05-15",
        gender: "male"
    });

    return (
        <>
            <Header />
            <Navbar />

            <div className="w-full bg-[#f8faf9] border-0 border-b border-solid border-[#e5e7eb]">
                <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 py-3.5 flex items-center gap-2.5 text-[13px] text-[#6b7280]">
                    <Link to="/" className="inline-flex items-center gap-1.5 text-[#6b7280] hover:text-[#197a35]">
                        <Home size={15} />
                        <span>Trang chủ</span>
                    </Link>
                    <ChevronRight size={14} className="text-[#9ca3af]" />
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#197a35]">
                        <User size={15} />
                        <span>Tài khoản</span>
                    </span>
                    <ChevronRight size={14} className="text-[#9ca3af]" />
                    <span className="text-[#4b5563]">Thông tin cá nhân</span>
                </div>
            </div>

            <main className="w-full bg-[#f5f8f6] pt-8 pb-20 -mb-[60px]">
                <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)] gap-7 xl:gap-8 items-start">
                        <ProfileSidebar
                            fullName={profile.fullName}
                            email={profile.email}
                            activeTab={activeTab}
                            onSelectTab={setActiveTab}
                            onLogout={() => navigate("/login")}
                        />

                        <div className="min-w-0">
                            {activeTab === "info" && (
                                <ProfileInfoTab profile={profile} onSave={setProfile} />
                            )}
                            {activeTab === "addresses" && <AddressBookTab />}
                            {activeTab === "orders" && <OrdersTab />}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
