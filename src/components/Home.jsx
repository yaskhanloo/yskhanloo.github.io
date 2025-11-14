const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>AI Expertise for Real-World Impact</h2>
        <p>
          I'm passionate about transforming healthcare through AI and data science. 
          With a focus on clinical NLP and medical imaging, I develop intelligent 
          systems that support better patient outcomes.
        </p>
        <div className="hero-buttons">
          <a href="/projects" className="btn btn-primary">
            See My Work
          </a>
          <a href="/contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>What I Build</h3>
            <p>
              Clinical NLP systems for automated report analysis, medical imaging 
              AI for diagnostic support, and data pipelines for healthcare analytics.
            </p>
          </div>
          <div className="feature-card">
            <h3>Tech Stack</h3>
            <p>
              Python, Transformers, spaCy, TensorFlow, PyTorch, Docker, FastAPI, 
              React, and cloud platforms for scalable AI solutions.
            </p>
          </div>
          <div className="feature-card">
            <h3>Current Focus</h3>
            <p>
              Clinical NLP in German healthcare settings, lightweight ML systems 
              for edge deployment, and interdisciplinary AI research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;