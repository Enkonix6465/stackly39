import SimpleHeader from "@/components/SimpleHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{t('welcome.pageTitle')}</title>
        <meta name="description" content={t('welcome.pageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleHeader />
      <>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-indigo-900 dark:via-indigo-800 dark:to-indigo-700">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Image
                    src="/logo-stackly.png"
                    alt={t('welcome.logoAlt')}
                    className="w-28 h-auto mb-4"
                    height={70}
                    width={112}
                  />
                  <h1 className="text-4xl lg:text-5xl font-bold text-indigo-900 dark:text-indigo-100 leading-tight">
                    {t('welcome.title')}
                  </h1>
                  <p className="text-lg text-indigo-700 dark:text-indigo-200 leading-relaxed">
                    {t('welcome.description')}
                  </p>
                </div>
                
                <div className="flex justify-start">
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => (window.location.href = "/auth")}
                  >
                    {t('welcome.loginButton')}
                  </button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                  <div className="relative bg-white dark:bg-indigo-900 rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/Welcome.jpg"
                      alt="Welcome to our platform"
                      className="rounded-xl shadow-md"
                      height={350}
                      width={400}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
