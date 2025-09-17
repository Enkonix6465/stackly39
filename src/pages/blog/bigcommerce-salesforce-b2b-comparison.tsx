import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BigCommerceVsSalesforce() {
  const { t, tArray } = useLanguage();
  
  return (
    <div>
      <Head>
        <title>{t('blog.posts.bigcommerceSalesforce.content.pageTitle')}</title>
        <meta name="description" content={t('blog.posts.bigcommerceSalesforce.content.pageDescription')} />
        <meta name="keywords" content={t('blog.posts.bigcommerceSalesforce.content.keywords')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <section 
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/b3.jpg')",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {t('blog.posts.bigcommerceSalesforce.content.hero.badge')}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t('blog.posts.bigcommerceSalesforce.content.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                {t('blog.posts.bigcommerceSalesforce.content.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="/images/T3.jpg" alt={t('blog.posts.bigcommerceSalesforce.content.hero.author')} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{t('blog.posts.bigcommerceSalesforce.content.hero.author')}</div>
                    <div className="text-white/80 text-sm">{t('blog.posts.bigcommerceSalesforce.content.hero.authorRole')}</div>
                  </div>
                </div>
                <div className="text-white/60">•</div>
                <div className="text-white/90">{t('blog.posts.bigcommerceSalesforce.content.hero.date')}</div>
                <div className="text-white/60">•</div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-white/30">{t('blog.posts.bigcommerceSalesforce.content.hero.readTime')}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {tArray('blog.posts.bigcommerceSalesforce.content.hero.tags').map((tag: string) => (
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
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
                  <p className="text-lg font-medium text-orange-900 dark:text-orange-100 m-0">
                    <strong>{t('blog.posts.bigcommerceSalesforce.content.b2bFocus.title')}</strong> {t('blog.posts.bigcommerceSalesforce.content.b2bFocus.description')}
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.posts.bigcommerceSalesforce.content.mainContent.showdownTitle')}
                </h2>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.mainContent.showdownDescription')}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.mainContent.requirementsTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.mainContent.requirementsDescription')}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      {t('blog.posts.bigcommerceSalesforce.content.b2bVsB2cTitle')}
                    </h4>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                      {tArray('blog.posts.bigcommerceSalesforce.content.b2bVsB2cItems').map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('blog.posts.bigcommerceSalesforce.content.keyB2bFeaturesTitle')}
                    </h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      {tArray('blog.posts.bigcommerceSalesforce.content.keyB2bFeaturesItems').map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.bigcommerceSection.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.bigcommerceSection.description')}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">{t('blog.posts.bigcommerceSalesforce.content.bigcommerceNativeTitle')}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.bigcommerceCustomerManagement')}</h5>
                        <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.bigcommerceCustomerManagementItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.bigcommercePricingDiscounts')}</h5>
                        <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.bigcommercePricingDiscountsItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">{t('blog.posts.bigcommerceSalesforce.content.bigcommerceOrderManagement')}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.bigcommercePurchaseOrders')}</h5>
                        <ul className="text-green-600 dark:text-green-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.bigcommercePurchaseOrdersItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.bigcommercePaymentTerms')}</h5>
                        <ul className="text-green-600 dark:text-green-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.bigcommercePaymentTermsItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.salesforceSection.title')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.salesforceSection.description')}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">{t('blog.posts.bigcommerceSalesforce.content.salesforceIntegrationTitle')}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.salesforceCrmIntegration')}</h5>
                        <ul className="text-purple-600 dark:text-purple-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.salesforceCrmIntegrationItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.salesforceMarketingTools')}</h5>
                        <ul className="text-purple-600 dark:text-purple-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.salesforceMarketingToolsItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">{t('blog.posts.bigcommerceSalesforce.content.salesforceEnterpriseFeatures')}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-red-700 dark:text-red-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.salesforceScalability')}</h5>
                        <ul className="text-red-600 dark:text-red-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.salesforceScalabilityItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 dark:text-red-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.salesforceAdvancedB2b')}</h5>
                        <ul className="text-red-600 dark:text-red-400 text-sm space-y-1">
                          {tArray('blog.posts.bigcommerceSalesforce.content.salesforceAdvancedB2bItems').map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.comparisonTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.comparisonDescription')}
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.featureCategory')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.bigcommerce')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.salesforce')}</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.winner')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.easeOfUse')}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-green-600">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.bigcommerce')}</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.b2bFeatures')}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-blue-600">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.salesforce')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.integrationCapabilities')}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-blue-600">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.salesforce')}</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.pricing')}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-green-600">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.bigcommerce')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.scalability')}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-blue-600">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.salesforce')}</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.timeToMarket')}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-green-600">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.bigcommerce')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.pricingTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.pricingDescription')}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4 text-center">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.bigcommerce')}</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommercePrice')}</div>
                        <div className="text-sm text-green-600 dark:text-green-400">{t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommercePlan')}</div>
                      </div>
                      <div className="border-t border-green-200 dark:border-green-700 pt-4">
                        <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommerceAdditionalCosts')}</h5>
                        <ul className="text-green-600 dark:text-green-400 text-sm space-y-1">
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommerceImplementation')}</li>
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommerceCustomDev')}</li>
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommerceThirdParty')}</li>
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.bigcommerceMaintenance')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 text-center">{t('blog.posts.bigcommerceSalesforce.content.comparisonTable.salesforce')}</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforcePrice')}</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">{t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforcePlan')}</div>
                      </div>
                      <div className="border-t border-blue-200 dark:border-blue-700 pt-4">
                        <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforceAdditionalCosts')}</h5>
                        <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforceImplementation')}</li>
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforceCustomDev')}</li>
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforceLicenses')}</li>
                          <li>• {t('blog.posts.bigcommerceSalesforce.content.pricingDetails.salesforceMaintenance')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.implementationTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.implementationDescription')}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.title')}</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-medium text-green-600 dark:text-green-400 mb-3">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.bigcommerceTimeline')}</h5>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">1</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.bigcommerceWeek1')}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">2</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.bigcommerceWeek2')}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">3</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.bigcommerceWeek3')}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">4</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.bigcommerceWeek4')}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-3">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.salesforceTimeline')}</h5>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">1</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.salesforceMonth1')}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">2</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.salesforceMonth2')}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">3</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.salesforceMonth3')}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">4</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.posts.bigcommerceSalesforce.content.implementationTimeline.salesforceMonth4')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.whenBigcommerceTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.whenBigcommerceDescription')}
                </p>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-8">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">{t('blog.posts.bigcommerceSalesforce.content.perfectForBigcommerce')}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.bigcommerceBusinessProfile')}</h5>
                      <ul className="text-green-600 dark:text-green-400 text-sm space-y-1">
                        {tArray('blog.posts.bigcommerceSalesforce.content.bigcommerceBusinessProfileItems').map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.bigcommerceTechnicalRequirements')}</h5>
                      <ul className="text-green-600 dark:text-green-400 text-sm space-y-1">
                        {tArray('blog.posts.bigcommerceSalesforce.content.bigcommerceTechnicalRequirementsItems').map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.whenSalesforceTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.whenSalesforceDescription')}
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
                  <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">{t('blog.posts.bigcommerceSalesforce.content.perfectForSalesforce')}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.salesforceBusinessProfile')}</h5>
                      <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
                        {tArray('blog.posts.bigcommerceSalesforce.content.salesforceBusinessProfileItems').map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-2">{t('blog.posts.bigcommerceSalesforce.content.salesforceTechnicalRequirements')}</h5>
                      <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
                        {tArray('blog.posts.bigcommerceSalesforce.content.salesforceTechnicalRequirementsItems').map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.integrationTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.integrationDescription')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">{t('blog.posts.bigcommerceSalesforce.content.bigcommerceIntegrations')}</h4>
                    <ul className="text-orange-700 dark:text-orange-300 space-y-2">
                      {tArray('blog.posts.bigcommerceSalesforce.content.bigcommerceIntegrationsItems').map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">{t('blog.posts.bigcommerceSalesforce.content.salesforceIntegrations')}</h4>
                    <ul className="text-purple-700 dark:text-purple-300 space-y-2">
                      {tArray('blog.posts.bigcommerceSalesforce.content.salesforceIntegrationsItems').map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.posts.bigcommerceSalesforce.content.finalVerdictTitle')}
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.finalVerdictDescription')}
                </p>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('blog.posts.bigcommerceSalesforce.content.decisionFramework')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{t('blog.posts.bigcommerceSalesforce.content.chooseBigcommerceIf')}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">{t('blog.posts.bigcommerceSalesforce.content.chooseBigcommerceDescription')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{t('blog.posts.bigcommerceSalesforce.content.chooseSalesforceIf')}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">{t('blog.posts.bigcommerceSalesforce.content.chooseSalesforceDescription')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {t('blog.posts.bigcommerceSalesforce.content.finalConclusion')}
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('blog.posts.bigcommerceSalesforce.content.needHelpTitle')}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('blog.posts.bigcommerceSalesforce.content.needHelpDescription')}
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    {t('blog.posts.bigcommerceSalesforce.content.getConsultationButton')}
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
                {t('blog.posts.bigcommerceSalesforce.content.relatedArticlesTitle')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="/blog/shopify-vs-woocommerce-comparison" className="group">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {t('blog.posts.bigcommerceSalesforce.content.relatedArticle1.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t('blog.posts.bigcommerceSalesforce.content.relatedArticle1.description')}
                    </p>
                    <div className="text-orange-600 dark:text-orange-400 font-medium group-hover:underline">
                      {t('blog.posts.bigcommerceSalesforce.content.relatedArticle1.readMore')}
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/magento-enterprise-scaling-business" className="group">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {t('blog.posts.bigcommerceSalesforce.content.relatedArticle2.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t('blog.posts.bigcommerceSalesforce.content.relatedArticle2.description')}
                    </p>
                    <div className="text-orange-600 dark:text-orange-400 font-medium group-hover:underline">
                      {t('blog.posts.bigcommerceSalesforce.content.relatedArticle2.readMore')}
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
