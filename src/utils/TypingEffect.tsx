import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingEffect = () => {
  const text = "Desarrollamos apliaciones mobiles y webs. Creamos soluciones personalizadas para potenciar y simplificar la gestion de tu empresa";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;

      if (index === text.length-1) {
        clearInterval(intervalId);
      }
    }, 60); // Velocidad de escritura (en milisegundos)

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <motion.p
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[#3b505a]">{displayedText}</span>
    </motion.p>
  );
};

export default TypingEffect;
