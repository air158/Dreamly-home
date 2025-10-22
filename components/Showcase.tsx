'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('showcase');

  const stats = [
    { value: '100K+', labelKey: 'developers' },
    { value: '50+', labelKey: 'models' },
    { value: '99.9%', labelKey: 'uptime' },
    { value: '1M+', labelKey: 'apiCalls' }
  ];

  const useCases = [
    {
      titleKey: 'prototyping',
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      titleKey: 'collaboration',
      icon: '💰',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {t(`stats.${stat.labelKey}`)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials or Use Cases */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('lovedBy')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('lovedBySubtitle')}
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="p-8 glass-effect rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring' }}
              >
                {useCase.icon}
              </motion.div>
              <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                {t(`useCases.${useCase.titleKey}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(`useCases.${useCase.titleKey}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center p-12 glass-effect rounded-3xl border border-primary-200/50 dark:border-primary-800/50"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 114, 32, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.button')}
          </motion.button>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            {t('cta.notice')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
