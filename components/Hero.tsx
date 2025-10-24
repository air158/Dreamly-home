'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  // Helper function to handle navigation in embedded mode
  const handleNavigation = (url: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const isEmbedded = urlParams.get('hideNav') === 'true';

    if (isEmbedded) {
      // If embedded, navigate parent window
      window.top!.location.href = url;
    } else {
      // Normal navigation
      window.location.href = url;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-6xl sm:text-7xl animate-float">🌖</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-text">{t('title')}</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t('description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 114, 32, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('https://www.dreamly.space/console/chat/0')}
            >
              {t('startCoding')}
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('https://www.dreamly.space/pricing')}
            >
              {t('explorePlatform')}
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: '📱', text: t('features.mobileWeb') },
              { icon: '🚀', text: t('features.lightningFast') },
              { icon: '🌍', text: t('features.anywhere') }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 px-6 py-4 glass-effect rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ y: -5, borderColor: 'rgba(240, 114, 32, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
