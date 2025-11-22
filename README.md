# Portfolio - Jair Aya

Personal portfolio website built with Astro, TypeScript, and Tailwind CSS. Features a clean, responsive design with internationalization support (English/Spanish).

## ✨ Features

- 🌐 Internationalization (i18n) - English and Spanish
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast performance with Astro
- 🔍 SEO optimized
- ♿ Accessibility compliant
- 🎯 Type-safe with TypeScript
- 🎭 Smooth page transitions
- 📱 Mobile-first approach

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── projects/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── LanguagePicker.astro
│   │   ├── ProjectCard.astro
│   │   ├── Sidebar.astro
│   │   └── Social.astro
│   ├── constants/
│   │   ├── profile.ts
│   │   └── social.ts
│   ├── data/
│   │   ├── cv.ts
│   │   └── projects.ts
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── cv.astro
│   │   └── es/
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── calculateTotalTime.ts
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Flowbite](https://flowbite.com)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Language**: TypeScript

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Code Quality

This project follows clean code principles and best practices:

- **Type Safety**: Full TypeScript support with strict mode enabled
- **Separation of Concerns**: Clear separation between components, data, and utilities
- **Reusability**: Modular components and shared constants
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and minimal JavaScript
- **Maintainability**: Consistent code style and clear file structure

## 🌐 Internationalization

The site supports multiple languages through a custom i18n implementation:

- English (default)
- Spanish

Language switching is available through the language picker component.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jair Aya**
- GitHub: [@jairayafranco](https://github.com/jairayafranco)
- LinkedIn: [jairaya](https://www.linkedin.com/in/jairaya/)
