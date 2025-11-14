const Projects = () => {
  const projects = [
    {
      title: "Clinical NER for German Neurology Reports",
      category: "Clinical NLP",
      description: "Named entity recognition system for extracting structured data from German stroke and neurology reports. Combines rule-based methods with transformer models for domain-specific medical text.",
      tech: ["Python", "Transformers", "spaCy", "regex", "FastAPI"],
      highlights: [
        "Extracts clinical entities from unstructured German text",
        "Hybrid approach: regex patterns + fine-tuned transformers",
        "Designed for real-world clinical validation workflows"
      ],
      link: null,
      github: null
    },
    {
      title: "Medical Text Annotation Tool",
      category: "Full-Stack",
      description: "Lightweight web interface for clinical text annotation. Built for neurologists to label entities in medical reports efficiently, with validation and export capabilities.",
      tech: ["React", "Flask", "PostgreSQL", "Docker"],
      highlights: [
        "Minimal UI focused on annotation speed",
        "Multi-user support with role-based access",
        "Export to standard formats for model training"
      ],
      link: null,
      github: null
    },
    {
      title: "Healthcare Data Validation Pipeline",
      category: "MLOps",
      description: "ETL framework for hospital data with automated quality checks. Validates clinical datasets before they enter analysis pipelines, catching errors early.",
      tech: ["Python", "pandas", "SQL", "Docker", "pytest"],
      highlights: [
        "Automated schema validation and integrity checks",
        "Handles messy real-world hospital data",
        "Logging and error reporting for data quality monitoring"
      ],
      link: null,
      github: null
    },
    {
      title: "Chatbot Deployment System",
      category: "Full-Stack",
      description: "Multi-service architecture for deploying medical chatbots. React frontend, Flask backend, and AI model serving with vLLM/Ollama. Currently handling container networking and proxy configurations.",
      tech: ["React", "Flask", "Docker", "nginx", "vLLM"],
      highlights: [
        "Three-tier architecture with reverse proxy",
        "Model serving with Llama 3.2 3B Instruct",
        "Deployment-ready containerized setup"
      ],
      link: null,
      github: null
    }
  ];

  return (
    <div className="projects">
      <section className="projects-intro">
        <h1>Projects</h1>
        <p className="lead">
          NLP systems and tools for clinical text analysis. Focus on German medical reports, 
          annotation workflows, and production-ready deployments.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <h2>{project.title}</h2>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-highlights">
              <h3>Key Features</h3>
              <ul>
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            {(project.link || project.github) && (
              <div className="project-links">
                {project.link && (
                  <a href={project.link} className="btn btn-secondary">
                    View Project
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="btn btn-secondary">
                    GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
};

export default Projects;