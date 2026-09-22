import { useEffect, useRef } from "react";
import "./App.css";
import FaultyTerminal from "./components/FaultyTerminal";
import teamData from "./data/team.json";

function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zM7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.92 4.919-1.265.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.596a2.596 2.596 0 1 1 0-5.192 2.596 2.596 0 0 1 0 5.192zm6.406-6.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
  );
}

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const targets = mainRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const handleCardMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <main className="page" ref={mainRef}>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">GROUP.18</div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#team">TEAM</a>
          <a href="#partner">PARTNER</a>
          <a href="#contact">CONTACT</a>
        </div>

        {/* <div className="nav-status">
          <span>●</span> ONLINE
        </div> */}
      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        {/* Faulty Terminal Background */}
        <div className="terminal-background">
          <FaultyTerminal
            scale={1.2}
            gridMul={[2, 1]}
            digitSize={1.4}
            timeScale={0.3}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={0.8}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.08}
            tint="#ffffff"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={true}
            brightness={0.35}
          />
        </div>

        {/* Background darkening */}
        <div className="terminal-overlay"></div>


        {/* HERO CONTENT */}
        <div className="hero-content">

          <div className="hero-label">
            <span>01</span>
            <span>INTRODUCTION</span>
          </div>


          <h1>
            <span className="we-are">WE ARE</span>
            <span className="group-name">GROUP.18</span>
          </h1>


          <div className="hero-bottom">

            <p>
              A team of passionate creators, developers,
              and problem solvers turning ideas into reality.
            </p>

            <a href="#about" className="hero-button">
              MEET THE TEAM
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* SCROLL */}
        <div className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </div>

      </section>


      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-bg" aria-hidden="true"></div>

        <div className="about-content">
          <span className="reveal">02 — ABOUT</span>

          <h2 className="reveal">
            OUR TEAM
            <br />
            IS JUST GETTING STARTED.
          </h2>

          <p className="about-lead reveal">{teamData.about.lead}</p>

          <p className="about-text reveal">{teamData.about.body}</p>

          <div className="about-stats">
            {teamData.stats.map((stat, index) => (
              <div
                className="stat reveal"
                key={stat.label}
                style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-group" key={i} aria-hidden={i === 1}>
              <span>GROUP.18</span>
              <span>◆</span>
              <span>{teamData.members.length} MEMBERS</span>
              <span>◆</span>
              <span>BUILD · SHIP · REPEAT</span>
              <span>◆</span>
              <span>FOR THE COMMUNITY</span>
              <span>◆</span>
              <span>TO THE COMMUNITY</span>
              <span>◆</span>
              <span>COMMUNITY ENGAGEMENT PROGRAM</span>
              <span>◆</span>
              <span>2026</span>
              <span>◆</span>
            </div>
          ))}
        </div>
      </div>


      {/* TEAM */}
      <section className="team-section" id="team">

        <div className="team-bg" aria-hidden="true"></div>

        <div className="team-header">
          <span className="reveal">03 — TEAM</span>

          <h2 className="reveal">MEET THE MEMBERS</h2>
        </div>

        <div className="team-grid">
          {teamData.members.map((member, index) => {
            const hasName = member.name && member.name.trim().length > 0;
            const socials = member.socials || {};
            const hasSocials = socials.github || socials.linkedin;

            return (
              <div
                className={`team-card reveal${hasName ? "" : " is-open-slot"}`}
                key={member.id}
                style={{ transitionDelay: `${(index % 5) * 0.08}s` }}
                onMouseMove={handleCardMove}
              >
                <span className="team-index">
                  N°{String(member.id).padStart(2, "0")}
                </span>

                {member.rollNo && (
                  <span className="team-roll-chip">{member.rollNo}</span>
                )}

                <div className="team-photo-wrap">
                  {member.image ? (
                    <img src={member.image} alt={member.name} loading="lazy" />
                  ) : (
                    <div className="team-placeholder">
                      <span className="team-placeholder-icon">+</span>
                      <span className="team-placeholder-text">Photo needed</span>
                    </div>
                  )}

                  <div className="team-photo-gradient"></div>
                </div>

                <div className="team-details">
                  <h3>{hasName ? member.name : "TBD"}</h3>

                  <p className="team-role">
                    {member.role || "ROLE TO BE ASSIGNED"}
                  </p>

                  {member.bio && <p className="team-bio">{member.bio}</p>}

                  {hasSocials && (
                    <div className="team-socials">
                      {socials.github && (
                        <a
                          href={socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on GitHub`}
                        >
                          <IconGithub />
                        </a>
                      )}

                      {socials.linkedin && (
                        <a
                          href={socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <IconLinkedin />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="team-card-glow"></div>
              </div>
            );
          })}
        </div>

      </section>


      {/* PARTNER NGO */}
      <section className="partner-section" id="partner">

        <div className="partner-bg" aria-hidden="true"></div>

        <div className="partner-layout">

          <div className="partner-content">
            <span className="reveal">04 — PARTNER NGO</span>

            <h2 className="reveal">
              IN PARTNERSHIP
              <br />
              WITH {teamData.partner.name}.
            </h2>

            <p className="about-lead reveal">{teamData.partner.tagline}</p>

            <p className="about-text reveal">{teamData.partner.body}</p>

            <div className="partner-programs reveal">
              {teamData.partner.programs.map((program) => (
                <span className="program-chip" key={program}>
                  {program}
                </span>
              ))}
            </div>

            <div className="partner-footer reveal">
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-value">{teamData.partner.founded}</span>
                  <span className="stat-label">Founded</span>
                </div>

                <div className="stat">
                  <span className="stat-value">{teamData.partner.location}</span>
                  <span className="stat-label">Based In</span>
                </div>

                <div className="stat">
                  <span className="stat-value">{teamData.partner.programs.length}</span>
                  <span className="stat-label">Focus Areas</span>
                </div>
              </div>

              <a
                href={teamData.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button partner-button"
              >
                VISIT SPARKLING WINGS
                <span>↗</span>
              </a>
            </div>
          </div>

          {teamData.partner.logo && (
            <div className="partner-logo-wrap reveal">
              <img
                src={teamData.partner.logo}
                alt={`${teamData.partner.name} logo`}
              />
            </div>
          )}

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="contact-bg" aria-hidden="true"></div>

        <div className="contact-content">
          <span className="reveal">05 — CONTACT</span>

          <h2 className="reveal">
            LET'S BUILD
            <br />
            SOMETHING TOGETHER.
          </h2>

          <p className="about-text reveal">
            Got an idea, a project, or just want to say hi?
            GROUP.18 is always up for a conversation.
          </p>

          {teamData.contact.email ? (
            <a
              href={`mailto:${teamData.contact.email}`}
              className="contact-email reveal"
            >
              {teamData.contact.email}
            </a>
          ) : (
            <div className="contact-email contact-email-placeholder reveal">
              EMAIL COMING SOON
            </div>
          )}

          <div className="contact-footer reveal">
            <span className="contact-footer-note">GROUP.18 © 2026</span>

            {(teamData.contact.github ||
              teamData.contact.instagram ||
              teamData.contact.linkedin) && (
              <div className="team-socials contact-socials">
                {teamData.contact.github && (
                  <a
                    href={teamData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GROUP.18 on GitHub"
                  >
                    <IconGithub />
                  </a>
                )}

                {teamData.contact.instagram && (
                  <a
                    href={teamData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GROUP.18 on Instagram"
                  >
                    <IconInstagram />
                  </a>
                )}

                {teamData.contact.linkedin && (
                  <a
                    href={teamData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GROUP.18 on LinkedIn"
                  >
                    <IconLinkedin />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

      </section>

    </main>
  );
}

export default App;
