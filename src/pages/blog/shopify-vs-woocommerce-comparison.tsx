import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ShopifyVsWooCommerce() {
  const { t, tArray } = useLanguage();
  
  return (
    <div>
      <Head>
        <title>{t("blog.posts.shopifyWooCommerce.title")} | ShopHub Blog</title>
        <meta name="description" content={t("blog.posts.shopifyWooCommerce.excerpt")} />
        <meta name="keywords" content="Shopify, WooCommerce, e-commerce platform, comparison, online store, business platform" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section 
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/b1.jpg')",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {t("blog.posts.shopifyWooCommerce.category")}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t("blog.posts.shopifyWooCommerce.title")}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                {t("blog.posts.shopifyWooCommerce.excerpt")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/images/T1.jpg" alt="Alex Thompson" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{t("blog.posts.shopifyWooCommerce.author")}</div>
                    <div className="text-white/80 text-sm">E-commerce Platform Expert</div>
                  </div>
                </div>
                <div className="text-white/60">•</div>
                <div className="text-white/90">{t("blog.posts.shopifyWooCommerce.date")}</div>
                <div className="text-white/60">•</div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-white/30">{t("blog.posts.shopifyWooCommerce.readTime")}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {["Shopify", "WooCommerce", "E-commerce", "Platform", "Comparison"].map((tag) => (
                  <span key={tag} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                  <p className="text-lg font-medium text-blue-900 dark:text-blue-100 m-0">
                    <strong>{t("blog.posts.shopifyWooCommerce.content.quickTake")}</strong>
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("blog.posts.shopifyWooCommerce.content.mainTitle")}
                </h2>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.mainDescription")}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.shopifySection.title")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.shopifySection.description")}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t("blog.posts.shopifyWooCommerce.content.shopifySection.prosTitle")}
                    </h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      {tArray("blog.posts.shopifyWooCommerce.content.shopifySection.pros").map((pro: string, index: number) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t("blog.posts.shopifyWooCommerce.content.shopifySection.consTitle")}
                    </h4>
                    <ul className="text-red-700 dark:text-red-300 space-y-2">
                      {tArray("blog.posts.shopifyWooCommerce.content.shopifySection.cons").map((con: string, index: number) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.woocommerceSection.title")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.woocommerceSection.description")}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t("blog.posts.shopifyWooCommerce.content.woocommerceSection.prosTitle")}
                    </h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      {tArray("blog.posts.shopifyWooCommerce.content.woocommerceSection.pros").map((pro: string, index: number) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {t("blog.posts.shopifyWooCommerce.content.woocommerceSection.consTitle")}
                    </h4>
                    <ul className="text-red-700 dark:text-red-300 space-y-2">
                      {tArray("blog.posts.shopifyWooCommerce.content.woocommerceSection.cons").map((con: string, index: number) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.pricingSection.title")}
                </h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t("blog.posts.shopifyWooCommerce.content.pricingSection.tableHeaders.platform")}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t("blog.posts.shopifyWooCommerce.content.pricingSection.tableHeaders.startingPrice")}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t("blog.posts.shopifyWooCommerce.content.pricingSection.tableHeaders.transactionFees")}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t("blog.posts.shopifyWooCommerce.content.pricingSection.tableHeaders.additionalCosts")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t("blog.posts.shopifyWooCommerce.content.pricingSection.shopifyBasic.name")}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{t("blog.posts.shopifyWooCommerce.content.pricingSection.shopifyBasic.price")}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{t("blog.posts.shopifyWooCommerce.content.pricingSection.shopifyBasic.fees")}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{t("blog.posts.shopifyWooCommerce.content.pricingSection.shopifyBasic.costs")}</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t("blog.posts.shopifyWooCommerce.content.pricingSection.woocommerce.name")}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{t("blog.posts.shopifyWooCommerce.content.pricingSection.woocommerce.price")}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{t("blog.posts.shopifyWooCommerce.content.pricingSection.woocommerce.fees")}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{t("blog.posts.shopifyWooCommerce.content.pricingSection.woocommerce.costs")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.whenToChoose.shopifyTitle")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.whenToChoose.shopifyDescription")}
                </p>
                
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-3 list-disc pl-6">
                  {tArray("blog.posts.shopifyWooCommerce.content.whenToChoose.shopifyReasons").map((reason: string, index: number) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.whenToChoose.woocommerceTitle")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.whenToChoose.woocommerceDescription")}
                </p>
                
                <ul className="text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-3 list-disc pl-6">
                  {tArray("blog.posts.shopifyWooCommerce.content.whenToChoose.woocommerceReasons").map((reason: string, index: number) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.performanceSection.title")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.performanceSection.description")}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t("blog.posts.shopifyWooCommerce.content.performanceSection.shopifyPerformance.title")}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t("blog.posts.shopifyWooCommerce.content.performanceSection.shopifyPerformance.description")}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t("blog.posts.shopifyWooCommerce.content.performanceSection.woocommercePerformance.title")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("blog.posts.shopifyWooCommerce.content.performanceSection.woocommercePerformance.description")}
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.securitySection.title")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.securitySection.description")}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">{t("blog.posts.shopifyWooCommerce.content.securitySection.shopifySecurity.title")}</h4>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                      {tArray("blog.posts.shopifyWooCommerce.content.securitySection.shopifySecurity.features").map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">{t("blog.posts.shopifyWooCommerce.content.securitySection.woocommerceSecurity.title")}</h4>
                    <ul className="text-purple-700 dark:text-purple-300 space-y-2">
                      {tArray("blog.posts.shopifyWooCommerce.content.securitySection.woocommerceSecurity.features").map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("blog.posts.shopifyWooCommerce.content.finalVerdict.title")}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.finalVerdict.description")}
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>{t("blog.posts.shopifyWooCommerce.content.finalVerdict.shopifyChoice")}</strong>
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>{t("blog.posts.shopifyWooCommerce.content.finalVerdict.woocommerceChoice")}</strong>
                  </p>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("blog.posts.shopifyWooCommerce.content.finalVerdict.conclusion")}
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t("blog.posts.shopifyWooCommerce.content.needHelp.title")}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t("blog.posts.shopifyWooCommerce.content.needHelp.description")}
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {t("blog.posts.shopifyWooCommerce.content.needHelp.button")}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {t("blog.posts.shopifyWooCommerce.content.relatedArticles.title")}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="/blog/magento-enterprise-scaling-business" className="group">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t("blog.posts.shopifyWooCommerce.content.relatedArticles.magentoArticle.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t("blog.posts.shopifyWooCommerce.content.relatedArticles.magentoArticle.description")}
                    </p>
                    <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Read Article →
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/bigcommerce-salesforce-b2b-comparison" className="group">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t("blog.posts.shopifyWooCommerce.content.relatedArticles.bigcommerceArticle.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t("blog.posts.shopifyWooCommerce.content.relatedArticles.bigcommerceArticle.description")}
                    </p>
                    <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Read Article →
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
