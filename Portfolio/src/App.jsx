import { useState, useEffect } from 'react'
import './App.css'
import Squares from './components/Squares'
import TargetCursor from './components/TargetCursor'
import GradualBlur from './components/GradualBlur'
import ProfileCard from './components/ProfileCard'
import GooeyNav from './components/GooeyNav'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    window.location.href = 'mailto:Johnlargo@gmail.com'
  }

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Awards", href: "#awards", id: "awards" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  const handleNavClick = (item) => {
    scrollToSection(item.id)
  }

  return (
    <>
      {/* Custom Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      {/* Animated Squares Background */}
      <div className="squares-bg">
        <Squares 
          speed={0.3} 
          squareSize={50}
          direction='diagonal'
          borderColor='rgba(139, 92, 246, 0.15)'
          hoverFillColor='rgba(139, 92, 246, 0.08)'
        />
      </div>

      {/* Top Navigation - Logo Only */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-brand">
            <div className="nav-avatar-simple">
              <img src="/Pocoyo.gif" alt="Avatar" />
            </div>
            <div className="nav-logo">
              JOHN WAYNE<span> </span>LARGO
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Centered GooeyNav */}
      <div className="floating-nav">
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          onItemClick={handleNavClick}
        />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-top">
            {/* Profile Card */}
            <div className="hero-profile">
              <ProfileCard
                name="John Wayne Largo"
                title="Developer"
                handle="johnlargo91"
                status="My Portfolio"
                contactText="Contact Me"
                avatarUrl="/image.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleContactClick}
              />
            </div>
            
            <div className="hero-text-content">
              
              <h1 className="hero-title">
                <span className="line">JOHN WAYNE</span>
                <span className="line">LARGO</span>
              </h1>
              <p className="hero-subtitle">
                Passionate IT student with expertise in both frontend and backend development, 
                specializing in <span className="highlight">backend architecture</span> using React.js, 
                Java Spring Boot, and Firebase. Dedicated to crafting efficient, scalable solutions 
                while continuously expanding my technical horizons through collaborative innovation.
              </p>
              <div className="hero-cta">
                <a href="mailto:Johnlargo@gmail.com" className="btn btn-primary cursor-target">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline cursor-target" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                  View Projects
        </a>
      </div>
            </div>
          </div>
        </div>

     
      </section>

      {/* About Section with Gradual Blur */}
      <section className="about" id="about" style={{ position: 'relative' }}>
        <GradualBlur
          target="parent"
          position="top"
          height="8rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">01.</span>
            <h2 className="section-title">ABOUT ME</h2>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                A motivated Information Technology student specializing in full-stack development 
                with hands-on experience in React.js, Java Spring Boot, and Firebase.
              </p>
              <p>
                I have a proven ability to build practical, user-friendly solutions and I'm 
                committed to continuous learning and collaborative team success. Currently pursuing 
                my Bachelor's degree at Cebu Institute of Technology – University.
              </p>
              <p>
                Based in Talisay City, Philippines, I'm actively seeking opportunities to apply 
                my skills in real-world projects and grow as a developer.
              </p>
              
              <div className="about-stats">
                <div className="stat-item cursor-target">
                  <div className="stat-number">2026</div>
                  <div className="stat-label">Expected Graduation</div>
                </div>
                <div className="stat-item cursor-target">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat-item cursor-target">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Languages</div>
                </div>
                <div className="stat-item cursor-target">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Major Projects</div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="about-image-wrapper">
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-dot"></span>
                    <span className="code-dot"></span>
                    <span className="code-dot"></span>
                  </div>
                  <div className="code-body">
                    <div className="code-line">
                      <span className="code-line-number">1</span>
                      <span><span className="code-keyword">const</span> <span className="code-property">developer</span> = {'{'}</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">2</span>
                      <span>  <span className="code-property">name</span>: <span className="code-string">"John Wayne Largo"</span>,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">3</span>
                      <span>  <span className="code-property">role</span>: <span className="code-string">"Full-Stack Developer"</span>,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">4</span>
                      <span>  <span className="code-property">location</span>: <span className="code-string">"Philippines"</span>,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">5</span>
                      <span>  <span className="code-property">passion</span>: <span className="code-string">"Clean Code"</span>,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">6</span>
                      <span>  <span className="code-property">languages</span>: [</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">7</span>
                      <span>    <span className="code-string">"English"</span>, <span className="code-string">"Filipino"</span>, <span className="code-string">"Cebuano"</span></span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">8</span>
                      <span>  ],</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">9</span>
                      <span>  <span className="code-property">available</span>: <span className="code-keyword">true</span></span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">10</span>
                      <span>{'}'};</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Pyramid Layout */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">02.</span>
            <h2 className="section-title">TECH STACK</h2>
          </div>
          
          <div className="skills-pyramid">
            {/* Row 1 - 1 item centered */}
            <div className="skills-row skills-row-1">
              <div className="skill-category cursor-target">
                <div className="skill-icon">{'</>'}</div>
                <h3>Languages</h3>
                <div className="skill-list">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">PHP</span>
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
            </div>
            
            {/* Row 2 - 2 items */}
            <div className="skills-row skills-row-2">
              <div className="skill-category cursor-target">
                <div className="skill-icon">⚛️</div>
                <h3>Frameworks & Libraries</h3>
                <div className="skill-list">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Java Spring Boot</span>
                  <span className="skill-tag">Android Studio</span>
                  <span className="skill-tag">Kotlin</span>
                </div>
              </div>
              
              <div className="skill-category cursor-target">
                <div className="skill-icon">🗄️</div>
                <h3>Databases & Cloud</h3>
                <div className="skill-list">
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">AWS Architecture</span>
                  <span className="skill-tag">AWS Cloud</span>
                </div>
              </div>
            </div>
            
            {/* Row 3 - 1 item centered */}
            <div className="skills-row skills-row-3">
              <div className="skill-category cursor-target">
                <div className="skill-icon">🛠️</div>
                <h3>Tools & Platforms</h3>
                <div className="skill-list">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">ServiceNow PDI</span>
                  <span className="skill-tag">Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">03.</span>
            <h2 className="section-title">KEY PROJECTS</h2>
          </div>
          
          <div className="projects-grid">
            {/* Project 1 - TimEd */}
            <div className="project-card cursor-target">
              <div className="project-info">
                <div className="project-number">01</div>
                <h3 className="project-title">TimEd</h3>
                <p className="project-subtitle">Smart Time-In/Time-Out System (Capstone)</p>
                <p className="project-description">
                  A comprehensive time tracking solution featuring a web application and native 
                  Android component for seamless employee time management.
                </p>
                <ul className="project-features">
                  <li>Developed web interface using React.js with secure Java Spring Boot API</li>
                  <li>Integrated Firebase for scalable backend with real-time data synchronization</li>
                  <li>Cross-platform solution with native Android app built in Kotlin and XML</li>
                </ul>
                <div className="project-tech">
                  <span>React.js</span>
                  <span>Spring Boot</span>
                  <span>Firebase</span>
                  <span>Kotlin</span>
                </div>
              </div>
              <div className="project-visual project-visual-image">
                <img src="/TimEd.png" alt="TimEd Project" className="project-image" />
              </div>
            </div>
            
            {/* Project 2 - Garbage Management */}
            <div className="project-card cursor-target">
              <div className="project-info">
                <div className="project-number">02</div>
                <h3 className="project-title">EcoTrack</h3>
                <p className="project-subtitle">Hackathon Finalist: Garbage Management System</p>
                <p className="project-description">
                  A civic feedback system that achieved Finalist status at the May 2025 Hackathon, 
                  enabling communities to report and track waste disposal issues.
                </p>
                <ul className="project-features">
                  <li>Built on ServiceNow Personal Developer Instance (PDI) platform</li>
                  <li>Open Street View integration for pinpointing exact waste disposal coordinates</li>
                  <li>AI Chatbot integration for waste disposal guidance and community engagement</li>
                </ul>
                <div className="project-tech">
                  <span>ServiceNow PDI</span>
                  <span>Open Street View</span>
                  <span>AI Integration</span>
                </div>
              </div>
              <div className="project-visual">
                <div className="project-icon">♻️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Wider Cards */}
      <section className="awards" id="awards">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">04.</span>
            <h2 className="section-title">CERTIFICATIONS & AWARDS</h2>
          </div>
          
          <div className="awards-grid-wide">
            <div className="award-card-wide cursor-target">
              <div className="award-card-image">
                {/* Placeholder for certificate image */}
                <div className="award-placeholder">🏆</div>
              </div>
              <div className="award-card-content">
                <h4>AWS Architecture Certification</h4>
                <span>2025</span>
              </div>
            </div>
            
            <div className="award-card-wide cursor-target">
              <div className="award-card-image">
                <div className="award-placeholder">☁️</div>
              </div>
              <div className="award-card-content">
                <h4>AWS Cloud Foundations</h4>
                <span>2025</span>
              </div>
            </div>
            
            <div className="award-card-wide cursor-target">
              <div className="award-card-image">
                <div className="award-placeholder">🥇</div>
              </div>
              <div className="award-card-content">
                <h4>Hackathon Finalist</h4>
                <span>2025</span>
              </div>
            </div>
            
            <div className="award-card-wide cursor-target">
              <div className="award-card-image">
                <div className="award-placeholder">📱</div>
              </div>
              <div className="award-card-content">
                <h4>Huawei Certification</h4>
                <span>2024</span>
              </div>
            </div>
            
            <div className="award-card-wide cursor-target">
              <div className="award-card-image">
                <div className="award-placeholder">☕</div>
              </div>
              <div className="award-card-content">
                <h4>CodeChum Java Certification</h4>
                <span>2024</span>
              </div>
            </div>
            
            <div className="award-card-wide cursor-target">
              <div className="award-card-image">
                <div className="award-placeholder">💻</div>
              </div>
              <div className="award-card-content">
                <h4>C Programming Certification</h4>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Performance Section */}
      <section className="academics" id="academics">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">05.</span>
            <h2 className="section-title">ACADEMIC PERFORMANCE</h2>
          </div>
          
          <div className="academics-content">
            <div className="academics-info">
              <h3>Cebu Institute of Technology – University</h3>
              <p className="academics-degree">Bachelor of Science in Information Technology</p>
              <p className="academics-location">N. Bacalso Avenue, Cebu City, Philippines</p>
              <p className="academics-graduation">Expected Graduation: May 2026</p>
            </div>
            
            <div className="academics-cta">
              <p className="academics-description">
                View my complete academic transcript and grades to see my dedication to excellence in my studies.
              </p>
              <a 
                href="/grades.pdf" 
                download="JohnWayneLargo_Grades.pdf"
                className="btn btn-primary cursor-target"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Grades (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="section-number mono">06.</span>
              <h2 className="section-title contact-title">LET'S CONNECT</h2>
            </div>
            
            <p className="contact-text">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="contact-links">
              <a href="mailto:Johnlargo@gmail.com" className="contact-link cursor-target">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Johnlargo@gmail.com</span>
              </a>
              
              <a href="tel:+639105380358" className="contact-link cursor-target">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+63 910 538 0358</span>
              </a>
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
            
            <div className="contact-cta">
              <a href="mailto:Johnlargo@gmail.com" className="btn btn-primary cursor-target">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            J<span>.</span>LARGO
      </div>
          <p className="footer-text">
            Designed & Built by John Wayne Largo © {new Date().getFullYear()}
          </p>
          <div className="footer-social">
            <a href="mailto:Johnlargo@gmail.com" aria-label="Email" className="cursor-target">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-target">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-target">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
