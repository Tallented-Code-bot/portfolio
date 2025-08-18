# Portfolio Website

A modern, responsive portfolio website built with SvelteKit to showcase my projects, skills, and experience as a full-stack developer.

## 🚀 Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Detailed project pages with comprehensive information
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **Fast Performance**: Optimized loading times with lazy loading and code splitting
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Built With

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **CSS3** - Modern styling with Grid, Flexbox, and Custom Properties
- **[pnpm](https://pnpm.io/)** - Package manager

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── lib/
│   │   └── assets/
│   │       └── favicon.svg
│   ├── routes/
│   │   ├── projects/
│   │   │   ├── ecommerce/
│   │   │   ├── taskapp/
│   │   │   ├── weather/
│   │   │   └── portfolio/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.html
│   └── app.d.ts
├── static/
│   ├── projects/
│   │   ├── ecommerce.jpg
│   │   ├── taskapp.jpg
│   │   ├── weather.jpg
│   │   └── portfolio.jpg
│   └── resume.pdf
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Homepage** (`src/routes/+page.svelte`):
   - Update name, title, and bio in the intro section
   - Modify contact information
   - Add your actual project data

2. **Layout** (`src/routes/+layout.svelte`):
   - Update the name in the navigation brand

3. **Project Pages** (`src/routes/projects/*/+page.svelte`):
   - Replace sample project information with your actual projects
   - Update GitHub and demo links

### Assets

1. **Project Images**: Replace placeholder images in `static/projects/` with actual project screenshots
2. **Resume**: Replace `static/resume.pdf` with your actual resume
3. **Favicon**: Update `src/lib/assets/favicon.svg` with your personal branding

### Styling

- Colors and themes can be customized by modifying CSS custom properties
- Typography and spacing adjustments can be made in the component styles
- The design system is consistent across all components for easy maintenance

## 📝 Content Management

### Adding New Projects

1. Create a new directory in `src/routes/projects/your-project-name/`
2. Add a `+page.svelte` file with your project details
3. Add project data to the `projects` array in `src/routes/+page.svelte`
4. Add a project screenshot to `static/projects/`

### Updating Skills

Modify the `skills` array in `src/routes/+page.svelte` to reflect your current skillset.

## 🏗️ Building for Production

1. Create a production build:
   ```bash
   pnpm build
   # or
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `pnpm build`
2. Deploy the `build` directory to Netlify

### Other Platforms
The built static files in the `build` directory can be deployed to any static hosting service.

## 🧰 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte check
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Code Quality

This project includes:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Svelte Check** for component validation

## 🔧 Configuration

### TypeScript
TypeScript configuration is in `tsconfig.json`. The project uses strict mode for better type safety.

### Vite
Vite configuration is in `vite.config.ts`. It includes SvelteKit plugin and optimization settings.

### ESLint & Prettier
Code quality tools are configured in `eslint.config.js` and `.prettierrc`.

## 📱 Mobile Responsiveness

The portfolio is designed with a mobile-first approach:
- Responsive navigation with mobile menu
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements
- Optimized images and performance for mobile

## ♿ Accessibility

Features implemented for accessibility:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels for interactive elements
- High contrast colors
- Screen reader compatibility

## 🔗 Links

- **Live Demo**: [https://your-portfolio.com](https://your-portfolio.com)
- **GitHub Repository**: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For any questions or feedback, feel free to reach out:
- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

Made with ❤️ using SvelteKit