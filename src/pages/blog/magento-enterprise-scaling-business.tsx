import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MagentoEnterprise() {
  const { t, tArray } = useLanguage();
  
  return (
    <div>
      <Head>
        <title>{t('blog.posts.magentoEnterprise.content.pageTitle')}</title>
        <meta name="description" content={t('blog.posts.magentoEnterprise.content.pageDescription')} />
        <meta name="keywords" content={t('blog.posts.magentoEnterprise.content.keywords')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section 
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/b2.jpg')",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('blog.posts.magentoEnterprise.content.hero.badge')}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t('blog.posts.magentoEnterprise.content.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                {t('blog.posts.magentoEnterprise.content.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/images/T2.jpg" alt="Maria Santos" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{t('blog.posts.magentoEnterprise.content.hero.author')}</div>
                    <div className="text-white/80 text-sm">{t('blog.posts.magentoEnterprise.content.hero.authorRole')}</div>
                  </div>
                </div>
                <div className="text-white/60">•</div>
                <div className="text-white/90">{t('blog.posts.magentoEnterprise.content.hero.date')}</div>
                <div className="text-white/60">•</div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-white/30">{t('blog.posts.magentoEnterprise.content.hero.readTime')}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {tArray('blog.posts.magentoEnterprise.content.hero.tags').map((tag: string) => (
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
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                  <p className="text-lg font-medium text-green-900 dark:text-green-100 m-0">
                    <strong>{t('blog.posts.magentoEnterprise.content.enterpriseFocus.title')}</strong> {t('blog.posts.magentoEnterprise.content.enterpriseFocus.description')}
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.posts.magentoEnterprise.content.mainContent.powerTitle')}
                </h2>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.mainContent.powerDescription')}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.mainContent.specialTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.mainContent.specialDescription')}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">{t('blog.posts.magentoEnterprise.content.mainContent.features.performance.title')}</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      {t('blog.posts.magentoEnterprise.content.mainContent.features.performance.description')}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">{t('blog.posts.magentoEnterprise.content.mainContent.features.security.title')}</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {t('blog.posts.magentoEnterprise.content.mainContent.features.security.description')}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">{t('blog.posts.magentoEnterprise.content.mainContent.features.scalability.title')}</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      {t('blog.posts.magentoEnterprise.content.mainContent.features.scalability.description')}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.advancedFeatures.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.advancedFeatures.description')}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('blog.posts.magentoEnterprise.content.advancedFeatures.customerSegmentation.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {t('blog.posts.magentoEnterprise.content.advancedFeatures.customerSegmentation.description')}
                    </p>
                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                      {tArray('blog.posts.magentoEnterprise.content.advancedFeatures.customerSegmentation.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('blog.posts.magentoEnterprise.content.advancedFeatures.inventoryManagement.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {t('blog.posts.magentoEnterprise.content.advancedFeatures.inventoryManagement.description')}
                    </p>
                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                      {tArray('blog.posts.magentoEnterprise.content.advancedFeatures.inventoryManagement.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('blog.posts.magentoEnterprise.content.advancedFeatures.b2bCapabilities.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {t('blog.posts.magentoEnterprise.content.advancedFeatures.b2bCapabilities.description')}
                    </p>
                    <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                      {tArray('blog.posts.magentoEnterprise.content.advancedFeatures.b2bCapabilities.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.performanceScalability.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.performanceScalability.description')}
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.magentoEnterprise.content.performanceScalability.table.headers.feature')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.magentoEnterprise.content.performanceScalability.table.headers.capability')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.magentoEnterprise.content.performanceScalability.table.headers.businessImpact')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tArray('blog.posts.magentoEnterprise.content.performanceScalability.table.rows').map((row: any, index: number) => (
                        <tr key={index} className={index % 2 === 1 ? "bg-gray-50 dark:bg-gray-800" : ""}>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{row.feature}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{row.capability}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">{row.businessImpact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.securityCompliance.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.securityCompliance.description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      {t('blog.posts.magentoEnterprise.content.securityCompliance.securityFeatures.title')}
                    </h4>
                    <ul className="text-red-700 dark:text-red-300 space-y-2">
                      {tArray('blog.posts.magentoEnterprise.content.securityCompliance.securityFeatures.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18A2.25 2.25 0 015.25 20h-2.5A2.25 2.25 0 013 17.75v-2z" clipRule="evenodd" />
                      </svg>
                      {t('blog.posts.magentoEnterprise.content.securityCompliance.complianceStandards.title')}
                    </h4>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                      {tArray('blog.posts.magentoEnterprise.content.securityCompliance.complianceStandards.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.multiStoreInternational.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.multiStoreInternational.description')}
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('blog.posts.magentoEnterprise.content.multiStoreInternational.multiStoreManagement.title')}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">{t('blog.posts.magentoEnterprise.content.multiStoreInternational.multiStoreManagement.storeConfiguration.title')}</h5>
                      <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                        {tArray('blog.posts.magentoEnterprise.content.multiStoreInternational.multiStoreManagement.storeConfiguration.features').map((feature: string, index: number) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">{t('blog.posts.magentoEnterprise.content.multiStoreInternational.multiStoreManagement.internationalFeatures.title')}</h5>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                        {tArray('blog.posts.magentoEnterprise.content.multiStoreInternational.multiStoreManagement.internationalFeatures.features').map((feature: string, index: number) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.roiBusinessImpact.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.roiBusinessImpact.description')}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('blog.posts.magentoEnterprise.content.roiBusinessImpact.metrics.revenueGrowth.title')}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t('blog.posts.magentoEnterprise.content.roiBusinessImpact.metrics.revenueGrowth.description')}
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('blog.posts.magentoEnterprise.content.roiBusinessImpact.metrics.operationalEfficiency.title')}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t('blog.posts.magentoEnterprise.content.roiBusinessImpact.metrics.operationalEfficiency.description')}
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('blog.posts.magentoEnterprise.content.roiBusinessImpact.metrics.customerRetention.title')}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t('blog.posts.magentoEnterprise.content.roiBusinessImpact.metrics.customerRetention.description')}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.rightForYou.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.rightForYou.description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">{t('blog.posts.magentoEnterprise.content.rightForYou.perfectFor.title')}</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      {tArray('blog.posts.magentoEnterprise.content.rightForYou.perfectFor.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">{t('blog.posts.magentoEnterprise.content.rightForYou.notIdealFor.title')}</h4>
                    <ul className="text-red-700 dark:text-red-300 space-y-2">
                      {tArray('blog.posts.magentoEnterprise.content.rightForYou.notIdealFor.features').map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.implementationMigration.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.implementationMigration.description')}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('blog.posts.magentoEnterprise.content.implementationMigration.timeline.title')}</h4>
                  <div className="space-y-4">
                    {tArray('blog.posts.magentoEnterprise.content.implementationMigration.timeline.phases').map((phase: any, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-8 h-8 ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-green-600' : index === 2 ? 'bg-purple-600' : 'bg-orange-600'} rounded-full flex items-center justify-center text-white text-sm font-bold mr-4`}>
                          {phase.number}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{phase.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{phase.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.magentoEnterprise.content.conclusion.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.conclusion.description1')}
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {t('blog.posts.magentoEnterprise.content.conclusion.description2')}
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('blog.posts.magentoEnterprise.content.conclusion.cta.title')}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('blog.posts.magentoEnterprise.content.conclusion.cta.description')}
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    {t('blog.posts.magentoEnterprise.content.conclusion.cta.button')}
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
                {t('blog.posts.magentoEnterprise.content.relatedArticles.title')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="/blog/shopify-vs-woocommerce-comparison" className="group">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {t('blog.posts.magentoEnterprise.content.relatedArticles.shopifyWooCommerce.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t('blog.posts.magentoEnterprise.content.relatedArticles.shopifyWooCommerce.description')}
                    </p>
                    <div className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Read Article →
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/bigcommerce-salesforce-b2b-comparison" className="group">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {t('blog.posts.magentoEnterprise.content.relatedArticles.bigcommerceSalesforce.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t('blog.posts.magentoEnterprise.content.relatedArticles.bigcommerceSalesforce.description')}
                    </p>
                    <div className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
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
