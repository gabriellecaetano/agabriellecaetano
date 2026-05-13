import { motion } from "framer-motion";

const experiences = [
  {
    role: "Analista de Marketing (SaaS)",
    company: "SOC",
    location: "Santos, SP",
    period: "Fev 2024 — Atual",
    current: true,
    highlight: "Projeto estratégico: Marketplace de SST — Soluções para profissionais de SST",
    bullets: [
      "Atuação estratégica na interface entre produto, marketing e negócio, contribuindo para o posicionamento e comunicação de soluções tecnológicas.",
      "Desenvolvimento e execução de campanhas orientadas à geração de demanda, awareness e conversão.",
      "Construção de narrativas e storytelling para diferentes públicos, traduzindo funcionalidades técnicas em valor percebido.",
      "Participação em iniciativas de Go-To-Market, apoiando lançamentos e ativações de produtos.",
      "Definição e acompanhamento de KPIs de performance (conversão, retenção e engajamento).",
      "Análise de comportamento do usuário e otimização da jornada com base em dados.",
      "Colaboração com times multidisciplinares (produto, tecnologia, comercial e CS), garantindo consistência estratégica e de comunicação.",
      "Gestão de projetos com parceiros externos, assegurando qualidade e entrega dentro dos prazos.",
    ],
    results: [
      "+20% de aumento em conversões com estratégias de segmentação e automação.",
      "+10% de aumento em retenção com otimização de fluxos no HubSpot.",
      "Redução de churn e melhoria da eficiência da jornada de compra.",
    ],
    tags: ["Product Marketing", "GTM", "SaaS", "HubSpot", "Storytelling"],
  },
  {
    role: "Assistente de Marketing",
    company: "Grão de Gente",
    location: "Santos, SP",
    period: "Fev 2022 — Out 2023",
    current: false,
    bullets: [
      "Desenvolvimento de campanhas multicanais com foco em retenção, engajamento e conversão.",
      "Criação e otimização de fluxos automatizados de comunicação com foco em personalização.",
      "Atuação colaborativa com times de produto e UX para melhoria da experiência do usuário.",
      "Análise de dados e comportamento do usuário com Hotjar e Google Analytics.",
      "Geração de insights estratégicos para otimização de campanhas e jornadas.",
    ],
    results: [
      "Aumento consistente de retenção e conversão com estratégias orientadas a dados.",
      "Evolução da experiência do usuário e performance das campanhas.",
    ],
    tags: ["Automação", "CRM", "Hotjar", "UX", "E-commerce"],
  },
  {
    role: "Estagiária de Marketing Digital",
    company: "Jr Tech Sistemas",
    location: "São Vicente, SP",
    period: "Jan 2020 — Jun 2020",
    current: false,
    bullets: [
      "Gestão de funil de leads B2B e campanhas automatizadas.",
      "Execução de mídia paga e estratégias de nutrição de leads.",
    ],
    tags: ["Lead Gen B2B", "Mídia Paga", "Automação"],
  },
  {
    role: "Estagiária de Comunicação e Mídias Sociais",
    company: "Focus Sites",
    location: "Santos, SP",
    period: "Mar 2019 — Set 2019",
    current: false,
    bullets: [
      "Produção de conteúdo estratégico para SEO e branding.",
      "Apoio na estruturação de processos e automações.",
    ],
    tags: ["SEO", "Conteúdo", "Branding"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Trajetória</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-14 leading-tight">
            Experiência <span className="italic font-medium">profissional</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pl-8 md:pl-16"
              >
                <div
                  className={`absolute left-0 md:left-6 top-2 w-2.5 h-2.5 rounded-full -translate-x-[5px] border-2 ${
                    exp.current
                      ? "bg-primary border-primary"
                      : "bg-background border-muted-foreground/40"
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-body font-bold text-foreground">{exp.role}</h3>
                    <p className="font-body text-sm text-primary font-medium">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="font-body text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>

                {exp.highlight && (
                  <p className="font-body text-sm text-foreground/80 italic mb-3">{exp.highlight}</p>
                )}

                <ul className="space-y-1.5 mb-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {exp.results && exp.results.length > 0 && (
                  <div className="mb-3 pl-3 border-l-2 border-primary/40">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-1.5">Resultados</p>
                    <ul className="space-y-1">
                      {exp.results.map((r, k) => (
                        <li key={k} className="font-body text-sm text-foreground/80 leading-relaxed flex gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">↑</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-body text-xs px-2.5 py-1 rounded-lg bg-accent text-accent-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
