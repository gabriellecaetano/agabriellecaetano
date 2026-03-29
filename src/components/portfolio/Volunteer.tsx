import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Volunteer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Impacto</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
            Trabalho <span className="italic font-medium">voluntário</span>
          </h2>

          <div className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-foreground">Designer de Mídias Sociais</h3>
                  <p className="font-body text-sm text-primary">Mecha Solidária · Praia Grande, SP</p>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-3">Out 2016 — Out 2017</p>
              <ul className="space-y-2">
                <li className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">·</span>
                  Desenvolvi materiais gráficos e estratégias de mídia social, impulsionando a conscientização sobre o câncer
                  de mama — mais de <strong className="text-foreground">340 doações de cabelo</strong> e <strong className="text-foreground">60 lenços</strong> arrecadados.
                </li>
                <li className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">·</span>
                  Coordenei a comunicação do projeto, conquistando cobertura na <strong className="text-foreground">Tribuna da Globo</strong>.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;
