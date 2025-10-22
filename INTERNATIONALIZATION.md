# 🌍 国际化指南 / Internationalization Guide

## 概述 / Overview

Dreamly 官网支持中英文双语，并能自动检测用户的浏览器语言。
The Dreamly website supports both English and Chinese, with automatic browser language detection.

## 语言切换 / Language Switching

### 自动检测 / Auto Detection

网站会自动检测用户的浏览器语言偏好：
- 如果浏览器语言是中文，自动显示中文版本
- 其他语言默认显示英文版本

The website automatically detects the user's browser language preference:
- If the browser language is Chinese, it shows the Chinese version
- Other languages default to the English version

### 手动切换 / Manual Switching

用户可以通过导航栏右上角的语言切换器手动切换语言。
Users can manually switch languages using the language switcher in the top-right corner of the navigation bar.

## URL 结构 / URL Structure

- 英文 English: `https://yoursite.com/` 或 or `https://yoursite.com/en`
- 中文 Chinese: `https://yoursite.com/zh`

## 翻译文件 / Translation Files

所有翻译都存储在 `messages/` 目录下：
All translations are stored in the `messages/` directory:

```
messages/
├── en.json  # 英文翻译 / English translations
└── zh.json  # 中文翻译 / Chinese translations
```

### 文件结构 / File Structure

翻译文件采用嵌套的 JSON 结构：
Translation files use nested JSON structure:

```json
{
  "navbar": {
    "products": "Products",
    "getStarted": "Get Started"
  },
  "hero": {
    "title": "Dreamly",
    "subtitle": "Build Dreams with AI"
  }
}
```

## 在组件中使用翻译 / Using Translations in Components

```typescript
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('navbar');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## 添加新语言 / Adding New Languages

### 1. 创建翻译文件 / Create Translation File

在 `messages/` 目录下创建新的语言文件，例如日语：
Create a new language file in the `messages/` directory, e.g., for Japanese:

```bash
touch messages/ja.json
```

### 2. 更新配置 / Update Configuration

编辑 `i18n.ts`：
Edit `i18n.ts`:

```typescript
export const locales = ['en', 'zh', 'ja'] as const;
```

### 3. 添加到语言切换器 / Add to Language Switcher

编辑 `components/LanguageSwitcher.tsx`：
Edit `components/LanguageSwitcher.tsx`:

```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
];
```

## 最佳实践 / Best Practices

### 1. 保持一致性 / Maintain Consistency

确保所有语言文件具有相同的键结构。
Ensure all language files have the same key structure.

### 2. 使用有意义的键名 / Use Meaningful Key Names

使用描述性的键名，而不是通用的名称：
Use descriptive key names instead of generic ones:

```json
// ✅ 好 Good
"hero.startCoding": "Start Coding Now"

// ❌ 不好 Bad
"button1": "Start Coding Now"
```

### 3. 嵌套组织 / Nested Organization

按组件或功能区域组织翻译：
Organize translations by component or feature area:

```json
{
  "navbar": { ... },
  "hero": { ... },
  "features": { ... }
}
```

### 4. 保持简洁 / Keep It Simple

避免在翻译中嵌入 HTML 或复杂逻辑。
Avoid embedding HTML or complex logic in translations.

## 测试 / Testing

### 本地测试 / Local Testing

```bash
# 启动开发服务器 / Start dev server
npm run dev

# 访问不同语言版本 / Visit different language versions
# 英文 English: http://localhost:3001/en
# 中文 Chinese: http://localhost:3001/zh
```

### 切换浏览器语言 / Change Browser Language

在浏览器设置中更改语言偏好，然后访问首页测试自动检测功能。
Change language preferences in your browser settings, then visit the homepage to test auto-detection.

## 故障排查 / Troubleshooting

### 翻译未显示 / Translations Not Showing

1. 检查翻译文件格式是否正确（有效的 JSON）
   Check if translation files are properly formatted (valid JSON)

2. 确认键名在翻译文件中存在
   Confirm key names exist in translation files

3. 重启开发服务器
   Restart the development server

### 语言切换不工作 / Language Switching Not Working

1. 检查 middleware.ts 配置
   Check middleware.ts configuration

2. 清除浏览器缓存
   Clear browser cache

3. 检查浏览器控制台是否有错误
   Check browser console for errors

## 参考资源 / Resources

- [next-intl 文档 Documentation](https://next-intl-docs.vercel.app/)
- [Next.js 国际化 Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

---

如有问题，请参考文档或提交 Issue。
For questions, please refer to the documentation or submit an issue.
