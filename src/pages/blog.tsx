import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

// Helper function to get CTA stats data with translations
const getCTAStatsData = (t: any) => [
  { number: t("blog.cta.stats.businessesHelped.number"), label: t("blog.cta.stats.businessesHelped.label") },
  { number: t("blog.cta.stats.successRate.number"), label: t("blog.cta.stats.successRate.label") },
  { number: t("blog.cta.stats.expertSupport.number"), label: t("blog.cta.stats.expertSupport.label") }
];

// Helper function to get authors data with translations
const getAuthorsData = (t: any) => [
  { 
    name: t("blog.authors.teamMembers.sarahJohnson.name"), 
    role: t("blog.authors.teamMembers.sarahJohnson.role"), 
    avatar: "/images/T1.jpg", 
    posts: 67, 
    expertise: t("blog.authors.teamMembers.sarahJohnson.expertise"), 
    experience: t("blog.authors.teamMembers.sarahJohnson.experience"),
    achievements: [
      t("blog.authors.teamMembers.sarahJohnson.achievements.achievement1"),
      t("blog.authors.teamMembers.sarahJohnson.achievements.achievement2"),
      t("blog.authors.teamMembers.sarahJohnson.achievements.achievement3")
    ],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  { 
    name: t("blog.authors.teamMembers.michaelChen.name"), 
    role: t("blog.authors.teamMembers.michaelChen.role"), 
    avatar: "/images/T2.jpg", 
    posts: 89, 
    expertise: t("blog.authors.teamMembers.michaelChen.expertise"), 
    experience: t("blog.authors.teamMembers.michaelChen.experience"),
    achievements: [
      t("blog.authors.teamMembers.michaelChen.achievements.achievement1"),
      t("blog.authors.teamMembers.michaelChen.achievements.achievement2"),
      t("blog.authors.teamMembers.michaelChen.achievements.achievement3")
    ],
    social: { linkedin: "#", twitter: "#", website: "#" }
  },
  { 
    name: t("blog.authors.teamMembers.emilyRodriguez.name"), 
    role: t("blog.authors.teamMembers.emilyRodriguez.role"), 
    avatar: "/images/T3.jpg", 
    posts: 124, 
    expertise: t("blog.authors.teamMembers.emilyRodriguez.expertise"), 
    experience: t("blog.authors.teamMembers.emilyRodriguez.experience"),
    achievements: [
      t("blog.authors.teamMembers.emilyRodriguez.achievements.achievement1"),
      t("blog.authors.teamMembers.emilyRodriguez.achievements.achievement2"),
      t("blog.authors.teamMembers.emilyRodriguez.achievements.achievement3")
    ],
    social: { linkedin: "#", twitter: "#", website: "#" }
  }
];

// Helper function to get milestones data with translations
const getMilestonesData = (t: any) => [
  {
    number: t("blog.milestones.achievements.businessesTransformed.number"),
    label: t("blog.milestones.achievements.businessesTransformed.label"),
    description: t("blog.milestones.achievements.businessesTransformed.description"),
    icon: "🚀",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: t("blog.milestones.achievements.successRate.number"),
    label: t("blog.milestones.achievements.successRate.label"),
    description: t("blog.milestones.achievements.successRate.description"),
    icon: "🎯",
    color: "from-green-500 to-green-600"
  },
  {
    number: t("blog.milestones.achievements.revenueGenerated.number"),
    label: t("blog.milestones.achievements.revenueGenerated.label"),
    description: t("blog.milestones.achievements.revenueGenerated.description"),
    icon: "💰",
    color: "from-yellow-500 to-yellow-600"
  }
];

// Helper function to get partners data with translations
const getPartnersData = (t: any) => [
  {
    name: t("blog.trustedPartners.partners.shopifyPlus.name"),
    logo: "🛍️",
    category: t("blog.trustedPartners.partners.shopifyPlus.category"),
    partnership: t("blog.trustedPartners.partners.shopifyPlus.partnership"),
    description: t("blog.trustedPartners.partners.shopifyPlus.description"),
    year: t("blog.trustedPartners.partners.shopifyPlus.year")
  },
  {
    name: t("blog.trustedPartners.partners.salesforce.name"),
    logo: "☁️",
    category: t("blog.trustedPartners.partners.salesforce.category"),
    partnership: t("blog.trustedPartners.partners.salesforce.partnership"),
    description: t("blog.trustedPartners.partners.salesforce.description"),
    year: t("blog.trustedPartners.partners.salesforce.year")
  },
  {
    name: t("blog.trustedPartners.partners.adobeCommerce.name"),
    logo: "🎨",
    category: t("blog.trustedPartners.partners.adobeCommerce.category"),
    partnership: t("blog.trustedPartners.partners.adobeCommerce.partnership"),
    description: t("blog.trustedPartners.partners.adobeCommerce.description"),
    year: t("blog.trustedPartners.partners.adobeCommerce.year")
  },
  {
    name: t("blog.trustedPartners.partners.bigcommerce.name"),
    logo: "🏢",
    category: t("blog.trustedPartners.partners.bigcommerce.category"),
    partnership: t("blog.trustedPartners.partners.bigcommerce.partnership"),
    description: t("blog.trustedPartners.partners.bigcommerce.description"),
    year: t("blog.trustedPartners.partners.bigcommerce.year")
  },
  {
    name: t("blog.trustedPartners.partners.woocommerce.name"),
    logo: "🔧",
    category: t("blog.trustedPartners.partners.woocommerce.category"),
    partnership: t("blog.trustedPartners.partners.woocommerce.partnership"),
    description: t("blog.trustedPartners.partners.woocommerce.description"),
    year: t("blog.trustedPartners.partners.woocommerce.year")
  },
  {
    name: t("blog.trustedPartners.partners.magento.name"),
    logo: "🚀",
    category: t("blog.trustedPartners.partners.magento.category"),
    partnership: t("blog.trustedPartners.partners.magento.partnership"),
    description: t("blog.trustedPartners.partners.magento.description"),
    year: t("blog.trustedPartners.partners.magento.year")
  },
  {
    name: t("blog.trustedPartners.partners.stripe.name"),
    logo: "💳",
    category: t("blog.trustedPartners.partners.stripe.category"),
    partnership: t("blog.trustedPartners.partners.stripe.partnership"),
    description: t("blog.trustedPartners.partners.stripe.description"),
    year: t("blog.trustedPartners.partners.stripe.year")
  },
  {
    name: t("blog.trustedPartners.partners.aws.name"),
    logo: "☁️",
    category: t("blog.trustedPartners.partners.aws.category"),
    partnership: t("blog.trustedPartners.partners.aws.partnership"),
    description: t("blog.trustedPartners.partners.aws.description"),
    year: t("blog.trustedPartners.partners.aws.year")
  }
];

// Helper function to get blog post data with translations
const getFeaturedPosts = (t: any) => [
  {
    id: 1,
    title: t("blog.posts.shopifyWooCommerce.title"),
    excerpt: t("blog.posts.shopifyWooCommerce.excerpt"),
    author: t("blog.posts.shopifyWooCommerce.author"),
    date: t("blog.posts.shopifyWooCommerce.date"),
    readTime: t("blog.posts.shopifyWooCommerce.readTime"),
    category: t("blog.posts.shopifyWooCommerce.category"),
    image: "/images/b1.jpg",
    slug: "shopify-vs-woocommerce-comparison",
    style: "modern-card",
    tags: ["Shopify", "WooCommerce", "E-commerce", "Platform"],
    readButton: t("blog.posts.shopifyWooCommerce.readButton")
  },
  {
    id: 2,
    title: t("blog.posts.magentoEnterprise.title"),
    excerpt: t("blog.posts.magentoEnterprise.excerpt"),
    author: t("blog.posts.magentoEnterprise.author"),
    date: t("blog.posts.magentoEnterprise.date"),
    readTime: t("blog.posts.magentoEnterprise.readTime"),
    category: t("blog.posts.magentoEnterprise.category"),
    image: "/images/b2.jpg",
    slug: "magento-enterprise-scaling-business",
    style: "featured-hero",
    tags: ["Magento", "Enterprise", "Scalability", "B2B"],
    readButton: t("blog.posts.magentoEnterprise.readButton")
  },
  {
    id: 3,
    title: t("blog.posts.bigcommerceSalesforce.title"),
    excerpt: t("blog.posts.bigcommerceSalesforce.excerpt"),
    author: t("blog.posts.bigcommerceSalesforce.author"),
    date: t("blog.posts.bigcommerceSalesforce.date"),
    readTime: t("blog.posts.bigcommerceSalesforce.readTime"),
    category: t("blog.posts.bigcommerceSalesforce.category"),
    image: "/images/b3.jpg",
    slug: "bigcommerce-salesforce-b2b-comparison",
    style: "minimalist",
    tags: ["BigCommerce", "Salesforce", "B2B", "Wholesale"],
    readButton: t("blog.posts.bigcommerceSalesforce.readButton")
  }
];

export default function Blog() {
  const { t } = useLanguage();
  const featuredPosts = getFeaturedPosts(t);
  const partnersData = getPartnersData(t);
  const milestonesData = getMilestonesData(t);
  const authorsData = getAuthorsData(t);
  const ctaStatsData = getCTAStatsData(t);
  
  return (
    <div>
      <Head>
        <title>{t("blog.pageTitle")}</title>
        <meta name="description" content={t("blog.pageDescription")} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio06.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                  {t("blog.hero.title")}
                  
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
                >
                  {t("blog.hero.subtitle")}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/contact" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {t("blog.hero.talkToUsButton")}
                  </Link>
                 
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Featured Posts Section */}
          <section id="featured" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("blog.featured.title")}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t("blog.featured.subtitle")}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* First Post - Updated to Featured Hero Style */}
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0">
                      <img 
                        src={featuredPosts[0].image} 
                        alt={featuredPosts[0].title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="relative p-8 lg:p-12 text-white">
                      <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {featuredPosts[0].category}
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          {featuredPosts[0].title}
                        </h3>
                        
                        <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                          {featuredPosts[0].excerpt}
                        </p>
                        
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {featuredPosts[0].author.split(' ').map((n: string) => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold">{featuredPosts[0].author}</div>
                            <div className="text-gray-300 text-sm">{featuredPosts[0].date} • {featuredPosts[0].readTime}</div>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${featuredPosts[0].slug}`}
                          className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          {featuredPosts[0].readButton}
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* Second Post - Featured Hero Style (unchanged) */}
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0">
                      <img 
                        src={featuredPosts[1].image} 
                        alt={featuredPosts[1].title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="relative p-8 lg:p-12 text-white">
                      <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {featuredPosts[1].category}
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          {featuredPosts[1].title}
                        </h3>
                        
                        <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                          {featuredPosts[1].excerpt}
                        </p>
                        
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {featuredPosts[1].author.split(' ').map((n: string) => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold">{featuredPosts[1].author}</div>
                            <div className="text-gray-300 text-sm">{featuredPosts[1].date} • {featuredPosts[1].readTime}</div>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${featuredPosts[1].slug}`}
                          className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          {featuredPosts[1].readButton}
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* Third Post - Updated to Featured Hero Style */}
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0">
                      <img 
                        src={featuredPosts[2].image} 
                        alt={featuredPosts[2].title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="relative p-8 lg:p-12 text-white">
                      <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {featuredPosts[2].category}
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          {featuredPosts[2].title}
                        </h3>
                        
                        <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                          {featuredPosts[2].excerpt}
                        </p>
                        
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {featuredPosts[2].author.split(' ').map((n: string) => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold">{featuredPosts[2].author}</div>
                            <div className="text-gray-300 text-sm">{featuredPosts[2].date} • {featuredPosts[2].readTime}</div>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${featuredPosts[2].slug}`}
                          className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          {featuredPosts[2].readButton}
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
              

            </div>
          </section>

          {/* Trusted Partners Section */}
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("blog.trustedPartners.title")}
                </h2>
                <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                  {t("blog.trustedPartners.subtitle")}
                </p>
              </motion.div>
              
              {/* Partners Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16"
              >
                {partnersData.map((partner, index) => (
                  <motion.div 
                    key={partner.name} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transform hover:-translate-y-2">
                      {/* Partner Logo & Name */}
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {partner.logo}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {partner.name}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                          {partner.category}
                        </span>
                      </div>
                      
                      {/* Partnership Details */}
                      <div className="text-center mb-4">
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                          {partner.partnership}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {t("blog.trustedPartners.since")} {partner.year}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              

            </div>
          </section>

          {/* Milestones Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t("blog.milestones.badge")}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("blog.milestones.title")} {t("blog.milestones.titleHighlight")}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t("blog.milestones.subtitle")}
                </p>
              </motion.div>
              
              {/* Milestones Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              >
                {milestonesData.map((milestone, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-600 transform hover:-translate-y-2">
                      {/* Icon */}
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {milestone.icon}
                      </div>
                      
                      {/* Number */}
                      <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                        {milestone.number}
                      </div>
                      
                      {/* Label */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {milestone.label}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              

            </div>
          </section>

          {/* Authors Section */}
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  {t("blog.authors.badge")}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t("blog.authors.title")}
                </h2>
                <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                  {t("blog.authors.subtitle")}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {authorsData.map((author, index) => (
                  <motion.div 
                    key={author.name} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-600 transform hover:-translate-y-2">
                      <div className="relative mb-6">
                        <img 
                          src={author.avatar} 
                          alt={author.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
                        />

                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {author.name}
                      </h3>
                      
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                        {author.role}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {author.expertise}
                      </p>
                      
                      <div className="flex items-center justify-center mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {author.experience}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {author.achievements.map((achievement: string, index: number) => (
                          <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-center space-x-3">
                        {Object.entries(author.social).map(([platform, url]) => (
                          <a key={platform} href={url} className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              {platform === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                              {platform === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
                              {platform === 'website' && <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url('/images/CTAservice.jpg')`
                }}
              ></div>
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                
                {/* Heading */}
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                  {t("blog.cta.title")}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    {t("blog.cta.titleHighlight")}
                  </span>
                </motion.h2>
                
                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-4xl mx-auto leading-relaxed"
                >
                  {t("blog.cta.subtitle")}
                </motion.p>
                
                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
                >
                  {ctaStatsData.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-indigo-200 text-lg">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/contact" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {t("blog.cta.startJourneyButton")}
                  </Link>
                  
                  <Link href="/services" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {t("blog.cta.exploreServicesButton")}
                  </Link>
                </motion.div>
                

              </div>
            </div>
          </section>

        </div>
        
        <Footer />
      </div>
    </div>
  );
} 
