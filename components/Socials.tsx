import React from 'react';
import socials from '@/data/socials.json';
import { Social } from '@/types';

const Socials: React.FC = () => {
    return (
        <div className={"z-50 absolute bottom-0 w-full"}>
            <div className="w-fit mx-auto grid grid-cols-3 gap-12 p-8">
                {socials.map((so: Social) => (
                    <a key={so.alt} href={so.url} target="_blank" rel="noopener noreferrer" className="w-10">
                        <img src={so.icon} alt={so.alt} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Socials;
