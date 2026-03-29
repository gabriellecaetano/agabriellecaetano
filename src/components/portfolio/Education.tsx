import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Pós-Graduação em Digital Product Management",
    school: "FIAP",
    period: "2024 — Em andamento",
    icon: GraduationCap,
  },
  {
    degree: "Fundamentos de Gestão de Produtos",
    school: "PM3",
    period: "2024",
    icon: Award,
  },
  {
    degree: "Graduação em Comunicação Social — Publicidade e Propaganda",
    school: "Universidade Santa Cecília",
    period: "2019 — 2022",
    icon: GraduationCap,
  },
  {
    degree: "Ensino Médio Integrado ao Técnico em Marketing",
    school: "ETEC — Escola Técnica Estadual de São Paulo",
    period: "2016 — 2018",
    icon: GraduationCap,
  },
];

const extras = [
  "Google Ads: Criando uma campanha — Alura",
  "Google Tag Manager — Alura",
  "Branding Essential — LAJE",
  "Inglês — FISK University (2012–2018)",
];

const Education = () => {
  return (
    <section id="educacao" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Formação</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16 leading-tight">
            Educação <span className="italic font-medium">& certificações</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                  <edu.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-foreground text-sm mb-1">{edu.degree}</h3>
                  <p className="font-body text-sm text-primary">{edu.school}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-body font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Cursos & Extras
          </h3>
          <div className="flex flex-wrap gap-2">
            {extras.map((item) => (
              <span
                key={item}
                className="font-body text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
