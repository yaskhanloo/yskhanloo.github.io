const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p className="contact-subtitle">
          Open to discussing clinical NLP projects, research collaborations, 
          or opportunities in healthcare AI.
        </p>

        <div className="contact-links">
          <a href="mailto:yaskhanloo@gmail.com" className="contact-link">
            <span className="contact-link-icon">📧</span>
            <span className="contact-link-text">yaskhanloo@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/yaskhanloo" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-icon">💼</span>
            <span className="contact-link-text">linkedin.com/in/yaskhanloo</span>
          </a>

          <a href="https://github.com/yaskhanloo" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-icon">💻</span>
            <span className="contact-link-text">github.com/yaskhanloo</span>
          </a>

          <a href="https://scholar.google.com/citations?user=yaskhanloo" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-icon">🎓</span>
            <span className="contact-link-text">Google Scholar</span>
          </a>
        </div>

        <div className="contact-interests">
          <p>Currently exploring academic positions in clinical data science, research collaborations in clinical NLP, and building interpretable AI tools for healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;