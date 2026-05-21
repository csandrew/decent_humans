import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site';

// In WhatsAppFloat.jsx and other components
const whatsappBase = import.meta.env.VITE_WHATSAPP_BASE || site.whatsappBase

function WhatsAppFloat() {
  return (
    <a
      href={`${site.whatsappBase}?text=Hi%20Decent%20Humans`}
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-medium transition-all duration-300 hover:shadow-hover group overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center justify-center w-14 h-14 shrink-0">
        <FaWhatsapp size={28} />
      </div>
      
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-bold pr-4">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppFloat;