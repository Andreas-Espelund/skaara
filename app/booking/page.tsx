import React from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import { Cabin } from '@/types';
import { ChevronLeft } from '@/icons';
import cabins from '@/data/cabins.json';

const BookingPage: React.FC = () => {
    return (
        <div className="p-4 md:p-10 flex flex-col gap-10 max-w-screen-2xl mx-auto">
            <Link href="/" className="bg-primary rounded-full w-fit p-2">
                <ChevronLeft/>
            </Link>

            <h1 className="text-4xl font-medium text-white playfair">Booking</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {cabins.map((cabin: Cabin) => (
                    <Card key={cabin.id} cabin={cabin} />
                ))}
            </div>
        </div>
    );
};

export default BookingPage;
