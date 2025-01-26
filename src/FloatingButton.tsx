import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <div className="fixed z-50 flex flex-col space-y-3 bottom-4 right-4">
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/+595974853466"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 transition-all bg-[#3B505A] rounded-full shadow-lg hover:bg-[#77b9c5]"
      >
        <FaWhatsapp size={30} color="white" />
      </a>

      {/* Botón de Mail */}
      <a
        href="mailto:business@yvagacore.tech"
        className="p-3 transition-all bg-[#3B505A] rounded-full shadow-lg hover:bg-[#77b9c5]"
      >
        <FaEnvelope size={30} color="white" />
      </a>
    </div>
  );
};

export default FloatingButton;
