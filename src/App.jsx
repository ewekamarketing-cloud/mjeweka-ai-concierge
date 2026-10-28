const navItems = ['Home', 'About', 'Services', 'Contact'];

const features = [
  {
    title: 'Instant Answers',
    description:
      'Provide real-time guidance for visitors, customers, and prospects without making them wait.',
  },
  {
    title: '24/7 Availability',
    description:
      'The concierge is always on, helping users find what they need any time of day or night.',
  },
  {
    title: 'Smarter Engagement',
    description:
      'Turn discovery into action with personalized recommendations and streamlined communication.',
  },
];

const serviceCards = [
  'Lead Qualification',
  'Customer Support',
  'Service Recommendations',
  'Appointment Scheduling',
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">M</div>
          <span className="brand-name">MJEweka</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <button className="primary-button">Book a Demo</button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">AI Concierge Experience</span>
            <h1>Welcome your visitors with intelligent, human-like support.</h1>
            <p>
              MJEweka AI Concierge helps businesses guide people, answer questions, and
              convert interest into action with a polished digital experience.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Get Started</button>
              <button className="secondary-button">Learn More</button>
            </div>
            <ul className="mini-stats" aria-label="Key metrics">
              <li>
                <strong>24/7</strong>
                <span>Always available</span>
              </li>
              <li>
                <strong>2x</strong>
                <span>More engagement</span>
              </li>
              <li>
                <strong>Fast</strong>
                <span>Fewer drop-offs</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="AI concierge summary card">
            <div className="visual-card card-main">
              <span className="card-label">AI Concierge</span>
              <h2>How can I help you today?</h2>
              <div className="chat-row incoming">
                <span className="dot" />
                <p>Hi! I can help you find the best option for your needs.</p>
              </div>
              <div className="chat-row outgoing">
                <p>I need help with pricing and onboarding.</p>
              </div>
            </div>
            <div className="floating-badge">Response in under 10s</div>
          </div>
        </section>

        <section id="about" className="content-section section-alt">
          <div className="section-heading">
            <span className="eyebrow">About</span>
            <h2>Purpose-built for better customer journeys.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Everything your audience may need in one guided experience.</h2>
          </div>
          <div className="service-grid">
            {serviceCards.map((service) => (
              <div key={service} className="service-card">
                <span className="service-number">0{serviceCards.indexOf(service) + 1}</span>
                <h3>{service}</h3>
                <p>Deliver smarter support and clearer next steps with automated guidance.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section cta-section">
          <div className="cta-box">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Ready to bring AI concierge experiences to your brand?</h2>
            </div>
            <button className="primary-button">Talk to Us</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
