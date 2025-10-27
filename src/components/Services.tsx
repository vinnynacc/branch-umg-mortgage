import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Home, RefreshCw, TrendingDown, Shield } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Purchase',
    description: 'Find the perfect mortgage for your new home with competitive rates and flexible terms.',
    features: ['First-time buyer programs', 'Jumbo loans', 'Conventional loans', 'FHA/VA loans'],
    color: 'brand',
  },
  {
    icon: RefreshCw,
    title: 'Refinancing',
    description: 'Lower your monthly payments or tap into your home equity with our refinancing options.',
    features: ['Rate & term refinance', 'Cash-out refinance', 'Streamline refinance', 'No closing cost options'],
    color: 'cyan',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Mortgage Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're buying or refinancing, we have the expertise to guide you through every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-brand-200">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                
                <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional benefits */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: TrendingDown, title: 'Low Rates', desc: 'Competitive pricing' },
            { icon: Shield, title: 'Secure Process', desc: 'Your data is protected' },
            { icon: RefreshCw, title: 'Fast Approval', desc: 'Quick decisions' },
            { icon: Home, title: 'Expert Guidance', desc: '24/7 support team' },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <benefit.icon className="w-10 h-10 text-brand-600 mx-auto mb-3" />
              <h4 className="text-lg mb-1 text-gray-900">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
