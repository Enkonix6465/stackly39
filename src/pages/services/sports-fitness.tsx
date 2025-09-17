import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function SportsFitness() {
  const { t, tArray } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('sportsFitness.pageTitle')}</title>
        <meta name="description" content={t('sportsFitness.pageDescription')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/Services4.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                  {t('sportsFitness.hero.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
                >
                  {t('sportsFitness.hero.subtitle')}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <Link href="#products" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>{t('sportsFitness.hero.exploreButton')}</span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Section 1: Featured Collections */}
          <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sportsFitness.featuredProducts.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('sportsFitness.featuredProducts.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    title: t('sportsFitness.featuredProducts.products.fitnessEquipment.title'),
                    description: t('sportsFitness.featuredProducts.products.fitnessEquipment.description'),
                    image: "/images/sports.jpg",
                    price: t('sportsFitness.featuredProducts.products.fitnessEquipment.price')
                  },
                  {
                    title: t('sportsFitness.featuredProducts.products.sportsGear.title'),
                    description: t('sportsFitness.featuredProducts.products.sportsGear.description'),
                    image: "/images/FP02.jpg",
                    price: t('sportsFitness.featuredProducts.products.sportsGear.price')
                  },
                  {
                    title: t('sportsFitness.featuredProducts.products.athleticWear.title'),
                    description: t('sportsFitness.featuredProducts.products.athleticWear.description'),
                    image: "/images/FP3.jpg",
                    price: t('sportsFitness.featuredProducts.products.athleticWear.price')
                  }
                ].map((collection, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 relative">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-3xl m-0.5">
                        <div className="relative overflow-hidden">
                          <img 
                            src={collection.image} 
                            alt={collection.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {collection.price}
                          </div>
                          
                          <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-bold text-white mb-1">{collection.title}</h3>
                            <div className="w-16 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                            {collection.description}
                          </p>
                          
                          <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center block transform hover:-translate-y-1">
                            {t('sportsFitness.featuredProducts.viewDetailsButton')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 2: Sports Features */}
          <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('sportsFitness.sportsFeatures.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('sportsFitness.sportsFeatures.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {[
                  {
                    icon: "💪",
                    title: t('sportsFitness.sportsFeatures.features.performance.title'),
                    description: t('sportsFitness.sportsFeatures.features.performance.description')
                  },
                  {
                    icon: "🛡️",
                    title: t('sportsFitness.sportsFeatures.features.durability.title'),
                    description: t('sportsFitness.sportsFeatures.features.durability.description')
                  },
                  {
                    icon: "🎯",
                    title: t('sportsFitness.sportsFeatures.features.comfort.title'),
                    description: t('sportsFitness.sportsFeatures.features.comfort.description')
                  },
                  {
                    icon: "🚀",
                    title: t('sportsFitness.sportsFeatures.features.innovation.title'),
                    description: t('sportsFitness.sportsFeatures.features.innovation.description')
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 3: Sports Categories */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sportsFitness.sportsCategories.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('sportsFitness.sportsCategories.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  {
                    title: t('sportsFitness.sportsCategories.categories.fitnessEquipment.title'),
                    items: tArray('sportsFitness.sportsCategories.categories.fitnessEquipment.items'),
                    image: "/images/s1.jpg"
                  },
                  {
                    title: t('sportsFitness.sportsCategories.categories.sportsGear.title'),
                    items: tArray('sportsFitness.sportsCategories.categories.sportsGear.items'),
                    image: "/images/s2.jpg"
                  },
                  {
                    title: t('sportsFitness.sportsCategories.categories.athleticWear.title'),
                    items: tArray('sportsFitness.sportsCategories.categories.athleticWear.items'),
                    image: "/images/s3.jpg"
                  },
                  {
                    title: t('sportsFitness.sportsCategories.categories.nutrition.title'),
                    items: tArray('sportsFitness.sportsCategories.categories.nutrition.items'),
                    image: "/images/s4.jpg"
                  }
                ].map((category, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 ring-4 ring-indigo-100 dark:ring-indigo-900">
                            <img 
                              src={category.image} 
                              alt={category.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{category.title}</h4>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {category.items.map((item: string, itemIndex: number) => (
                            <div key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 4: Customer Reviews */}
          <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('sportsFitness.customerReviews.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('sportsFitness.customerReviews.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    name: t('sportsFitness.customerReviews.testimonials.alex.name'),
                    role: t('sportsFitness.customerReviews.testimonials.alex.role'),
                    company: t('sportsFitness.customerReviews.testimonials.alex.company'),
                    content: t('sportsFitness.customerReviews.testimonials.alex.content'),
                    avatar: "/images/image12.jpg"
                  },
                  {
                    name: t('sportsFitness.customerReviews.testimonials.maria.name'),
                    role: t('sportsFitness.customerReviews.testimonials.maria.role'),
                    company: t('sportsFitness.customerReviews.testimonials.maria.company'),
                    content: t('sportsFitness.customerReviews.testimonials.maria.content'),
                    avatar: "/images/image13.jpg"
                  },
                  {
                    name: t('sportsFitness.customerReviews.testimonials.james.name'),
                    role: t('sportsFitness.customerReviews.testimonials.james.role'),
                    company: t('sportsFitness.customerReviews.testimonials.james.company'),
                    content: t('sportsFitness.customerReviews.testimonials.james.content'),
                    avatar: "/images/image14.jpg"
                  }
                ].map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-800 hover:border-gray-700">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 ring-4 ring-indigo-100 dark:ring-indigo-900">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-indigo-400 font-medium">{testimonial.role}</p>
                          <p className="text-xs text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        "{testimonial.content}"
                      </p>
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
                        {t('sportsFitness.customerReviews.verifiedPurchase')}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 5: Stats Section */}
          <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('sportsFitness.stats.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
                  {t('sportsFitness.stats.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {[
                  {
                    number: t('sportsFitness.stats.stats.sportsProducts.number'),
                    label: t('sportsFitness.stats.stats.sportsProducts.label'),
                    description: t('sportsFitness.stats.stats.sportsProducts.description'),
                    icon: "⚽",
                    gradient: "from-indigo-500 to-indigo-600"
                  },
                  {
                    number: t('sportsFitness.stats.stats.qualityRate.number'),
                    label: t('sportsFitness.stats.stats.qualityRate.label'),
                    description: t('sportsFitness.stats.stats.qualityRate.description'),
                    icon: "🏆",
                    gradient: "from-indigo-500 to-indigo-600"
                  },
                  {
                    number: t('sportsFitness.stats.stats.fitnessSupport.number'),
                    label: t('sportsFitness.stats.stats.fitnessSupport.label'),
                    description: t('sportsFitness.stats.stats.fitnessSupport.description'),
                    icon: "💬",
                    gradient: "from-indigo-500 to-indigo-600"
                  },
                  {
                    number: t('sportsFitness.stats.stats.delivery.number'),
                    label: t('sportsFitness.stats.stats.delivery.label'),
                    description: t('sportsFitness.stats.stats.delivery.description'),
                    icon: "🚚",
                    gradient: "from-indigo-500 to-indigo-600"
                  }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                      <div className="flex justify-center items-center mb-6">
                        <div className={`w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                          <div className="text-4xl">{stat.icon}</div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                      </div>
                      
                      <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      
                      <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                        {stat.label}
                      </div>
                      
                      <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {stat.description}
                      </div>
                      
                      <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${stat.gradient} transition-all duration-500 mt-4`}></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 6: CTA Section */}
          <section className="py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url('/images/CTAI.jpg')`
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight whitespace-nowrap text-white">
                    {t('sportsFitness.cta.title')} {t('sportsFitness.cta.titleHighlight')}
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    {t('sportsFitness.cta.subtitle')}
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center space-y-6"
                >
                  <div className="inline-block">
                    <Link href="/contact" className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <span className="relative z-10">{t('sportsFitness.cta.shopSportsButton')}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/services" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      {t('sportsFitness.cta.viewCategoriesButton')}
                    </Link>
                    <Link href="/contact" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      {t('sportsFitness.cta.getFitnessAdviceButton')}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
