import { useState } from "react";
import {Bot, MessageCircle, Send, X} from "lucide-react";
import "../../styles/common/chatbot-widget.css";

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-widget">
            {isOpen && (
                <div className="chatbot-box">
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="chatbot-avatar"><Bot size={20}/></div>
                            <div>
                                <strong>Trợ lý EverSprout</strong>
                                <span>Hỗ trợ tư vấn cây giống</span>
                            </div>
                        </div>

                        <button type="button" className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Đóng chatbot">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chatbot-content">
                        <div className="chatbot-message bot-message">
                            <div className="message-avatar">
                                <Bot size={16} />
                            </div>

                            <div className="message-content">
                                Xin chào! Mình là trợ lý EverSprout.
                                Bạn đang cần tìm cây giống hay tư vấn chăm sóc cây?
                            </div>
                        </div>

                        <div className="chatbot-suggestions">
                            <button type="button">Cây nào dễ trồng?</button>
                            <button type="button">Tư vấn cây ăn trái</button>
                            <button type="button">Cách chăm sóc cây</button>
                        </div>
                    </div>

                    <div className="chatbot-input-area">
                        <input type="text" placeholder="Nhập câu hỏi của bạn..."/>
                        <button type="button" className="chatbot-send" aria-label="Gửi tin nhắn"><Send size={17}/></button>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button type="button" className="chatbot-toggle" onClick={() => setIsOpen(true)} aria-label="Mở chatbot">
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    );
}