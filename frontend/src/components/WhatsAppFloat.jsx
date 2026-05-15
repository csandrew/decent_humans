import { site } from '../data/site';

function WhatsAppFloat() {
  return (
    <a
      href={`${site.whatsappBase}?text=Hi%20Decent%20Humans`}
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.503 1.051 3.529l-1.042 3.027 3.147-.981c.967.525 2.033.814 3.112.814 3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm0 10.198c-.918 0-1.812-.248-2.592-.708l-.185-.105-1.866.581.635-1.822-.121-.192c-.481-.78-.735-1.682-.735-2.609 0-2.633 2.142-4.775 4.775-4.775s4.774 2.142 4.774 4.775c0 2.633-2.142 4.775-4.774 4.775zM12.031 2.167c-5.397 0-9.783 4.387-9.783 9.783 0 1.729.451 3.353 1.237 4.768l-1.298 3.759 3.886-1.207c1.362.752 2.92 1.172 4.558 1.172 5.397 0 9.783-4.387 9.783-9.783s-4.386-9.783-9.783-9.783z" />
      </svg>
    </a>
  );
}

export default WhatsAppFloat;
