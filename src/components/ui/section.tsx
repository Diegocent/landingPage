/**
 * Shared layout pieces for every landing section (Apple-like system).
 *
 * - Same container (max-w-6xl, 24px gutter) so every text starts on the same edge.
 * - Same vertical rhythm (96px / 128px) and the same type scale everywhere.
 * - Three surfaces: white, grey (#F5F5F7) and black. Cards sit on the opposite surface.
 */
import type { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Tone = "white" | "grey" | "black";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Scroll reveal used by every section: rise 24px and fade in once. */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const SURFACE: Record<Tone, string> = {
  white: "bg-white text-black",
  grey: "bg-[#F5F5F7] text-black",
  black: "bg-black text-white",
};

/** Card background for each section tone. */
const CARD: Record<Tone, string> = {
  white: "bg-[#F5F5F7]",
  grey: "bg-white",
  black: "bg-[#1C1C1E]",
};

export const muted = (tone: Tone) => (tone === "black" ? "text-neutral-400" : "text-neutral-600");
export const subtle = (tone: Tone) => (tone === "black" ? "text-neutral-500" : "text-neutral-400");

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("max-w-6xl px-6 mx-auto", className)}>{children}</div>;
}

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  /** Wrap children in the shared container. Turn off for full bleed content. */
  contained?: boolean;
};

export function Section({ tone = "white", contained = true, className, children, ...rest }: SectionProps) {
  return (
    <section className={cn("py-24 md:py-32 overflow-hidden", SURFACE[tone], className)} {...rest}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}

type HeaderProps = {
  tone?: Tone;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Buttons or links under the description. */
  children?: ReactNode;
  className?: string;
};

export function SectionHeader({ tone = "white", eyebrow, title, description, children, className }: HeaderProps) {
  return (
    <motion.div {...reveal()} className={cn("max-w-3xl mb-12 md:mb-16", className)}>
      {eyebrow && <p className={cn("mb-4 text-sm font-medium", subtle(tone))}>{eyebrow}</p>}
      <h2 className="text-4xl leading-[1.08] tracking-tight md:text-5xl text-balance">{title}</h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed md:text-xl text-pretty", muted(tone))}>{description}</p>
      )}
      {children && <div className="flex flex-wrap items-center mt-8 gap-x-6 gap-y-4">{children}</div>}
    </motion.div>
  );
}

export function SubHeading({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.h3 {...reveal()} className={cn("mt-24 mb-8 text-2xl tracking-tight md:text-3xl text-balance", className)}>
      {children}
    </motion.h3>
  );
}

type CardProps = { tone?: Tone; delay?: number; className?: string; children: ReactNode };

export function Card({ tone = "white", delay = 0, className, children }: CardProps) {
  return (
    <motion.div {...reveal(delay)} className={cn("p-8 rounded-3xl", CARD[tone], className)}>
      {children}
    </motion.div>
  );
}

export function IconTile({ tone = "white", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-10 h-10 mb-6 rounded-xl shrink-0",
        tone === "black" ? "bg-white text-black" : "bg-black text-white"
      )}
    >
      {children}
    </div>
  );
}

type LinkProps = {
  href: string;
  tone?: Tone;
  external?: boolean;
  download?: boolean;
  icon?: ReactNode;
  children: ReactNode;
};

const externalProps = (external?: boolean) => (external ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** Primary action: filled pill. Black on light surfaces, white on black. */
export function PillButton({ href, tone = "white", external, download, icon, children }: LinkProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      {...externalProps(external)}
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 text-base rounded-full transition-[background-color,transform] duration-300 ease-brand active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        tone === "black"
          ? "bg-white text-black hover:bg-neutral-200 hover:text-black focus-visible:outline-white"
          : "bg-black text-white hover:bg-neutral-800 hover:text-white focus-visible:outline-black"
      )}
    >
      {icon}
      {children}
    </a>
  );
}

/** Secondary action: plain text with a chevron, like "Learn more ›". */
export function TextLink({ href, tone = "white", external, children }: LinkProps) {
  return (
    <a
      href={href}
      {...externalProps(external)}
      className={cn(
        "group inline-flex items-center gap-1 text-base transition-colors duration-300 ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 rounded",
        tone === "black" ? "text-white hover:text-neutral-300" : "text-black hover:text-neutral-600"
      )}
    >
      {children}
      <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-brand group-hover:translate-x-0.5" />
    </a>
  );
}
