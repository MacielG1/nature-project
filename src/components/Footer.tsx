import { Icons } from '@/assets/Icons';
import Link from 'next/link';

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer
      className={
        'mx-auto max-w-7xl overflow-hidden px-6 pb-16 sm:pb-20 lg:px-8 '
      }
    >
      <div className="mt-10 flex justify-center space-x-10">
        <Link
          href="https://github.com/MacielG1"
          className="flex gap-2 items-center"
        >
          <Icons.GitHub className="w-5 h-5" /> Github
        </Link>
      </div>
      <p className="mt-6 text-center text-xs leading-5 text-gray-500">
        &copy; {currentYear} MacielG1, Inc. All rights reserved.
      </p>
    </footer>
  );
}
