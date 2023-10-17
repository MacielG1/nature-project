'use client';
import Link from 'next/link';

export const Navigation = [
  { href: '/', key: 'home', name: 'Home' },
  { href: '/', key: 'about', name: 'About' },
  { href: '/', key: 'Github', name: 'Github' },
];
export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#">
            <span className="sr-only">Your Company</span>
            {/* Logo */}
          </Link>
        </div>
        <div className="flex gap-x-4 md:gap-x-12">
          {Navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-neutral-800 hover:text-black hover:scale-[1.01] "
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
      </nav>
    </header>
  );
}
