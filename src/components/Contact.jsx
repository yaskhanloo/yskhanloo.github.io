const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-intro">
        <h1>Let's Connect</h1>
        <p className="lead">
          Open to discussing clinical NLP projects, research collaborations, 
          or opportunities in healthcare AI.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h2>Email</h2>
            <a href="mailto:yaskhanloo@gmail.com">yaskhanloo@gmail.com</a>
            <p>Best for project inquiries and collaborations</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h2>LinkedIn</h2>
            <a href="https://linkedin.com/in/yaskhanloo" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yaskhanloo
            </a>
            <p>Let's connect professionally</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💻</div>
            <h2>GitHub</h2>
            <a href="https://github.com/yaskhanloo" target="_blank" rel="noopener noreferrer">
              github.com/yaskhanloo
            </a>
            <p>Code and experiments</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🎓</div>
            <h2>Google Scholar</h2>
            <a href="https://scholar.google.com/citations?user=yaskhanloo" target="_blank" rel="noopener noreferrer">
              View Publications
            </a>
            <p>Research papers in cardiovascular imaging</p>
          </div>
        </div>

        <div className="contact-info">
          <h2>Interests</h2>
          <p>
            Currently exploring:
          </p>
          <ul>
            <li>Academic positions in clinical data science</li>
            <li>Research collaborations in clinical NLP (German + multilingual)</li>
            <li>Consulting on interpretable AI for healthcare</li>
            <li>Building tools that bridge AI development and clinical workflows</li>
          </ul>
        </div>

        <div className="contact-cta">
          <p>
            Working on clinical text analysis, need validation frameworks, or want to 
            discuss how to make AI systems more interpretable? Let's talk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;