// src/components/DonateButton.jsx
import { FaDonate, FaHeart } from 'react-icons/fa';

function DonateButton({ variant = 'default' }) {
  const baseStyles = "inline-flex items-center gap-2 font-semibold transition-all";
  
  const variants = {
    default: "bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg shadow-soft hover:shadow-medium",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg",
    small: "bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg text-sm"
  };

  return (
    <a
      href="https://wa.me/254700000000?text=I'd%20like%20to%20donate%20to%20Decent%20Humans"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      <FaDonate size={variant === 'small' ? 14 : 16} />
      Donate
      <FaHeart size={variant === 'small' ? 12 : 14} className="text-red-400" />
    </a>
  );
}

export default DonateButton;