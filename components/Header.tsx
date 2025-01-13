import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="p-4 md:p-8 flex justify-between items-center text-white bg-gradient-to-b from-zinc-900/70 to-transparent">
            <Link href="/" className="playfair text-xl md:text-3xl tracking-wide">
                SKAARA LIVING
            </Link>
            <div className="hidden md:flex gap-8 items-center playfair text-2xl">
                <Link href="#contact" legacyBehavior>
                    <a>Contact</a>
                </Link>
                <Link href="#location" legacyBehavior>
                    <a>Location</a>
                </Link>
                <a href="https://shop.skaaraliving.com/" target="_blank" rel="noreferrer">
                    Giftcard
                </a>
                <Link href="/booking" className="bg-primary text-lg text-black py-3 px-8 rounded-full font-medium font-sans">
                    Book now
                </Link>
            </div>

            <Link href="/booking" className="md:hidden bg-primary text-black py-2 px-6 rounded-full font-medium font-sans">
                Book now
            </Link>
        </header>
    );
};

export default Header;
