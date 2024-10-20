import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingEffect = () => {
  const text1 = "YvagaCore";
  const text2 = "Tech Company";
  const typingSpeed = 100; // Velocidad de escritura
  const deletingSpeed = 50; // Velocidad de borrado
  const pauseTime = 1000; // Tiempo de pausa antes de borrar o escribir el siguiente texto

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [loop, setLoop] = useState(0); // Para alternar entre los textos

  const texts = [text1, text2];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const handleTyping = () => {
      const currentText = texts[loop % texts.length];
      if (!isDeleting) {
        // Escribiendo el texto
        setDisplayedText(currentText.slice(0, textIndex + 1));
        setTextIndex((prev) => prev + 1);

        if (textIndex === currentText.length) {
          // Pausa cuando termina de escribir el texto
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Borrando el texto
        setDisplayedText(currentText.slice(0, textIndex - 1));
        setTextIndex((prev) => prev - 1);

        if (textIndex === 0) {
          // Pausa antes de escribir el siguiente texto
          setIsDeleting(false);
          setLoop((prev) => prev + 1);
        }
      }
    };

    // Ajustamos el intervalo de escritura o borrado
    interval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, [textIndex, isDeleting, loop, texts]);

  return (
    <motion.p
      className="text-lg font-bold text-[#3b505a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.p>
  );
};

export default TypingEffect;
