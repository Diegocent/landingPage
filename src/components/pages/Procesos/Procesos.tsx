import { SectionProcesos } from "./components/SectionProcesos";

export const Procesos = () => {
  return (
    <>
      <SectionProcesos
        title="Servicios que ofrecemos"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        urlImagen="https://startup-template-sage.vercel.app/hero-light.png"
        nombreVideo="Hero Video"
        direccion="izquierda"
      />
      <SectionProcesos
        title="Plataformas Virtual"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/6Q1b_2RWq6Q"
        urlImagen="https://utfs.io/f/Nbwlwl0eTrfuKm9oxGs5mcROlEbCMUo8AYpVuPFLra20T3HS"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title="Proctoring y Control de Entornos"
        subtitle="Resumen que podemos brindarte"
        urlVideo="https://www.youtube.com/embed/GqyBWF_omcM"
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
        urlVideo="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        urlImagen="https://drive.google.com/file/d/16Ps5VC6YXKYnkcvqhX3A30Sr7NY9QNrN/view?usp=drive_link;https://drive.google.com/file/d/13AO8Q0P_e8wAwg4sjqOOVX7nfKob0sf0/view?usp=drive_link;https://drive.google.com/file/d/11Q_6P8E9dbEp7tOEsXekUNZxz5RHOt-M/view?usp=drive_link"
        nombreVideo="Hero Video"
        direccion="izquierda"
        esSoloImagenes={true}
      />
    </>
  );
};
