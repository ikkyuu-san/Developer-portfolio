import { useEffect } from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { GitHubIcon, MailIcon } from './components/Icons'
import {
  aboutText,
  projects,
  services,
  siteConfig,
  skills,
} from './data/portfolioData'
import './App.css'

function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <Header name={siteConfig.name} />

      <main>
        <section className="hero section" id="home" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Hi, I&apos;m {siteConfig.name}</p>
              <h1 id="hero-title">Web <span>Developer</span></h1>
              <p className="hero-description">
                I build modern, responsive web experiences and practical web
                applications for real-world needs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View My Work <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Me
                </a>
                <a
                  className="icon-link"
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${siteConfig.name} on GitHub`}
                >
                  <GitHubIcon />
                </a>
              </div>
              <div className="hero-meta" aria-label="Professional focus">
                <span>Web development</span>
                <span>Open to freelance work</span>
              </div>
            </div>

            <div className="hero-visual" aria-label={`Portrait of ${siteConfig.name}`}>
              <div className="portrait-frame">
                <img
                  src="/images/profile/profile.jpg"
                  alt={`${siteConfig.name}, web developer`}
                />
              </div>
              <div className="portrait-label">
                <span className="status-dot" aria-hidden="true" />
                Creating useful digital experiences
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-heading reveal">
              <span className="eyebrow">01 — About</span>
              <h2 id="about-title">Learning, building, and improving with every project.</h2>
            </div>
            <div className="about-copy reveal">
              <p>{aboutText}</p>
              <a className="text-link" href="#skills">
                Explore my toolkit <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <SectionHeading
              id="projects-title"
              eyebrow="02 — Selected work"
              title="Projects built for real-world needs."
              description="A selection of web experiences where clear design and practical functionality work together."
            />
            <div className="projects-list">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="container skills-layout">
            <SectionHeading
              id="skills-title"
              eyebrow="03 — Skills"
              title="A practical modern toolkit."
              description="Technologies I use to design, build, version, and ship responsive web experiences."
            />
            <ul className="skills-grid reveal" aria-label="Technical skills">
              {skills.map((skill, index) => (
                <li key={skill}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading
              id="services-title"
              eyebrow="04 — Services"
              title="Ways I can help bring your idea online."
              description="Focused web development support for small businesses, independent brands, and practical digital products."
            />
            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card reveal" key={service.title}>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-card reveal">
            <span className="eyebrow">05 — Contact</span>
            <h2 id="contact-title">Have a project in mind? Let&apos;s build something useful.</h2>
            <p>
              Tell me a little about your idea, your goals, and where you are in the
              process. I&apos;d be glad to hear about it.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${siteConfig.email}`}>
                <MailIcon /> Email me
              </a>
              <a
                className="button button-secondary"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>
            <a className="contact-email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#home">[{siteConfig.name}]</a>
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <span>Built with React + Vite</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
