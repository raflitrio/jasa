import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ratroLogo from 'figma:asset/db7095bcc85522bef2c1bbf831ba79c35597b868.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('beranda')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={ratroLogo} alt="Ratro Logo" className="h-10 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('beranda')} className="hover:text-blue-600 transition-colors">
              Beranda
            </button>
            <button onClick={() => scrollToSection('layanan')} className="hover:text-blue-600 transition-colors">
              Layanan
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('kontak')} className="hover:text-blue-600 transition-colors">
              Kontak
            </button>
            <Button onClick={() => scrollToSection('kontak')}>
              Konsultasi Gratis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('beranda')} className="text-left hover:text-blue-600 transition-colors">
                Beranda
              </button>
              <button onClick={() => scrollToSection('layanan')} className="text-left hover:text-blue-600 transition-colors">
                Layanan
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-blue-600 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('kontak')} className="text-left hover:text-blue-600 transition-colors">
                Kontak
              </button>
              <Button onClick={() => scrollToSection('kontak')} className="w-full">
                Konsultasi Gratis
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
