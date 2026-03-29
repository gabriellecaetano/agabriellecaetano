import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import tccPantysImg from "@/assets/tcc-pantys.jpg";
import conicImg from "@/assets/conic-research.jpg";

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

const achievements = [
  {
    title: "TCC — Planejamento de Marketing para a Pantys",
    subtitle: "Universidade Santa Cecília · Publicidade e Propaganda",
    image: tccPantysImg,
    description:
      "Planejamento de Marketing completo para a Pantys, marca pioneira em calcinhas absorventes no Brasil. Pesquisa quantitativa com 410 respondentes, análise de concorrentes, segmentação de mercado, definição de estratégias para expansão da marca e superação de barreiras de confiança do consumidor em produtos sustentáveis.",
    highlights: [
      "410 respostas na pesquisa quantitativa",
      "Análise SWOT, 4Ps e posicionamento de marca",
      "Foco em sustentabilidade e certificação BCorp",
      "Estratégias para distribuição e ponto de venda",
    ],
    link: "https://www.behance.net/gallery/166317995/Trabalho-de-Conclusao-de-Curso-Pantys",
    linkLabel: "Ver no Behance",
  },
  {
    title: "CONIC — Pesquisa sobre Marketing da Pantys",
    subtitle: "Congresso Nacional de Iniciação Científica",
    image: conicImg,
    description:
      "Apresentação de pesquisa científica no CONIC sobre o planejamento de marketing da Pantys. O estudo investigou hábitos de consumo durante o período menstrual, conhecimento sobre produtos alternativos sustentáveis e barreiras de adoção — combinando pesquisa quantitativa e qualitativa.",
    highlights: [
      "Apresentação em congresso nacional",
      "Pesquisa quanti + qualitativa",
      "Análise de comportamento do consumidor",
      "Marketing sustentável e impacto ambiental",
    ],
    link: "https://drive.google.com/file/d/119MSpeQs__zX_NSZZolnxG1n38ShYaWi/view",
    linkLabel: "Ver artigo completo",
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

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
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

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Conquistas</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
            Projetos <span className="italic font-medium">acadêmicos</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                      {item.subtitle}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.highlights.map((h) => (
                        <span key={h} className="font-body text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all w-fit"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {item.linkLabel}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="font-body font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Cursos & Extras
          </h3>
          <div className="flex flex-wrap gap-2">
            {extras.map((item) => (
              <span key={item} className="font-body text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
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
