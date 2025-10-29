import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO, PT Maju Jaya",
      company: "Retail Fashion",
      content: "RATRO sangat profesional dalam mengerjakan website e-commerce kami. Hasilnya melebihi ekspektasi dan support yang diberikan sangat responsif. Highly recommended!",
      rating: 5,
      initial: "BS"
    },
    {
      name: "Sarah Wijaya",
      position: "Marketing Manager",
      company: "Tech Startup",
      content: "Tim RATRO sangat membantu dalam mewujudkan visi kami untuk platform digital. Mereka tidak hanya membuat website, tapi juga memberikan saran yang valuable untuk bisnis kami.",
      rating: 5,
      initial: "SW"
    },
    {
      name: "Ahmad Hidayat",
      position: "Owner",
      company: "Restoran & Catering",
      content: "Proses pengerjaan sangat cepat dan hasil akhir website kami sangat memuaskan. Sistem pemesanan online yang dibuat RATRO sangat user-friendly dan meningkatkan penjualan kami.",
      rating: 5,
      initial: "AH"
    },
    {
      name: "Linda Kusuma",
      position: "Director",
      company: "Educational Institution",
      content: "Website company profile yang dibuat RATRO sangat membantu meningkatkan kredibilitas institusi kami. Desainnya modern dan mudah digunakan. Terima kasih RATRO!",
      rating: 5,
      initial: "LK"
    },
    {
      name: "Ricky Pratama",
      position: "Founder",
      company: "Property Developer",
      content: "RATRO berhasil membuat portal properti kami dengan fitur-fitur canggih yang memudahkan customer dalam mencari properti. Sistem manajemennya juga sangat membantu tim kami.",
      rating: 5,
      initial: "RP"
    },
    {
      name: "Diana Permata",
      position: "Business Owner",
      company: "Klinik Kesehatan",
      content: "Dashboard manajemen klinik yang dibuat sangat membantu operasional kami. Fitur-fiturnya lengkap dan mudah digunakan. Tim RATRO sangat responsif terhadap setiap feedback kami.",
      rating: 5,
      initial: "DP"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Testimoni</h2>
          <h3 className="mb-4">
            Apa Kata Klien Kami
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka 
            katakan tentang pengalaman bekerja sama dengan RATRO.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-blue-600">
                    <AvatarFallback className="bg-blue-600 text-white">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-xs text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
