'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const footerSections = [
    {
      titleKey: 'product',
      links: ['vibeCoding', 'llmApi', 'marketplace', 'pricing', 'enterprise']
    },
    {
      titleKey: 'resources',
      links: ['documentation', 'apiReference', 'tutorials', 'blog', 'community']
    },
    {
      titleKey: 'company',
      links: ['about', 'careers', 'pressKit', 'contact', 'partners']
    },
    {
      titleKey: 'legal',
      links: ['privacy', 'terms', 'cookies', 'security']
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">🌖</span>
              <span className="text-2xl font-bold gradient-text">Dreamly</span>
            </motion.div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'Discord'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  aria-label={social}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t(`${section.titleKey}.title`)}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {t(`${section.titleKey}.${link}`)}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {t('copyright')}
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <motion.a href="#" whileHover={{ color: '#f07220' }}>
                {t('links.privacy')}
              </motion.a>
              <motion.a href="#" whileHover={{ color: '#f07220' }}>
                {t('links.terms')}
              </motion.a>
              <motion.a href="#" whileHover={{ color: '#f07220' }}>
                {t('links.cookies')}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
