import React from "react";

export function Section({ id, title, children }) {
  return (
    <section id={id} className="panel">
      <header className="panel__header">
        <span className="panel__title">{title}</span>
        <span className="panel__code">/{id}</span>
      </header>
      <div className="panel__body">{children}</div>
    </section>
  );
}

