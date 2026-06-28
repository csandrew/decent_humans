import { FaCommentDots, FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site';

const whatsappBase = import.meta.env.VITE_WHATSAPP_BASE || site.whatsappBase;

function WhatsAppFloat() {
  return (
    <a
      href={`${whatsappBase}?text=Hi%20Decent%20Humans`}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_25px_rgba(37,211,102,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(37,211,102,0.3)] sm:bottom-6 sm:right-6"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
        <FaWhatsapp size={22} />
      </div>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
      <FaCommentDots className="sm:hidden" size={18} />
    </a>
  );
}

export default WhatsAppFloat;