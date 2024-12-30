import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Full Stack Developer
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Building innovative web solutions with modern technologies
          </p>
          <div className="mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;