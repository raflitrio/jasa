import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import adminDashboard from 'figma:asset/c14f7b56ca091f82da4535620b5485d92e24aec1.png';
import companyProfile from 'figma:asset/e76b80c4a955faafb1fc1ebf69f21ca184edbe6d.png';

const portfolioItems = [
  {
    title: 'NovemberRun Admin Dashboard',
    description: 'Platform admin dashboard lengkap untuk mengelola event lari November Run dengan fitur manajemen pembayaran, peserta, dan tracking transaksi real-time.',
    image: adminDashboard,
    category: 'Full Stack Development',
    technologies: ['React.js', 'Golang', 'MySQL', 'Docker','Payment Gateway'],
    features: [
      'Dashboard analytics dengan real-time data',
      'Manajemen pembayaran dan transaksi',
      'Sistem autentikasi dan otorisasi',
      'RESTful API backend',
      'Containerized dengan Docker'
    ]
  },
  {
    title: 'Kara Wisata - Company Profile',
    description: 'Website company profile untuk bisnis travel dan wisata dengan tampilan menarik untuk menampilkan berbagai paket wisata dan destinasi.',
    image: companyProfile,
    category: 'Web Development',
    technologies: ['React.js', 'Tailwind CSS', 'Responsive Design'],
    features: [
      'Design modern dan responsif',
      'Katalog paket wisata',
      'Gallery foto destinasi',
      'Contact form integration',
      'Optimasi SEO'
    ]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Portfolio <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat beberapa proyek yang telah kami kerjakan dengan teknologi terkini dan hasil berkualitas tinggi
          </p>
        </motion.div>

        <div className="space-y-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-gray-200 hover:shadow-2xl transition-all hover:scale-[1.01]">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-gray-900">Teknologi yang Digunakan:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-gray-900">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Tertarik dengan hasil kerja kami? Mari diskusikan proyek Anda!
          </p>
        </div>
      </div>
    </section>
  );
}
