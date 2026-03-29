import { motion } from "framer-motion";

const experiences = [
  {
    role: "Analista de Marketing de Produto",
    company: "SOC",
    location: "Santos, SP",
    period: "Fev 2024 — Atual",
    current: true,
    bullets: [
      "Gerenciei backlog e priorizei funcionalidades do marketplace SOC Store com base em dados e feedback dos usuários.",
      "Conduzi pesquisas qualitativas e benchmarks para mapear dores dos clientes e identificar oportunidades de melhoria.",
      "Participei de cerimônias ágeis (Kanban) e realizei testes funcionais (QA) para garantir qualidade nas entregas.",
      "Automatizei jornadas de usuários com foco em conversão e adoção de novas funcionalidades.",
    ],
    tags: ["Product Marketing", "Backlog", "Kanban", "QA", "Marketplace"],
  },
  {
    role: "Assistente de Marketing",
    company: "Grão de Gente",
    location: "Santos, SP",
    period: "Fev 2022 — Out 2023",
    current: false,
    bullets: [
      "Implementei fluxos de automação e segmentação, aumentando a taxa de retenção do e-commerce via ActiveCampaign.",
      "Analisei comportamento dos usuários com Hotjar e Google Analytics para embasar decisões estratégicas.",
      "Colaborei com a equipe na otimização da experiência do cliente via UX Writing e testes internos.",
    ],
    tags: ["Automação", "CRM", "Hotjar", "UX Writing", "E-commerce"],
  },
  {
    role: "Estagiária de Marketing Digital",
    company: "Jr Tech Sistemas",
    location: "São Vicente, SP",
    period: "Jan 2020 — Jun 2020",
    current: false,
    bullets: [
      "Planejei campanhas de e-mail e conteúdo para geração de leads qualificados via RD Station.",
      "Produzi materiais para redes sociais e campanhas pagas com foco em performance.",
    ],
    tags: ["RD Station", "Lead Gen", "Mídia Paga"],
  },
  {
    role: "Estagiária de Comunicação e Mídias Sociais",
    company: "Focus Sites",
    location: "Santos, SP",
    period: "Mar 2019 — Set 2019",
    current: false,
    bullets: [
      "Criei conteúdos otimizados para blogs e sites em WordPress, aumentando o alcance digital no segmento de saúde.",
      "Utilizei Conta Azul para gestão financeira de clientes, otimizando fluxo de pagamentos e contratos.",
    ],
    tags: ["WordPress", "SEO", "Conteúdo"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Trajetória</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16 leading-tight">
            Experiência <span className="italic font-medium">profissional</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full -translate-x-[6px] border-2 ${
                    exp.current
                      ? "bg-primary border-primary"
                      : "bg-background border-muted-foreground/40"
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-body font-bold text-lg text-foreground">{exp.role}</h3>
                    <p className="font-body text-primary font-medium">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="font-body text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                    >
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
