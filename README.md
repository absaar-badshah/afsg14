# Air Foundation School - Capital Campus Website

A modern, SEO-optimized website for Air Foundation School - Capital Campus, G-14 Islamabad, built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Perfectly optimized for mobile, tablet, and desktop
- **SEO Optimized**: Schema.org structured data, meta tags, and local SEO for G-14 Islamabad
- **Stunning Animations**: Smooth scroll-triggered animations using Framer Motion
- **Photo Gallery**: Categorized gallery with lightbox functionality
- **Contact Form**: Web3Forms integration for serverless form handling
- **Fast Performance**: Static export for optimal loading speeds
- **Easy Content Management**: JSON-based content for news and gallery

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: Web3Forms
- **Deployment**: Netlify

## 📁 Project Structure

```
afs-g14/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── news/
│   │   └── page.tsx        # News & Events page
│   ├── pictures/
│   │   └── page.tsx        # Photo Gallery page
│   └── contact/
│       └── page.tsx        # Contact page with form
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── Animations.tsx      # Reusable animation components
├── data/
│   ├── news.json           # News and events data
│   └── gallery.json        # Gallery categories and images
├── public/
│   └── images/             # All images (see below)
└── ...config files
```

## 🖼️ Required Images

Place the following images in `public/images/`:

### Main Images
- `logo.png` - School logo
- `hero-bg.jpg` - Hero section background (1920x1080 recommended)
- `about-school.jpg` - About section image
- `school-building.jpg` - School building exterior
- `principal.jpg` - Principal photo (square, 256x256)
- `og-image.jpg` - Social sharing image (1200x630)
- `facility-1.jpg` to `facility-4.jpg` - Facility images

### News Images (in `public/images/news/`)
- `admissions.jpg`
- `sports-day.jpg`
- `science-exhibition.jpg`
- `ptm.jpg`
- `winter.jpg`
- `faisal-mosque.jpg`

### Gallery Images (in `public/images/gallery/`)
Create subdirectories for each category:
- `sports-day/` - Sports day photos
- `science-exhibition/` - Science exhibition photos
- `school-trips/` - Trip photos
- `annual-day/` - Annual day photos
- `campus/` - Campus and facility photos
- `assembly/` - Morning assembly photos

Each subdirectory should have a `cover.jpg` and numbered images.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Get a free Web3Forms API key from [web3forms.com](https://web3forms.com/) and add it to `.env.local`.

### 3. Add Your Images

Place all required images in the `public/images/` directory as described above.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Build for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## 🌐 Deployment to Netlify

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Git Integration

1. Push your code to GitHub
2. Connect the repository to Netlify
3. Build settings are already configured in `netlify.toml`

### Custom Domain (afsg14.edu.pk)

1. In Netlify Dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter `afsg14.edu.pk`
4. Update your domain's DNS:
   - Add a CNAME record pointing to your Netlify subdomain
   - Or use Netlify DNS for easier management

## 📝 Content Management

### Updating News & Events

Edit `data/news.json` to add/modify news items and events:

```json
{
  "news": [
    {
      "id": 1,
      "title": "Your News Title",
      "slug": "url-friendly-slug",
      "excerpt": "Short description...",
      "content": "Full content...",
      "date": "2026-01-15",
      "category": "Admissions",
      "image": "/images/news/your-image.jpg",
      "featured": true
    }
  ],
  "events": [...]
}
```

### Updating Gallery

Edit `data/gallery.json` to add new photo albums:

```json
{
  "categories": [
    {
      "id": "unique-id",
      "title": "Album Title",
      "description": "Album description",
      "coverImage": "/images/gallery/folder/cover.jpg",
      "images": [
        {
          "id": 1,
          "src": "/images/gallery/folder/image.jpg",
          "alt": "Image description",
          "caption": "Display caption"
        }
      ]
    }
  ]
}
```

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  primary: { ... },   // Cyan/teal colors
  secondary: { ... }, // Navy blue colors
  accent: { ... },    // Gold/yellow colors
}
```

### Contact Information

Update contact details in:
- `app/layout.tsx` (Schema.org data)
- `components/Footer.tsx`
- `app/contact/page.tsx`

### SEO

Modify SEO metadata in `app/layout.tsx`:
- Update meta descriptions
- Add your Google verification code
- Modify Open Graph images

## 📧 Web3Forms Setup

1. Go to [web3forms.com](https://web3forms.com/)
2. Enter your email to get a free access key
3. Add the key to your `.env.local` file
4. Form submissions will be sent to your email

## 📄 License

© 2026 Air Foundation School - Capital Campus. All rights reserved.
