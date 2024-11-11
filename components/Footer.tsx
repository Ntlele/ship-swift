// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-gray-300 py-8 px-8 text-center">
        <div className="mb-4">
            <p className="text-lg font-semibold">LogiConnect</p>
            <p className="text-sm mt-1">Connecting couriers and clients for seamless deliveries</p>
        </div>
        <nav className="space-x-4 mb-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
        <p className="text-xs">&copy; {new Date().getFullYear()} LogiConnect. All rights reserved.</p>
    </footer>
);

export default Footer;
