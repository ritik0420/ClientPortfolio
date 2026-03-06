import React from "react";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__badge">CYBERSECURITY PORTFOLIO TERMINAL</div>
      <h1 className="hero__title">
        <span>&gt;_</span> OKEOWO BABAJIDE
      </h1>
      <p className="hero__subtitle">Defensive Security · Threat Detection · Incident Response</p>
      <p className="hero__text">
        Focused on building and defending secure systems. This interface emulates a DoD / military
        cyber terminal to reflect how I think about security: structured, evidence‑driven, and
        operational.
      </p>

      <div className="hero__cta-row">
        <a href="#projects" className="btn btn--primary">
          VIEW OPERATIONS LOG
        </a>
        <a href="#contact" className="btn btn--ghost">
          ESTABLISH SECURE CHANNEL
        </a>
      </div>
    </section>
  );
}

