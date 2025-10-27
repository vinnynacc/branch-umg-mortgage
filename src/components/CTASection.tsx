import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 via-brand-700 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-100 mb-10 leading-relaxed">
              Take the first step toward your dream home or a better mortgage rate.
              Our team is here to help you every step of the way.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Call
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="tel:1-800-555-0123" className="flex items-center gap-3 text-white hover:text-brand-100 transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-brand-100">Call Us</p>
                <p className="text-lg">1-800-555-0123</p>
              </div>
            </a>

            <a href="mailto:info@umgmortgage.com" className="flex items-center gap-3 text-white hover:text-brand-100 transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-brand-100">Email Us</p>
                <p className="text-lg">info@umgmortgage.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
