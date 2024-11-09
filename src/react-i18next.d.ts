import "react-i18next";
import es from "./locales/es.json";

declare module "react-i18next" {
  interface Resources {
    translation: typeof es;
  }
}
