import { Award, Clock, DollarSign, Users, Zap, Shield } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Setiap project dikerjakan dengan standar kualitas tertinggi dan testing menyeluruh."
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Kami berkomitmen menyelesaikan project sesuai deadline yang telah disepakati."
    },
    {
      icon: DollarSign,
      title: "Harga Kompetitif",
      description: "Dapatkan website berkualitas premium dengan harga yang terjangkau dan transparan."
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Didukung oleh tim developer dan designer berpengalaman di bidangnya."
    },
    {
      icon: Zap,
      title: "Teknologi Terkini",
      description: "Menggunakan teknologi web terbaru untuk performa dan keamanan optimal."
    },
    {
      icon: Shield,
      title: "Support 24/7",
      description: "Dukungan teknis penuh setelah website live untuk memastikan kelancaran operasional."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-200 mb-4">Mengapa Memilih Kami</h2>
          <h3 className="text-white mb-4">
            Keunggulan RATRO yang Membuat Kami Berbeda
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Kami tidak hanya membuat website, tapi membangun solusi digital yang 
            memberikan nilai tambah untuk bisnis Anda.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-3">{reason.title}</h4>
                <p className="text-white/80 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">500+</div>
            <div className="text-white/80">Project Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">450+</div>
            <div className="text-white/80">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">5+</div>
            <div className="text-white/80">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">98%</div>
            <div className="text-white/80">Tingkat Kepuasan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
