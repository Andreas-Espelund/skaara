import React from 'react';
import { Cabin } from '@/types';

interface CardProps {
    cabin: Cabin;
}

const Card: React.FC<CardProps> = ({ cabin }) => {
    return (
        <a
            className="text-lg md:text-2xl lg:text-4xl flex text-white hover:text-primary hover:scale-[102%] transition-all duration-300 aspect-square md:aspect-[4/3]"
            href={cabin.href}
            target="_blank"
            rel="noreferrer"
        >
            <div className="relative w-full h-full">
                <img
                    src={cabin.img}
                    alt={cabin.name}
                    className="rounded-xl object-cover w-full h-full"
                />
                <p className="rounded-xl text-lg md:text-2xl lg:text-4xl font-bold absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-20">
                    {cabin.name}
                </p>
            </div>
        </a>
    );
};

export default Card;
