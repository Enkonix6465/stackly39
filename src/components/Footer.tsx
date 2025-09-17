import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand & Social */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <Link href="/home1" className="flex items-center">
                <Image
                  src="/logo-stackly.png"
                  alt="E-Commerce Logo"
                  className="w-28 h-8"
                  height={32}
                  width={112}
                />
              </Link>
            </div>
            <h2 className="text-xl font-bold text-indigo-400 mb-2">{t('footer.brand.title')}</h2>
            <p className="mb-4 text-white/80">
              {t('footer.brand.description')}
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/" className="bg-white hover:bg-indigo-500 text-black hover:text-white p-2 rounded-full transition">
                {/* LinkedIn */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.885v1.233h.041c.402-.762 1.384-1.566 2.849-1.566 3.046 0 3.607 2.006 3.607 4.617v4.716z"/>
                </svg>
              </a>
              <a href="https://x.com/" className="bg-white hover:bg-indigo-500 text-black hover:text-white p-2 rounded-full transition">
                {/* Twitter */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/" className="bg-white hover:bg-indigo-500 text-black hover:text-white p-2 rounded-full transition">
                {/* Facebook */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.592 1.323-1.324v-21.35c0-.733-.593-1.325-1.324-1.325z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/" className="bg-white hover:bg-indigo-500 text-black hover:text-white p-2 rounded-full transition">
                {/* Instagram */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07z"/>
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:w-1/6">
            <h3 className="text-lg font-bold text-indigo-400 mb-3">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/home1" className="hover:text-indigo-400 transition-colors">{t('footer.quickLinks.home')}</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">{t('footer.quickLinks.about')}</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">{t('footer.quickLinks.services')}</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">{t('footer.quickLinks.blog')}</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">{t('footer.quickLinks.contact')}</Link></li>
            </ul>
          </div>
          {/* Blog & Resources */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold text-indigo-400 mb-3">{t('footer.blogResources.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">{t('footer.blogResources.allArticles')}</Link></li>
              <li><Link href="/blog/shopify-vs-woocommerce-comparison" className="hover:text-indigo-400 transition-colors">{t('footer.blogResources.shopifyWooCommerce')}</Link></li>
              <li><Link href="/blog/magento-enterprise-scaling-business" className="hover:text-indigo-400 transition-colors">{t('footer.blogResources.magentoEnterprise')}</Link></li>
              <li><Link href="/blog/bigcommerce-salesforce-b2b-comparison" className="hover:text-indigo-400 transition-colors">{t('footer.blogResources.bigcommerceSalesforce')}</Link></li>
            </ul>
          </div>
          {/* Our Services */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold text-indigo-400 mb-3">{t('footer.ourServices.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/services/electronics-gadgets" className="hover:text-indigo-400 transition-colors">{t('footer.ourServices.electronics')}</Link></li>
              <li><Link href="/services/fashion-apparel" className="hover:text-indigo-400 transition-colors">{t('footer.ourServices.fashion')}</Link></li>
              <li><Link href="/services/home-living" className="hover:text-indigo-400 transition-colors">{t('footer.ourServices.home')}</Link></li>
              <li><Link href="/services/sports-fitness" className="hover:text-indigo-400 transition-colors">{t('footer.ourServices.sports')}</Link></li>
              <li><Link href="/services/beauty-personal-care" className="hover:text-indigo-400 transition-colors">{t('footer.ourServices.beauty')}</Link></li>
              <li><Link href="/services/books-media" className="hover:text-indigo-400 transition-colors">{t('footer.ourServices.books')}</Link></li>
            </ul>
          </div>
          {/* Get In Touch */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold text-indigo-400 mb-3">{t('footer.getInTouch.title')}</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>{t('footer.getInTouch.phone')}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>{t('footer.getInTouch.email')}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{t('footer.getInTouch.location')}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                <span>{t('footer.getInTouch.hours')}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-white/60">
          <div>{t('footer.bottomBar.copyright')}</div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-indigo-400 transition-colors">{t('footer.bottomBar.privacyPolicy')}</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">{t('footer.bottomBar.termsOfService')}</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">{t('footer.bottomBar.cookiePolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}