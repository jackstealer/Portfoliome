import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", color: "text-blue-500" },
        { name: "TypeScript", icon: "🔷", color: "text-blue-600" },
        { name: "Next.js", icon: "▲", color: "text-gray-800 dark:text-white" },
        { name: "Tailwind CSS", icon: "🎨", color: "text-teal-500" },
        { name: "HTML5", icon: "🌐", color: "text-orange-500" },
        { name: "CSS3", icon: "🎯", color: "text-blue-400" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
        { name: "Express.js", icon: "🚀", color: "text-gray-700 dark:text-gray-300" },
        { name: "Python", icon: "🐍", color: "text-yellow-500" },
        { name: "REST APIs", icon: "🔗", color: "text-purple-500" },
        { name: "GraphQL", icon: "🔺", color: "text-pink-500" },
        { name: "Socket.io", icon: "⚡", color: "text-yellow-400" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "🍃", color: "text-green-600" },
        { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
        { name: "MySQL", icon: "🗄️", color: "text-orange-600" },
        { name: "Firebase", icon: "🔥", color: "text-yellow-500" },
        { name: "Redis", icon: "📦", color: "text-red-500" },
        { name: "Prisma", icon: "⚪", color: "text-gray-600 dark:text-gray-400" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📝", color: "text-orange-500" },
        { name: "Docker", icon: "🐳", color: "text-blue-500" },
        { name: "AWS", icon: "☁️", color: "text-orange-400" },
        { name: "Figma", icon: "🎨", color: "text-purple-500" },
        { name: "VS Code", icon: "💻", color: "text-blue-600" },
        { name: "Postman", icon: "📮", color: "text-orange-500" },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-dark-300' : 'bg-white'
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
            My <span className="text-primary-500">Skills</span>
          </h2>
          
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8" />
          
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            I work with a diverse set of technologies to build modern, scalable applications.
            Here are the tools and technologies I'm proficient in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-dark-200 border border-gray-700' 
                  : 'bg-gray-50 border border-gray-200'
              } hover:shadow-lg transition-all duration-300`}
            >
              <motion.h3
                variants={itemVariants}
                className={`text-xl font-semibold mb-6 text-center ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } pb-3`}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className={`flex items-center p-3 rounded-lg ${
                      darkMode 
                        ? 'bg-dark-100 hover:bg-gray-700' 
                        : 'bg-white hover:bg-gray-50'
                    } shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </span>
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    } group-hover:${skill.color} transition-colors duration-200`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-semibold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Core Competencies
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: "React & Next.js", level: 95 },
              { skill: "Node.js & Express", level: 90 },
              { skill: "TypeScript", level: 88 },
              { skill: "MongoDB & SQL", level: 85 },
              { skill: "Tailwind CSS", level: 92 },
              { skill: "AWS & DevOps", level: 80 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-4 rounded-lg ${
                  darkMode ? 'bg-dark-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.skill}
                  </span>
                  <span className="text-primary-500 font-semibold">
                    {item.level}%
                  </span>
                </div>
                <div className={`w-full bg-gray-300 rounded-full h-2 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    className="bg-primary-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;