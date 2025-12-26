# Shichifuku S.L. Corporate Website

A production-ready, multilingual corporate website for Shichifuku S.L., a Spain-based company operating in international trade (B2B), real estate, and football/sports projects.

## 🌟 Features

- **Multilingual Support**: Full support for Japanese (ja) and Spanish (es) with automatic routing
- **Premium Design**: Apple-inspired white/black design with subtle gradients and glassmorphism
- **Headless CMS**: Sanity.io integration for easy content management
- **SEO Optimized**: Complete SEO implementation with metadata, sitemap, robots.txt, and hreflang
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Production Ready**: Built with Next.js 15 and TypeScript for performance and reliability

## 📁 Project Structure

```
webapp/
├── app/                        # Next.js App Router
│   ├── [locale]/              # Language-specific routes
│   │   ├── page.tsx           # Home page
│   │   ├── business/          # Business pages
│   │   ├── properties/        # Real estate listings
│   │   ├── blog/              # Blog articles
│   │   ├── projects/          # Project showcase
│   │   ├── contact/           # Contact form
│   │   └── legal/             # Privacy & Terms
│   ├── globals.css            # Global styles
│   ├── sitemap.ts             # Dynamic sitemap
│   └── robots.ts              # Robots.txt
├── components/                 # React components
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── Card.tsx               # Reusable card component
│   └── Button.tsx             # Styled button component
├── lib/                        # Utility libraries
│   ├── i18n.ts                # Internationalization config
│   └── sanity.ts              # Sanity client
├── sanity/                     # Sanity CMS
│   ├── schemas/               # Content schemas
│   │   ├── property.ts        # Real estate schema
│   │   ├── post.ts            # Blog post schema
│   │   ├── project.ts         # Project schema
│   │   └── siteSettings.ts    # Site settings
│   ├── sanity.config.ts       # Sanity configuration
│   └── sample-data.md         # Sample content guide
├── middleware.ts               # i18n routing middleware
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS config
└── package.json               # Dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity.io account (free tier available)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd webapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Sanity CMS

#### Create a Sanity Project

```bash
# Install Sanity CLI globally (if not already installed)
npm install -g sanity

# Login to Sanity
sanity login

# Initialize Sanity in the project
cd sanity
sanity init

# Follow the prompts:
# - Create new project
# - Use default dataset configuration
# - Project name: shichifuku-corporate
```

#### Get Your Project ID

After initialization, you'll receive a project ID. Copy it for the next step.

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

To get an API token:
1. Go to https://sanity.io/manage
2. Select your project
3. Navigate to API → Tokens
4. Create a new token with "Editor" permissions

### 5. Add Sample Content to Sanity

```bash
# Start Sanity Studio
cd sanity
npm install
npx sanity dev
```

Open http://localhost:3333 in your browser and add content using the guide in `sanity/sample-data.md`.

### 6. Run the Development Server

```bash
# Return to root directory
cd ..

