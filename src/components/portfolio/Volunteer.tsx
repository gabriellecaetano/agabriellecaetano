import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Volunteer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Impacto</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
            Trabalho <span className="italic font-medium">voluntário</span>
          </h2>

          <div className="p-6 rounded-2xl border border-border bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-foreground text-sm">Designer de Mídias Sociais</h3>
                  <p className="font-body text-sm text-primary">Mecha Solidária · Praia Grande, SP</p>
                </div>
              </div>
              <p className="font-body text-xs text-muted-foreground mb-3">Out 2016 — Out 2017</p>
              <div className="space-y-3">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Desenvolvi materiais gráficos e estratégias de mídia social, impulsionando a conscientização sobre o câncer de mama — com mais de 340 doações de cabelo e 60 lenços arrecadados.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Coordenei a comunicação do projeto, conquistando cobertura na Tribuna da Globo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;
