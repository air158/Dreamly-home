'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('navbar');
  const searchParams = useSearchParams();

  // Check if hideNav parameter is present in URL
  const hideNav = searchParams.get('hideNav') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Return null if hideNav is true
  if (hideNav) {
    return null;
  }

  const navItems = [
    { key: 'products', label: t('products') },
    { key: 'pricing', label: t('pricing') },
    { key: 'docs', label: t('docs') },
    { key: 'blog', label: t('blog') }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">🌖</span>
            <span className="text-2xl font-bold gradient-text">Dreamly</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={`#${item.key}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <motion.button
              className="hidden sm:block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {t('signIn')}
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-semibold shadow-lg shadow-primary-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('getStarted')}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
