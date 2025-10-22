'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

interface FeatureData {
  icon: string;
  gradient: string;
}

const featuresData: FeatureData[] = [
  {
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🔌',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🏪',
    gradient: 'from-orange-500 to-red-500'
  }
];

function FeatureCard({ feature, index, featureKey }: { feature: FeatureData, index: number, featureKey: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations(`features.${featureKey}`);
  const tCommon = useTranslations('features');

  // Different highlight keys for each feature
  const highlightsConfig = {
    vibeCoding: [
      { key: 'mobile', icon: '📱' },
      { key: 'interface', icon: '🎨' },
      { key: 'ai', icon: '🤖' },
      { key: 'sync', icon: '☁️' }
    ],
    llmApi: [
      { key: 'uptime', icon: '🛡️' },
      { key: 'cdn', icon: '🌐' },
      { key: 'models', icon: '⚙️' },
      { key: 'pricing', icon: '💰' }
    ],
    marketplace: [
      { key: 'monetization', icon: '💸' },
      { key: 'analytics', icon: '📊' },
      { key: 'featured', icon: '🌟' },
      { key: 'support', icon: '🤝' }
    ]
  };

  const highlights = highlightsConfig[featureKey as keyof typeof highlightsConfig] || [];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative h-full p-8 glass-effect rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        {/* Icon */}
        <motion.div
          className="text-6xl mb-6"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {feature.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {t('title')}
        </h3>

        {/* Subtitle */}
        <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
          {t('subtitle')}
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {t('description')}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.2 + idx * 0.1 }}
            >
              <span>{highlight.icon}</span>
              <span className="font-medium">{t(`highlights.${highlight.key}`)}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className={`w-full py-3 px-6 bg-gradient-to-r ${feature.gradient} text-white rounded-xl font-semibold shadow-lg opacity-90 hover:opacity-100 transition-opacity`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {tCommon('learnMore')}
        </motion.button>

        {/* Decorative Corner */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('features');

  const featureKeys = ['vibeCoding', 'llmApi', 'marketplace'];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('sectionTitle')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('sectionSubtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} featureKey={featureKeys[index]} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('trustedBy')}
          </p>
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 114, 32, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getStartedFree')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
