import React from 'react';

const AppFooter: React.FC = () => {
    return (
        <div className="bg-black text-zinc-200 w-full flex flex-col-reverse md:flex-row md:items-start justify-between p-4 md:p-10 py-10 gap-10">
            <div className="flex flex-col gap-6">
                <p>Skaara living AS</p>
                <p>post@skaaraliving.com</p>
                <p>+47 951 91 784</p>
                <p>Copyright © 2023</p>
            </div>

            <a
                href="https://shop.skaaraliving.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary border-primary border-2 hover:bg-primary/20 font-medium p-3 md:p-4 md:px-8 text-center rounded-full text-sm md:text-xl h-min transition-all"
            >
                Buy a gift card
            </a>
        </div>
    );
};

export default AppFooter;
