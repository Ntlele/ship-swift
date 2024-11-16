// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-gray-300 py-8 px-8 text-center" id={"footer"}>
        <div className="mb-4">
            <p className="text-lg font-semibold">Ship-Swift</p>
            <p className="text-sm mt-1">Connecting couriers and clients for seamless deliveries</p>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Ship-Swift. All rights reserved.</p>
    </footer>
);

export default Footer;
