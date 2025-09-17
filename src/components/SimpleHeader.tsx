import React, { useState, useEffect } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SimpleHeader() {
  const { t } = useLanguage();
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Check for current user on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      setCurrentUser(user);
    }
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
