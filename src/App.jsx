import React from "react";
import { Hero } from "./components/Hero";
import { TerminalShell } from "./components/TerminalShell";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="app">
      <div className="scanline" />
      <div className="noise" />

      <header className="top-bar">
        <span className="top-bar__brand">[ OKEOWO BABAJIDE / CYBER-OPS ]</span>
        <span className="top-bar__status">STATUS: ONLINE ▊▊▊</span>
      </header>

      <main className="layout">
        <div className="layout__left">
          <Hero />
          <TerminalShell />
        </div>

        <div className="layout__right">
          <Section id="experience" title="EXPERIENCE">
            <ul className="list">
              <li>
                <span className="list__title">Security Analyst · ACME CORP</span>
                <span className="list__meta">2023 — Present</span>
                <p>
                  Conducted vulnerability assessments, SIEM monitoring, and incident
                  response across cloud and on‑prem environments.
                </p>
              </li>
              <li>
                <span className="list__title">Cybersecurity Intern · GOV DEFENSE LAB</span>
                <span className="list__meta">2022 — 2023</span>
                <p>
                  Assisted in red‑team exercises, log forensics, and hardening of critical
                  infrastructure systems.
                </p>
              </li>
            </ul>
          </Section>

          <Section id="projects" title="PROJECTS">
            <ul className="list">
              <li>
                <span className="list__title">BlueShield SOC Dashboard</span>
                <p>
                  Custom dashboard aggregating SIEM alerts, IDS logs, and threat intel
                  feeds. Focus on triage speed and signal‑to‑noise ratio.
                </p>
                <span className="tag-row">
                  <span className="tag">SIEM</span>
                  <span className="tag">Threat Intel</span>
                  <span className="tag">Automation</span>
                </span>
              </li>
              <li>
                <span className="list__title">RedSim Attack Lab</span>
                <p>
                  Isolated lab for simulating common attack paths (phishing, lateral
                  movement, privilege escalation) and training defenders.
                </p>
                <span className="tag-row">
                  <span className="tag">Red Team</span>
                  <span className="tag">AD</span>
                  <span className="tag">Detection</span>
                </span>
              </li>
            </ul>
          </Section>

          <Section id="skills" title="SKILLS">
            <div className="skills-grid">
              <div>
                <h3>Defensive</h3>
                <p>SIEM · SOC · Incident Response · Log Analysis · Hardening</p>
              </div>
              <div>
                <h3>Offensive</h3>
                <p>Recon · Exploitation · Post‑Exploitation · Red Team Labs</p>
              </div>
              <div>
                <h3>Core</h3>
                <p>Networking · Linux · Windows · Cloud Security · Scripting</p>
              </div>
            </div>
          </Section>

          <Section id="contact" title="CONTACT">
            <p>
              For security roles, collaboration, or CTF teams, reach out via:
            </p>
            <ul className="contact-list">
              <li>
                <span className="list__meta">EMAIL</span>
                <a href="mailto:ritik@example.com">ritik@example.com</a>
              </li>
              <li>
                <span className="list__meta">LINKEDIN</span>
                <a href="https://linkedin.com/in/ritik" target="_blank" rel="noreferrer">
                  linkedin.com/in/ritik
                </a>
              </li>
              <li>
                <span className="list__meta">GITHUB</span>
                <a href="https://github.com/ritik" target="_blank" rel="noreferrer">
                  github.com/ritik
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </main>

      <footer className="footer">
        <span>CLASSIFICATION: UNCLASSIFIED // FOR RECRUITER EYES ONLY</span>
      </footer>
    </div>
  );
}

export default App;

