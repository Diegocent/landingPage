import { About } from "@/components/pages/About";
import { Contact } from "@/components/pages/Contact";
import { Features } from "@/components/pages/Features";
import { Home } from "@/components/pages/Home";
import { Routes, Route } from "react-router-dom";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
