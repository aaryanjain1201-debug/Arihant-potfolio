// =============================================================
//   ✏️  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
//   All content lives here — no need to touch components.
// =============================================================

export const profile = {
  name: "Arihant Jain",
  shortName: "AJ",
  role: "3D Artist & Generative AI Creator",
  tagline: "Cinematic 3D worlds. AI-driven storytelling.",
  location: "India",
  email: "hello@arihantjain.studio",
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.jpg",
  shortBio:
    "I build immersive 3D scenes and push the boundaries of generative AI to create visuals that feel alive.",
  longBio: [
    "I'm Arihant Jain — a 3D artist and generative AI creator running multiple creative channels. My work spans cinematic scene design, character modeling, product visualization, and AI-driven concept art for studios, brands, and creators.",
    "By day I sculpt in Blender and Unreal. By night I fine-tune diffusion models in ComfyUI and orchestrate multi-modal AI pipelines that turn text and sketches into full cinematic sequences.",
    "Open to freelance collaborations, full-time roles, and experimental commissions.",
  ],
  status: "Available for hire",
  artstationUrl: "https://www.artstation.com/arihantjain01",
  artstationHandle: "arihantjain01",
};

export const socials = [
  { label: "YouTube (Pro)", handle: "@dreamanimationstudio", url: "https://youtube.com/@dreamanimationstudio-g3h" },
  { label: "YouTube (Kids)", handle: "@kokojuniorkids", url: "https://youtube.com/@kokojuniorkids" },
  { label: "YouTube (Edu)", handle: "@jinvanipathshala", url: "https://youtube.com/@jinvanipathshala" },
  { label: "ArtStation", handle: "arihantjain01", url: "https://www.artstation.com/arihantjain01" },
  { label: "Instagram", handle: "@arihantjain01", url: "https://instagram.com/" },
  { label: "Twitter / X", handle: "@arihantjain01", url: "https://twitter.com/" },
  { label: "LinkedIn", handle: "Arihant Jain", url: "https://linkedin.com/" },
  { label: "Email", handle: "hello@arihantjain.studio", url: "mailto:hello@arihantjain.studio" },
];

export const skills = {
  threeD: [
    "Blender",
    "Autodesk Maya",
    "ZBrush",
    "Cinema 4D",
    "Substance Painter",
    "Unreal Engine 5",
    "Houdini",
    "Marvelous Designer",
  ],
  genAI: [
    "ComfyUI",
    "Stable Diffusion XL",
    "Midjourney",
    "Runway Gen-3",
    "Sora",
    "Kling AI",
    "ControlNet",
    "LoRA Training",
  ],
  post: [
    "Adobe After Effects",
    "DaVinci Resolve",
    "Premiere Pro",
    "Nuke",
    "Photoshop",
  ],
};

export const youtubeChannels = [
  {
    name: "Dream Animation Studio",
    handle: "@dreamanimationstudio-g3h",
    url: "https://youtube.com/@dreamanimationstudio-g3h",
    description: "3D animation, AI visuals, cinematic shorts",
    videos: [],
  },
  {
    name: "Koko Junior Kids",
    handle: "@kokojuniorkids",
    url: "https://youtube.com/@kokojuniorkids",
    description: "3D animated content for kids",
    videos: [],
  },
  {
    name: "Jinvani Pathshala",
    handle: "@jinvanipathshala",
    url: "https://youtube.com/@jinvanipathshala",
    description: "Educational content powered by 3D & AI",
    videos: [],
  },
];

export const projects = [
  {
    id: 1,
    title: "Neon City Genesis",
    description:
      "Cyberpunk cityscape built in Blender, animated with AI-driven camera motion and atmospheric effects.",
    tags: ["Blender", "After Effects", "ComfyUI"],
    image: "/projects/neon-city.jpg",
    videoUrl: "",
    link: "https://www.artstation.com/arihantjain01",
    featured: true,
  },
  {
    id: 2,
    title: "Ethereal Portraits",
    description:
      "Series of AI-generated portraits fine-tuned with custom LoRA models on Stable Diffusion XL.",
    tags: ["ComfyUI", "SDXL", "LoRA"],
    image: "/projects/ethereal.jpg",
    videoUrl: "",
    link: "https://www.artstation.com/arihantjain01",
    featured: true,
  },
  {
    id: 3,
    title: "Product Vision: Aurora Headphones",
    description:
      "Photoreal product visualization with cinematic lighting, rendered in Unreal Engine 5.",
    tags: ["Unreal Engine 5", "Blender", "Substance"],
    image: "/projects/aurora.jpg",
    videoUrl: "",
    link: "https://www.artstation.com/arihantjain01",
    featured: true,
  },
  {
    id: 4,
    title: "Ancient Realms",
    description:
      "Generative AI concept art pipeline blending Midjourney, ControlNet, and manual painting.",
    tags: ["Midjourney", "ControlNet", "Photoshop"],
    image: "/projects/ancient.jpg",
    videoUrl: "",
    link: "https://www.artstation.com/arihantjain01",
    featured: true,
  },
  {
    id: 5,
    title: "Koko Junior — Toy World",
    description:
      "Original 3D animated short for kids. Character rigging, voice, story — full pipeline.",
    tags: ["Blender", "Rigging", "Animation"],
    image: "/projects/koko.jpg",
    videoUrl: "",
    link: "https://youtube.com/@kokojuniorkids",
    featured: true,
  },
  {
    id: 6,
    title: "Abstract Realms",
    description:
      "Experimental AI-driven music video. Diffusion animations synced to generative audio.",
    tags: ["Runway", "Sora", "DaVinci"],
    image: "/projects/abstract.jpg",
    videoUrl: "",
    link: "https://youtube.com/@dreamanimationstudio-g3h",
    featured: true,
  },
];

export const stats = [
  { label: "Years creating", value: "5+" },
  { label: "Projects shipped", value: "120+" },
  { label: "YouTube subs", value: "10K+" },
  { label: "AI models trained", value: "30+" },
];
