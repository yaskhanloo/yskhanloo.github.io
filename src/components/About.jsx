const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Me</h1>
        <p className="lead">
          Data scientist building NLP systems for clinical neurology. I extract structure 
          from messy medical text and create AI tools clinicians can validate.
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Background</h2>
          <p>
            I approach healthcare data problems with physics thinking and statistical rigor. 
            My work focuses on making clinical documentation structured and interpretable—
            turning German neurological reports into actionable data.
          </p>
          <p>
            Currently building NLP pipelines and annotation tools at University Hospital Bern's 
            neurology department, where I lead data strategy for research projects and bridge 
            the gap between AI development and clinical workflows.
          </p>
        </div>

        <div className="about-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>PhD in Biomedical Engineering</h3>
            <p className="institution">University of Bern • 2021-2025</p>
            <p>SNF-funded research (PRE-MITRA project)</p>
          </div>
          <div className="education-item">
            <h3>MSc Physics, Minor in Data Science</h3>
            <p className="institution">University of Zurich & ETH Zurich • 2018-2021</p>
            <p>Focus: Statistical modeling, likelihood inference, computational methods</p>
          </div>
          <div className="education-item">
            <h3>BSc Physics</h3>
            <p className="institution">Sharif University of Technology, Tehran • 2012-2018</p>
            <p>Coursework in neuroscience, biophysics, statistical mechanics</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Research & Data Manager</h3>
            <p className="company">Neurology Department, Inselspital Bern • 2024-Present</p>
            <ul>
              <li>Design NLP pipelines for German clinical report digitization</li>
              <li>Lead data strategy and AI integration for neurology research</li>
              <li>Build annotation tools and validation frameworks for clinical workflows</li>
              <li>Co-supervise master theses on clinical NLP and computational methods</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Research Assistant</h3>
            <p className="company">Institute for Research in Fundamental Sciences, Tehran • 2016-2018</p>
            <ul>
              <li>Computational neuroscience: data analysis of neural signals</li>
            </ul>
          </div>
        </div>

        <div className="about-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Machine Learning</h3>
              <ul>
                <li>NLP & Information Extraction</li>
                <li>Transformers (domain adaptation)</li>
                <li>Statistical modeling</li>
                <li>Interpretable AI</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Technologies</h3>
              <ul>
                <li>Python, PyTorch, scikit-learn</li>
                <li>React, FastAPI, Flask</li>
                <li>Docker, SQL, Git</li>
                <li>ETL pipelines & validation frameworks</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Healthcare AI</h3>
              <ul>
                <li>Clinical NER (German + multilingual)</li>
                <li>Medical text annotation tools</li>
                <li>Hospital data systems (EPIC, secuTrial)</li>
                <li>FAIR principles & reproducible research</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Recognition</h2>
          <ul>
            <li>CHF 100K CAIM Grant for AI in medical diagnostics (2022)</li>
            <li>ISMRM Trainee Stipends (2023, 2024)</li>
            <li>10+ peer-reviewed publications in cardiovascular imaging</li>
            <li>Bronze Medal, National Astronomy & Astrophysics Olympiad (2011)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;