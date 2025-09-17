import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

//  data for the e-commerce website
const featuredProducts = [
  {
    id: 1,
    nameKey: "premiumHeadphones",
    price: "$299.99",
    originalPrice: "$399.99",
    image: "/images/FP01.jpg",
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    nameKey: "smartWatch",
    price: "$199.99",
    originalPrice: "$249.99",
    image: "/images/FP02.jpg",
    rating: 4.6,
    reviews: 892
  },
  {
    id: 3,
    nameKey: "ultraHDCamera",
    price: "$599.99",
    originalPrice: "$699.99",
    image: "/images/FP03.jpg",
    rating: 4.9,
    reviews: 2156
  },
  {
    id: 4,
    nameKey: "portableSpeaker",
    price: "$89.99",
    originalPrice: "$129.99",
    image: "/images/FP04.jpg",
    rating: 4.5,
    reviews: 634
  }
];

const additionalProducts = [
  {
    id: 5,
    nameKey: "gamingLaptop",
    price: "$1,299.99",
    originalPrice: "$1,499.99",
    image: "/images/FP05.jpg",
    rating: 4.7,
    reviews: 2156
  },
  {
    id: 6,
    nameKey: "wirelessEarbuds",
    price: "$149.99",
    originalPrice: "$199.99",
    image: "/images/FP06.jpg",
    rating: 4.4,
    reviews: 892
  },
  {
    id: 7,
    nameKey: "smartphone",
    price: "$899.99",
    originalPrice: "$1,099.99",
    image: "/images/FP07.jpg",
    rating: 4.6,
    reviews: 1247
  },
  {
    id: 8,
    nameKey: "monitor4K",
    price: "$399.99",
    originalPrice: "$499.99",
    image: "/images/FP08.jpg",
    rating: 4.8,
    reviews: 2156
  }
];



const testimonials = [
  {
    nameKey: "alexandra",
    avatar: "/images/image1.jpg",
    rating: 5
  },
  {
    nameKey: "marcus",
    avatar: "/images/image2.jpg",
    rating: 5
  },
  {
    nameKey: "zara",
    avatar: "/images/image3.jpg",
    rating: 5
  },
  {
    nameKey: "jordan",
    avatar: "/images/image4.jpg",
    rating: 5
  }
];

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "100K+", label: "Products Sold" },
  { number: "24/7", label: "Support" },
  { number: "99.9%", label: "Satisfaction Rate" }
];

