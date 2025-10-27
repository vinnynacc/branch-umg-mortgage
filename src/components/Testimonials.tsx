import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & Michael Johnson',
    location: 'Austin, TX',
    text: 'UMG Mortgage made our first home purchase incredibly smooth. The team was responsive, knowledgeable, and got us a great rate. Highly recommend!',
    rating: 5,
    type: 'Purchase',
  },
  {
    name: 'David Chen',
    location: 'San Francisco, CA',
    text: 'Refinancing with UMG saved us over $500/month. The process was seamless and they kept us informed every step of the way.',
    rating: 5,
    type: 'Refinance',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    text: 'As a first-time buyer, I had many questions. The UMG team patiently answered everything and made me feel confident in my decisions.',
    rating: 5,
    type: 'Purchase',
  },
];

export function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">
                    {testimonial.type}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">Trusted by thousands of homeowners nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl text-brand-600 mb-1">A+</div>
              <p className="text-sm text-gray-600">BBB Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-brand-600 mb-1">4.9/5</div>
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-brand-600 mb-1">99%</div>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
