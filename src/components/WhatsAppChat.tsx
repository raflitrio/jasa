import { useState } from "react";
import { X, Send, MessageCircle, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);

  // Nomor WhatsApp RATRO (ganti dengan nomor yang sebenarnya)
  const whatsappNumber = "6285728961516"; // Format: country code + number (tanpa +)

  const predefinedMessages = [
    "Halo, saya ingin konsultasi tentang pembuatan website",
    "Berapa biaya untuk membuat website company profile?",
    "Saya tertarik dengan layanan e-commerce",
    "Berapa lama proses pembuatan website?"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const namePrefix = name.trim() ? `Halo, nama saya ${name}. ` : "";
    const fullMessage = namePrefix + message;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const handlePredefinedMessage = (msg: string) => {
    setMessage(msg);
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setShowNameInput(false);
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0 relative group"
          >
            <MessageCircle className="h-7 w-7 text-white" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Chat dengan kami
            </span>
          </Button>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm">
          <Card className="shadow-2xl overflow-hidden border-2 border-green-500">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-300 rounded-full border-2 border-green-500"></span>
                </div>
                <div>
                  <div>RATRO Support</div>
                  <div className="text-xs text-green-100 flex items-center gap-1">
                    <span className="h-2 w-2 bg-green-300 rounded-full"></span>
                    Online - Siap Membantu
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-600 rounded-full p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-gray-50 p-4 max-h-96 overflow-y-auto">
              {/* Welcome Message */}
              <div className="mb-4">
                <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-800 mb-2">
                    👋 Halo! Selamat datang di <strong>RATRO</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Kami siap membantu Anda dengan layanan pembuatan website profesional. 
                    Silakan pilih pesan di bawah atau tulis pertanyaan Anda.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                    <Check className="h-3 w-3" />
                    <span>Baru saja</span>
                  </div>
                </div>
              </div>

              {/* Name Input Section */}
              {showNameInput && (
                <div className="mb-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-700 mb-3">
                      Boleh kami tahu nama Anda? (opsional)
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama Anda"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleNameSubmit();
                          }
                        }}
                      />
                      <Button
                        size="sm"
                        onClick={handleNameSubmit}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        OK
                      </Button>
                    </div>
                    <button
                      onClick={() => setShowNameInput(false)}
                      className="text-xs text-gray-500 hover:text-gray-700 mt-2"
                    >
                      Lewati
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Messages */}
              {!showNameInput && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 mb-2">Pesan Cepat:</p>
                  {predefinedMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => handlePredefinedMessage(msg)}
                      className="block w-full text-left bg-white hover:bg-green-50 border border-gray-200 hover:border-green-500 rounded-lg p-3 text-sm text-gray-700 transition-all duration-200 shadow-sm"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Input */}
            {!showNameInput && (
              <div className="bg-white p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ketik pesan Anda..."
                    rows={2}
                    className="flex-1 resize-none text-sm"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-green-500 hover:bg-green-600 self-end"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  Pesan akan dikirim via WhatsApp
                </p>
              </div>
            )}
          </Card>

          {/* WhatsApp Branding */}
          <div className="text-center mt-2">
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1"
            >
              Powered by
              <span className="text-green-600">WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
