import { LogOut, MapPin, Package, Sprout, User } from "lucide-react";

export type ProfileTab = "info" | "addresses" | "orders";

interface ProfileSidebarProps {
    fullName: string;
    email: string;
    activeTab: ProfileTab;
    onSelectTab: (tab: ProfileTab) => void;
    onLogout: () => void;
}

const menuItems: { key: ProfileTab; label: string; icon: typeof User }[] = [
    { key: "info", label: "Thông tin cá nhân", icon: User },
    { key: "addresses", label: "Sổ địa chỉ", icon: MapPin },
    { key: "orders", label: "Đơn hàng của tôi", icon: Package }
];

function getInitials(name: string) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "ES";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ProfileSidebar({
    fullName,
    email,
    activeTab,
    onSelectTab,
    onLogout
}: ProfileSidebarProps) {
    return (
        <aside className="bg-white border border-solid border-[#e5e7eb] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-3.5 pb-5 border-b border-solid border-[#f1f5f9]">
                <div className="w-13 h-13 rounded-full bg-[#e8f5e9] border border-solid border-[#c5e5cd] text-[#197a35] font-bold text-[17px] flex items-center justify-center shrink-0">
                    {getInitials(fullName)}
                </div>
                <div className="min-w-0">
                    <h2 className="text-[16px] font-bold text-[#1f2937] truncate">{fullName}</h2>
                    <p className="text-[12.5px] text-[#6b7280] truncate mt-0.5">{email}</p>
                    <span className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 bg-[#f2f9f4] border border-solid border-[#c5e5cd] text-[#197a35] text-[11px] font-semibold rounded-full">
                        <Sprout size={12} />
                        <span>Thành viên</span>
                    </span>
                </div>
            </div>

            <nav className="flex flex-col gap-1.5">
                {menuItems.map(({ key, label, icon: Icon }) => {
                    const isActive = activeTab === key;
                    return (
                        <button
                            key={key}
                            type="button"
                            onClick={() => onSelectTab(key)}
                            className={`w-full h-[44px] px-3.5 rounded-xl border-0 flex items-center gap-3 text-[14px] text-left transition ${
                                isActive
                                    ? "bg-[#e8f5e9] text-[#197a35] font-bold"
                                    : "bg-transparent text-[#4b5563] hover:bg-[#f8faf9] hover:text-[#1f2937] font-medium"
                            }`}
                        >
                            <Icon size={18} className="shrink-0" />
                            <span>{label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="pt-4 border-t border-solid border-[#f1f5f9]">
                <button
                    type="button"
                    onClick={onLogout}
                    className="w-full h-[42px] px-3.5 rounded-xl border border-solid border-[#e5e7eb] bg-white hover:bg-[#fef2f2] hover:border-[#fecaca] text-[#dc2626] text-[13.5px] font-semibold flex items-center justify-center gap-2 transition"
                >
                    <LogOut size={16} />
                    <span>Đăng xuất</span>
                </button>
            </div>
        </aside>
    );
}
