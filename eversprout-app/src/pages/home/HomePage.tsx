import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "./components/HeroSection.tsx";
import CategorySection from "./components/CategorySection.tsx";
import FeaturedProductsSection from "./components/FeaturedProductsSection.tsx";
import WhyChooseUsSection from "./components/WhyChooseUsSection.tsx";
import PromotionBanner from "./components/PromotionBanner.tsx";
import TestimonialsSection from "./components/TestimonialsSection.tsx";
import ConsultationBanner from "./components/ConsultationBanner.tsx";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Navbar/>
            <main>
                <HeroSection/>
                <CategorySection/>
                <FeaturedProductsSection/>
                <WhyChooseUsSection/>
                <PromotionBanner/>
                <TestimonialsSection/>
                <ConsultationBanner/>
            </main>
            <Footer/>
        </>
    );
}