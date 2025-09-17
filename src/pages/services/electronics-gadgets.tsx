import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function ElectronicsGadgets() {
  const { t, tArray } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{t('electronicsGadgets.meta.title')}</title>
        <meta name="description" content={t('electronicsGadgets.meta.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/Service1.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                  {t('electronicsGadgets.hero.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 whitespace-nowrap"
                >
                  {t('electronicsGadgets.hero.subtitle')}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <Link href="#products" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>{t('electronicsGadgets.hero.exploreButton')}</span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Section 1: Featured Products */}
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
                  {t('electronicsGadgets.featuredProducts.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('electronicsGadgets.featuredProducts.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {tArray('electronicsGadgets.featuredProducts.products').map((product: any, index: number) => {
                  const images = ["/images/s01.jpg", "/images/s02.jpg", "/images/s03.jpg", "/images/s4.jpg"];
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
                            alt={product.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {product.price}
                          </div>
                          
                          <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
                            <div className="w-16 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                            {product.description}
                          </p>
                          
                          <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center block transform hover:-translate-y-1">
                            {t('electronicsGadgets.featuredProducts.viewDetailsButton')}
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

          {/* Section 2: Technology Features */}
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
                  {t('electronicsGadgets.technologyFeatures.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('electronicsGadgets.technologyFeatures.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {tArray('electronicsGadgets.technologyFeatures.features').map((feature: any, index: number) => {
                  const icons = ["🔋", "📱", "🔄", "🔒"];
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

          {/* Section 3: Product Categories */}
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
                  {t('electronicsGadgets.productCategories.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('electronicsGadgets.productCategories.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {(() => {
                  const categoriesData = tArray('electronicsGadgets.productCategories.categories');
                  const images = ["/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg"];
                  
                  // Handle both array and object structures
                  let categories = [];
                  if (Array.isArray(categoriesData)) {
                    categories = categoriesData;
                  } else if (typeof categoriesData === 'object' && categoriesData !== null) {
                    // Convert object to array
                    categories = Object.values(categoriesData);
                  }
                  
                  return categories.map((category: any, index: number) => {
                    // Safety check for items array
                    const items = category.items && Array.isArray(category.items) ? category.items : [];
                    
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
                                  src={images[index % images.length]} 
                                  alt={category.title || 'Category'}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{category.title || 'Category'}</h4>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              {items.length > 0 ? (
                                items.map((item: string, itemIndex: number) => (
                                  <div key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                                    {item}
                                  </div>
                                ))
                              ) : (
                                <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                                  No items available
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  });
                })()}
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
                  {t('electronicsGadgets.customerReviews.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('electronicsGadgets.customerReviews.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {tArray('electronicsGadgets.customerReviews.reviews').map((testimonial: any, index: number) => {
                  const avatars = ["/images/image12.jpg", "/images/image13.jpg", "/images/image14.jpg"];
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
                        {t('electronicsGadgets.customerReviews.verifiedPurchase')}
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
                  {t('electronicsGadgets.stats.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {t('electronicsGadgets.stats.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {tArray('electronicsGadgets.stats.statistics').map((stat: any, index: number) => {
                  const icons = ["📱", "✨", "💬", "📦"];
                  const gradient = "from-indigo-500 to-indigo-600";
                  return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                      <div className="flex justify-center items-center mb-6">
                        <div className={`w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                          <div className="text-4xl">{icons[index]}</div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                      </div>
                      
                      <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      
                      <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                        {stat.label}
                      </div>
                      
                      <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {stat.description}
                      </div>
                      
                      <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${gradient} transition-all duration-500 mt-4`}></div>
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
                    {t('electronicsGadgets.cta.title')} {t('electronicsGadgets.cta.titleHighlight')}
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    {t('electronicsGadgets.cta.subtitle')}
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
                      <span className="relative z-10">{t('electronicsGadgets.cta.shopButton')}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/services" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      {t('electronicsGadgets.cta.viewCategories')}
                    </Link>
                    <Link href="/contact" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      {t('electronicsGadgets.cta.getSupport')}
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
