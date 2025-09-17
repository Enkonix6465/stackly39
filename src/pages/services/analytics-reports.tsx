import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AnalyticsReports() {
  const { currentLanguage, t } = useLanguage();

  return (
    <>
      <Head>
        <title>Analytics & Reports - ShopHub | Advanced Business Intelligence</title>
        <meta name="description" content="Transform your business with advanced analytics and comprehensive reporting solutions. Real-time insights, data visualization, and actionable intelligence to drive growth." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/Service3.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Advanced Analytics & Reports
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  Transform your data into actionable insights with our comprehensive analytics platform
                </p>
                <div className="flex justify-center">
                  <Link href="#features" className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <span>Explore Analytics</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Section 1: Analytics Features */}
          <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Powerful Analytics Solutions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Unlock the full potential of your data with our comprehensive analytics and reporting platform
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-Time Dashboards",
                    description: "Monitor your business performance with live, interactive dashboards that update in real-time",
                    icon: "📊",
                    features: ["Live Data Updates", "Custom Widgets", "Mobile Responsive", "Export Capabilities"]
                  },
                  {
                    title: "Advanced Reporting",
                    description: "Generate comprehensive reports with automated scheduling and custom formatting options",
                    icon: "📈",
                    features: ["Automated Reports", "Custom Templates", "PDF Export", "Email Delivery"]
                  },
                  {
                    title: "Data Visualization",
                    description: "Transform complex data into clear, actionable insights with beautiful charts and graphs",
                    icon: "🎯",
                    features: ["Interactive Charts", "Multiple Chart Types", "Drill-Down Analysis", "Custom Styling"]
                  }
                ].map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 relative">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-3xl m-0.5">
                        <div className="p-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {feature.description}
                          </p>
                          
                          <ul className="space-y-2 mb-6">
                            {feature.features.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center block transform hover:-translate-y-1">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Analytics Capabilities */}
          <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comprehensive Analytics Capabilities
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From basic metrics to advanced predictive analytics, we provide everything you need to make data-driven decisions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "📊",
                    title: "Sales Analytics",
                    description: "Track revenue, conversion rates, and sales performance across all channels"
                  },
                  {
                    icon: "👥",
                    title: "Customer Insights",
                    description: "Understand customer behavior, preferences, and lifetime value"
                  },
                  {
                    icon: "🛒",
                    title: "E-commerce Metrics",
                    description: "Monitor cart abandonment, checkout flow, and product performance"
                  },
                  {
                    icon: "📱",
                    title: "Marketing Analytics",
                    description: "Measure campaign effectiveness and ROI across all marketing channels"
                  }
                ].map((capability, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Report Types */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Comprehensive Report Types
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Get detailed insights with our wide range of pre-built and customizable reports
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Financial Reports",
                    items: [
                      "Revenue Analysis",
                      "Profit & Loss Statements",
                      "Cash Flow Reports",
                      "Budget vs Actual Analysis"
                    ],
                    icon: "💰"
                  },
                  {
                    title: "Operational Reports",
                    items: [
                      "Inventory Management",
                      "Order Processing",
                      "Customer Service Metrics",
                      "Performance KPIs"
                    ],
                    icon: "⚙️"
                  },
                  {
                    title: "Marketing Reports",
                    items: [
                      "Campaign Performance",
                      "Lead Generation",
                      "Social Media Analytics",
                      "Email Marketing Metrics"
                    ],
                    icon: "📢"
                  },
                  {
                    title: "Customer Reports",
                    items: [
                      "Customer Segmentation",
                      "Retention Analysis",
                      "Satisfaction Surveys",
                      "Lifetime Value Tracking"
                    ],
                    icon: "👤"
                  }
                ].map((reportType, index) => (
                  <div key={index} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center mr-4 text-2xl">
                            {reportType.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{reportType.title}</h4>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {reportType.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Success Stories */}
          <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  See how businesses have transformed their operations with our analytics solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "CEO",
                    company: "TechStart Inc.",
                    content: "The analytics platform helped us increase our conversion rate by 40% and reduce customer acquisition costs by 25%. The real-time insights are game-changing.",
                    avatar: "/images/S68.jpg"
                  },
                  {
                    name: "Michael Chen",
                    role: "Marketing Director",
                    company: "RetailPlus",
                    content: "We can now track every customer journey and optimize our marketing spend. The ROI on our campaigns has improved by 60% since implementing the analytics solution.",
                    avatar: "/images/S69.jpg"
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Operations Manager",
                    company: "E-commerce Solutions",
                    content: "The predictive analytics feature has helped us optimize our inventory management, reducing waste by 30% and improving customer satisfaction significantly.",
                    avatar: "/images/S691.jpg"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="group">
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
                        Verified Customer
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Stats Section */}
          <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                  Analytics by the Numbers
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
                  Join thousands of businesses already using our analytics platform to drive growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    number: "10,000+",
                    label: "Active Users",
                    description: "Businesses trust our analytics platform for their data insights",
                    icon: "👥",
                    gradient: "from-indigo-500 to-indigo-600"
                  },
                  {
                    number: "99.9%",
                    label: "Uptime",
                    description: "Reliable analytics platform with enterprise-grade availability",
                    icon: "⚡",
                    gradient: "from-indigo-500 to-indigo-600"
                  },
                  {
                    number: "50M+",
                    label: "Data Points",
                    description: "Processed daily across all our analytics solutions",
                    icon: "📊",
                    gradient: "from-indigo-500 to-indigo-600"
                  },
                  {
                    number: "24/7",
                    label: "Support",
                    description: "Round-the-clock assistance for all your analytics needs",
                    icon: "🛠️",
                    gradient: "from-indigo-500 to-indigo-600"
                  }
                ].map((stat, index) => (
                  <div key={index} className="group relative">
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
                  </div>
                ))}
              </div>
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
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight whitespace-nowrap text-white">
                    Ready to Transform Your Data?
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Start making data-driven decisions today with our comprehensive analytics and reporting platform
                  </p>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="inline-block">
                    <Link href="/contact" className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <span className="relative z-10">Get Started Today</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/services" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      View All Services
                    </Link>
                    <Link href="/contact" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                      Schedule Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
