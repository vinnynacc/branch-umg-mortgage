# Branch UMG Mortgage

A modern, responsive landing page for Branch UMG Mortgage, built with React, TypeScript, Tailwind CSS, and Motion animations.

## Features

- 🏠 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Motion Animations** - Engaging animations using Motion (Framer Motion)
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- 🔧 **TypeScript** - Type-safe code for better development experience

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4.0
- **Animations:** Motion/React
- **UI Components:** Radix UI + Custom Components
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/branch-umg-mortgage.git
cd branch-umg-mortgage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:3000`

## Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist` folder, ready to be deployed.

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Deployment to GoDaddy

### Option 1: Using cPanel File Manager (Recommended for beginners)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Log in to your GoDaddy cPanel:**
   - Go to your GoDaddy account
   - Navigate to your hosting control panel (cPanel)

3. **Upload files:**
   - Open File Manager in cPanel
   - Navigate to `public_html` (or your domain's root directory)
   - Delete any existing files in the directory
   - Upload all files from your local `dist` folder
   - Make sure the files are in the root, not in a subfolder

4. **Configure .htaccess for React Router** (if using client-side routing):
   - Create a new file named `.htaccess` in the `public_html` directory
   - Add the following content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option 2: Using FTP

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Connect via FTP:**
   - Use an FTP client like FileZilla
   - Connect using your GoDaddy FTP credentials
   - Navigate to `public_html`

3. **Upload files:**
   - Upload all files from the `dist` folder to `public_html`
   - Ensure all files maintain their structure

4. **Add .htaccess file** (see Option 1, step 4)

### Option 3: Using Git Deployment (Advanced)

If your GoDaddy hosting supports SSH/Git:

1. SSH into your server
2. Clone your repository
3. Run `npm install` and `npm run build`
4. Move files from `dist` to `public_html`

## Project Structure

```
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── figma/          # Figma-specific components
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Process.tsx     # Process section
│   ├── Testimonials.tsx # Testimonials section
│   ├── CTASection.tsx  # Call-to-action section
│   ├── Footer.tsx      # Footer component
│   └── Navigation.tsx  # Navigation component
├── styles/             # Global styles
│   └── globals.css     # Tailwind & custom CSS
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.html          # HTML template

```

## Customization

### Colors

The brand color (#0058A9) is defined in `styles/globals.css`. To change colors, modify the custom color variables in the `@theme` section.

### Content

Edit the component files in the `/components` directory to update:
- Hero text and CTAs
- Service offerings
- Process steps
- Testimonials
- Contact information

### Logo

Replace the logo by updating the image source in `components/Navigation.tsx`.

## Support

For issues or questions:
- Create an issue in the GitHub repository
- Contact: info@umgmortgage.com

## License

© 2025 Branch UMG Mortgage. All rights reserved.

---

**Note:** This is a landing page template. Update all placeholder content, contact information, and legal disclaimers before going live. Ensure compliance with mortgage industry regulations and NMLS requirements.
