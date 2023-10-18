'use client';
import { Icons } from '@/assets/Icons';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${
        isVisible ? 'visible opacity-100' : 'invisible opacity-0'
      } fixed bottom-12 right-14 z-50 rounded-full bg-green-900  hover:bg-green-950 transition p-2 text-white  duration-300 ease-in-out focus:outline-none focus:ring focus:ring-green-600`}
      onClick={handleClick}
    >
      <Icons.arrowTop className="w-6 h-6" />
    </button>
  );
}
