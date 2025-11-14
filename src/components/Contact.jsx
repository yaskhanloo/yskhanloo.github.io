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
          <div className="contact-method">
            <div className="contact-icon">📧</div>
            <div className="contact-label">Email</div>
            <div className="contact-value">yaskhanloo@gmail.com</div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">💼</div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">yaskhanloo</div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">💻</div>
            <div className="contact-label">GitHub</div>
            <div className="contact-value">yaskhanloo</div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">🎓</div>
            <div className="contact-label">Scholar</div>
            <div className="contact-value">Google Scholar</div>
          </div>
        </div>

        <div className="contact-note">
          <p>Currently exploring academic positions in clinical data science, research collaborations in clinical NLP, and building interpretable AI tools for healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;