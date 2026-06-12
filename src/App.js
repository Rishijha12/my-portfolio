import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks for reaching out! I will reply soon.');
  };

  return (
    <div className={`App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <nav className="navbar">
        <div className="brand">Rishi Jha</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a
            href="https://github.com/rishijha"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">iOS Developer</p>
          <h1>Rishi Jha</h1>
          <p className="hero-title">
            5+ years building native iOS apps with Swift &amp; SwiftUI. Currently shipping
            real-time audio/video calling with WebRTC at PerfectionGeeks Technologies.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View My Work
            </a>
            <a href="#contact" className="button button-secondary">
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Rishi_Jha_Resume.pdf"
              className="button button-tertiary"
            >
              Download Resume
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>2</strong>
              <span>Live App Store Apps</span>
            </div>
            <div className="stat-card">
              <strong>4.9K</strong>
              <span>App Ratings</span>
            </div>
            <div className="stat-card">
              <strong>5.0★</strong>
              <span>Latest App Rating</span>
            </div>
          </div>
        </div>
      </header>

      <main className="content-wrapper">
        <section id="about" className="section-panel about-section">
          <div className="section-heading">
            <span>About</span>
            <h2>Building apps people actually love.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a native iOS developer based in Gurugram, India, focused on crafting
                intuitive experiences that users trust and enjoy. I build modern SwiftUI apps,
                reliable UIKit flows, and real-time features that work smoothly at scale.
              </p>
              <p>
                My work is centered on strong product thinking, clear architecture, and a
                commitment to polished interactions. I enjoy collaborating with product teams
                to turn ambitious ideas into stable mobile apps.
              </p>
            </div>
            <div className="timeline-card">
              <h3>Work Timeline</h3>
              <ul className="timeline-list">
                <li>
                  <span className="role">PerfectionGeeks Technologies</span>
                  <span className="period">Apr 2025 – Present</span>
                </li>
                <li>
                  <span className="role">Freelance iOS Developer</span>
                  <span className="period">Sep 2023 – Present</span>
                </li>
                <li>
                  <span className="role">Upsquare</span>
                  <span className="period">May 2023 – Sep 2023</span>
                </li>
                <li>
                  <span className="role">Techuz InfoWeb Pvt. Ltd.</span>
                  <span className="period">Jan 2022 – May 2023</span>
                </li>
                <li>
                  <span className="role">I-Verve Infoweb INC</span>
                  <span className="period">Feb 2021 – Jan 2022</span>
                </li>
                <li>
                  <span className="role">Impero IT Services Pvt. Ltd.</span>
                  <span className="period">Aug 2019 – Aug 2020</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section-panel skills-section">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Deep expertise across iOS frameworks, networking, and app architecture.</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>iOS Frameworks</h3>
              <p>SwiftUI, UIKit, AVFoundation, CoreData, StoreKit, GameKit</p>
            </div>
            <div className="skill-group">
              <h3>Real-time & Networking</h3>
              <p>WebRTC, Socket.IO, WebSockets, REST APIs, Firebase</p>
            </div>
            <div className="skill-group">
              <h3>Languages</h3>
              <p>Swift, Objective-C</p>
            </div>
            <div className="skill-group">
              <h3>Architecture</h3>
              <p>MVVM, MVC, Combine</p>
            </div>
            <div className="skill-group">
              <h3>Tools</h3>
              <p>Xcode, Git, CocoaPods, SPM</p>
            </div>
            <div className="skill-group">
              <h3>Deployment</h3>
              <p>App Store Connect, TestFlight</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section-panel projects-section">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Highlighted apps and real-time experiences.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-title">
                <h3>Golfmerce</h3>
                <span className="project-badge">5.0★</span>
              </div>
              <p>SwiftUI golf marketplace app with a premium scorecard, booking flow, and rich product details.</p>
              <a
                href="https://apps.apple.com/us/app/golfmerce/id6748644108"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on App Store
              </a>
            </article>
            <article className="project-card">
              <div className="project-title">
                <h3>Smart Brain</h3>
                <span className="project-badge">4.6★</span>
              </div>
              <p>UIKit-powered brain training game with 4.9K ratings and polished interactive gameplay.</p>
              <a
                href="https://apps.apple.com/us/app/smart-brain-mind-blowing-game/id1535521299"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on App Store
              </a>
            </article>
            <article className="project-card">
              <div className="project-title">
                <h3>Real-time Calls & Chat</h3>
                <span className="project-badge project-badge-secondary">In Development</span>
              </div>
              <p>In-progress WebRTC + SwiftUI product for seamless audio, video, and messaging in one app.</p>
              <span className="project-link project-link-disabled">Shipping soon</span>
            </article>
          </div>
        </section>

        <section id="contact" className="section-panel contact-section">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Ready to launch your next iOS product?</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Get in touch</h3>
              <p>Reach out for freelance projects, full-time roles, or mobile product partnerships.</p>
              <div className="contact-info">
                <div>
                  <strong>Email</strong>
                  <p>rishijha937@gmail.com</p>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>+91 93743 23808</p>
                </div>
                <div>
                  <strong>LinkedIn</strong>
                  <a href="https://linkedin.com/in/rishi-jha-a03a08137" target="_blank" rel="noreferrer">
                    linkedin.com/in/rishi-jha-a03a08137
                  </a>
                </div>
              </div>
            </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="6" placeholder="Tell me about your project" required />
              </label>
              <button type="submit" className="button button-primary contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Designed for modern iOS product stories. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
