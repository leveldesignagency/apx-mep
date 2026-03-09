# APX Website

Professional website for APX - Fire & Security | Mechanical & Electrical Services

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Site mode: landing page vs full website

This project can run in two modes, controlled by the **`NEXT_PUBLIC_SITE_MODE`** environment variable:

| Value    | What deploys |
|----------|----------------|
| `landing` | “Website coming soon” landing page only (logo, email signup, contact icons). |
| `full` or unset | Full MEP website (homepage, services, about, testimonials, etc.). |

**To deploy only the landing page (e.g. on Vercel):**

1. In your Vercel project: **Settings → Environment Variables**
2. Add: `NEXT_PUBLIC_SITE_MODE` = `landing`
3. Redeploy.

When you’re ready to go live with the full site, change the value to `full` or remove the variable, then redeploy. No code or repo structure changes are required.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your site
4. Add your custom domain **www.apx-mep.co.uk** in Vercel (Settings → Domains)

### DNS Configuration (www.apx-mep.co.uk)

When going live, only update these DNS records:

**Update:**
- A Record: Point your domain to Vercel's IP (or use Vercel’s recommended CNAME for the root if your provider supports it)
- CNAME Record: Point `www` to `cname.vercel-dns.com` (or as shown in Vercel)

**Keep Unchanged (Email Hosting):**
- All MX records
- DKIM records  
- SPF records

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── ui/            # UI components (Button, etc.)
│   ├── Header.tsx     # Site header
│   └── Footer.tsx     # Site footer
└── lib/               # Utility functions
    └── utils.ts       # Helper functions
```

## Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Professional business layout
- ✅ Contact information
- ✅ Service sections
- ✅ Testimonials
- ✅ Call-to-action sections

## Customization

- Update company information in `components/Header.tsx` and `components/Footer.tsx`
- Modify content in `src/app/page.tsx`
- Add new pages in `src/app/` directory
- Customize colors in `tailwind.config.js`

## Support

For questions or support, contact the development team.