# Lumina Eye Care — Antigravity Experience

![Lumina Eye Care Banner](/public/images/v2_hero_new.png)

A state-of-the-art, "Antigravity" themed web experience for **Lumina Eye Care**. This project prioritizes visual excellence, spatial UI design, and high-performance modern web standards.

## ✨ Features

- **Spatial UI Design**: Implements a "weightless" feel using glassmorphism, depth-based shadows, and smooth transitions.
- **FocusReveal Animations**: Custom scroll animations that simulate the eye adjusting its focus, creating a thematic engagement experience.
- **Bento-Style Services**: A refined grid showcasing clinical services with premium 3D-styled icons and interactive "glow" states.
- **High-Performance Imagery**: All high-resolution branded images have been optimized and implemented with a `v2` cache-busting strategy for instant updates.
- **SEO Ready**: Full integration of `Schema.org` (LocalBusiness) and semantic HTML for maximum search visibility.
- **Modern Tech Stack**: Built on the absolute "cutting-edge" of the React ecosystem.

## 🛠️ Tech Stack

- **Core**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using the new CSS-first configuration)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend/Mail**: [Nodemailer](https://nodemailer.com/) (for contact submissions)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/antigravity-website.git
   cd antigravity-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root for Nodemailer (if using the contact form):
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is optimized for deployment on the [Vercel Platform](https://vercel.com/new).

### Deploying via CLI

```bash
npm install -g vercel
vercel
```

### Manual Deployment
1. Push your code to a GitHub repository.
2. Import the project into the [Vercel Dashboard](https://vercel.com/dashboard).
3. Vercel will automatically detect the Next.js framework and deploy using `npm run build`.

## 📁 Project Structure

```text
├── public/              # Static assets (Optimized v2 images)
├── src/
│   ├── app/             # Next.js App Router (Layouts & Pages)
│   ├── components/      # UI Components (Hero, Services, etc.)
│   ├── config/          # Site configuration & metadata
│   ├── lib/             # Utility functions
│   └── styles/          # Global CSS & Tailwind setup
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Project manifests & dependencies
```

## 📄 License

This project is licensed under the MIT License.

---

Built with precision by the Lumina Eye Care team.
