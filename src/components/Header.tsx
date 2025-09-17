import React, { useState, useEffect, useRef } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const homeDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Check for current user on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      setCurrentUser(user);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target as Node)) {
        setIsHomeDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      // Call logout API
      await fetch('/api/auth', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: currentUser?.email }),
      });
      
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        
        // Redirect to auth page
        window.location.href = '/auth';
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear localStorage and redirect even if API call fails
      if (typeof window !== 'undefined') {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        window.location.href = '/auth';
      }
    }
  };

  return (
    <header>
      <nav className="bg-white dark:bg-black shadow-md fixed w-full z-20 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/home1" className="flex items-center">
                <Image
                  src="/logo-stackly.png"
                  alt="E-Commerce Logo"
                  className="w-28 h-8"
                  height={32}
                  width={112}
                />
              </Link>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home Dropdown */}
              <div className="relative" ref={homeDropdownRef}>
                <button
                  onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200 flex items-center"
                >
                  {t('header.home')}
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isHomeDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="py-1">
                      <Link
                        href="/home1"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsHomeDropdownOpen(false)}
                      >
                        {t('header.home1')}
                      </Link>
                      <Link
                        href="/home2"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsHomeDropdownOpen(false)}
                      >
                        {t('header.home2')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t('header.about')}
              </Link>
              {/* Services Dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200 flex items-center"
                >
                  {t('header.services')}
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="py-1">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.allServices')}
                      </Link>
                      <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                      <Link
                        href="/services/electronics-gadgets"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.servicesList.electronics')}
                      </Link>
                      <Link
                        href="/services/fashion-apparel"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.servicesList.fashion')}
                      </Link>
                      <Link
                        href="/services/home-living"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.servicesList.home')}
                      </Link>
                      <Link
                        href="/services/sports-fitness"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.servicesList.sports')}
                      </Link>
                      <Link
                        href="/services/beauty-personal-care"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.servicesList.beauty')}
                      </Link>
                      <Link
                        href="/services/books-media"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {t('header.servicesList.books')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/blog" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t('header.blog')}
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
              >
                {t('header.contact')}
              </Link>
            </div>
            
            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />
              {/* Dark Mode Toggle */}
              <ModeToggle />
              {/* Logout Button - Only show if user is logged in */}
              {currentUser && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  {t('header.logout')}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
