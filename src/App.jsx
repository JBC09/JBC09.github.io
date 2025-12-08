// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import {Location} from "./components/Location";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection.jsx";
import FacilitiesSection from "./components/FacilitiesSection.jsx";
import FloatingNav from "./components/FloatingNav.jsx";

export default function App() {
    return (
        <>
            <Header />
            <FloatingNav />
            <Hero />
            <Gallery />
            <FacilitiesSection/>
            <InfoSection />
            <Location />
            <Footer />
        </>
    );
}
