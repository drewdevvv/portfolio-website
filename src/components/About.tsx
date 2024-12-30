import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              My journey in software development began with a curiosity for creating
              intuitive and efficient solutions to real-world problems.
            </p>
            <p className="text-gray-600 mt-4">
              With experience in both front-end and back-end development, I enjoy
              building scalable applications that provide excellent user experiences.
              I'm constantly learning and adapting to new technologies while maintaining
              a strong foundation in software development principles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;