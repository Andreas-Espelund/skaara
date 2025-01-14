'use client'

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import {ChevronUp} from "@/icons";
import {ImageCarousel} from "@/components/ImageCarousel";

import images from '@/data/imagePaths.json'

const HomePage: React.FC = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setButtonVisible(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div>
        <div className="absolute top-0 left-0 z-50 w-full">
          <Header />
        </div>

        <ImageCarousel images={images}/>

        <section id="contact" className="sectionWrapper">
          <h1 className="stickyHeader">Contact</h1>
          <ContactForm />
        </section>

        <section id="location" className="sectionWrapper">
          <h1 className="stickyHeader">Location</h1>
          <Map />
        </section>

        <button
            onClick={scrollToTop}
            className={`fixed bottom-0 p-2 right-0 z-50 m-4 bg-primary transition-all duration-300 ease-in-out rounded-full shadow-xl ${
                buttonVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <ChevronUp/>
        </button>
      </div>
  );
};

export default HomePage;
