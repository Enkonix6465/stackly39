import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// Product categories data for e-commerce website
const getProductCategories = (t: any) => [
  {
    id: 1,
    title: t('home2.services.page.productCategories.electronics.title'),
    slug: "electronics-gadgets",
    description: t('home2.services.page.productCategories.electronics.description'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    features: t('home2.services.page.productCategories.electronics.features'),
    image: "/images/Electronics.jpg"
  },
  {
    id: 2,
    title: t('home2.services.page.productCategories.fashion.title'),
    slug: "fashion-apparel",
    description: t('home2.services.page.productCategories.fashion.description'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 14V7a1 1 0 0 1 1-1h7l4.88 4.88a2 2 0 0 1 0 2.83z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    features: t('home2.services.page.productCategories.fashion.features'),
    image: "/images/Fasion.jpg"
  },
  {
    id: 3,
    title: t('home2.services.page.productCategories.home.title'),
    slug: "home-living",
    description: t('home2.services.page.productCategories.home.description'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
    features: t('home2.services.page.productCategories.home.features'),
    image: "/images/home.jpg"
  },
  {
    id: 4,
    title: t('home2.services.page.productCategories.sports.title'),
    slug: "sports-fitness",
    description: t('home2.services.page.productCategories.sports.description'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    features: t('home2.services.page.productCategories.sports.features'),
    image: "/images/sports.jpg"
  },
  {
    id: 5,
    title: t('home2.services.page.productCategories.beauty.title'),
    slug: "beauty-personal-care",
    description: t('home2.services.page.productCategories.beauty.description'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    features: t('home2.services.page.productCategories.beauty.features'),
    image: "/images/beauty.jpg"
  },
  {
    id: 6,
    title: t('home2.services.page.productCategories.books.title'),
    slug: "books-media",
    description: t('home2.services.page.productCategories.books.description'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    features: t('home2.services.page.productCategories.books.features'),
    image: "/images/books.jpg"
  }
];

const getTestimonials = (t: any) => [
  {
    name: t('home2.services.page.testimonials.davidChen.name'),
    role: t('home2.services.page.testimonials.davidChen.role'),
    company: t('home2.services.page.testimonials.davidChen.company'),
    content: t('home2.services.page.testimonials.davidChen.content'),
    avatar: "/images/image12.jpg"
  },
  {
    name: t('home2.services.page.testimonials.mariaGarcia.name'),
    role: t('home2.services.page.testimonials.mariaGarcia.role'),
    company: t('home2.services.page.testimonials.mariaGarcia.company'),
    content: t('home2.services.page.testimonials.mariaGarcia.content'),
    avatar: "/images/image13.jpg"
  },
  {
    name: t('home2.services.page.testimonials.jamesWilson.name'),
    role: t('home2.services.page.testimonials.jamesWilson.role'),
    company: t('home2.services.page.testimonials.jamesWilson.company'),
    content: t('home2.services.page.testimonials.jamesWilson.content'),
    avatar: "/images/image14.jpg"
  }
];

const pricing = [
  {
    plan: "Basic",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses starting their e-commerce journey",
    features: ["2 services included", "Basic support", "Standard features", "Email support"]
  },
  {
    plan: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses with multiple service needs",
    features: ["4 services included", "Priority support", "Advanced features", "Phone support", "Custom integrations"]
  },
  {
    plan: "Enterprise",
    price: "$799",
    period: "/month",
    description: "Complete solution for large-scale operations",
    features: ["All 6 services", "24/7 support", "Custom development", "Dedicated manager", "White-label options"]
  }
];

const stats = [
  { number: "500+", label: "Businesses Served", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 64 64"><g fill="#b6a7a1"><path d="M28.886 21.15v42.097c0 .346.241.636.529.636h34.04c.288 0 .529-.29.529-.636V21.15a.67.67 0 0 0-.143-.436l-.014-.011s-.008-.013-.019-.019a.44.44 0 0 0-.354-.173h-34.04c-.287 0-.528.293-.528.639"></path><path d="M.1 21.15v42.097c0 .346.241.636.529.636h34.04c.288 0 .529-.29.529-.636V21.15a.66.66 0 0 0-.143-.436l-.013-.011s-.009-.013-.018-.019a.45.45 0 0 0-.356-.173H.628c-.287 0-.528.293-.528.639"></path></g><path fill="#5697a2" d="M2.237 31.107h11.479c.094 0 .184-.039.184-.077v-4.869c0-.042-.089-.075-.184-.075H2.237a.3.3 0 0 0-.126.023v.004c-.026.015-.049.028-.049.047v4.87c0 .039.075.077.175.077m.007 8.196h11.785c.094 0 .188-.039.188-.077v-4.868c0-.042-.094-.077-.188-.077H2.245a.3.3 0 0 0-.137.025v.004s-.045.026-.045.047v4.868c0 .039.074.078.181.078m.051 7.063h15.114c.12 0 .239-.038.239-.076v-4.87c0-.043-.12-.074-.239-.074H2.295a.5.5 0 0 0-.171.023v.004c-.03.015-.062.028-.062.047v4.871c0 .037.1.075.233.075m-.026 8.201h13.262c.104 0 .209-.038.209-.077v-4.869c0-.043-.104-.075-.209-.075H2.269a.4.4 0 0 0-.151.023v.005c-.028.015-.056.027-.056.047v4.87c0 .038.087.076.207.076M51.56 31.742h10.425c.079 0 .16-.039.16-.077v-4.869c0-.043-.081-.075-.16-.075H51.56a.3.3 0 0 0-.121.023v.004c-.018.015-.039.028-.039.047v4.87c0 .039.066.077.16.077m-2.2 8.2h12.587c.099 0 .199-.038.199-.076v-4.87c0-.042-.101-.075-.199-.075H49.36a.4.4 0 0 0-.141.023v.004c-.025.015-.051.028-.051.047v4.871c0 .038.079.076.192.076m-3.99 7.06h16.52c.13 0 .261-.038.261-.077v-4.869c0-.043-.131-.075-.261-.075H45.377a.7.7 0 0 0-.188.023v.005c-.034.015-.066.027-.066.047v4.87c0 .038.103.076.253.076m2.685 8.203H61.93c.111 0 .222-.039.222-.077v-4.869c0-.043-.11-.075-.222-.075H48.062a.5.5 0 0 0-.158.023v.004c-.029.016-.055.028-.055.048v4.87c0 .037.086.076.212.076"></path><path fill="#d4c8c3" d="M11.812 3.493v59.47c0 .493.277.901.606.901h39.098c.329 0 .604-.408.604-.901V3.493c0-.267-.062-.472-.16-.615l-.018-.017c0-.015-.008-.017-.021-.026a.47.47 0 0 0-.406-.243H12.418c-.329 0-.606.41-.606.901"></path><path fill="#9a535f" d="M26.542 63.882h11.083c.087 0 .168-.056.168-.126v-7.963c0-.068-.081-.122-.168-.122H26.543a.2.2 0 0 0-.115.037l-.004.004h-.004c-.023.023-.049.051-.049.081v7.962c0 .071.082.127.171.127"></path><path fill="#86a7ac" d="M27.923 59.942h1.925s.03-.017.03-.034V57.73c0-.019-.017-.034-.017-.034h-1.938s-.019.005-.021.011v.003s-.008.013-.008.021v2.178c0 .016 0 .033.029.033"></path><path fill="#6cb5c6" d="M14.418 19.067h34.428c.273 0 .547-.049.547-.096v-6.093c0-.053-.273-.094-.547-.094H14.418c-.135 0-.301.001-.382.03v.004c-.068.019-.137.036-.137.06v6.093c0 .046.218.096.519.096m0 10.255h34.428c.273 0 .547-.049.547-.096v-6.093c0-.054-.273-.094-.547-.094H14.418c-.135 0-.301.011-.382.03v.006c-.068.017-.137.034-.137.058v6.093c0 .047.218.096.519.096m.316 8.968h34.438c.273 0 .546-.049.546-.096v-6.093c0-.053-.272-.094-.546-.094H14.739a2 2 0 0 0-.382.03v.004c-.066.019-.134.036-.134.06v6.093c0 .047.219.096.516.096m-.005 10.256h34.438c.273 0 .546-.049.546-.096v-6.093c0-.054-.272-.094-.546-.094H14.739a2.3 2.3 0 0 0-.382.029v.007c-.066.017-.134.034-.134.058v6.093c0 .047.219.096.516.096"></path><path fill="#86a7ac" d="M34.23 59.942h1.928c.013 0 .03-.017.03-.034V57.73c0-.019-.018-.034-.03-.034H34.23s-.015.005-.02.011v.003s-.008.013-.008.021v2.178c0 .016.013.033.028.033"></path></svg> },
  { number: "99.9%", label: "Uptime", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.684 3.603c.521-.659.03-1.603-.836-1.603h-6.716a1.06 1.06 0 0 0-.909.502l-5.082 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.849z"></path></svg> },
  { number: "24/7", label: "Support Available", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path stroke="#306cfe" d="M29.167 37.5H18.75a12.5 12.5 0 0 1-7.208-22.687m9.291-2.313H31.25a12.5 12.5 0 0 1 7.208 22.688"></path><path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></path></g></svg> },
  { number: "50M+", label: "Orders Processed", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></path></svg> }
];

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{t('home2.services.page.pageTitle')}</title>
        <meta name="description" content={t('home2.services.page.pageDescription')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio05.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                  {t('home2.services.page.hero.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
                >
                  {t('home2.services.page.hero.subtitle')}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <Link href="/about" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>{t('home2.services.page.hero.exploreButton')}</span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Product Categories Section */}
          <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('home2.services.page.categories.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('home2.services.page.categories.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getProductCategories(t).map((category, index) => (
                  <motion.div 
                    key={category.id} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    id={category.slug} 
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 relative">
                      {/* Indigo Border Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-3xl m-0.5">
                        <div className="relative overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {t('home2.services.page.categories.categoryBadge')} {category.id}
                          </div>
                          
                          {/* Icon and Title */}
                          <div className="absolute bottom-6 left-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <div className="text-white text-2xl">{category.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                            <div className="w-16 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                            {category.description}
                          </p>
                          
                          <div className="space-y-3 mb-8">
                            {(Array.isArray(category.features) ? category.features : []).map((feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400 list-none">
                                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </div>
                          
                          <Link 
                            href={`/services/${category.slug}`} 
                            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center block transform hover:-translate-y-1"
                          >
                            {t('home2.services.page.categories.exploreButton')} {category.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

                    {/* Category Benefits Section */}
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
                  {t('home2.services.page.benefits.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t('home2.services.page.benefits.subtitle')}
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
                    icon: "🛡️",
                    title: t('home2.services.page.benefits.qualityAssured.title'),
                    description: t('home2.services.page.benefits.qualityAssured.description')
                  },
                  {
                    icon: "🚚",
                    title: t('home2.services.page.benefits.fastDelivery.title'),
                    description: t('home2.services.page.benefits.fastDelivery.description')
                  },
                  {
                    icon: "💰",
                    title: t('home2.services.page.benefits.bestPrices.title'),
                    description: t('home2.services.page.benefits.bestPrices.description')
                  },
                  {
                    icon: "🎯",
                    title: t('home2.services.page.benefits.curatedSelection.title'),
                    description: t('home2.services.page.benefits.curatedSelection.description')
                  }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>



                    {/* Customer Reviews Section */}
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
                  {t('home2.services.page.testimonials.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('home2.services.page.testimonials.subtitle')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {getTestimonials(t).map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group h-full"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 relative overflow-hidden h-full flex flex-col">
                      {/* Indigo Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex flex-col h-full">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 ring-4 ring-indigo-100 dark:ring-indigo-900">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{testimonial.role}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-base text-justify line-clamp-4 flex-grow">
                          "{testimonial.content}"
                        </p>
                        <div className="flex text-yellow-400 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-auto">
                          {t('home2.services.page.testimonials.verifiedPurchase')} • {index === 0 ? t('home2.services.page.testimonials.categories.electronics') : index === 1 ? t('home2.services.page.testimonials.categories.fashion') : t('home2.services.page.testimonials.categories.home')}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>



          {/* Stats Section - Shopping Success by Numbers */}
          <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
            </div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 0h1v100H0z'/%3E%3Cpath d='M0 0h100v1H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-sm font-medium text-white mb-6 shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  {t('home2.services.page.stats.excellenceBadge')}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  {t('home2.services.page.stats.title')}
                </h2>
                <p className="text-xl text-gray-300 mx-auto leading-relaxed whitespace-nowrap">
                  {t('home2.services.page.stats.subtitle')}
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
                    number: t('home2.services.page.stats.stats.happyCustomers.number'),
                    label: t('home2.services.page.stats.stats.happyCustomers.label'),
                    description: t('home2.services.page.stats.stats.happyCustomers.description'),
                    icon: "👥",
                    gradient: "from-blue-500 to-blue-600",
                    delay: "0ms"
                  },
                  {
                    number: t('home2.services.page.stats.stats.successRate.number'),
                    label: t('home2.services.page.stats.stats.successRate.label'),
                    description: t('home2.services.page.stats.stats.successRate.description'),
                    icon: "✅",
                    gradient: "from-blue-500 to-blue-600",
                    delay: "100ms"
                  },
                  {
                    number: t('home2.services.page.stats.stats.countriesServed.number'),
                    label: t('home2.services.page.stats.stats.countriesServed.label'),
                    description: t('home2.services.page.stats.stats.countriesServed.description'),
                    icon: "🌍",
                    gradient: "from-blue-500 to-blue-600",
                    delay: "200ms"
                  },
                  {
                    number: t('home2.services.page.stats.stats.supportAvailable.number'),
                    label: t('home2.services.page.stats.stats.supportAvailable.label'),
                    description: t('home2.services.page.stats.stats.supportAvailable.description'),
                    icon: "🔄",
                    gradient: "from-blue-500 to-blue-600",
                    delay: "300ms"
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
                    {/* Glowing Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                      {/* Animated Icon Container */}
                      <div className="flex justify-center items-center mb-6">
                        <div className={`w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                          <div className="text-4xl">{stat.icon}</div>
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Number with Gradient Text */}
                      <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      
                      {/* Label */}
                      <div className="text-white font-bold text-xl mb-2">
                        {stat.label}
                      </div>
                      
                      {/* Description */}
                      <div className="text-gray-400 text-sm leading-relaxed">
                        {stat.description}
                      </div>
                      
                      {/* Animated Underline */}
                      <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${stat.gradient} transition-all duration-500 mt-4`}></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              

            </div>
          </section>

          {/* Unique CTA Section */}
          <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 0h1v80H0z'/%3E%3Cpath d='M0 0h80v1H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main Content Container */}
              <div className="relative z-10">
                {/* Main Heading */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-black whitespace-nowrap">
                    <span className="text-black">
                      {t('home2.services.page.cta.title')} {t('home2.services.page.cta.titleHighlight')}
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {t('home2.services.page.cta.subtitle')}
                  </p>
                </motion.div>
                
                {/* Interactive Cards Grid */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                  {[
                    {
                      icon: "🛒",
                      title: t('home2.services.page.cta.smartShopping.title'),
                      description: t('home2.services.page.cta.smartShopping.description'),
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: "📊",
                      title: t('home2.services.page.cta.analyticsDashboard.title'),
                      description: t('home2.services.page.cta.analyticsDashboard.description'),
                      color: "from-blue-600 to-blue-700"
                    },
                    {
                      icon: "🚚",
                      title: t('home2.services.page.cta.fastDelivery.title'),
                      description: t('home2.services.page.cta.fastDelivery.description'),
                      color: "from-blue-700 to-blue-800"
                    }
                  ].map((card, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      {/* Glowing Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                      
                      <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                        <div className="text-center">
                          <div className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <span className="text-3xl">{card.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{card.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center space-y-6"
                >
                  {/* Primary CTA */}
                  <div className="inline-block">
                    <Link href="/contact" className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <span className="relative z-10">{t('home2.services.page.cta.startSellingButton')}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
