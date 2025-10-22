import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// 支持的语言
export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // 验证传入的 locale 参数
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
