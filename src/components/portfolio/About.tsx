import { motion } from "framer-motion";
import { TrendingUp, Rocket, RefreshCw, Brain } from "lucide-react";

const contributions = [
  {
    icon: TrendingUp,
    label: "Estratégia de Growth",
    items: ["Aquisição e retenção", "Testes e otimização de conversão"],
  },
  {
    icon: Rocket,
    label: "Go-to-Market",
    items: ["Lançamento de produtos e funcionalidades", "Posicionamento e comunicação"],
  },
  {
    icon: RefreshCw,
    label: "CRM & Automação",
    items: ["Fluxos de e-mail", "Nutrição e lifecycle marketing"],
  },
  {
    icon: Brain,
    label: "Inteligência de Mercado",
    items: ["Análise de comportamento", "Segmentação e oportunidades"],
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Sobre</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Como posso <span className="italic font-medium">contribuir</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6"
        >
          Atuo na interseção entre marketing e produto, com foco em transformar dados e comportamento
          do usuário em decisões estratégicas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4"
        >
          Tenho experiência em Go-to-Market, Growth e aquisição, CRM e automação (HubSpot),
          experiência do usuário e jornada, e integração de plataformas digitais.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-foreground font-semibold text-lg mb-16"
        >
          Meu objetivo é simples: gerar impacto real no negócio — não só métricas de vaidade.
        </motion.p>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-2xl bg-secondary text-secondary-foreground mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-6">Impacto gerado</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "+20% de aumento em conversões com fluxos de CRM",
              "+10% de retenção com estratégias de relacionamento",
              "Integração de LMS e meio de pagamento, melhorando a experiência do usuário",
              "Atuação em produto SaaS com foco em crescimento",
            ].map((item, i) => (
              <p key={i} className="font-body text-sm text-secondary-foreground/80 flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Contributions Grid */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-6">Posso atuar diretamente em</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">{item.label}</h3>
                <ul className="space-y-1">
                  {item.items.map((sub) => (
                    <li key={sub} className="font-body text-sm text-muted-foreground">{sub}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
