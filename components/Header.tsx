// components/Header.tsx

import React from 'react';

const Header: React.FC = () => (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">LogiConnect</h1>
        <nav className="space-x-4 border">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign In</button>
    </header>
);

export default Header;
