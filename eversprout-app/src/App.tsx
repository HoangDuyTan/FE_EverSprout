import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import CartPage from "./pages/cart/CartPage.tsx";

import "./styles/globals.css";
import ProductListingPage from "./pages/products/ProductListingPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";
import ChatbotWidget from "./components/common/ChatbotWidget.tsx";

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
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <ChatbotWidget/>
        </BrowserRouter>
    );
}

export default App;
