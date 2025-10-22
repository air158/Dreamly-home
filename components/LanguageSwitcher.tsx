'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    // 构建新的路径
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${currentPath}`;

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 glass-effect rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg z-50 overflow-hidden"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  locale === lang.code
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {locale === lang.code && (
                  <svg
                    className="ml-auto w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
