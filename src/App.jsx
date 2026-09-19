import "./App.css";
import FaultyTerminal from "./components/FaultyTerminal";

function App() {
  return (
    <main className="page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">GROUP.18</div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#team">TEAM</a>
        </div>

        <div className="nav-status">
          <span>●</span> ONLINE
        </div>
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


      {/* ABOUT PLACEHOLDER */}
      <section className="about-placeholder" id="about">

        <div>
          <span>02 — ABOUT</span>

          <h2>
            OUR TEAM
            <br />
            IS JUST GETTING STARTED.
          </h2>
        </div>

      </section>

    </main>
  );
}

export default App;