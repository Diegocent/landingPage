import { SectionProcesos } from "./components/SectionProcesos";

export const Procesos = () => {
  return (
    <>
      <SectionProcesos
        title="Servicios que ofrecemos"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/la2sSBrI4zo"
        urlImagen="https://startup-template-sage.vercel.app/hero-light.png"
        nombreVideo="Hero Video"
        direccion="izquierda"
      />
      <SectionProcesos
        title="Plataformas Virtual"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/OfRJpfb5Wdg"
        urlImagen="https://utfs.io/f/Nbwlwl0eTrfuKm9oxGs5mcROlEbCMUo8AYpVuPFLra20T3HS"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title="Proctoring y Control de Entornos"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/XE1nt_pokxs"
        urlImagen="https://utfs.io/f/Nbwlwl0eTrfuKm9oxGs5mcROlEbCMUo8AYpVuPFLra20T3HS"
        nombreVideo="Hero Video"
        direccion="izquierda"
      />
      <SectionProcesos
        title="Sistemas"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/6Q1b_2RWq6Q"
        urlImagen="https://utfs.io/f/Nbwlwl0eTrfuX90QO1GCMJ27oKt5y9NivGzZ4mDHu1YnRjpb"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title="Apps"
        subtitle="Resumen que podemos brindarte"
        urlVideo=""
        urlImagen=""
        nombreVideo="Hero Video"
        direccion="izquierda"
        esSoloImagenes={true}
      />
    </>
  );
};
