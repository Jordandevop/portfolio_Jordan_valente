import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, X, ArrowUpRight, Menu, Download } from "lucide-react";
import { projects, skills, timeline, contact, routeNumber, T } from "./data.js";

const navIds = ["about", "skills", "projects", "contact"];
const skillCategoryDots = {
  frontend: "bg-line",
  backend: "bg-amber",
  data: "bg-green",
  design: "bg-line",
  tools: "bg-muted",
};

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function StopNode({ terminus }) {
  return (
    <span
      className={`absolute left-[14px] top-[3px] h-4 w-4 rounded-full ${
        terminus
          ? "border-[3px] border-bg bg-line shadow-[0_0_0_3px_theme(colors.line)]"
          : "border-[3px] border-line bg-bg"
      }`}
    />
  );
}

function TechChip({ children }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10.5px] text-muted">
      {children}
    </span>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [busTop, setBusTop] = useState(8);
  const routeRef = useRef(null);
  const t = T[lang];
  const activeProject = projects.find((p) => p.id === active);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!active) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    function update() {
      const el = routeRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const traveled = Math.min(Math.max(vh * 0.5 - rect.top, 0), total);
      const pct = total > 0 ? traveled / total : 0;
      setBusTop(8 + pct * (total - 16));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="font-body bg-bg text-ink min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-bg/85 backdrop-blur border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <a
            href="#top"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-line font-mono text-xs text-line bg-raised"
          >
            JV
          </a>
          <nav className="hidden sm:flex items-center gap-1 font-mono text-[13px]">
            {navIds.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className="group flex items-center gap-2 rounded-full px-3.5 py-2 text-ink transition-colors hover:bg-line-dim hover:text-line"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-line" />
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              aria-label={t.toggleLangLabel}
              className="font-mono text-xs border border-border rounded-full px-3 py-1.5 bg-raised cursor-pointer"
            >
              <span className={lang === "fr" ? "text-line font-semibold" : "text-muted"}>FR</span>
              <span className="text-muted"> / </span>
              <span className={lang === "en" ? "text-line font-semibold" : "text-muted"}>EN</span>
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t.menuCloseLabel : t.menuOpenLabel}
              aria-expanded={menuOpen}
              className="sm:hidden flex h-[38px] w-[38px] items-center justify-center rounded-full border border-border bg-raised text-ink cursor-pointer"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="sm:hidden border-t border-border bg-bg px-6 py-2 flex flex-col font-mono text-[13.5px]">
            {navIds.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 py-3 border-b border-border last:border-b-0 text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                {t.nav[i]}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="max-w-[1100px] mx-auto px-6 pt-14 pb-10 sm:pt-16 scroll-mt-20">
        <div
          className="fade-up relative flex items-center gap-3.5 overflow-hidden rounded-2xl bg-board px-4 py-3.5 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
        >
          <span className="flex-none rounded-md bg-board-amber px-2.5 py-1.5 font-led text-xl leading-none text-board">
            {routeNumber}
          </span>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="board-marquee flex w-max items-center font-led text-[15px] tracking-[0.08em] text-board-amber [text-shadow:0_0_8px_rgba(255,179,71,0.55)]">
              <span className="pr-12 whitespace-nowrap">{t.marquee}</span>
              <span className="pr-12 whitespace-nowrap" aria-hidden="true">
                {t.marquee}
              </span>
            </div>
          </div>
        </div>

        <p className="fade-up font-mono text-xs tracking-widest font-medium text-line mt-7 [animation-delay:0.05s]">
          {t.eyebrowHero}
        </p>
        <h1 className="fade-up font-display leading-[0.95] tracking-[-0.01em] text-[40px] sm:text-[64px] lg:text-[84px] mt-3 mb-2 [animation-delay:0.1s]">
          Jordan Valente
        </h1>
        <p className="fade-up font-display text-line text-xl sm:text-[26px] mb-[18px] [animation-delay:0.15s]">
          {t.tagline}
        </p>
        <p className="fade-up max-w-[58ch] text-muted text-base leading-relaxed mb-7 [animation-delay:0.2s]">
          {t.heroDesc}
        </p>
        <div className="fade-up flex flex-wrap gap-3 [animation-delay:0.25s]">
          <a
            href="#projects"
            className="font-mono text-[13.5px] bg-line hover:opacity-90 transition-opacity text-white px-5 py-3.5 rounded-[10px] flex items-center gap-2"
          >
            {t.ctaProjects} <ArrowUpRight size={14} />
          </a>
          <a
            href="#contact"
            className="font-mono text-[13.5px] border border-ink text-ink px-5 py-3.5 rounded-[10px]"
          >
            {t.ctaContact}
          </a>
          <a
            href="/cv.pdf"
            download="Jordan-Valente-CV.pdf"
            className="font-mono text-[13.5px] border border-border text-muted px-5 py-3.5 rounded-[10px] flex items-center gap-2"
          >
            {t.ctaCV} <Download size={14} />
          </a>
        </div>
      </section>

      {/* ROUTE LINE WRAPPER */}
      <div className="max-w-[1100px] mx-auto px-6 pb-24">
        <div ref={routeRef} className="relative pt-10 pb-5">
          <div className="absolute left-[22px] top-2 bottom-2 w-[3px] rounded bg-border" />
          <div
            className="absolute left-[22px] -ml-[7px] h-[14px] w-[14px] rounded-full bg-amber shadow-[0_0_0_4px_theme(colors.amber-dim),0_2px_8px_rgba(0,0,0,0.25)] transition-[top] duration-150 ease-linear motion-reduce:transition-none"
            style={{ top: `${busTop}px` }}
          />

          {/* ABOUT */}
          <section id="about" className="grid grid-cols-[44px_1fr] gap-x-5 pb-16 scroll-mt-20">
            <div className="relative">
              <StopNode />
            </div>
            <div>
              <Reveal>
                <p className="font-mono text-[11.5px] font-medium tracking-widest text-amber">{t.stop1}</p>
                <h2 className="font-display text-[26px] sm:text-[32px] mt-2 mb-4">{t.aboutTitle}</h2>
              </Reveal>
              <Reveal>
                <p className="text-muted text-[15.5px] leading-relaxed max-w-[62ch] mb-7">{t.aboutBody}</p>
              </Reveal>
              <Reveal>
                <div className="flex flex-col sm:flex-row border border-border rounded-2xl overflow-hidden bg-raised max-w-[680px]">
                  {timeline[lang].map((step, i) => (
                    <div
                      key={i}
                      className={`flex-1 p-[18px] ${
                        i < 2 ? "border-b sm:border-b-0 sm:border-r border-border" : ""
                      }`}
                    >
                      <div className={`font-mono text-[11px] mb-1.5 ${i === 2 ? "text-line" : "text-amber"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="font-display text-[15px] mb-1">{step.t}</div>
                      <div className="text-muted text-[12.5px]">{step.s}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="grid grid-cols-[44px_1fr] gap-x-5 pb-16 scroll-mt-20">
            <div className="relative">
              <StopNode />
            </div>
            <div>
              <Reveal>
                <p className="font-mono text-[11.5px] font-medium tracking-widest text-amber">{t.stop2}</p>
                <h2 className="font-display text-[26px] sm:text-[32px] mt-2 mb-[18px]">{t.skillsTitle}</h2>
              </Reveal>
              <div className="flex flex-col gap-5">
                {Object.entries(skills).map(([category, items]) => (
                  <Reveal key={category}>
                    <p className="mb-2.5 font-mono text-[11px] tracking-widest text-muted">
                      {t.skillCategories[category]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-raised px-3.5 py-2 font-mono text-[12.5px]"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${skillCategoryDots[category]}`} />
                          {s}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="grid grid-cols-[44px_1fr] gap-x-5 pb-16 scroll-mt-20">
            <div className="relative">
              <StopNode />
            </div>
            <div>
              <Reveal>
                <p className="font-mono text-[11.5px] font-medium tracking-widest text-amber">{t.stop3}</p>
                <h2 className="font-display text-[26px] sm:text-[32px] mt-2 mb-1">{t.projectsTitle}</h2>
                <p className="text-muted text-sm mb-6">{t.projectsSub}</p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-5">
                {projects.map((p, i) => (
                  <Reveal key={p.id}>
                    <button
                      onClick={() => setActive(p.id)}
                      className="ticket-card group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-raised text-left cursor-pointer"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-border">
                        <img
                          src={p.image}
                          alt={`Capture d'écran du projet ${p.name}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                        <div className="font-mono text-[10.5px] tracking-[0.1em] text-muted">
                          {t.ticketPrefix} {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                        </div>
                        <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.06em] text-amber">
                          {p[lang].tag}
                        </div>
                        <div className="mt-2 mb-2.5 font-display text-lg">{p.name}</div>
                        <p className="mb-4 flex-1 text-muted text-[13.5px] leading-snug">{p[lang].desc}</p>
                        <div className="mb-4 flex flex-wrap gap-1.5">
                          {p.tech.map((tc) => (
                            <TechChip key={tc}>{tc}</TechChip>
                          ))}
                        </div>
                        <div className="relative mb-4 border-t-2 border-dashed border-border before:absolute before:-left-[29px] before:-top-[9px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-bg before:content-[''] after:absolute after:-right-[29px] after:-top-[9px] after:h-[18px] after:w-[18px] after:rounded-full after:bg-bg after:content-['']" />
                        <div className="flex items-center justify-between gap-2.5">
                          <div className="flex h-4 items-end gap-[2px] opacity-40" aria-hidden="true">
                            {Array.from({ length: 16 }).map((_, j) => (
                              <span
                                key={j}
                                className="w-[2px] bg-ink"
                                style={{ height: `${6 + ((j * 37) % 10)}px` }}
                              />
                            ))}
                          </div>
                          <span className="flex items-center gap-1 font-mono text-xs text-line">
                            {t.learnMore} <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="grid grid-cols-[44px_1fr] gap-x-5 scroll-mt-20">
            <div className="relative">
              <StopNode terminus />
            </div>
            <div>
              <Reveal>
                <p className="font-mono text-[11.5px] font-medium tracking-widest text-line">{t.terminus}</p>
                <h2 className="font-display text-[26px] sm:text-[32px] mt-2 mb-2.5">{t.contactTitle}</h2>
              </Reveal>
              <Reveal>
                <p className="text-muted text-[15px] max-w-[480px] mb-[22px]">{t.contactBody}</p>
              </Reveal>
              <Reveal>
                <div className="max-w-[620px] overflow-hidden rounded-2xl border border-border bg-raised">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3.5 border-b border-border px-5 py-4 text-ink transition-colors hover:bg-line-dim"
                  >
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-line-dim text-line">
                      <Mail size={15} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10.5px] tracking-[0.1em] text-muted">EMAIL</span>
                      <span className="mt-0.5 block break-words text-[14.5px]">{contact.email}</span>
                    </span>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 border-b border-border px-5 py-4 text-ink transition-colors hover:bg-line-dim"
                  >
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-line-dim text-line">
                      <Linkedin size={15} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10.5px] tracking-[0.1em] text-muted">LINKEDIN</span>
                      <span className="mt-0.5 block break-words text-[14.5px]">jordan-valente-7a8486325</span>
                    </span>
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 px-5 py-4 text-ink transition-colors hover:bg-line-dim"
                  >
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-line-dim text-line">
                      <Github size={15} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10.5px] tracking-[0.1em] text-muted">GITHUB</span>
                      <span className="mt-0.5 block break-words text-[14.5px]">Jordandevop</span>
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t border-border px-6 py-5">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-2 font-mono text-[11.5px] text-muted">
          <span>{t.footer}</span>
          <span>
            © {new Date().getFullYear()} Jordan Valente - {t.rightsReserved}
          </span>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/65 flex items-center justify-center p-5 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.name}
            className="bg-raised rounded-2xl p-7 max-w-[460px] w-full max-h-[85vh] overflow-y-auto relative"
          >
            <div className="-mx-7 -mt-7 mb-4 aspect-[16/9] overflow-hidden rounded-t-2xl bg-border">
              <img
                src={activeProject.image}
                alt={`Capture d'écran du projet ${activeProject.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label={t.close}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-bg shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
            >
              <X size={16} />
            </button>
            <div className="font-mono text-[11px] text-amber mb-2 uppercase tracking-[0.06em]">
              {activeProject[lang].tag}
            </div>
            <h3 className="font-display text-[22px] mb-3">{activeProject.name}</h3>
            <p className="text-muted text-[14.5px] leading-relaxed mb-[18px]">{activeProject[lang].desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-[22px]">
              {activeProject.tech.map((tc) => (
                <TechChip key={tc}>{tc}</TechChip>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {activeProject.repo && (
                <a
                  href={activeProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] bg-ink text-bg px-4 py-2.5 rounded-[9px] flex items-center gap-1.5"
                >
                  <Github size={14} /> {t.code}
                </a>
              )}
              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] bg-line text-white px-4 py-2.5 rounded-[9px] flex items-center gap-1.5"
                >
                  <ArrowUpRight size={14} /> {t.demo}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
