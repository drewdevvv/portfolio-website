import { motion } from 'framer-motion';

const skills = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  backend: ['Node.js', 'Express', 'Python', 'Django'],
  database: ['PostgreSQL', 'MongoDB', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'CI/CD'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;