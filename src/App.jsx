import { useState } from "react";
import { Github, Linkedin, Mail, X, ArrowUpRight } from "lucide-react";
import { projects, skills, timeline, contact, T } from "./data.js";

function Eyebrow({ children, className = "text-line" }) {
  return (
    <div className={`font-mono text-xs tracking-widest font-medium ${className}`}>
      {children}
    </div>
  );
}

function Marker({ terminus }) {
  return (
    <span
      className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-[3px] ${
        terminus ? "bg-white border-line ring-[3px] ring-line" : "bg-line border-bg"
      }`}
    />
  );
}

function Pill({ children }) {
  return (
    <span className="font-mono text-[11px] text-muted border border-border rounded-full px-2.5 py-1 bg-white">
      {children}
    </span>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [active, setActive] = useState(null);
  const t = T[lang];
  const activeProject = projects.find((p) => p.id === active);

  return (
    <div className="font-body bg-bg text-ink min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-bg/85 backdrop-blur border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-[34px] h-[34px] rounded-full border-2 border-line flex items-center justify-center font-mono text-xs text-line">
              JV
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-7">
            {["about", "skills", "projects", "contact"].map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-mono text-[13px] text-ink hover:text-line transition-colors"
              >
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label="Toggle language"
            className="font-mono text-xs border border-border rounded-full px-3 py-1.5 bg-white cursor-pointer"
          >
            <span className={lang === "fr" ? "text-line font-semibold" : "text-muted"}>FR</span>
            <span className="text-muted"> / </span>
            <span className={lang === "en" ? "text-line font-semibold" : "text-muted"}>EN</span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="max-w-[1100px] mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="fade-up">
          <Eyebrow>{t.eyebrowHero}</Eyebrow>
        </div>
        <h1 className="fade-up font-display font-bold leading-[1.05] text-[40px] sm:text-[56px] lg:text-[68px] mt-3.5 mb-2 [animation-delay:0.05s]">
          Jordan Valente
        </h1>
        <p className="fade-up font-display font-semibold text-line text-lg sm:text-2xl mb-4.5 [animation-delay:0.1s]">
          {t.tagline}
        </p>
        <p className="fade-up max-w-[560px] text-muted text-base leading-relaxed mb-7 [animation-delay:0.15s]">
          {t.heroDesc}
        </p>
        <div className="fade-up flex flex-wrap gap-3 [animation-delay:0.2s]">
          <a
            href="#projects"
            className="font-mono text-[13px] bg-line hover:opacity-90 transition-opacity text-white px-5 py-3 rounded-[10px]"
          >
            {t.ctaProjects}
          </a>
          <a
            href="#contact"
            className="font-mono text-[13px] border border-ink text-ink px-5 py-3 rounded-[10px]"
          >
            {t.ctaContact}
          </a>
        </div>
      </section>

      {/* ROUTE LINE WRAPPER */}
      <div className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="relative border-l-[3px] border-line ml-2 pl-9">
          {/* ABOUT */}
          <section id="about" className="relative pb-16">
            <Marker />
            <Eyebrow>{t.stop1}</Eyebrow>
            <h2 className="font-display font-bold text-[28px] sm:text-[30px] mt-2.5 mb-4">{t.aboutTitle}</h2>
            <p className="text-muted text-[15.5px] leading-relaxed max-w-[620px] mb-7">{t.aboutBody}</p>

            <div className="flex flex-col sm:flex-row border border-border rounded-2xl overflow-hidden bg-white max-w-[680px]">
              {timeline[lang].map((step, i) => (
                <div
                  key={i}
                  className={`flex-1 p-4.5 ${
                    i < 2 ? "border-b sm:border-b-0 sm:border-r border-border" : ""
                  }`}
                >
                  <div className={`font-mono text-[11px] mb-1.5 ${i === 2 ? "text-line" : "text-amber"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display font-semibold text-[15px] mb-1">{step.t}</div>
                  <div className="text-muted text-[12.5px]">{step.s}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="relative pb-16">
            <Marker />
            <Eyebrow>{t.stop2}</Eyebrow>
            <h2 className="font-display font-bold text-[28px] sm:text-[30px] mt-2.5 mb-4.5">{t.skillsTitle}</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="relative pb-16">
            <Marker />
            <Eyebrow>{t.stop3}</Eyebrow>
            <h2 className="font-display font-bold text-[28px] sm:text-[30px] mt-2.5 mb-1">{t.projectsTitle}</h2>
            <p className="text-muted text-sm mb-6">{t.projectsSub}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="proj-card text-left cursor-pointer bg-white border border-border rounded-2xl p-5"
                >
                  <div className="font-mono text-[11px] text-amber mb-2">{p[lang].tag}</div>
                  <div className="font-display font-semibold text-lg mb-2">{p.name}</div>
                  <p className="text-muted text-[13.5px] leading-snug mb-3.5">{p[lang].desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {p.tech.map((tc) => (
                      <Pill key={tc}>{tc}</Pill>
                    ))}
                  </div>
                  <div className="font-mono text-xs text-line flex items-center gap-1">
                    {t.learnMore} <ArrowUpRight size={13} />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="relative">
            <Marker terminus />
            <Eyebrow>{t.terminus}</Eyebrow>
            <h2 className="font-display font-bold text-[28px] sm:text-[30px] mt-2.5 mb-2.5">{t.contactTitle}</h2>
            <p className="text-muted text-[15px] max-w-[480px] mb-5.5">{t.contactBody}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="font-mono text-[13px] bg-ink hover:opacity-90 transition-opacity text-white px-4.5 py-2.5 rounded-[10px] flex items-center gap-2"
              >
                <Mail size={14} /> {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] border border-border bg-white text-ink px-4.5 py-2.5 rounded-[10px] flex items-center gap-2"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] border border-border bg-white text-ink px-4.5 py-2.5 rounded-[10px] flex items-center gap-2"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t border-border px-6 py-5">
        <div className="max-w-[1100px] mx-auto font-mono text-[11.5px] text-muted">{t.footer}</div>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-ink/45 flex items-center justify-center p-5 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-7 max-w-[460px] w-full relative"
          >
            <button
              onClick={() => setActive(null)}
              aria-label={t.close}
              className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-muted"
            >
              <X size={18} />
            </button>
            <div className="font-mono text-[11px] text-amber mb-2">{activeProject[lang].tag}</div>
            <h3 className="font-display font-bold text-[22px] mb-3">{activeProject.name}</h3>
            <p className="text-muted text-[14.5px] leading-relaxed mb-4.5">{activeProject[lang].desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-5.5">
              {activeProject.tech.map((tc) => (
                <Pill key={tc}>{tc}</Pill>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {activeProject.repo && (
                <a
                  href={activeProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] bg-ink text-white px-4 py-2.5 rounded-[9px] flex items-center gap-1.5"
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
