import {
  Blocks,
  CircleUser,
  Files,
  GitBranch,
  Play,
  Search,
  Settings,
} from "lucide-react";

/**
 * Minimal VS Code window (Dark Modern theme) drawn with HTML so it stays sharp at any size.
 * Sized for the 560x360 hero canvas: just the code and, at the end, the terminal output.
 * The code types itself as `typed` grows; the terminal slides in with `panel`
 * and prints its output with `output`.
 */

// ── Syntax highlighting with the Dark Modern colours ──

const RAW =
  /("[^"]*")|\b(import|from|export|return)\b|\b(const|function)\b|(<\/?)(?=[A-Z])|(\/?>)|([A-Za-z]+)(?==)|([{}()[\]])|([;.,=])|([A-Za-z_$][\w$]*)|(\n)|([^\S\n]+)|(.)/g;
const KINDS = [
  "",
  "str",
  "ctl",
  "sto",
  "lt",
  "gt",
  "attr",
  "br",
  "pun",
  "id",
  "nl",
  "ws",
  "other",
] as const;
const BRACKETS = ["#FFD700", "#DA70D6", "#179FFF"]; // bracket pair colorization

export type CodeLine = {
  tokens: Array<{ text: string; color: string }>;
  len: number;
};

export function highlight(code: string): CodeLine[] {
  const raw = [...code.matchAll(RAW)].map((m) => ({
    text: m[0],
    kind: KINDS[m.findIndex((g, i) => i > 0 && g !== undefined)] ?? "other",
  }));
  const solid = raw.filter((tk) => tk.kind !== "ws" && tk.kind !== "nl");
  const lines: CodeLine[] = [{ tokens: [], len: 0 }];
  let depth = 0;

  raw.forEach((tk) => {
    if (tk.kind === "nl") {
      lines.push({ tokens: [], len: 0 });
      return;
    }
    let color = "#CCCCCC";
    switch (tk.kind) {
      case "str":
        color = "#CE9178";
        break;
      case "ctl":
        color = "#C586C0";
        break;
      case "sto":
        color = "#569CD6";
        break;
      case "lt":
      case "gt":
        color = "#808080";
        break;
      case "attr":
        color = "#9CDCFE";
        break;
      case "br":
        if ("({[".includes(tk.text)) {
          color = BRACKETS[depth % 3];
          depth++;
        } else {
          depth = Math.max(0, depth - 1);
          color = BRACKETS[depth % 3];
        }
        break;
      case "id": {
        const at = solid.indexOf(tk);
        const prev = solid[at - 1];
        const next = solid[at + 1];
        if (prev?.kind === "lt") color = "#4EC9B0";
        else if (prev?.text === "function" || next?.text === "(")
          color = "#DCDCAA";
        else color = "#9CDCFE";
        break;
      }
    }
    const line = lines[lines.length - 1];
    line.tokens.push({ text: tk.text, color });
    line.len += tk.text.length;
  });
  return lines;
}

// ── Terminal output ──

type Seg = [string, string];

const TEXT = {
  es: {
    prompt: "PS C:\\proyectos\\ventas>",
    pkg: "ventas@1.0.0",
    url: "https://app.tuempresa.com",
  },
  en: {
    prompt: "PS C:\\projects\\sales>",
    pkg: "sales@1.0.0",
    url: "https://app.yourcompany.com",
  },
};

const GREEN = "#23D18B";
const CYAN = "#29B8DB";
const DIM = "#767676";
const FG = "#CCCCCC";

function terminalLines(c: (typeof TEXT)["es"]): Seg[][] {
  return [
    [[`${c.prompt} npm run build`, FG]],
    [],
    [[`> ${c.pkg} build`, FG]],
    [["> vite build", FG]],
    [],
    [
      ["vite v5.4.10 ", CYAN],
      ["building for production...", GREEN],
    ],
    [
      ["✓ ", GREEN],
      ["42 modules transformed.", FG],
    ],
    [
      ["dist/", DIM],
      ["index.html", GREEN],
      ["                 0.46 kB │ gzip:  0.30 kB", DIM],
    ],
    [
      ["dist/", DIM],
      ["assets/index-BqW3k1.js", CYAN],
      ["   148.21 kB │ gzip: 47.83 kB", DIM],
    ],
    [["✓ built in 1.84s", GREEN]],
    [],
    [[`${c.prompt} npm run deploy`, FG]],
    [
      ["✓ ", GREEN],
      ["Production: ", FG],
      [c.url, CYAN],
      [" [12s]", DIM],
    ],
    [[`${c.prompt} `, FG]],
  ];
}

