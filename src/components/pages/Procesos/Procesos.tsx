import {
  Building,
  CreditCard,
  EyeOff,
  Lock,
  MonitorSmartphone,
  ScanFace,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { SectionProcesos } from "./components/SectionProcesos";

export const Procesos = () => {
  return (
    <>
      <SectionProcesos
        title="Nuestros Servicios"
        subtitle="Soluciones diseñadas para cada necesidad"
        urlVideo="https://www.youtube.com/embed/la2sSBrI4zo"
        urlImagen="procesos/servicios.png"
        nombreVideo="Hero Video"
        direccion="izquierda"
        features={[
          {
            icon: <Users />,
            title: "Acompañamiento Total",
            description:
              "Te guiamos en cada fase de tu proyecto, desde la idea inicial hasta la producción final, asegurando un desarrollo exitoso y adaptado a tus necesidades.",
          },
          {
            icon: <Settings />,
            title: "Soluciones Flexibles",
            description:
              "Entendemos que cada empresa enfrenta desafíos únicos, por eso ofrecemos soluciones adaptadas a las problemáticas específicas, logrando así resultados óptimos en cada caso.",
          },
          {
            icon: <MonitorSmartphone />,
            title: "Aplicaciones Multiplataforma",
            description:
              "Desarrollamos aplicaciones tanto web como móviles, asegurando que estén disponibles para los usuarios donde y cuando los necesiten, en todos los dispositivos y situaciones.",
          },
          {
            icon: <TrendingUp />,
            title: "Innovación Constante",
            description:
              "Nos mantenemos a la vanguardia de las últimas tecnologías, ofreciendo soluciones modernas y eficientes que aseguran que siempre estarás un paso adelante en el mercado.",
          },
        ]}
      />
      <SectionProcesos
        title="Transformando la Educación Digital"
        subtitle="Impulsamos el Aprendizaje con Innovación, Personalización y Soporte Integral en Plataformas LMS"
        urlVideo="https://www.youtube.com/embed/OfRJpfb5Wdg"
        urlImagen="procesos/educa.png"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title="Seguridad en Evaluaciones Digitales"
        subtitle="Garantizando Integridad y Confianza en el Proceso de Evaluación"
        urlVideo="https://www.youtube.com/embed/XE1nt_pokxs"
        urlImagen="procesos/protoring.png"
        nombreVideo="Hero Video"
        direccion="izquierda"
        features={[
          {
            icon: <ScanFace />,
            title: "FaceID Seguro",
            description:
              "La verificación de identidad se realiza de manera precisa y confiable, asegurando que solo los usuarios autorizados accedan a cada examen en línea.",
          },
          {
            icon: <EyeOff />,
            title: "Detección de Movimiento",
            description:
              "Contamos con un sistema de monitoreo en tiempo real que identifica y registra cualquier actividad sospechosa o irregular durante la evaluación realizada, asegurando así la transparencia del proceso de examen.",
          },
          {
            icon: <ShieldCheck />,
            title: "Control de Ayudas",
            description:
              "Nuestra tecnología avanzada permite detectar cualquier asistencia no autorizada que podría comprometer la integridad del examen, garantizando así que cada evaluación se lleve a cabo de manera justa y equitativa.",
          },
          {
            icon: <Lock />,
            title: "Protección Integral",
            description:
              "Garantizamos la integridad académica mediante un sistema de proctoring confiable, adaptable y eficaz que asegura un proceso de evaluación seguro.",
          },
        ]}
      />
      <SectionProcesos
        title="Sistemas de Gestión Personalizados"
        subtitle="Optimiza procesos, maximiza resultados y adapta tu negocio a las demandas del mercado actual."
        urlVideo="https://www.youtube.com/embed/6Q1b_2RWq6Q"
        urlImagen="https://utfs.io/f/Nbwlwl0eTrfuX90QO1GCMJ27oKt5y9NivGzZ4mDHu1YnRjpb"
        nombreVideo="Hero Video"
        direccion="derecha"
      />
      <SectionProcesos
        title="Desarrollo de Apps a Medida para Empresas Modernas"
        subtitle="Aplicaciones móviles flexibles y escalables."
        urlVideo=""
        urlImagen=""
        nombreVideo="Hero Video"
        direccion="izquierda"
        esSoloImagenes={true}
        features={[
          {
            icon: <Smartphone />,
            title: "Tecnología Avanzada",
            description:
              "Construimos con Flutter y React Native, logrando aplicaciones rápidas, potentes y multiplataforma.",
          },
          {
            icon: <Building />,
            title: "Adaptación",
            description:
              "Ofrecemos soluciones versátiles para e-commerce, inmobiliarias, tecnología y diversas industrias, adaptándonos a las necesidades específicas de cada sector y optimizando el rendimiento de las aplicaciones.",
          },
          {
            icon: <CreditCard />,
            title: "Facturación y Pagos",
            description:
              "Contamos con pasarelas de pago avanzadas y sistemas de facturación seguros, diseñados para integrarse de manera fluida, garantizando así una experiencia de usuario optimizada y confiable en cada transacción.",
          },
          {
            icon: <User />,
            title: "Experiencia Intuitiva",
            description:
              "Diseños adaptativos y amigables, pensados para el confort y satisfacción de tus clientes.",
          },
        ]}
      />
    </>
  );
};
