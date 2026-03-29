import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Zap } from "lucide-react";

const highlights = [
  { icon: TrendingUp, label: "Growth Marketing", desc: "Automação de jornadas com foco em conversão e adoção" },
  { icon: Users, label: "User Research", desc: "Pesquisas qualitativas e benchmarks para mapear dores" },
  { icon: BarChart3, label: "Data-Driven", desc: "Análises com Hotjar, GA e SQL para decisões estratégicas" },
  { icon: Zap, label: "Agile Delivery", desc: "Kanban, QA e priorização de backlog orientada a dados" },
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
            Produto, dados <br className="hidden md:block" />
            <span className="italic font-medium">& crescimento</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16"
        >
          Profissional de Produto com +3 anos de experiência em produtos digitais, atuando em marketing de crescimento,
          gestão de backlog, UX Writing e análise de dados. Experiência com marketplaces, integração de plataformas e
          validação de entregas com foco em QA. Perfil analítico e comunicativo, com domínio de metodologias ágeis e
          ferramentas como HubSpot, RD Station, Hotjar e SQL.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
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
                <h3 className="font-body font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