# Start Next.js development server
npm run dev
```

Open http://localhost:3000 in your browser.

## 🌐 Multilingual Routing

The website supports two languages with automatic routing:

- **Japanese**: `/ja/*` (default)
- **Spanish**: `/es/*`

Example routes:
- `/ja` - Japanese home page
- `/es` - Spanish home page
- `/ja/business/trading` - Japanese trading page
- `/es/properties` - Spanish properties page

The middleware automatically redirects the root `/` to `/ja`.

## 📄 Available Pages

### Static Pages

- **Home** (`/[locale]`) - Hero section, business overview, featured content
- **Business** (`/[locale]/business`) - Overview of all business areas
  - Trading (`/[locale]/business/trading`)
  - Real Estate (`/[locale]/business/real-estate`)
  - Football (`/[locale]/business/football`)
- **Contact** (`/[locale]/contact`) - Contact form and information
- **Legal**
  - Privacy Policy (`/[locale]/legal/privacy`)
  - Terms of Use (`/[locale]/legal/terms`)

### Dynamic Pages (CMS-driven)

- **Properties** (`/[locale]/properties`) - Real estate listings
  - Property Detail (`/[locale]/properties/[slug]`)
- **Blog** (`/[locale]/blog`) - Blog articles with category filtering
  - Blog Post (`/[locale]/blog/[slug]`)
- **Projects** (`/[locale]/projects`) - Project showcase
  - Project Detail (`/[locale]/projects/[slug]`)

## 🎨 Design System

The website uses a premium Apple-inspired design:

- **Colors**: White & Black base with subtle gradients
- **Typography**: System fonts (-apple-system, BlinkMacSystemFont)
- **Effects**: Glassmorphism (backdrop blur, transparency)
- **Layout**: Generous spacing, clean hierarchy
- **Interactions**: Smooth transitions, hover effects

## 📦 Content Management

### Sanity Studio

Access Sanity Studio at http://localhost:3333 (in development) or your deployed Studio URL.

### Content Types

1. **Property** - Real estate listings
   - Multilingual: title, description, body
   - Fields: price, location, bedrooms, bathrooms, area
   - Gallery support

2. **Post** - Blog articles
   - Multilingual: title, excerpt, body
   - Categories: Trade, Real Estate, Football
   - SEO fields

3. **Project** - Project showcase
   - Multilingual: title, description, body
   - Gallery and external link support
   - Featured flag

4. **Site Settings** - Global settings
   - Multilingual: site title, description
   - Contact information

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel**

- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Configure environment variables (add the same variables from `.env.local`)
- Deploy

3. **Deploy Sanity Studio**

```bash
cd sanity
npx sanity deploy
```

Choose a studio hostname (e.g., `shichifuku-corporate`). Your Studio will be available at `https://shichifuku-corporate.sanity.studio`.

### Environment Variables for Vercel

Add these in Vercel's project settings:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Update URLs

After deployment, update the base URL in:
- `app/sitemap.ts` (line 6)
- `app/robots.ts` (line 8)

Replace `https://shichifuku.com` with your actual Vercel domain.

## 🔧 Development Scripts

```bash
# Start Next.js development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Start Sanity Studio
npm run sanity:dev

# Deploy Sanity Studio
npm run sanity:deploy
```

## 📊 SEO Features

- ✅ Multilingual metadata (title, description, OG image)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ hreflang tags for language alternatives
- ✅ Structured data (ready for implementation)
- ✅ Image optimization with Next.js Image component
- ✅ Semantic HTML structure

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Deployment**: Vercel (recommended)
- **Rich Text**: Portable Text (@portabletext/react)

## 📝 Content Guidelines

### Japanese Content (For Japanese Market)

- **Real Estate**: Focus on Marbella area properties, Lamborghini villas, Japanese language support
- **Trading**: Spain → Japan imports (wine, ham, cheese), Japan → Spain export support
- **Football**: Youth development, cultural exchange programs

### Spanish Content (For Spanish/EU Market)

- **Real Estate**: Luxury properties, Japanese client services
- **Trading**: Japan → Spain/EU exports (wagyu, sake, frozen foods), market entry support
- **Football**: Professional camps, international exchange

## 🔒 Security Notes

- Environment variables are properly configured in `.env.local` (not committed to git)
- API tokens have appropriate permissions (Editor for CMS operations)
- CORS is handled by Next.js API routes
- Forms should integrate with backend API (contact form is frontend-only placeholder)

## 🤝 Support & Maintenance

### Common Issues

**Problem**: Sanity content not showing
- **Solution**: Check environment variables are correctly set
- **Solution**: Verify Sanity Studio is deployed and content is published

**Problem**: Language switcher not working
- **Solution**: Ensure middleware.ts is properly configured
- **Solution**: Check that all pages exist in both language directories

**Problem**: Build errors
- **Solution**: Run `npm install` to ensure all dependencies are installed
- **Solution**: Check TypeScript errors with `npm run build`

## 📞 Contact

For technical support or questions about this website:
- Email: info@shichifuku.com
- Website: https://shichifuku.com

## 📄 License

© 2025 Shichifuku S.L. All rights reserved.

---

**Built with ❤️ for Shichifuku S.L.**
