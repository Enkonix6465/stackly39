import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// Dummy data for the about page
const teamMembers = [
  {
    id: 1,
    nameKey: "alexander",
    roleKey: "ceo",
    image: "/images/image1.jpg",
    linkedin: "#",
    twitter: "#",
    email: "alexander@stackly.com"
  },
  {
    id: 2,
    nameKey: "sophia",
    roleKey: "cto",
    image: "/images/image2.jpg",
    linkedin: "#",
    twitter: "#",
    email: "sophia@stackly.com"
  },
  {
    id: 3,
    nameKey: "marcus",
    roleKey: "cdo",
    image: "/images/image3.jpg",
    linkedin: "#",
    twitter: "#",
    email: "marcus@stackly.com"
  },
  {
    id: 4,
    nameKey: "isabella",
    roleKey: "coo",
    image: "/images/image4.jpg",
    linkedin: "#",
    twitter: "#",
    email: "isabella@stackly.com"
  }
];

const milestones = [
  {
    year: "2018",
    titleKey: "founded",
    descriptionKey: "foundedDesc",
    icon: "🚀"
  },
  {
    year: "2019",
    titleKey: "firstCustomers",
    descriptionKey: "firstCustomersDesc",
    icon: "👥"
  },
  {
    year: "2020",
    titleKey: "funding",
    descriptionKey: "fundingDesc",
    icon: "💰"
  },
  {
    year: "2021",
    titleKey: "international",
    descriptionKey: "internationalDesc",
    icon: "🌍"
  },
  {
    year: "2022",
    titleKey: "products",
    descriptionKey: "productsDesc",
    icon: "📦"
  },
  {
    year: "2023",
    titleKey: "leader",
    descriptionKey: "leaderDesc",
    icon: "🏆"
  }
];

const values = [
  {
    icon: "💝",
    titleKey: "customerFirst",
    descriptionKey: "customerFirstDesc"
  },
  {
    icon: "💡",
    titleKey: "innovation",
    descriptionKey: "innovationDesc"
  },
  {
    icon: "🤝",
    titleKey: "integrity",
    descriptionKey: "integrityDesc"
  },
  {
    icon: "🌱",
    titleKey: "sustainability",
    descriptionKey: "sustainabilityDesc"
  }
];

const testimonials = [
  {
    nameKey: "alex",
    roleKey: "businessOwner",
    contentKey: "alexContent",
    avatar: "/images/image5.jpg",
    rating: 5
  },
  {
    nameKey: "maria",
    roleKey: "marketingDirector",
    contentKey: "mariaContent",
    avatar: "/images/image6.jpg",
    rating: 5
  },
  {
    nameKey: "james",
    roleKey: "ecommerceManager",
    contentKey: "jamesContent",
    avatar: "/images/image7.jpg",
    rating: 5
  }
];

const stats = [
  { number: "50K+", labelKey: "happyCustomers" },
  { number: "100K+", labelKey: "productsSold" },
  { number: "25+", labelKey: "countriesServed" },
  { number: "99.9%", labelKey: "uptime" }
];

export default function About() {
  const { t } = useLanguage();
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    // Check if user is logged in
    if (typeof window !== 'undefined') {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!currentUser) {
        alert('Please login to access this page');
        window.location.href = '/auth';
        return;
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>{t('about.pageTitle')}</title>
        <meta name="description" content={t('about.pageDescription')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        
        {/* Main content with top margin for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/Av3.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                  {t('about.hero.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
                >
                  {t('about.hero.subtitle')}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <Link href="/contact" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>{t('about.hero.contactButton')}</span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
          </VideoBackground>

          {/* Mission & Vision Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-black dark:via-black dark:to-indigo-900/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/40 to-indigo-300/40 dark:from-indigo-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-200/40 to-indigo-300/40 dark:from-indigo-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                  {t('about.missionVision.title')}
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('about.missionVision.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Mission */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      {t('about.missionVision.mission.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t('about.missionVision.mission.description')}
                    </p>
                  </div>
                </motion.div>
                
                {/* Vision */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      {t('about.missionVision.vision.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t('about.missionVision.vision.description')}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Our Journey Section */}
          <section className="py-20 bg-black relative overflow-hidden">
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-medium text-white">{t('about.journey.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t('about.journey.title')}
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  {t('about.journey.subtitle')}
                </p>
              </motion.div>
              
              {/* Timeline */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-blue-500"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div 
                      key={milestone.year} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-indigo-500 flex items-center justify-center z-10">
                        <span className="text-sm">{milestone.icon}</span>
                      </div>
                      
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="text-2xl font-bold text-white mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {t(`about.milestones.${milestone.year}.title`)}
                          </h3>
                          <p className="text-white/80">
                            {t(`about.milestones.${milestone.year}.description`)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-indigo-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/20 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{t('about.team.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                  {t('about.team.title')}
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('about.team.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={member.id} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100 dark:border-indigo-800">
                      {/* Image */}
                      <div className="relative overflow-hidden h-64">
                        <Image 
                          src={member.image} 
                          alt={t(`about.teamMembers.${member.nameKey}.name`)}
                          width={300}
                          height={256}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                          {t(`about.teamMembers.${member.nameKey}.name`)}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                          {t(`about.teamMembers.${member.nameKey}.role`)}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {t(`about.teamMembers.${member.nameKey}.bio`)}
                        </p>
                        
                        {/* Social links */}
                        <div className="flex space-x-3">
                          <a href={member.linkedin} className="text-indigo-600 hover:text-indigo-700 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a href={member.twitter} className="text-indigo-600 hover:text-indigo-700 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                          <a href={`mailto:${member.email}`} className="text-indigo-600 hover:text-indigo-700 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Values & Culture Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-black dark:to-indigo-900/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/40 to-indigo-300/40 dark:from-indigo-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-200/40 to-indigo-300/40 dark:from-indigo-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                  {t('about.valuesCulture.title')}
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('about.valuesCulture.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                        {t(`about.values.${value.titleKey}.title`)}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t(`about.values.${value.titleKey}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {t(`about.stats.${stat.labelKey}`)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

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
                  {t('about.testimonialsSection.title')}
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  {t('about.testimonialsSection.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
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
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <p className="text-lg text-black leading-relaxed mb-6 italic">
                          "{t(`about.testimonials.${testimonial.nameKey}.content`)}"
                        </p>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-black">
                            <img 
                              src={testimonial.avatar} 
                              alt={t(`about.testimonials.${testimonial.nameKey}.name`)}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-black text-lg">{t(`about.testimonials.${testimonial.nameKey}.name`)}</h4>
                            <p className="text-black/70 font-medium">{t(`about.testimonials.${testimonial.nameKey}.role`)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/ContactA.jpg)' }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-medium text-white">{t('about.cta.badge')}</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                  {t('about.cta.title')}{' '}
                  <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                    {t('about.cta.titleHighlight')}
                  </span>
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
                  {t('about.cta.subtitle')}
                </p>
                
                {/* Main CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                  <Link 
                    href="/contact"
                    className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-12 py-6 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      <span>{t('about.cta.startButton')}</span>
                    </span>
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="group bg-transparent text-white border-2 border-indigo-600 px-12 py-6 rounded-2xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      <span>{t('about.cta.consultationButton')}</span>
                    </span>
                  </Link>
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


