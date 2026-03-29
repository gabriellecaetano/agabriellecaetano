import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "assai-pontoai",
    tag: "Tech Challenge · FIAP",
    title: "PontoAí — Programa de fidelidade do Assaí Atacadista",
    description:
      "Concepção e estratégia completa de uma feature de fidelidade para o app do Assaí: desde discovery e personas até growth, PLG e análise de métricas com NPS +20.",
    skills: ["Product Discovery", "Personas & Journey Map", "MVP & Protótipo", "Growth & PLG", "Métricas & NPS", "UX Research"],
    metrics: [
      { value: "5 fases", label: "do ciclo de produto" },
      { value: "80%", label: "conversão app→feature" },
      { value: "NPS +20", label: "satisfação do usuário" },
      { value: "3 OKRs", label: "evolução contínua" },
    ],
    icon: ShoppingCart,
    color: "bg-[hsl(16,80%,55%)]",
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Case Studies
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Projetos <span className="italic font-medium">em destaque</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mb-16">
            Trabalhos práticos que demonstram minha atuação em Product Marketing — da descoberta à análise de resultados.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={`/case/${cs.id}`}
                className="group block rounded-3xl border border-border bg-card hover:border-primary/40 transition-all overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full ${cs.color}`} />

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">
                        {cs.tag}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 leading-snug group-hover:text-primary transition-colors">
                        {cs.title}
                      </h3>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-xl bg-accent items-center justify-center text-accent-foreground flex-shrink-0 ml-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <cs.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                    {cs.description}
                  </p>

                  {/* Metrics row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center md:text-left">
                        <p className="font-display text-2xl font-bold text-foreground">{m.value}</p>
                        <p className="font-body text-xs text-muted-foreground mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills + CTA */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {cs.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-body text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Ver case completo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
