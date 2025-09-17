import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { ModeToggle } from './theme/ModeToggle';

const AuthHeader: React.FC = () => {
  return (
    <header className="bg-white dark:bg-black shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-stackly.png"
                alt="E-Commerce Logo"
                className="w-28 h-8"
                height={32}
                width={112}
              />
            </Link>
          </div>
          
          {/* Language Switcher and Mode Toggle on the right */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
