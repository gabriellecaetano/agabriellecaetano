import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Linkedin, Mail } from "lucide-react";

export type Persona = "pmm" | "growth" | "product";

export interface SlideContent {
  label: string;
  title: string;
  content: Record<Persona, React.ReactNode>;
}

interface CaseSlidePresentationProps {
  slides: SlideContent[];
  onViewFull: () => void;
}

const personaLabels: Record<Persona, string> = {
  pmm: "Product Marketing",
  growth: "Growth",
  product: "Product",
};

const personaDescriptions: Record<Persona, string> = {
  pmm: "Visão de posicionamento e go-to-market",
  growth: "Foco em métricas e otimização de funil",
  product: "Perspectiva de produto e UX",
};

const CaseSlidePresentation = ({ slides, onViewFull }: CaseSlidePresentationProps) => {
  const [current, setCurrent] = useState(0);
  const [persona, setPersona] = useState<Persona>("pmm");
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current],
  );

  const prev = () => current > 0 && goTo(current - 1);
  const next = () => current < slides.length - 1 && goTo(current + 1);

  const slide = slides[current];
  const isLastSlide = current === slides.length - 1;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className={`relative ${expanded ? "fixed inset-0 z-50 bg-background flex flex-col" : ""}`}>
      {/* Persona switcher */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 ${expanded ? "px-8 pt-6" : ""}`}>
        <div className="flex gap-2">
          {(Object.keys(personaLabels) as Persona[]).map((p) => (
            <button
              key={p}
              onClick={() => setPersona(p)}
              className={`font-body text-xs px-4 py-2 rounded-full border transition-all font-medium ${
                persona === p
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              title={personaDescriptions[p]}
            >
              {personaLabels[p]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-body text-xs text-muted-foreground">
            {current + 1} de {slides.length}
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            aria-label={expanded ? "Minimizar" : "Expandir"}
          >
            {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Progress bar with labels */}
      <div className={`flex gap-1 mb-6 ${expanded ? "px-8" : ""}`}>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex-1 group"
          >
            <div className={`h-1 rounded-full transition-all mb-1 ${
              i === current ? "bg-primary" : i < current ? "bg-primary/40" : "bg-border"
            }`} />
            <span className={`font-body text-[10px] transition-colors ${
              i === current ? "text-primary font-semibold" : "text-muted-foreground/50 group-hover:text-muted-foreground"
            }`}>
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* Slide area */}
      <div className={`relative overflow-hidden rounded-2xl border border-border bg-card ${expanded ? "flex-1 mx-8 mb-6" : "min-h-[340px] md:min-h-[400px]"}`}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`${current}-${persona}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-8 md:p-12 h-full"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-2">
              {slide.label}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
              {slide.title}
            </h3>
            <div className="font-body text-muted-foreground leading-relaxed">
              {slide.content[persona]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Footer with CTA */}
      <div className={`flex items-center justify-between mt-4 ${expanded ? "px-8 pb-6" : ""}`}>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {isLastSlide && (
            <div className="flex items-center gap-2">
              <a
                href="mailto:gabriellecontato@outlook.com.br"
                className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Contato
              </a>
              <a
                href="https://www.linkedin.com/in/gabriellecaetano/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          )}
          <button
            onClick={onViewFull}
            className="font-body text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            Ver análise completa
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseSlidePresentation;
