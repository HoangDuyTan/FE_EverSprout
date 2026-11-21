import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

import "./styles/globals.css";
import ProductListingPage from "./pages/products/ProductListingPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";
import GuidePage from "./pages/guides/GuidePage.tsx";
import GuideDetailPage from "./pages/guides/GuideDetailPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import ChatbotWidget from "./components/common/ChatbotWidget.tsx";
import CartPage from "./pages/cart/CartPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/sign-in" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                <Route path="/products" element={<ProductListingPage/>} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/guides" element={<GuidePage/>}/>
                <Route path="/guides/:id" element={<GuideDetailPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <ChatbotWidget/>
        </BrowserRouter>
    );
}

export default App;
