# 🌖 Dreamly - Official Landing Page

A beautiful, modern landing page for DreamlyLabs built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Beautiful Design**: Claude-inspired elegant and modern UI
- 🌍 **Internationalization**: Full i18n support with English and Chinese (auto-detects browser language)
- ⚡ **Vibe Coding**: Showcase the world's most convenient mobile and web coding platform
- 🔌 **LLM API Platform**: Highlight the most stable and diverse LLM API service
- 🏪 **AI Marketplace**: Promote the AI application marketplace for creators
- 🌙 **Dark Mode**: Full dark mode support
- 📱 **Responsive**: Optimized for all devices
- ✨ **Smooth Animations**: Powered by Framer Motion
- 🔄 **Language Switcher**: Easy language switching in the navigation bar

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **next-intl** - Internationalization (i18n)
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React 18** - UI library

## Project Structure

```
dreamly-home/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── Showcase.tsx       # Stats & testimonials
│   ├── Footer.tsx         # Footer
│   └── LanguageSwitcher.tsx  # Language switcher
├── messages/
│   ├── en.json            # English translations
│   └── zh.json            # Chinese translations
├── i18n.ts                # i18n configuration
├── middleware.ts          # Next.js middleware for i18n
├── public/                # Static assets
└── package.json           # Dependencies
```

## Internationalization

The site automatically detects the user's browser language and displays content in English or Chinese.

### Supported Languages

- 🇺🇸 English (`en`)
- 🇨🇳 Chinese (`zh`)

### Language URLs

- English: `http://localhost:3001/en` or `http://localhost:3001/`
- Chinese: `http://localhost:3001/zh`

### Adding New Languages

1. Create a new translation file in `messages/` (e.g., `messages/ja.json`)
2. Add the locale code to `i18n.ts`:
   ```typescript
   export const locales = ['en', 'zh', 'ja'] as const;
   ```
3. Add the language to the switcher in `components/LanguageSwitcher.tsx`

### Editing Translations

All translations are in JSON files under `messages/`:
- `messages/en.json` - English translations
- `messages/zh.json` - Chinese translations

## Customization

- Update colors in `tailwind.config.ts`
- Modify translations in `messages/*.json`
- Add your own images to `public/` folder
- Customize animations in component files

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or deploy to any platform that supports Next.js.

## License

© 2025 DreamlyLabs. All rights reserved.
