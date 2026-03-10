import React from "react";
import { TerminalShell } from "./components/TerminalShell";

function App() {
  return (
    <div className="app">
      <div className="scanline" />
      <div className="noise" />

      {/* Fixed glassmorphism navigation bar */}
      <header className="nav">
        <div className="nav__brand">[ OKEOWO BABAJIDE / CYBER-OPS ]</div>
        <nav className="nav__links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page">
        {/* HERO */}
        <section id="hero" className="section hero-section">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-kicker">Cybersecurity · Blue / Red · Cloud</p>
              <h1>
                Defending systems,
                <span> one exploit at a time.</span>
              </h1>
              <p className="hero-subtitle">
                Cyber-operations specialist focused on threat detection, incident
                response, and hands-on attack simulation.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn--primary">
                  Contact Me
                </a>
                <a href="#experience" className="btn btn--ghost">
                  View Experience
                </a>
              </div>
            </div>

            <TerminalShell />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section__header">
            <h2>About</h2>
            <p>Who I am and what I bring to your security team.</p>
          </div>
          <div className="about-grid">
            <div className="about-grid__bio">
              <p>
                I work across detection engineering, incident response, and adversary
                simulation to help organizations understand and harden their attack
                surface. From SOC monitoring to red‑team exercises, my focus is clear,
                actionable outcomes instead of noisy dashboards.
              </p>
              <p>
                I enjoy building repeatable workflows, documenting playbooks, and turning
                complex technical findings into language stakeholders can act on.
              </p>
            </div>
            <div className="about-grid__certs">
              <h3>Certifications</h3>
              <ul>
                <li>CompTIA Security+ (or equivalent)</li>
                <li>Certified Ethical Hacker / Red‑Team foundations</li>
                <li>Cloud Security fundamentals (AWS / Azure)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section__header">
            <h2>Skills</h2>
            <p>A snapshot of my tooling, expertise, and cloud experience.</p>
          </div>
          <div className="skills-grid-3">
            <div>
              <h3>Tools</h3>
              <p>SIEM, IDS/IPS, EDR, Wireshark, Burp Suite, Nmap, Metasploit.</p>
            </div>
            <div>
              <h3>Expertise</h3>
              <p>
                Threat hunting, incident response, log forensics, vulnerability
                assessment, purple‑team collaboration.
              </p>
            </div>
            <div>
              <h3>Cloud</h3>
              <p>Security groups, IAM, logging pipelines, baseline hardening in AWS.</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE - Timeline */}
        <section id="experience" className="section">
          <div className="section__header">
            <h2>Experience</h2>
            <p>A concise timeline of my hands-on security work.</p>
          </div>
          <div className="timeline">
            <div className="timeline-line" />

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-meta">2023 — Present · Security Analyst</div>
                <h3>ACME CORP · Blue Team</h3>
                <p>
                  Lead on SIEM tuning, alert triage, and incident response for hybrid
                  cloud workloads. Built playbooks that reduced mean time to detect and
                  respond.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-meta">2022 — 2023 · Cybersecurity Intern</div>
                <h3>GOV DEFENSE LAB · Red / Blue</h3>
                <p>
                  Assisted with red‑team simulations, log forensics, and hardening of
                  critical infrastructure environments while documenting findings for
                  leadership.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-meta">2020 — 2022 · Self‑Directed</div>
                <h3>Labs, CTFs & Training</h3>
                <p>
                  Built home labs, participated in CTFs, and practiced exploitation,
                  detection, and response in safe environments to sharpen real‑world
                  skills.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section--contact">
          <div className="section__header">
            <h2>Contact</h2>
            <p>Ready for security roles, collaborations, or CTF teams.</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-card">
              <p>
                If you&apos;re looking for someone who can think like an attacker and act
                like a defender, let&apos;s talk.
              </p>
              <ul>
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:ritik@example.com">ritik@example.com</a>
                </li>
                <li>
                  <span className="label">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/ritik"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/ritik
                  </a>
                </li>
                <li>
                  <span className="label">GitHub</span>
                  <a href="https://github.com/ritik" target="_blank" rel="noreferrer">
                    github.com/ritik
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} OKEOWO BABAJIDE · Cyber Operations</span>
      </footer>
    </div>
  );
}

export default App;

