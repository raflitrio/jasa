import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import ratroLogo from 'figma:asset/db7095bcc85522bef2c1bbf831ba79c35597b868.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={ratroLogo} alt="Ratro Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm">
              Menyediakan solusi digital terbaik untuk mengembangkan bisnis Anda di era digital.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Full Stack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:rtriofansyah@gmail.com" className="hover:text-blue-400 transition-colors">
                  Email: rtriofansyah@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6285728961516" className="hover:text-blue-400 transition-colors">
                  Phone: +62 857-2896-1516
                </a>
              </li>
              <li className="text-gray-400">Jl Abdi Praja, Tayem</li>
              <li className="text-gray-400">Karangpucung, Cilacap</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Ratro Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
