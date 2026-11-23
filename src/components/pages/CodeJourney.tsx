import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { DialogUser } from "./DialogUser";
import { VSCodeWindow, highlight } from "./VSCodeWindow";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Hero: scroll writes the code, builds it, sketches the app and brings it to life.
 * Everything is drawn with HTML/SVG on a fixed 560x360 canvas that is scaled to fit,
 * so it stays sharp at any size. Debug (dev only): ?hero=0.5 freezes the view at that point.
 */

const W = 560;
const H = 360;

const COPY = {
  es: {
    cta: "Hablemos de tu proyecto",
    steps: [
      {
        eyebrow: "Software factory en Paraguay",
        title: "Desarrollo de software a medida para tu empresa",
        body: "Un equipo que escucha antes de programar y construye aplicaciones web, móviles y sistemas a tu medida.",
      },
      {
        eyebrow: "Código",
        title: "Cada línea, escrita para tu negocio",
        body: "Código limpio y probado, que se publica solo y está listo para crecer con tu empresa.",
      },
      {
        eyebrow: "Diseño",
        title: "Validamos cada avance contigo",
        body: "Primero la estructura, después los detalles. Ves crecer el producto en entregas frecuentes y decides en cada etapa.",
      },
      {
        eyebrow: "Resultado",
        title: "Tu sistema, funcionando en cada equipo",
        body: "Ventas, stock, pedidos y reportes en un solo lugar, desde la computadora o el celular.",
      },
    ],
    code: `import { Panel, Tarjeta, Grafico, Tabla } from "@/ui";
import { useVentas } from "@/datos";

export function Ventas({ empresa }) {
  const datos = useVentas(empresa.id);

  return (
    <Panel titulo="Ventas del mes">
      <Tarjeta titulo="Ingresos" valor={datos.total} />
      <Tarjeta titulo="Pedidos" valor={datos.pedidos} />
      <Tarjeta titulo="Clientes" valor={datos.clientes} />
      <Grafico serie={datos.porDia} />
      <Tabla filas={datos.ultimos} />
    </Panel>
  );
}`,
    url: "app.tuempresa.com",
    company: "Tu empresa",
    nav: ["Inicio", "Ventas", "Stock", "Clientes", "Reportes"],
    title: "Ventas del mes",
    period: "Últimos 30 días",
    locale: "es-PY",
    cards: [
      { label: "Ingresos", value: 48250000, prefix: "Gs. ", delta: "+12%" },
      { label: "Pedidos", value: 1284, prefix: "", delta: "+8%" },
      { label: "Clientes", value: 326, prefix: "", delta: "+5%" },
    ],
    chart: "Ventas por día",
    rows: [
      ["Tienda Norte", "Gs. 1.250.000", "Pagado"],
      ["Almacén Central", "Gs. 860.000", "Enviado"],
      ["Distribuidora Sur", "Gs. 2.140.000", "Pagado"],
    ],
    phoneTitle: "Ventas",
    notice: ["Nuevo pedido", "Tienda Norte · Gs. 450.000"],
  },
  en: {
    cta: "Let's talk about your project",
    steps: [
      {
        eyebrow: "Software factory in Paraguay",
        title: "Custom software development for your company",
        body: "A team that listens before it codes and builds web apps, mobile apps and systems tailored to you.",
      },
      {
        eyebrow: "Code",
        title: "Every line, written for your business",
        body: "Clean, tested code that ships itself and is ready to grow with your company.",
      },
      {
        eyebrow: "Design",
        title: "We validate every step with you",
        body: "Structure first, details next. You watch the product grow in frequent deliveries and decide at every stage.",
      },
      {
        eyebrow: "Result",
        title: "Your system, running on every device",
        body: "Sales, stock, orders and reports in one place, from a computer or a phone.",
      },
    ],
    code: `import { Panel, Card, Chart, Table } from "@/ui";
import { useSales } from "@/data";

export function Sales({ company }) {
  const data = useSales(company.id);

  return (
    <Panel title="Sales this month">
      <Card title="Revenue" value={data.total} />
      <Card title="Orders" value={data.orders} />
      <Card title="Customers" value={data.customers} />
      <Chart series={data.byDay} />
      <Table rows={data.latest} />
    </Panel>
  );
}`,
    url: "app.yourcompany.com",
    company: "Your company",
    nav: ["Home", "Sales", "Stock", "Customers", "Reports"],
    title: "Sales this month",
    period: "Last 30 days",
    locale: "en-US",
    cards: [
      { label: "Revenue", value: 64800, prefix: "$ ", delta: "+12%" },
      { label: "Orders", value: 1284, prefix: "", delta: "+8%" },
      { label: "Customers", value: 326, prefix: "", delta: "+5%" },
    ],
    chart: "Sales per day",
    rows: [
      ["North Store", "$ 1,680", "Paid"],
      ["Central Market", "$ 1,150", "Shipped"],
      ["South Supply", "$ 2,870", "Paid"],
    ],
    phoneTitle: "Sales",
    notice: ["New order", "North Store · $ 610"],
  },
};

