import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: CodeBracketIcon,
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend technologies, creating seamless end-to-end solutions."
    },
    {
      icon: RocketLaunchIcon,
      title: "Modern Technologies",
      description: "Always staying updated with the latest frameworks and tools to deliver cutting-edge applications."
    },
    {
      icon: AcademicCapIcon,
      title: "Continuous Learning",
      description: "Passionate about learning new technologies and best practices to improve development efficiency."
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-dark-200' : 'bg-gray-50'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About <span className="text-primary-500">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed space-y-4`}
            >
              <p>
                Hello! I'm Atul Raj Gautam, a passionate full-stack developer with a love for creating 
                innovative web solutions. My journey in web development began several years ago, 
                and I've been constantly evolving my skills to stay at the forefront of technology.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Node.js, and various 
                databases. My approach to development focuses on creating user-centric applications 
                that not only look great but also provide exceptional functionality and performance.
              </p>
              
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community. I believe in continuous 
                learning and am always excited to take on new challenges.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <div className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-primary-900/20 text-primary-400' : 'bg-primary-100 text-primary-700'
              }`}>
                🎯 Problem Solver
              </div>
              <div className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-primary-900/20 text-primary-400' : 'bg-primary-100 text-primary-700'
              }`}>
                🚀 Innovation Driven
              </div>
              <div className={`px-4 py-2 rounded-lg ${
                darkMode ? 'bg-primary-900/20 text-primary-400' : 'bg-primary-100 text-primary-700'
              }`}>
                🌟 Quality Focused
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-start space-x-4 p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-dark-100 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "20+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className={`text-sm md:text-base ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;