export default function Home1() {
  const { t } = useLanguage();
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [cart, setCart] = useState<Array<{id: number, name: string, price: string, image: string, quantity: number}>>([]);
  const [showCartMessage, setShowCartMessage] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is logged in (commented out for language testing)
    // const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    // if (!currentUser) {
    //   alert('Please login to access this page');
    //   window.location.href = '/auth';
    //   return;
    // }
    
    // Debug: Log featured products data
    console.log('Featured Products Data:', featuredProducts);
    console.log('First product image:', featuredProducts[0]?.image);
    console.log('Additional Products Data:', additionalProducts);
    console.log('Additional product images:', additionalProducts.map(p => p.image));
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const addToCart = (product: {id: number, name: string, price: string, image: string}) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    // Show success message
    setShowCartMessage(product.id);
    setTimeout(() => setShowCartMessage(null), 2000);
  };

  const allProducts = [...featuredProducts, ...additionalProducts];

  const handleViewAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <>
      <Head>
        <title>{t('home1.pageTitle')}</title>
        <meta name="description" content={t('home1.pageDescription')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        
        {/* Main content with top margin for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio1.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                 {t('home1.hero.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
                >
                  {t('home1.hero.subtitle')}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <Link href="/contact" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>{t('home1.hero.contactButton')}</span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
          </VideoBackground>



          {/* About Us Section - Unique Design */}
          <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-black dark:via-black dark:to-indigo-900/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/40 to-indigo-300/40 dark:from-indigo-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-200/40 to-indigo-300/40 dark:from-indigo-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            
            <div className="relative w-full px-4 sm:px-6 lg:px-8">
              <div className="w-full">
                {/* Content */}
                <div className="space-y-8 text-center">
                  {/* Floating badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-indigo-200 dark:border-indigo-700 px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{t('home1.about.established')}</span>
                  </motion.div>
                  
                  {/* Main heading with gradient - single line */}
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight whitespace-nowrap"
                  >
                    {t('home1.about.title')}{' '}
                    <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 bg-clip-text text-transparent">
                      {t('home1.about.titleHighlight')}
                    </span>
                  </motion.h2>
                  
                  {/* Description with animated highlights */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-xl text-black dark:text-white leading-relaxed max-w-4xl mx-auto"
                  >
                    {t('home1.about.description')}
                  </motion.p>
                  
                  {/* Key features grid */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {[
                      {
                        icon: "🚀",
                        title: t('home1.about.features.innovation.title'),
                        description: t('home1.about.features.innovation.description')
                      },
                      {
                        icon: "💎",
                        title: t('home1.about.features.quality.title'),
                        description: t('home1.about.features.quality.description')
                      },
                      {
                        icon: "🤝",
                        title: t('home1.about.features.community.title'),
                        description: t('home1.about.features.community.description')
                      },
                      {
                        icon: "🌍",
                        title: t('home1.about.features.global.title'),
                        description: t('home1.about.features.global.description')
                      }
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          <h3 className="font-semibold text-black dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-black dark:text-white leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* CTA button */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <Link href="/about" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center justify-center">
                        <span>{t('home1.about.learnMoreButton')}</span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
                      </div>
                    </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
                      </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('home1.whyChooseUs.title')} <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{t('home1.whyChooseUs.titleHighlight')}</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {t('home1.whyChooseUs.subtitle')}
                </p>
                    </motion.div>
                    
              {/* Features Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {/* Feature 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                      </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home1.whyChooseUs.features.performance.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('home1.whyChooseUs.features.performance.description')}
                  </p>
                    </motion.div>
                    
                {/* Feature 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home1.whyChooseUs.features.security.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('home1.whyChooseUs.features.security.description')}
                        </p>
                      </motion.div>
                      
                {/* Feature 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                        </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home1.whyChooseUs.features.customer.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('home1.whyChooseUs.features.customer.description')}
                  </p>
                        </motion.div>
                        
                {/* Feature 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                        </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home1.whyChooseUs.features.value.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('home1.whyChooseUs.features.value.description')}
                  </p>
                        </motion.div>

                {/* Feature 5 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                      </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home1.whyChooseUs.features.shipping.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('home1.whyChooseUs.features.shipping.description')}
                  </p>
                    </motion.div>

                {/* Feature 6 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L9.172 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('home1.whyChooseUs.features.innovation.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('home1.whyChooseUs.features.innovation.description')}
                  </p>
                </motion.div>
              </motion.div>


            </div>
          </section>

          {/* Featured Products Section - Unique Design */}
          <section className="py-20 bg-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-indigo-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-indigo-600/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                  {t('home1.featuredProducts.title')}
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {t('home1.featuredProducts.subtitle')}
                </p>
                
                {/* Floating stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center space-x-12 mt-12"
                >
                  {[
                    { number: t('home1.featuredProducts.stats.customers'), label: t('home1.featuredProducts.stats.customersLabel') },
                    { number: t('home1.featuredProducts.stats.products'), label: t('home1.featuredProducts.stats.productsLabel') },
                    { number: t('home1.featuredProducts.stats.rating'), label: t('home1.featuredProducts.stats.ratingLabel') }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              >
                {(showAllProducts ? allProducts : featuredProducts).map((product, index) => (
                  <motion.div 
                    key={product.id} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-indigo-600/20 to-indigo-700/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"></div>
                    
                    {/* Main product card */}
                    <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:-translate-y-4 border border-white/20 dark:border-indigo-700/50 group-hover:border-indigo-400/50">
                      {/* Image container with floating elements */}
                      <div className="relative overflow-hidden h-64">
                        <Image 
                          src={product.image} 
                          alt={t('home1.products.' + product.nameKey)}
                          width={400}
                          height={256}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          priority={index < 4}
                          onError={() => {
                            console.error('Image failed to load:', product.image);
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', product.image);
                          }}
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Discount badge with glow */}
                        <div className="absolute top-4 right-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full blur-sm opacity-75"></div>
                            <div className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              -{Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating rating stars */}
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content with glassmorphism */}
                      <div className="p-6 relative">
                        {/* Floating particles effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping"></div>
                          <div className="absolute top-4 right-3 w-1 h-1 bg-indigo-500 rounded-full animate-ping animation-delay-200"></div>
                          <div className="absolute bottom-3 left-4 w-2 h-2 bg-indigo-600 rounded-full animate-ping animation-delay-500"></div>
                        </div>
                        
                        {/* Product title */}
                        <h3 className="font-bold text-lg text-black mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-indigo-500 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                          {t('home1.products.' + product.nameKey)}
                        </h3>
                        
                        {/* Reviews count */}
                        <div className="flex items-center mb-4 opacity-75">
                          <span className="text-sm text-gray-600">({product.reviews} {t('home1.featuredProducts.reviews')})</span>
                        </div>
                        
                        {/* Price section */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="space-y-1">
                            <div className="text-2xl font-bold text-black">{product.price}</div>
                            <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                          </div>
                          
                          {/* Add to cart button with glow */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl blur-sm opacity-75"></div>
                            <button 
                              onClick={() => addToCart({...product, name: t('home1.products.' + product.nameKey)})}
                              className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                              Add to Cart
                            </button>
                            {showCartMessage === product.id && (
                              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap z-10 shadow-lg">
                                Added to cart! ✓
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover effect line */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-t-full"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Enhanced CTA button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <span onClick={handleViewAllProducts}>
                    {showAllProducts ? t('home1.featuredProducts.showLessButton') : t('home1.featuredProducts.viewAllButton')}
                  </span>
                  <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Cart Display Section */}
          {cart.length > 0 && (
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="py-12 bg-indigo-50 dark:bg-black"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
                  </h3>
                  <p className="text-black dark:text-white">
                    Total: ${cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2)}
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {cart.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="bg-white dark:bg-black rounded-lg p-4 shadow-sm border border-indigo-200 dark:border-indigo-800"
                    >
                      <div className="flex items-center space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-black dark:text-white truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-black dark:text-white">
                            {item.price} × {item.quantity}
                          </p>
                        </div>
                        <button 
                          onClick={() => setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id))}
                          className="text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mt-6"
                >
                  <button 
                    onClick={() => setCart([])}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium mr-4"
                  >
                    Clear Cart
                  </button>
                  <button className="bg-indigo-700 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition-colors font-medium">
                    Checkout
                  </button>
                </motion.div>
              </div>
            </motion.section>
          )}



          {/* Testimonials Section */}
          <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #4f46e5 50%, #ffffff 100%)' }}>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                  {t('home1.testimonials.title')}
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  {t('home1.testimonials.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                      
                      {/* Quote icon */}
                      <div className="absolute -top-6 -left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <p className="text-lg text-black leading-relaxed mb-6 italic">
                          "{t('home1.testimonialData.' + testimonial.nameKey + '.content')}"
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-black">
                              <img 
                                src={testimonial.avatar} 
                                alt={t('home1.testimonialData.' + testimonial.nameKey + '.name')}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-black text-lg">{t('home1.testimonialData.' + testimonial.nameKey + '.name')}</h4>
                              <p className="text-black/70 font-medium">{t('home1.testimonialData.' + testimonial.nameKey + '.role')}</p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex space-x-1 mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                              ))}
                            </div>
                            <div className="text-sm text-black/60">
                              <div className="font-semibold">{t('home1.testimonialData.' + testimonial.nameKey + '.purchase')}</div>
                              <div>{t('home1.testimonialData.' + testimonial.nameKey + '.date')}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* New CTA Section - Contact Navigation */}
          <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #4f46e5 50%, #ffffff 100%)' }}>
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white transform rotate-45"></div>
              <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-white transform -rotate-12"></div>
              <div className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-white transform rotate-45"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                  {t('home1.cta.title')}
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
                  {t('home1.cta.subtitle')}
                </p>
                
                {/* Main CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <Link 
                    href="/contact"
                    className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      <span>{t('home1.cta.contactButton')}</span>
                    </span>
                  </Link>
                </motion.div>
                
                {/* Additional Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{t('home1.cta.features.support.title')}</h3>
                    <p className="text-white/80">{t('home1.cta.features.support.description')}</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{t('home1.cta.features.guidance.title')}</h3>
                    <p className="text-white/80">{t('home1.cta.features.guidance.description')}</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{t('home1.cta.features.collaboration.title')}</h3>
                    <p className="text-white/80">{t('home1.cta.features.collaboration.description')}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