// Story timeline (0..1 of the section scroll).
const T = {
  typing: [0.03, 0.38],
  terminal: [0.38, 0.41],
  output: [0.4, 0.52],
  swap: [0.53, 0.58],
  fill: [0.6, 0.82],
  phone: [0.8, 0.88],
  notice: [0.89, 0.94],
  steps: [0.22, 0.52, 0.8],
};

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const range = (p: number, [a, b]: number[]) => clamp01((p - a) / (b - a));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const CHART = [18, 26, 22, 34, 30, 42, 38, 50, 47, 58, 62, 70];
const chartPoints = (w: number, h: number) =>
  CHART.map((v, i) => `${((i * w) / (CHART.length - 1)).toFixed(1)},${(h - (v / 76) * h).toFixed(1)}`);

/** Grey placeholder that gives way to its content (l = 0 sketch, 1 real). */
const Slot = ({ l, className = "", children }: { l: number; className?: string; children: ReactNode }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 rounded-[5px] bg-[#E3E3E8]" style={{ opacity: 1 - l }} />
    <div style={{ opacity: l }}>{children}</div>
  </div>
);

export const CodeJourney = () => {
  const { language } = useLanguage();
  const t = COPY[language === "es" ? "es" : "en"];
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [scale, setScale] = useState(1);
  const [contactOpen, setContactOpen] = useState(false);

  const frozen = useMemo(() => {
    if (!import.meta.env.DEV) return null;
    const v = new URLSearchParams(window.location.search).get("hero");
    return v === null ? null : parseFloat(v);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (frozen === null) setP(Math.round(v * 800) / 800);
  });
  useEffect(() => {
    if (frozen !== null) setP(frozen);
  }, [frozen]);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const lines = useMemo(() => highlight(t.code), [t.code]);
  const nf = useMemo(() => new Intl.NumberFormat(t.locale), [t.locale]);

  // ── Progress values ──
  const totalChars = lines.reduce((n, l) => n + l.len, 0);
  const preTyped = lines[0].len + lines[1].len; // first screen already shows the imports
  const typed = Math.round(preTyped + (totalChars - preTyped) * range(p, T.typing));
  const term = ease(range(p, T.terminal));
  const swap = ease(range(p, T.swap));
  const fill = range(p, T.fill);
  const lk = (k: number) => ease(clamp01((fill - k * 0.06) / 0.4));
  const phone = ease(range(p, T.phone));
  const notice = ease(range(p, T.notice));
  const step = p < T.steps[0] ? 0 : p < T.steps[1] ? 1 : p < T.steps[2] ? 2 : 3;


  const points = chartPoints(392, 70);
  const linePath = `M${points.join(" L")}`;
  const areaPath = `${linePath} L392,70 L0,70 Z`;

  const openContact = () => setContactOpen(true);

  return (
    <div ref={sectionRef} className="relative bg-black" style={{ height: "460vh" }}>
      <div className="sticky top-0 overflow-hidden h-svh">
        <div className="grid h-full max-w-6xl grid-cols-1 gap-8 px-6 pt-28 pb-10 mx-auto content-center md:grid-cols-12 md:gap-12 md:pt-28 md:pb-12 md:items-center">
          {/* ── Copy ── */}
          <div className="grid md:col-span-5">
            {t.steps.map((s, i) => {
              const Tag = i === 0 ? "h1" : "h2";
              const on = i === step;
              return (
                <div
                  key={s.title}
                  aria-hidden={!on}
                  className={`[grid-area:1/1] self-center transition duration-700 ease-brand ${
                    on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <p className="mb-4 text-sm text-white/60">{s.eyebrow}</p>
                  <Tag className="text-[32px] md:text-5xl leading-[1.05] tracking-tight text-white text-balance m-0">
                    {s.title}
                  </Tag>
                  <p className="mt-5 text-base leading-relaxed md:text-lg text-white/70 text-pretty max-w-md">{s.body}</p>
                  {(i === 0 || i === 3) && (
                    <button
                      type="button"
                      onClick={openContact}
                      tabIndex={on ? 0 : -1}
                      className="inline-flex items-center px-6 py-3 mt-8 text-base text-black transition duration-300 bg-white border-0 rounded-full ease-brand hover:bg-neutral-200 hover:scale-[1.03]"
                    >
                      {t.cta}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Visual ── */}
          <div className="md:col-span-7" aria-hidden="true">
            <div
              ref={frameRef}
              className="relative w-full ml-auto"
              style={{
                aspectRatio: `${W} / ${H}`,
                marginBottom: 52 * scale,
                // On short screens (laptops) size the window by height so it clears the header.
                maxWidth: `calc((100svh - 160px) * ${(W / (H + 52)).toFixed(3)})`,
              }}
            >
              <div className="absolute top-0 left-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
                {/* Window */}
                <div className="absolute inset-0 overflow-hidden rounded-[14px] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                  {/* Editor (VS Code) */}
                  <div className="absolute inset-0" style={{ opacity: 1 - swap }}>
                    <VSCodeWindow
                      lines={lines}
                      typed={typed}
                      panel={term}
                      output={range(p, T.output)}
                      language={language === "es" ? "es" : "en"}
                    />
                  </div>
                  {/* App */}
                  <div className="absolute inset-0 flex flex-col bg-white rounded-[14px]" style={{ opacity: swap }}>
                    <div className="relative flex items-center h-7 px-3 border-b shrink-0 bg-[#F5F5F7] border-black/5">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((d) => (
                          <span key={d} className="w-2 h-2 rounded-full bg-black/15" />
                        ))}
                      </div>
                      <span className="absolute left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] rounded-md bg-white text-neutral-500">
                        {t.url}
                      </span>
                    </div>
                    <div className="flex flex-1 min-h-0">
                      {/* Sidebar */}
                      <div className="w-[112px] shrink-0 border-r border-black/5 bg-[#FAFAFA] p-3">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-[18px] h-[18px] rounded-md bg-black shrink-0" />
                          <Slot l={lk(0)} className="w-fit">
                            <span className="text-[10px] text-black">{t.company}</span>
                          </Slot>
                        </div>
                        {t.nav.map((n, i) => (
                          <div
                            key={n}
                            className={`flex items-center gap-2 px-2 h-6 mb-0.5 rounded-md ${i === 1 && lk(0) > 0.5 ? "bg-white shadow-sm" : ""}`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-[3px] shrink-0 ${i === 1 ? "bg-black" : "bg-black/20"}`} />
                            <Slot l={lk(0)} className="w-fit">
                              <span className={`text-[9.5px] ${i === 1 ? "text-black" : "text-neutral-500"}`}>{n}</span>
                            </Slot>
                          </div>
                        ))}
                      </div>

                      {/* Main */}
                      <div className="flex flex-col flex-1 min-w-0 gap-3 p-4">
                        <div className="flex items-center justify-between h-5">
                          <Slot l={lk(1)} className="w-fit">
                            <span className="text-[14px] text-black">{t.title}</span>
                          </Slot>
                          <Slot l={lk(1)} className="w-fit">
                            <span className="px-2 py-0.5 text-[8.5px] rounded-full bg-[#F5F5F7] text-neutral-500">{t.period}</span>
                          </Slot>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {t.cards.map((c, i) => {
                            const l = lk(2 + i);
                            return (
                              <div key={c.label} className="rounded-[10px] bg-[#F5F5F7] p-2.5">
                                <Slot l={l} className="w-fit mb-1.5">
                                  <span className="text-[8.5px] text-neutral-500">{c.label}</span>
                                </Slot>
                                <Slot l={l} className="w-fit">
                                  <span className="text-[13px] text-black tabular-nums">
                                    {c.prefix}
                                    {nf.format(Math.round(c.value * l))}
                                  </span>
                                </Slot>
                                <Slot l={l} className="mt-1 w-fit">
                                  <span className="text-[8px] text-neutral-500">{c.delta}</span>
                                </Slot>
                              </div>
                            );
                          })}
                        </div>

                        <div className="relative flex-1 min-h-0 rounded-[10px] bg-[#F5F5F7] p-3">
                          <Slot l={lk(5)} className="w-fit mb-1">
                            <span className="text-[8.5px] text-neutral-500">{t.chart}</span>
                          </Slot>
                          <svg width="392" height="70" viewBox="0 0 392 70" className="absolute left-3 bottom-2.5 overflow-visible">
                            <path d={areaPath} fill="#000" style={{ opacity: 0.06 * lk(6) }} />
                            <path
                              d={linePath}
                              fill="none"
                              stroke="#000"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              pathLength={1}
                              strokeDasharray="1"
                              strokeDashoffset={1 - lk(5)}
                            />
                            <rect x="0" y="30" width="392" height="34" rx="5" fill="#E3E3E8" style={{ opacity: 1 - lk(5) }} />
                          </svg>
                        </div>

                        <div className="flex flex-col">
                          {t.rows.map((r, i) => {
                            const l = lk(6 + i);
                            return (
                              <div key={r[0]} className="flex items-center h-[22px] border-t border-black/5 text-[9px]">
                                <div className="flex-1">
                                  <Slot l={l} className="w-fit">
                                    <span className="text-black">{r[0]}</span>
                                  </Slot>
                                </div>
                                <Slot l={l} className="w-fit mr-4">
                                  <span className="text-neutral-600 tabular-nums">{r[1]}</span>
                                </Slot>
                                <Slot l={l} className="w-fit">
                                  <span className="px-1.5 py-px rounded-full bg-[#F5F5F7] text-neutral-600 text-[8px]">{r[2]}</span>
                                </Slot>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="absolute top-[150px] w-[128px] h-[262px] rounded-[26px] bg-black p-[5px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
                  // On narrow screens the phone goes left, away from the floating contact buttons.
                  style={{ left: scale < 0.9 ? -8 : 452, opacity: phone, transform: `translateY(${(1 - phone) * 40}px)` }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-white rounded-[21px] px-2.5 pt-5">
                    <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full bg-black" />
                    <p className="text-[10px] text-black mb-2">{t.phoneTitle}</p>
                    <div className="rounded-[10px] bg-[#F5F5F7] p-2 mb-2">
                      <p className="text-[7px] text-neutral-500">{t.cards[0].label}</p>
                      <p className="text-[10px] text-black tabular-nums whitespace-nowrap">
                        {t.cards[0].prefix}
                        {nf.format(t.cards[0].value)}
                      </p>
                      <svg width="100%" height="34" viewBox="0 0 392 70" preserveAspectRatio="none" className="mt-1">
                        <path d={areaPath} fill="#000" opacity="0.06" />
                        <path d={linePath} fill="none" stroke="#000" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                    {t.rows.slice(0, 3).map((r) => (
                      <div key={r[0]} className="flex justify-between py-1.5 border-t border-black/5 text-[7px]">
                        <span className="text-black truncate">{r[0]}</span>
                        <span className="text-neutral-500">{r[2]}</span>
                      </div>
                    ))}
                    {/* Notification */}
                    <div
                      className="absolute left-1.5 right-1.5 top-6 rounded-[10px] bg-white/95 shadow-[0_6px_20px_rgba(0,0,0,0.18)] ring-1 ring-black/5 p-2"
                      style={{ opacity: notice, transform: `translateY(${(1 - notice) * -16}px)` }}
                    >
                      <p className="text-[7.5px] text-black">{t.notice[0]}</p>
                      <p className="text-[6.5px] text-neutral-500 truncate">{t.notice[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogUser open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};
