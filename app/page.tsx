// pages/index.tsx
import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';

const HomePage: NextPage = () => (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <HeroSection />
            <HowItWorks />
            <Features />
        </main>
        <Footer />
    </div>
);

export default HomePage;
