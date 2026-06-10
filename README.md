# 🎨 Dream Animation Studio — Portfolio

Cinematic, dark-themed portfolio website for a **3D Artist & Generative AI Creator**.

Built with **Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# Open http://localhost:3000
```

---

## ✏️ Customize Your Portfolio

**All content lives in a single file:** `app/data.ts`

Open it and edit:

| Field | What to change |
|-------|----------------|
| `profile.name` | Your name / studio name |
| `profile.role` | Your title |
| `profile.tagline` | One-liner |
| `profile.email` | Contact email |
| `profile.longBio` | 2-3 paragraphs about you |
| `socials[]` | All your social links |
| `skills.threeD` | 3D tools you use |
| `skills.genAI` | AI tools you use |
| `skills.post` | Post-production tools |
| `youtubeChannels[].videos` | YouTube video IDs to feature |
| `projects[]` | Add/edit your projects |
| `stats` | Quick stats shown in hero |

### Adding Project Images
1. Create folder: `public/projects/`
2. Drop your images (e.g. `neon-city.jpg`, `aurora.jpg`)
3. Reference them in `app/data.ts`:
   ```ts
   image: "/projects/neon-city.jpg",
   ```

### Adding Your Avatar
Drop your photo as `public/avatar.jpg`

### Adding Resume
Drop your CV as `public/resume.pdf`

### Finding YouTube Video IDs
From a YouTube URL like `https://youtube.com/watch?v=dQw4w9WgXcQ`,
the video ID is the part after `v=` → `dQw4w9WgXcQ`

---

## 🚀 Deploy to Vercel (1 minute)

1. Push this folder to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → click **Deploy**
4. Done! ✨

---

## 📁 Project Structure

```
dream-animation-portfolio/
├── app/
│   ├── data.ts          ← ✏️ Edit your content here
│   ├── page.tsx         ← Main page (all sections)
│   ├── layout.tsx       ← Root layout + metadata
│   └── globals.css      ← Styles + Tailwind
├── public/
│   ├── projects/        ← Your project images
│   ├── avatar.jpg       ← Your profile photo
│   └── resume.pdf       ← (optional) Your CV
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🎨 Customization Tips

- **Change colors** → edit `tailwind.config.ts` (look for `accent`)
- **Add new section** → add a component in `app/page.tsx`
- **Change fonts** → edit `app/layout.tsx`
- **Custom domain** → add in Vercel dashboard

---

## 📝 Notes

- Fully responsive (mobile + tablet + desktop)
- SEO-friendly with proper meta tags
- Fast static export
- Dark cinematic theme with animated gradient text
- YouTube embeds work out of the box (just add video IDs)

---

Built with ❤️ + AI. Now go get that job. 💼
