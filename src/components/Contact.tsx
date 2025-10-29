import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kirim email menggunakan mailto
    const subject = `Pesan dari ${formData.name} - Website Ratro Studio`;
    const body = `
Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}

Pesan:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:rtriofansyah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    alert('Terima kasih! Aplikasi email Anda akan terbuka. Silakan kirim pesan tersebut.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontak" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Hubungi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya proyek atau ide yang ingin diwujudkan? Mari berdiskusi dan mulai kolaborasi bersama kami
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-gray-900">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-700">
                        Nama Lengkap
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm text-gray-700">
                        Nomor Telepon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="08xx xxxx xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-700">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ceritakan tentang proyek yang ingin Anda buat..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Send className="mr-2" size={18} />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href="mailto:rtriofansyah@gmail.com" className="text-gray-900 hover:text-blue-600 transition-colors">rtriofansyah@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Telepon</div>
                    <a href="tel:+6285728961516" className="text-gray-900 hover:text-blue-600 transition-colors">+62 857-2896-1516</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <a href="https://wa.me/6285728961516" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-600 transition-colors">+62 857-2896-1516</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white border-0 shadow-xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl">Konsultasi Gratis</h3>
                <p className="text-sm text-blue-100">
                  Dapatkan konsultasi gratis untuk proyek Anda. Kami siap membantu mewujudkan ide digital Anda.
                </p>
                <div className="pt-2">
                  <div className="text-sm text-blue-100">Jam Operasional:</div>
                  <div>Senin - Jumat: 09.00 - 18.00 WIB</div>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <div className="text-sm text-blue-100">Alamat:</div>
                  <div className="text-sm">Jl Abdi Praja, Tayem</div>
                  <div className="text-sm">Karangpucung, Cilacap</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
