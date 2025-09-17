import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function HomeLiving() {
  const { t, tArray } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('homeLiving.pageTitle')}</title>
        <meta name="description" content={t('homeLiving.pageDescription')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/Service3.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                  {t('homeLiving.hero.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
                >
                  {t('homeLiving.hero.subtitle')}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <Link href="#products" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>{t('homeLiving.hero.exploreButton')}</span>
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
                  {t('homeLiving.featuredCollections.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('homeLiving.featuredCollections.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {tArray('homeLiving.featuredCollections.collections').map((collection: any, index: number) => {
                  const images = ["/images/H1.jpg", "/images/H2 (2).jpg", "/images/H3.jpg"];
                  return (
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
                              src={images[index]} 
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
                              {collection.button}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Section 2: Home Features */}
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
                  {t('homeLiving.features.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('homeLiving.features.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {tArray('homeLiving.features.features').map((feature: any, index: number) => {
                  const icons = ["🏠", "🎨", "🛡️", "🌱"];
                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {icons[index]}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Section 3: Home Categories */}
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
                  {t('homeLiving.categories.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('homeLiving.categories.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {tArray('homeLiving.categories.categories').map((category: any, index: number) => {
                  const images = ["/images/H4.jpg", "/images/H5.jpg", "/images/H6.jpg", "/images/H7.jpg"];
                  return (
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
                                src={images[index]} 
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
                  );
                })}
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
                  {t('homeLiving.testimonials.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('homeLiving.testimonials.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {tArray('homeLiving.testimonials.testimonials').map((testimonial: any, index: number) => {
                  const avatars = ["/images/image18.jpg", "/images/image19.jpg", "/images/image20.jpg"];
                  return (
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
                              src={avatars[index]} 
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
                          {t('homeLiving.testimonials.verifiedPurchase')}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                  {t('homeLiving.stats.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
                  {t('homeLiving.stats.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {tArray('homeLiving.stats.stats').map((stat: any, index: number) => {
                  const icons = ["🏠", "✨", "💬", "📦"];
                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                      
                      <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                        <div className="flex justify-center items-center mb-6">
                          <div className={`w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                            <div className="text-4xl">{icons[index]}</div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          </div>
                        </div>
                        
                        <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-indigo-500 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {stat.number}
                        </div>
                        
                        <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                          {stat.label}
                        </div>
                        
                        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {stat.description}
                        </div>
                        
                        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500 mt-4`}></div>
                      </div>
                    </motion.div>
                  );
                })}
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
                    {t('homeLiving.cta.title')}
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    {t('homeLiving.cta.subtitle')}
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
                      <span className="relative z-10">{t('homeLiving.cta.shopButton')}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/services" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      {t('homeLiving.cta.viewCategories')}
                    </Link>
                    <Link href="/contact" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      {t('homeLiving.cta.getAdvice')}
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
