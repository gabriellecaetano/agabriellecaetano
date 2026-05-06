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
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Sobre</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Como posso <span className="italic font-medium">contribuir</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
              Atuo na interseção entre marketing e produto, com foco em transformar dados e comportamento
              do usuário em decisões estratégicas.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
              Tenho experiência em Go-to-Market, Growth e aquisição, CRM e automação (HubSpot),
              experiência do usuário e jornada, e integração de plataformas digitais.
            </p>
            <p className="font-body text-foreground font-semibold text-base">
              Meu objetivo é simples: gerar impacto real no negócio — não só métricas de vaidade.
            </p>
          </motion.div>

          {/* Impact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-secondary text-secondary-foreground"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-5">Impacto gerado</p>
            <div className="space-y-3">
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
        </div>

        {/* Testimonial — edit name/role/company below */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 p-6 md:p-8 pl-8 md:pl-10 rounded-r-2xl bg-muted/60 border-l-[3px] border-primary overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="font-display absolute -top-4 left-3 text-primary/20 text-7xl md:text-8xl leading-none select-none pointer-events-none"
          >
            “
          </span>
          <blockquote className="font-display italic text-foreground text-[15px] md:text-base leading-relaxed relative z-10">
            Gabi tem uma capacidade rara de conectar dados de produto com narrativa estratégica. Ela não entrega relatórios — ela entrega decisões.
          </blockquote>
          <figcaption className="font-body text-xs text-muted-foreground mt-4 not-italic">
            {/* TODO: substituir por depoimento real */}
            — [Nome], [Cargo] · [Empresa]
          </figcaption>
        </motion.figure>

        {/* Contributions Grid */}
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-6">Posso atuar diretamente em</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contributions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-body font-semibold text-foreground text-sm mb-2">{item.label}</h3>
              <ul className="space-y-1">
                {item.items.map((sub) => (
                  <li key={sub} className="font-body text-xs text-muted-foreground">{sub}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
