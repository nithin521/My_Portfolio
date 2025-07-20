import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  ArrowUp,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Manga Text Extractor",
      description:
        "A web application that extracts text from manga images using OCR technology. Built with React frontend and Flask backend, featuring image upload, text extraction, and download functionality.",
      technologies: ["React", "Flask", "Python", "OCR", "JavaScript", "CSS"],
      github: "https://github.com/nithin521/Manga-Text-Extractor",
      live: "https://mangatextextractor.netlify.app",
      image:
        "https://moewalls.com/wp-content/uploads/2023/04/manga-anime-collection-thumb.jpg",
    },
    {
      title: "Dog Breed Classifier",
      description:
        "An AI-powered web application that classifies dog breeds from uploaded images using machine learning. Features a React frontend with image upload, breed prediction, and confidence scoring.",
      technologies: [
        "React",
        "Machine Learning",
        "Python",
        "TensorFlow",
        "JavaScript",
        "CSS",
      ],
      github: "https://github.com/nithin521/Dog_Breed_Classifier_Frontend",
      live: "https://dogbreedclassifier.netlify.app/",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "FilmScope",
      description:
        "A comprehensive movie discovery platform built with React. Features movie search, detailed information, ratings, reviews, and personalized recommendations with a modern, responsive design.",
      technologies: ["React", "JavaScript", "CSS", "Movie API", "HTML"],
      github: "https://github.com/nithin521/FilmScope",
      live: "https://filmscope521.netlify.app/",
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Soil Classifier",
      description:
        "This project demonstrates how deep learning can be applied in agriculture to assist in soil identification, supporting better crop planning and land use.",
      technologies: [
        "React",
        "Machine Learning",
        "Python",
        "TensorFlow",
        "JavaScript",
        "CSS",
      ],
      github: "https://github.com/nithin521/soil-classifier",
      live: "https://soilclassifier123.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: <Code />,
      items: ["React", "JavaScript", "HTML5", "CSS3", "Context-API"],
    },
    {
      name: "Backend Development",
      icon: <Server />,
      items: ["Node.js", "Express.js", "Flask", "Python", "Nodemon"],
    },
    {
      name: "Database & Cloud",
      icon: <Database />,
      items: ["MySQL", "Firebase", "Netlify", "Vercel"],
    },
    {
      name: "Data Science & Tools",
      icon: <Smartphone />,
      items: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Keras",
        "scikit-learn",
        "Power BI",
        "Postman",
      ],
    },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Nithin</h2>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="nav-link"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content animate-on-scroll">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="hero-greeting">Hi, I'm</span>
                <span className="hero-name">Nithin</span>
                <span className="hero-role">Full Stack Developer</span>
              </h1>
              <p className="hero-description">
                Passionate developer creating innovative solutions with modern
                technologies. Specialized in web development. Experienced in
                building responsive, user-centric applications using React,
                Node.js, and modern frameworks.
              </p>
              <div className="hero-buttons">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="btn btn-primary"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
              <div className="hero-social">
                <a href="https://github.com/nithin521" className="social-link">
                  <Github />
                </a>
                <a href="#" className="social-link">
                  <Linkedin />
                </a>
                <a href="mailto:nithin28747@email.com" className="social-link">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <ChevronDown />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating digital experiences
            </p>
          </div>
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <p>
                I'm a dedicated Full Stack Developer with a passion for creating
                innovative web solutions. With expertise in modern frameworks
                and technologies, I bring ideas to life through clean, efficient
                code and thoughtful user experiences.
              </p>
              <p>
                My journey in software development has led me to work on diverse
                projects, from responsive web applications to complex backend
                systems. I'm always eager to learn new technologies and tackle
                challenging problems.
              </p>
              <div className="stats">
                <div className="stat-item animate-on-scroll">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item animate-on-scroll">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card animate-on-scroll">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <ul>
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card animate-on-scroll">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.live}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                      </a>
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's work together on your next project
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail />
                  <span>nithin28747@email.com</span>
                </div>
                <div className="contact-item">
                  <Globe />
                  <span>Hyderabad, India</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/nithin521" className="social-link">
                  <Github />
                </a>
                <a href="#" className="social-link">
                  <Linkedin />
                </a>
                <a href="mailto:nithin28747@email.com" className="social-link">
                  <Mail />
                </a>
              </div>
            </div>
            <form className="contact-form animate-on-scroll">
              <div className="form-group">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" required />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Nithin</h3>
              <p>
                Full Stack Developer passionate about creating innovative
                digital solutions.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("home")}>Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("projects")}>
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="footer-social">
                <a href="https://github.com/nithin521">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/nithin521">
                  <Linkedin />
                </a>
                <a href="mailto:nithin28747@email.com">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Nithin. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