const MONO = { fontFamily: 'Consolas, "Cascadia Code", Menlo, monospace' };

// ── Window ──

type Props = {
  lines: CodeLine[];
  typed: number;
  /** 0..1 terminal panel slide-in */
  panel: number;
  /** 0..1 terminal output progress */
  output: number;
  language: "es" | "en";
};

export function VSCodeWindow({ lines, typed, panel, output, language }: Props) {
  const term = terminalLines(TEXT[language]);
  const shownTerm = Math.max(1, Math.round(term.length * output));

  const lineStarts: number[] = [];
  lines.reduce((s, l) => (lineStarts.push(s), s + l.len), 0);
  const caretLine = Math.max(
    0,
    lines.findIndex((l, i) => typed <= lineStarts[i] + l.len),
  );

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#1F1F1F] border border-[#2B2B2B] rounded-[14px]">
      {/* Title bar */}
      <div className="flex items-center h-[28px] px-3.5 bg-[#181818] border-b border-[#2B2B2B] shrink-0">
        <div className="flex gap-[7px]">
          {["#FF5F57", "#FEBC2E", "#28C840"].map((col) => (
            <span
              key={col}
              className="w-[10px] h-[10px] rounded-full"
              style={{ background: col }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Activity bar */}
        <div className="flex flex-col items-center justify-between w-[38px] py-2.5 bg-[#181818] border-r border-[#2B2B2B] shrink-0">
          <div className="flex flex-col items-center w-full gap-[15px]">
            {[Files, Search, GitBranch, Play, Blocks].map((Icon, i) => (
              <div key={i} className="relative flex justify-center w-full">
                {i === 0 && (
                  <span className="absolute left-0 top-[-4px] w-[2px] h-[23px] bg-[#0078D4]" />
                )}
                <Icon
                  className="w-[15px] h-[15px]"
                  color={i === 0 ? "#D7D7D7" : "#868686"}
                  strokeWidth={1.6}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-[13px]">
            <CircleUser
              className="w-[15px] h-[15px]"
              color="#868686"
              strokeWidth={1.6}
            />
            <Settings
              className="w-[15px] h-[15px]"
              color="#868686"
              strokeWidth={1.6}
            />
          </div>
        </div>

        {/* Code + terminal */}
        <div className="relative flex-1 min-w-0 min-h-0 overflow-hidden">
          <pre
            className="m-0 p-0 pt-3 overflow-hidden text-[12px] leading-[18.5px] whitespace-pre"
            style={{ ...MONO, transform: `translateY(${-122 * panel}px)` }}
          >
            {lines.map((line, i) => {
              let left = Math.max(0, Math.min(line.len, typed - lineStarts[i]));
              const current = i === caretLine;
              return (
                <div
                  key={i}
                  className={`flex ${current ? "bg-[#262626]" : ""}`}
                >
                  <span
                    className={`w-[42px] pr-4 text-right select-none shrink-0 ${current ? "text-[#CCCCCC]" : "text-[#6E7681]"}`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    {line.tokens.map((tk, j) => {
                      if (left <= 0) return null;
                      const text = tk.text.slice(0, left);
                      left -= tk.text.length;
                      return (
                        <span key={j} style={{ color: tk.color }}>
                          {text}
                        </span>
                      );
                    })}
                    {current && panel < 1 && (
                      <span className="inline-block w-[1.5px] h-[15px] -mb-[3px] bg-[#AEAFAD] yc-caret" />
                    )}
                  </span>
                </div>
              );
            })}
          </pre>

          {/* Terminal */}
          <div
            className="absolute inset-x-0 bottom-0 flex flex-col justify-end h-[132px] px-4 pt-3 pb-3 overflow-hidden bg-[#181818] border-t border-[#2B2B2B] text-[9.5px] leading-[13px]"
            style={{ ...MONO, transform: `translateY(${(1 - panel) * 101}%)` }}
          >
            {term.slice(0, shownTerm).map((segs, i) => (
              <div key={i} className="whitespace-pre min-h-[13px]">
                {segs.map(([text, color], j) => (
                  <span key={j} style={{ color }}>
                    {text}
                  </span>
                ))}
                {i === shownTerm - 1 && (
                  <span className="inline-block w-[5.5px] h-[11px] -mb-[2px] bg-[#CCCCCC] yc-caret" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
