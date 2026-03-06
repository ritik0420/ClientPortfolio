import React, { useEffect, useState } from "react";

const bootLines = [
  "[ OK ] Initializing cyber defense modules...",
  "[ OK ] Loading threat intelligence feeds...",
  "[ OK ] Establishing secure control channel...",
  "[ OK ] Decrypting operator profile: OKEOWO BABAJIDE...",
  "[ OK ] Bringing SOC dashboard online...",
  "[ READY ] Awaiting commands."
];

const prompt = "root@cyber-soc:~$";

export function TerminalShell() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (i >= bootLines.length) {
          clearInterval(interval);
          return prev;
        }
        const next = [...prev, bootLines[i]];
        i += 1;
        return next;
      });
    }, 350);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const lower = input.trim().toLowerCase();
    let response = `command not found: ${input}`;

    if (lower === "help") {
      response = "Available commands: help, whoami, skills, projects, contact, clear";
    } else if (lower === "whoami") {
      response =
        "OKEOWO BABAJIDE · Defensive & offensive security practitioner focused on real-world impact.";
    } else if (lower === "skills") {
      response =
        "Defensive: SOC, SIEM, IR | Offensive: recon, exploitation | Tooling: Python, Bash, PowerShell";
    } else if (lower === "projects") {
      response = "Scroll right panel → detailed projects log.";
    } else if (lower === "contact") {
      response = "Use CONTACT section or email: ritik@example.com";
    } else if (lower === "clear") {
      setVisibleLines([]);
      setInput("");
      return;
    }

    setVisibleLines((prev) => [...prev, `${prompt} ${input}`, response]);
    setInput("");
  };

  return (
    <section className="terminal">
      <div className="terminal__header">
        <span className="dot dot--red" />
        <span className="dot dot--amber" />
        <span className="dot dot--green" />
        <span className="terminal__title">/dev/ops/cyber-terminal</span>
      </div>
      <div className="terminal__body">
        {visibleLines.map((line, idx) => (
          <div key={idx} className="terminal__line">
            {line}
          </div>
        ))}
        <form className="terminal__prompt-row" onSubmit={handleSubmit}>
          <span className="terminal__prompt">{prompt}</span>
          <input
            className="terminal__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck="false"
            placeholder="type 'help' to list commands"
          />
        </form>
      </div>
    </section>
  );
}

