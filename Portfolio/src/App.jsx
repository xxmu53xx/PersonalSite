import { useState, useEffect } from 'react'
import './App.css'
import Squares from './components/Squares'
import TargetCursor from './components/TargetCursor'
import GradualBlur from './components/GradualBlur'
import ProfileCard from './components/ProfileCard'
import GooeyNav from './components/GooeyNav'
import DecryptedText from './components/DecryptedText'
import CountUp from './components/CountUp'
import GlareHover from './components/GlareHover'
import ImageLightbox from './components/ImageLightbox'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSkillTab, setActiveSkillTab] = useState('languages')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-based fade animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
          entry.target.classList.remove('fade-out')
        } else {
          entry.target.classList.remove('fade-in-visible')
          entry.target.classList.add('fade-out')
        }
      })
    }, observerOptions)

    // Small delay to ensure DOM is updated after tab switch
    const timeoutId = setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-scroll')
      fadeElements.forEach(el => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [activeSkillTab])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    window.location.href = 'mailto:johnlargo91@gmail.com'
  }

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const navItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Awards", href: "#awards", id: "awards" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  const handleNavClick = (item) => {
    scrollToSection(item.id)
  }

  const skillsData = {
    languages: [
      { name: 'C', icon: '/Cicon.png' },
      { name: 'CSS', icon: '/CSSicon.png' },
      { name: 'HTML', icon: '/HTMLicon.png' },
      { name: 'Java', icon: '/JAVAicon.png' },
      { name: 'JavaScript', icon: '/JSicon.png' },
      { name: 'SQL', icon: '/SQLicon.png' },
      { name: 'PHP', icon: '/PHPicon.png' },
      { name: 'Python', icon: '/PYicon.png' },
    ],
    tools: [
      { name: 'Git', icon: '/GITicon.png' },
      { name: 'GitHub', icon: '/GITHUBicon.png' },
      { name: 'ServiceNow', icon: '/SNicon.png' },
      { name: 'PostMan', icon: '/PMicon.png' },
      { name: 'Canva', icon: '/CANVAicon.png' },
      { name: 'Figma', icon: '/FIGMAicon.png' },
      { name: 'WordPress', icon: '/WPicon.png' },
      { name: 'MySQL', icon: '/MYSQLicon.png' },
    ],
    platforms: [
      { name: 'AWS', icon: '/AWSicon.png' },
      { name: 'Firebase', icon: '/FBicon.png' },
      { name: 'Node.js', icon: '/NODEicon.png' },
      { name: 'React', icon: '/REACTicon.png' },
      { name: 'Spring Boot', icon: '/SPRINGicon.png' },
    ]
  }

  return (
    <>
      {/* Custom Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={false}
        parallaxOn={true}
      />

      {/* Image Lightbox */}
      <ImageLightbox 
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
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
      <section className="hero" id="hero">
        <div className="container hero-content">
          <div className="hero-top">
            {/* Profile Card */}
            <div className="hero-profile">
              <ProfileCard
                name="John Wayne Largo"
                title="Web Developer"
                handle="johnlargo91"
                status="Profile"
                contactText="Contact Me"
                avatarUrl="/image.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleContactClick}
              />
            </div>
            
            {/* Hero Text Content */}
            <div className="hero-text-content">
              <span className="hero-greeting">
                <DecryptedText text="WAZAAAAAAP!" animateOn="view" speed={40} maxIterations={8} />
              </span>
              <h1 className="hero-name">
                <DecryptedText text="John Wayne M. Largo" animateOn="view" speed={30} maxIterations={10} />
              </h1>
              <h2 className="hero-role">
                <DecryptedText text="Web Developer" animateOn="view" speed={35} maxIterations={8} />
              </h2>
              <p className="hero-description">
                <DecryptedText 
                  text="Passionate IT student with expertise in both frontend and backend development, specializing in backend architecture using React.js, Java Spring Boot, and Firebase. Dedicated to crafting efficient, scalable solutions while continuously expanding my technical horizons."
                  animateOn="view"
                  speed={20}
                  maxIterations={12}
                  revealDirection="start"
                />
              </p>
              <div className="hero-cta">
                <a href="mailto:johnlargo91@gmail.com" className="btn btn-outline cursor-target">
                  Get In Touch
                </a>
                <a href="/Resume.pdf" download="JohnWayneLargo_Resume.pdf" className="btn btn-primary cursor-target">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
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
                <DecryptedText 
                  text="A motivated Information Technology student specializing in full-stack development with hands-on experience in React.js, Java Spring Boot, and Firebase."
                  animateOn="view"
                  speed={30}
                  maxIterations={15}
                  revealDirection="start"
                />
              </p>
              <p>
                <DecryptedText 
                  text="I have a proven ability to build practical, user-friendly solutions and I'm committed to continuous learning and collaborative team success. Currently pursuing my Bachelor's degree at Cebu Institute of Technology – University."
                  animateOn="view"
                  speed={30}
                  maxIterations={15}
                  revealDirection="start"
                />
              </p>
              <p>
                <DecryptedText 
                  text="Based in Talisay City, Philippines, I'm actively seeking opportunities to apply my skills in real-world projects and grow as a developer."
                  animateOn="view"
                  speed={30}
                  maxIterations={15}
                  revealDirection="start"
                />
              </p>
              
              <div className="about-stats">
                <div className="stat-item cursor-target">
                  <div className="stat-number">
                    <CountUp from={2020} to={2026} duration={2} />
                  </div>
                  <div className="stat-label">Expected Graduation</div>
                </div>
                <div className="stat-item cursor-target">
                  <div className="stat-number">
                    <CountUp from={0} to={5} duration={2} />+
                  </div>
                  <div className="stat-label">Certificate</div>
                </div>
                <div className="stat-item cursor-target">
                  <div className="stat-number">
                    <CountUp from={0} to={3} duration={2} />+
                  </div>
                  <div className="stat-label">Languages</div>
                </div>
                <div className="stat-item cursor-target">
                  <div className="stat-number">
                    <CountUp from={0} to={2} duration={2} />+
                  </div>
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
                      <span>  <span className="code-property">languages</span>: [</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">6</span>
                      <span>    <span className="code-string">"English"</span>, <span className="code-string">"Filipino"</span>, <span className="code-string">"Cebuano"</span></span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">7</span>
                      <span>  ],</span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">8</span>
                      <span>  <span className="code-property">available</span>: <span className="code-keyword">true</span></span>
                    </div>
                    <div className="code-line">
                      <span className="code-line-number">9</span>
                      <span>{'}'};</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Card Grid Layout */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">02.</span>
            <h2 className="section-title">TECH STACK</h2>
          </div>
          
          <div className="skills-tabs">
            <div className="skills-tab-buttons">
              <button 
                className={`skills-tab-btn ${activeSkillTab === 'languages' ? 'active' : ''}`}
                onClick={() => setActiveSkillTab('languages')}
              >
                Languages
              </button>
              <button 
                className={`skills-tab-btn ${activeSkillTab === 'tools' ? 'active' : ''}`}
                onClick={() => setActiveSkillTab('tools')}
              >
                Tools
              </button>
              <button 
                className={`skills-tab-btn ${activeSkillTab === 'platforms' ? 'active' : ''}`}
                onClick={() => setActiveSkillTab('platforms')}
              >
                Platforms
              </button>
            </div>
            
            <div className="skills-card-grid">
              {skillsData[activeSkillTab].map((skill, index) => (
                <div key={index} className="skill-card cursor-target fade-scroll">
                  <div className="skill-card-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <span className="skill-card-name">
                    <DecryptedText text={skill.name} animateOn="view" speed={30} maxIterations={8} />
                  </span>
                </div>
              ))}
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
            <div className="project-card cursor-target fade-scroll">
              <div className="project-info">
                <div className="project-number">01</div>
                <h3 className="project-title"><DecryptedText text="TimEd" animateOn="view" speed={40} maxIterations={8} /></h3>
                <p className="project-subtitle"><DecryptedText text="Smart Time-In/Time-Out System (Capstone)" animateOn="view" speed={25} maxIterations={10} /></p>
                <p className="project-description">
                  <DecryptedText 
                    text="A comprehensive time tracking solution featuring a web application and native Android component for seamless employee time management."
                    animateOn="view"
                    speed={25}
                    maxIterations={12}
                    revealDirection="start"
                  />
                </p>
                <ul className="project-features">
                  <li><DecryptedText text="Developed web interface using React.js with secure Java Spring Boot API" animateOn="view" speed={20} maxIterations={10} /></li>
                  <li><DecryptedText text="Integrated Firebase for scalable backend with real-time data synchronization" animateOn="view" speed={20} maxIterations={10} /></li>
                  <li><DecryptedText text="Cross-platform solution with native Android app built in Kotlin and XML" animateOn="view" speed={20} maxIterations={10} /></li>
                </ul>
                <div className="project-tech">
                  <span>React.js</span>
                  <span>Spring Boot</span>
                  <span>Firebase</span>
                  <span>Kotlin</span>
                </div>
              </div>
              <div 
                className="project-visual project-visual-image project-clickable"
                onClick={() => openLightbox(['/TimEd.png', '/TPOSTER.png'])}
              >
                <img src="/TimEd.png" alt="TimEd Project" className="project-image" />
                <div className="project-image-overlay">
                  <span>Click to view</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 - WasteWise */}
            <div className="project-card cursor-target fade-scroll">
              <div className="project-info">
                <div className="project-number">02</div>
                <h3 className="project-title"><DecryptedText text="WasteWise" animateOn="view" speed={40} maxIterations={8} /></h3>
                <p className="project-subtitle"><DecryptedText text="Hackathon Finalist: Garbage Management System" animateOn="view" speed={25} maxIterations={10} /></p>
                <p className="project-description">
                  <DecryptedText 
                    text="A civic feedback system that achieved Finalist status at the May 2025 Hackathon, enabling communities to report and track waste disposal issues."
                    animateOn="view"
                    speed={25}
                    maxIterations={12}
                    revealDirection="start"
                  />
                </p>
                <ul className="project-features">
                  <li><DecryptedText text="Built on ServiceNow Personal Developer Instance (PDI) platform" animateOn="view" speed={20} maxIterations={10} /></li>
                  <li><DecryptedText text="Open Street View integration for pinpointing exact waste disposal coordinates" animateOn="view" speed={20} maxIterations={10} /></li>
                  <li><DecryptedText text="AI Chatbot integration for waste disposal guidance and community engagement" animateOn="view" speed={20} maxIterations={10} /></li>
                </ul>
                <div className="project-tech">
                  <span>ServiceNow PDI</span>
                  <span>Open Street View</span>
                  <span>AI Integration</span>
                </div>
              </div>
              <div 
                className="project-visual project-visual-image project-clickable"
                onClick={() => openLightbox(['/WasteWise.png', '/Hackathon.jpg'])}
              >
                <img src="/WasteWise.png" alt="WasteWise Project" className="project-image" />
                <div className="project-image-overlay">
                  <span>Click to view</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background Section */}
      <section className="education" id="education">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">04.</span>
            <h2 className="section-title">EDUCATIONAL BACKGROUND</h2>
          </div>
          
          <div className="education-timeline">
            {/* Elementary */}
            <div className="timeline-item fade-scroll">
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-card cursor-target" style={{ backgroundImage: 'url(/CBS.jpg)' }}>
                <div className="timeline-card-overlay"></div>
                <div className="timeline-card-content">
                  <span className="timeline-level">Elementary</span>
                  <h3 className="timeline-school">
                    <DecryptedText text="Cebu Bible Seminary - Christian Learning Center" animateOn="view" speed={25} maxIterations={10} />
                  </h3>
                  <p className="timeline-location">
                    <DecryptedText text="San Isidro, Talisay City, Cebu" animateOn="view" speed={20} maxIterations={8} />
                  </p>
                  <span className="timeline-year">2015 - 2016</span>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="timeline-item fade-scroll">
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-card cursor-target" style={{ backgroundImage: 'url(/SSAT.jpg)' }}>
                <div className="timeline-card-overlay"></div>
                <div className="timeline-card-content">
                  <span className="timeline-level">High School</span>
                  <h3 className="timeline-school">
                    <DecryptedText text="St. Scholastica's Academy - Tabunok" animateOn="view" speed={25} maxIterations={10} />
                  </h3>
                  <p className="timeline-location">
                    <DecryptedText text="Tabunok, Talisay City, Cebu" animateOn="view" speed={20} maxIterations={8} />
                  </p>
                  <span className="timeline-year">2016 - 2022</span>
                </div>
              </div>
            </div>

            {/* College */}
            <div className="timeline-item timeline-item-current fade-scroll">
              <div className="timeline-connector">
                <div className="timeline-dot timeline-dot-current"></div>
              </div>
              <div className="timeline-card cursor-target" style={{ backgroundImage: 'url(/CITU.jpg)' }}>
                <div className="timeline-card-overlay"></div>
                <div className="timeline-card-content">
                  <span className="timeline-level">College</span>
                  <h3 className="timeline-school">
                    <DecryptedText text="Cebu Institute of Technology - University" animateOn="view" speed={25} maxIterations={10} />
                  </h3>
                  <p className="timeline-location">
                    <DecryptedText text="N. Bacalso Avenue, Cebu City, Philippines" animateOn="view" speed={20} maxIterations={8} />
                  </p>
                  <span className="timeline-year">2022 - 2026</span>
                  <span className="timeline-status">Currently Enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - With Glare Hover */}
      <section className="awards" id="awards">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">05.</span>
            <h2 className="section-title">CERTIFICATIONS & AWARDS</h2>
          </div>
          
          <div className="awards-grid-wide">
            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/AWSArc.png'])}>
                  <img src="/AWSArc.png" alt="AWS Architecture Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="AWS Architecture Certificate" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2025</span>
                </div>
              </div>
            </GlareHover>
            
            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/AWSCloud.png'])}>
                  <img src="/AWSCloud.png" alt="AWS Cloud Foundations Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="AWS Cloud Foundations Certificate" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2025</span>
                </div>
              </div>
            </GlareHover>
            
            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/HackCert.jpg'])}>
                  <img src="/HackCert.jpg" alt="Hackathon Finalist" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="Hackathon Finalist" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2025</span>
                </div>
              </div>
            </GlareHover>
            
            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/HuwaweiCert.png'])}>
                  <img src="/HuwaweiCert.png" alt="Huawei Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="Huawei Certificate" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2024</span>
                </div>
              </div>
            </GlareHover>
            
            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/JavaCert.png'])}>
                  <img src="/JavaCert.png" alt="CodeChum Java Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="CodeChum Java Certificate" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2024</span>
                  <a href="https://citu.codechum.com/certificates/879" target="_blank" rel="noopener noreferrer" className="award-link">
                    Link Here
                  </a>
                </div>
              </div>
            </GlareHover>

            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/HTMLCert.jpg'])}>
                  <img src="/HTMLCert.jpg" alt="Introduction to HTML Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="Introduction to HTML" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2024</span>
                  <a href="https://www.sololearn.com/certificates/CC-EXFFXJAM" target="_blank" rel="noopener noreferrer" className="award-link">
                    Link Here
                  </a>
                </div>
              </div>
            </GlareHover>

            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/SQLCert.png'])}>
                  <img src="/SQLCert.png" alt="SQL Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="SQL Certificate of Completion" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2024</span>
                  <a href="https://drive.google.com/file/d/1oH9_mOEXsuV5pS_C3L3GwYffP7LwZ-Wh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="award-link">
                    Link Here
                  </a>
                </div>
              </div>
            </GlareHover>
            
            <GlareHover 
              className="award-card-glare cursor-target fade-scroll"
              glareColor="#9664f1"
              glareOpacity={0.3}
              borderColor="rgba(139, 92, 246, 0.3)"
              background="var(--bg-card)"
            >
              <div className="award-card-inner">
                <div className="award-card-image" onClick={() => openLightbox(['/CCert.png'])}>
                  <img src="/CCert.png" alt="C Programming Certificate" />
                  <div className="award-image-overlay"></div>
                </div>
                <div className="award-card-content">
                  <h4><DecryptedText text="C Programming Certificate" animateOn="view" speed={30} maxIterations={8} /></h4>
                  <span className="award-year">2024</span>
                </div>
              </div>
            </GlareHover>
          </div>
        </div>
      </section>

      {/* Academic Performance Section */}
      <section className="academics" id="academics">
        <div className="container">
          <div className="section-header">
            <span className="section-number mono">06.</span>
            <h2 className="section-title">ACADEMIC PERFORMANCE</h2>
          </div>
          
          <div className="academics-content">
            <div className="academics-info">
              <h3><DecryptedText text="Cebu Institute of Technology – University" animateOn="view" speed={25} maxIterations={12} /></h3>
              <p className="academics-degree"><DecryptedText text="Bachelor of Science in Information Technology" animateOn="view" speed={20} maxIterations={10} /></p>
              <p className="academics-location"><DecryptedText text="N. Bacalso Avenue, Cebu City, Philippines" animateOn="view" speed={20} maxIterations={10} /></p>
              <p className="academics-graduation"><DecryptedText text="Expected Graduation: May 2026" animateOn="view" speed={20} maxIterations={10} /></p>
            </div>
            
            <div className="academics-cta">
              <p className="academics-description">
                <DecryptedText text="View my complete academic transcript and grades to see my dedication to excellence in my studies." animateOn="view" speed={25} maxIterations={12} />
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
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-number mono">07.</span>
            <h2 className="section-title contact-title">GET IN <span className="highlight">TOUCH</span></h2>
          </div>
          
          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info fade-scroll">
              <h3 className="contact-info-title">
                <DecryptedText text="Let's work together!" animateOn="view" speed={30} maxIterations={10} />
              </h3>
              <p className="contact-info-text">
                <DecryptedText 
                  text="Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities."
                  animateOn="view"
                  speed={25}
                  maxIterations={12}
                  revealDirection="start"
                />
              </p>
              
              <div className="contact-details">
                <a href="mailto:johnlargo91@gmail.com" className="contact-detail-item cursor-target">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span>johnlargo91@gmail.com</span>
                </a>
                
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span>Talisay City, Cebu, Philippines</span>
                </div>
              </div>
              
              <div className="contact-socials">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn cursor-target" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn cursor-target" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://github.com/xxmu53xx" target="_blank" rel="noopener noreferrer" className="contact-social-btn cursor-target" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <form 
              className="contact-form fade-scroll" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                const body = `Hi, I'm ${name} (${email}).\n\n${message}`;
                window.location.href = `mailto:johnlargo91@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="form-input cursor-target"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="form-input cursor-target"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  className="form-input cursor-target"
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                  className="form-textarea cursor-target"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit cursor-target">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            JOHN WAYNE<span> </span>LARGO
          </div>
          <p className="footer-text">
            Designed & Built by John Wayne Largo © {new Date().getFullYear()}
          </p>
          <div className="footer-social">
            <a href="mailto:Johnlargo91@gmail.com" aria-label="Email" className="cursor-target">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://github.com/xxmu53xx" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-target">
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
