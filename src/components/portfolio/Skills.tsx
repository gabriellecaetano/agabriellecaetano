import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Ferramentas",
    items: ["HubSpot", "RD Station", "Hotjar", "Google Analytics", "Google Ads", "Meta Ads", "Jira", "SQL básico", "Excel avançado"],
  },
  {
    title: "Product Marketing",
    items: ["GTM Strategy", "Backlog & Priorização", "UX Writing", "Pesquisa de Usuário", "Benchmarking", "Testes QA"],
  },
  {
    title: "Growth & CRM",
    items: ["Automação de Jornadas", "Segmentação", "E-mail Marketing", "Campanhas de Performance", "Retenção", "Conversão"],
  },
  {
    title: "Metodologia",
    items: ["Kanban", "Agile", "Data-Driven", "A/B Testing", "KPIs & Métricas"],
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16 leading-tight">
            Toolbox <span className="italic font-medium">& competências</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-body font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-body text-sm px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
