import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '6285728961516'; // Format internasional tanpa +
  
  const handleSendMessage = () => {
    const text = message || 'Halo, saya tertarik dengan layanan Ratro Studio. Bisakah kita berdiskusi lebih lanjut?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all hover:scale-110 group relative"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {!isOpen && (
            <motion.span
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
        </button>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <div>Ratro Studio</div>
                  <div className="text-xs text-green-100">Biasanya membalas dalam 1 jam</div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 min-h-[200px]">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                <p className="text-sm text-gray-700">
                  Halo! 👋 <br />
                  Selamat datang di Ratro Studio. Ada yang bisa kami bantu?
                </p>
              </div>
              
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ketik pesan Anda disini..."
                className="w-full p-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
              />
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t">
              <button
                onClick={handleSendMessage}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Kirim via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
