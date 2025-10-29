import { Globe, Smartphone, Code2, Database, Palette, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Pembuatan website responsif dan modern dengan teknologi terkini seperti React, Next.js, dan Tailwind CSS.',
    features: ['Landing Page', 'Company Profile', 'E-Commerce', 'CMS Custom']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal.',
    features: ['React Native', 'Flutter', 'Progressive Web App', 'Hybrid Apps']
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Solusi lengkap dari frontend hingga backend dengan arsitektur modern dan scalable.',
    features: ['RESTful API', 'GraphQL', 'Microservices', 'Cloud Integration']
  },
  {
    icon: Database,
    title: 'Backend & Database',
    description: 'Pembangunan sistem backend yang robust dengan database yang teroptimasi.',
    features: ['Node.js', 'Golang', 'MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain interface yang menarik dan user experience yang intuitif untuk produk digital Anda.',
    features: ['Wireframing', 'Prototyping', 'Design System', 'Branding']
  },
  {
    icon: LineChart,
    title: 'Web Analytics & SEO',
    description: 'Optimasi website untuk mesin pencari dan analisis performa untuk meningkatkan konversi.',
    features: ['SEO Optimization', 'Google Analytics', 'Performance Tuning', 'A/B Testing']
  }
];

export function Services() {
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500'
  ];

  return (
    <section id="layanan" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Layanan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan pengembangan digital yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-gray-200 group">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-gray-900">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className={`w-1.5 h-1.5 bg-gradient-to-r ${gradients[index]} rounded-full`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
