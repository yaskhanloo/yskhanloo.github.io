const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Let's Connect</h1>
        <p className="contact-subtitle">
          Open to discussing clinical NLP projects, research collaborations, 
          or opportunities in healthcare AI.
        </p>

        <div className="contact-methods">
          <a href="mailto:yaskhanloo@gmail.com" className="contact-method">
            <div className="contact-icon">📧</div>
            <div className="contact-label">Email</div>
            <div className="contact-value">yaskhanloo@gmail.com</div>
          </a>

          <a href="https://linkedin.com/in/yaskhanloo" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-icon">💼</div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">yaskhanloo</div>
          </a>

          <a href="https://github.com/yaskhanloo" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-icon">💻</div>
            <div className="contact-label">GitHub</div>
            <div className="contact-value">yaskhanloo</div>
          </a>

          <a href="https://scholar.google.com/citations?user=yaskhanloo" target="_blank" rel="noopener noreferrer" className="contact-method">
            <div className="contact-icon">🎓</div>
            <div className="contact-label">Scholar</div>
            <div className="contact-value">Google Scholar</div>
          </a>
        </div>

        <div className="contact-note">
          <p>Currently exploring academic positions in clinical data science, research collaborations in clinical NLP, and building interpretable AI tools for healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;