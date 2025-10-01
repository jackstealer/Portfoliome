import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, order management, and admin dashboard.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.",
      image: "/api/placeholder/400/250",
      tech: ["React", "D3.js", "Express", "MongoDB", "Chart.js"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Weather App",
      description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/400/250",
      tech: ["React", "OpenWeather API", "Mapbox", "CSS3"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Tailwind", "Framer Motion", "Node.js"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and user presence indicators.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      featured: false
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-dark-200' : 'bg-gray-50'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-primary-500">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8" />
          
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Here are some of the projects I've worked on. Each project showcases different 
            aspects of my development skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-xl ${
                  darkMode 
                    ? 'bg-dark-100 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className={`w-full h-64 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  } flex items-center justify-center`}>
                    <span className={`text-6xl ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      🖼️
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveDemo}
                        className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CodeBracketIcon className="h-4 w-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h4>
                  
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } mb-4 leading-relaxed`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${
                          darkMode 
                            ? 'bg-primary-900/20 text-primary-400' 
                            : 'bg-primary-100 text-primary-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`group p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-dark-100 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-primary-900/20' : 'bg-primary-100'
                  }`}>
                    <span className="text-2xl">💻</span>
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      className={`p-2 rounded-lg ${
                        darkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      } transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      className={`p-2 rounded-lg ${
                        darkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      } transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h4>
                
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                } text-sm mb-4 leading-relaxed`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode 
                          ? 'bg-primary-900/20 text-primary-400' 
                          : 'bg-primary-100 text-primary-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className="h-5 w-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;