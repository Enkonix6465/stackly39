import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Static imports for translation files
import enTranslations from '../translations/en.json';
import arTranslations from '../translations/ar.json';
import heTranslations from '../translations/he.json';

export type Language = 'en' | 'ar' | 'he';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => any[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation data object
const translations = {
  en: enTranslations,
  ar: arTranslations,
  he: heTranslations,
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [currentTranslations, setCurrentTranslations] = useState<any>(enTranslations);

  useEffect(() => {
    // Load saved language from localStorage (only on client side)
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && ['en', 'ar', 'he'].includes(savedLanguage)) {
        setCurrentLanguage(savedLanguage);
        setCurrentTranslations(translations[savedLanguage]);
      }
    }
  }, []);

  useEffect(() => {
    // Update translations when language changes
    setCurrentTranslations(translations[currentLanguage]);
  }, [currentLanguage]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    // Ensure we always return a string for React rendering
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'number') {
      return value.toString();
    } else if (Array.isArray(value)) {
      return value.join(', ');
    } else if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    } else {
      return key; // Fallback to key if value is unexpected type
    }
  };

  const tArray = (key: string): any[] => {
    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return [key]; // Return key as array if translation not found
      }
    }
    
    // Return array if it's an array, otherwise wrap in array
    if (Array.isArray(value)) {
      return value;
    } else {
      return [value]; // Wrap single values in array
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
