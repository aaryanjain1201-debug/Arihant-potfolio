"use client";

import { motion } from "framer-motion";
import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Play,
  Sparkles,
  Box,
  Cpu,
  Layers,
  Download,
  MapPin,
  Film,
  Wand2,
} from "lucide-react";
import { profile, projects, skills, socials, youtubeChannels, stats } from "./data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Showreel />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

/* =========================  NAVBAR  ========================= */
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">{profile.shortName}</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-foreground/70">
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#showreel" className="hover:text-accent transition">Showreel</a>
          <a href="#projects" className="hover:text-accent transition">Work</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-sm bg-accent hover:bg-accent-glow text-white px-4 py-2 rounded-full transition"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}

/* =========================  HERO  ========================= */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-glow-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-foreground/70 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient glow-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-xl sm:text-2xl text-foreground/80 mb-4 font-light"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-glow text-white px-6 py-3 rounded-full transition glow"
          >
            See my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#showreel"
            className="inline-flex items-center gap-2 glass hover:bg-white/5 text-foreground px-6 py-3 rounded-full transition"
          >
            <Play className="w-4 h-4" />
            Watch showreel
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="text-3xl font-display font-bold text-gradient">
                {s.value}
              </div>
              <div className="text-xs text-foreground/60 mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 text-xs animate-bounce">
        ↓ scroll
      </div>
    </section>
  );
}

/* ========================  ABOUT  ======================== */
function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm text-accent mb-3 uppercase tracking-widest">
            About
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Where <span className="text-gradient">pixels</span> meet{" "}
            <span className="text-gradient">algorithms</span>.
          </h2>
          <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
            {profile.longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-foreground/60 text-sm">
            <MapPin className="w-4 h-4" />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square glass rounded-3xl overflow-hidden glow">
            <div className="w-full h-full bg-gradient-to-br from-accent/30 via-pink-500/20 to-orange-400/20 flex items-center justify-center">
              <Sparkles className="w-24 h-24 text-accent animate-float" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 glow">
            <div className="text-sm text-foreground/60">Specialty</div>
            <div className="font-display font-bold text-gradient">3D + Gen AI</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================  SKILLS  ======================== */
function Skills() {
  const groups = [
    { title: "3D & VFX", items: skills.threeD, icon: <Box className="w-5 h-5" />, color: "from-purple-500/20 to-pink-500/20" },
    { title: "Generative AI", items: skills.genAI, icon: <Wand2 className="w-5 h-5" />, color: "from-cyan-500/20 to-blue-500/20" },
    { title: "Post & Compositing", items: skills.post, icon: <Film className="w-5 h-5" />, color: "from-orange-500/20 to-red-500/20" },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm text-accent mb-3 uppercase tracking-widest">
            Toolkit
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            What I <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent/40 transition group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-5 text-accent`}
              >
                {g.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-muted/60 border border-border px-3 py-1.5 rounded-full text-foreground/80 hover:border-accent/50 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================  SHOWREEL / YOUTUBE  ====================== */
function Showreel() {
  return (
    <section id="showreel" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm text-accent mb-3 uppercase tracking-widest">
            Showreel
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Watch it <span className="text-gradient">in motion</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Selected work from my YouTube channels. Replace the video IDs in
            <code className="mx-1 text-accent">app/data.ts</code> with yours.
          </p>
        </motion.div>

        <div className="space-y-16">
          {youtubeChannels.map((ch, ci) => (
            <motion.div
              key={ch.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                    <Youtube className="w-6 h-6 text-red-500" />
                    {ch.name}
                  </h3>
                  <p className="text-foreground/60 text-sm">{ch.description}</p>
                </div>
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-full transition inline-flex items-center gap-2"
                >
                  Visit channel
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {ch.videos.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ch.videos.map((vid) => (
                    <div
                      key={vid}
                      className="aspect-video rounded-xl overflow-hidden border border-border"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${vid}`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass rounded-2xl p-12 text-center text-foreground/50">
                  <Youtube className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  Add your video IDs to <code className="text-accent">app/data.ts</code> to feature videos here.
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================  PROJECTS  ======================== */
function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between mb-16 gap-4"
        >
          <div>
            <div className="text-sm text-accent mb-3 uppercase tracking-widest">
              Selected Work
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              Recent <span className="text-gradient">projects</span>
            </h2>
          </div>
          <a
            href="https://www.artstation.com/arihantjain01"
            target="_blank"
            rel="noreferrer"
            className="text-sm glass hover:bg-white/5 px-4 py-2 rounded-full transition inline-flex items-center gap-2"
          >
            See more on ArtStation
            <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link || "#"}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden glass hover:border-accent/50 transition"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 via-pink-500/10 to-orange-400/10 relative overflow-hidden">
                {p.image && p.image !== "" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Layers className="w-16 h-16 text-accent/40 group-hover:text-accent group-hover:scale-110 transition" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition">
                  {p.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================  CONTACT  ======================== */
function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-pink-500/10" />
          <div className="relative z-10">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Let's build something <span className="text-gradient">cinematic</span>.
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-10 text-lg">
              Open to freelance projects, full-time roles, and experimental
              commissions. Drop a line — I usually reply within a day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-glow text-white px-6 py-3 rounded-full transition glow"
              >
                <Mail className="w-4 h-4" />
                {profile.email}
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 glass hover:bg-white/5 text-foreground px-6 py-3 rounded-full transition"
                >
                  <Download className="w-4 h-4" />
                  Download resume
                </a>
              )}
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass hover:border-accent/50 hover:bg-accent/5 px-4 py-2 rounded-full text-sm text-foreground/80 hover:text-accent transition inline-flex items-center gap-2"
                >
                  {s.label === "Email" ? (
                    <Mail className="w-3.5 h-3.5" />
                  ) : s.label.startsWith("YouTube") ? (
                    <Youtube className="w-3.5 h-3.5" />
                  ) : s.label === "Instagram" ? (
                    <Instagram className="w-3.5 h-3.5" />
                  ) : s.label.includes("Twitter") ? (
                    <Twitter className="w-3.5 h-3.5" />
                  ) : (
                    <Linkedin className="w-3.5 h-3.5" />
                  )}
                  {s.handle}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================  FOOTER  ========================= */
function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
        <div>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          Built with <Cpu className="w-4 h-4 text-accent" /> + <Wand2 className="w-4 h-4 text-accent" />
        </div>
      </div>
    </footer>
  );
}
