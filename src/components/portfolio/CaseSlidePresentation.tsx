import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

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

      {/* Progress bar */}
      <div className={`flex gap-1.5 mb-6 ${expanded ? "px-8" : ""}`}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full flex-1 transition-all ${
              i === current ? "bg-primary" : i < current ? "bg-primary/40" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Slide area */}
      <div className={`relative overflow-hidden rounded-2xl border border-border bg-card ${expanded ? "flex-1 mx-8 mb-6" : "min-h-[340px] md:min-h-[400px]"}`}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="p-8 md:p-12 h-full"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
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

      {/* Footer */}
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
        <button
          onClick={onViewFull}
          className="font-body text-sm font-semibold text-primary hover:underline underline-offset-4 transition-all flex items-center gap-1.5"
        >
          Ver análise completa
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CaseSlidePresentation;
