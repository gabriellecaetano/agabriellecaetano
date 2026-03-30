import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, ExternalLink, BookOpen, Microscope, Store } from "lucide-react";
import { Link } from "react-router-dom";
import tccPantysImg from "@/assets/tcc-pantys.jpg";
import conicImg from "@/assets/conic-research.jpg";

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
    color: "bg-primary",
  },
  {
    id: "soc-store",
    tag: "SOC Store · Marketplace",
    title: "Otimização de conversão e experiência na SOC Store",
    description:
      "Estratégia de growth e otimização da jornada do usuário em marketplace de treinamentos para profissionais de SST — com foco em CRM, integração de plataformas e retenção.",
    skills: ["CRM & Automação", "Growth", "Integração de Sistemas", "UX", "Retenção"],
    metrics: [
      { value: "+20%", label: "aumento em conversões" },
      { value: "+10%", label: "aumento em retenção" },
      { value: "LMS", label: "integração Konviva" },
      { value: "HubSpot", label: "fluxos de CRM" },
    ],
    icon: Store,
    color: "bg-primary",
  },
];

const academicProjects = [
  {
    title: "TCC — Planejamento de Marketing para a Pantys",
    tag: "Universidade Santa Cecília · Publicidade e Propaganda",
    image: tccPantysImg,
    icon: BookOpen,
    description:
      "Planejamento de Marketing completo para a Pantys, marca pioneira em calcinhas absorventes no Brasil. Pesquisa quantitativa com 410 respondentes, análise de concorrentes e estratégias para expansão da marca sustentável.",
    skills: ["Pesquisa Quantitativa", "Análise SWOT", "4Ps de Marketing", "Branding Sustentável"],
    link: "https://www.behance.net/gallery/166317995/Trabalho-de-Conclusao-de-Curso-Pantys",
    linkLabel: "Ver no Behance",
    metric: { value: "410", label: "respostas na pesquisa" },
  },
  {
    title: "CONIC — Pesquisa Científica sobre Marketing Sustentável",
    tag: "Congresso Nacional de Iniciação Científica",
    image: conicImg,
    icon: Microscope,
    description:
      "Apresentação de pesquisa no CONIC investigando hábitos de consumo menstrual, conhecimento sobre produtos alternativos sustentáveis e barreiras de adoção — combinando pesquisa quantitativa e qualitativa.",
    skills: ["Pesquisa Científica", "Comportamento do Consumidor", "Marketing Sustentável"],
    link: "https://drive.google.com/file/d/119MSpeQs__zX_NSZZolnxG1n38ShYaWi/view",
    linkLabel: "Ver artigo completo",
    metric: { value: "CONIC", label: "congresso nacional" },
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
            Projetos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Projetos <span className="italic font-medium">em destaque</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mb-16">
            Aqui estão alguns dos projetos onde atuei com foco em estratégia, execução e resultado.
          </p>
        </motion.div>

        {/* Main Case Studies */}
        <div className="space-y-8 mb-12">
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

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center md:text-left">
                        <p className="font-display text-2xl font-bold text-foreground">{m.value}</p>
                        <p className="font-body text-xs text-muted-foreground mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {cs.skills.map((skill) => (
                        <span key={skill} className="font-body text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
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

        {/* Academic Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {academicProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card hover:border-primary/40 transition-all overflow-hidden h-full"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground">
                    <project.icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">
                    {project.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.skills.map((skill) => (
                      <span key={skill} className="font-body text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-xl font-bold text-foreground">{project.metric.value}</p>
                      <p className="font-body text-xs text-muted-foreground">{project.metric.label}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      {project.linkLabel}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
