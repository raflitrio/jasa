import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    "Tim profesional berpengalaman lebih dari 5 tahun",
    "Desain website modern dan responsif",
    "SEO friendly untuk peringkat mesin pencari terbaik",
    "Dukungan teknis 24/7 setelah website live",
    "Harga kompetitif dengan kualitas terjamin",
    "Proses pengerjaan cepat dan tepat waktu"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTQ4MDU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="RATRO Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-500 rounded-2xl -z-10 opacity-20"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-blue-600 mb-4">Tentang Kami</h2>
            <h3 className="mb-6">
              Mitra Digital Terpercaya untuk Kesuksesan Bisnis Anda
            </h3>
            
            <p className="text-gray-600 mb-6">
              <strong>RATRO</strong> adalah perusahaan jasa pembuatan website yang berdedikasi 
              untuk membantu bisnis Anda berkembang di dunia digital. Dengan pengalaman 
              bertahun-tahun dan tim profesional, kami telah membantu ratusan klien 
              mencapai tujuan online mereka.
            </p>

            <p className="text-gray-600 mb-8">
              Kami memahami bahwa setiap bisnis memiliki kebutuhan yang unik. Oleh karena itu, 
              kami menawarkan solusi website yang disesuaikan dengan kebutuhan spesifik Anda, 
              mulai dari website company profile, toko online, hingga aplikasi web kompleks.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
