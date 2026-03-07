import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const FloatingButton = () => {
  return (
    <div className="fixed z-50 flex flex-col space-y-3 bottom-4 right-4">
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/595992617942?text=Hola%20me%20gustaria%20recibir%20informacion%20sobre%20los%20servicios%20que%20ofrece%20YvagaCore.%20Podrian%20asesorarme"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 transition-all bg-[rgba(209,209,209,0.23)] rounded-full shadow-lg hover:bg-[#77b9c5]"
      >
        <FaWhatsapp size={30} color="#46e433" />
      </a>

      {/* Botón de Gmail con fondo blanco e ícono rojo */}
      <a
        href="mailto:business@yvagacore.tech"
        className="p-3 transition-all bg-[rgba(255,255,255,0.84)] rounded-full shadow-lg hover:bg-[#77b9c5]"
      >
        <SiGmail size={30} color="#D14836" /> 
      </a>
    </div>
  );
};

export default FloatingButton;
