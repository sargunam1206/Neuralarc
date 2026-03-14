import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/9597842418"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 ml-4 z-50 bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppFloat;
