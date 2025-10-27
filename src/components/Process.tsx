import { motion } from 'motion/react';
import { FileText, Calculator, CheckCircle, Key } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Apply Online',
    description: 'Complete our simple online application in minutes. No paperwork hassles.',
    step: '01',
  },
  {
    icon: Calculator,
    title: 'Get Pre-Approved',
    description: 'Receive your pre-approval decision within 24 hours. Know your budget.',
    step: '02',
  },
  {
    icon: CheckCircle,
    title: 'Final Approval',
    description: 'We work with you to gather documents and finalize your loan terms.',
    step: '03',
  },
  {
    icon: Key,
    title: 'Close & Move In',
    description: 'Close on your loan and get the keys to your new home. Celebration time!',
    step: '04',
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your mortgage has never been easier. Follow our streamlined process to homeownership.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-300 to-transparent -z-10" />
                )}

                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-br from-brand-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-brand-600" />
                  </div>

                  <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="bg-brand-600 hover:bg-brand-700 text-white px-10 py-4 rounded-xl text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Application
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
