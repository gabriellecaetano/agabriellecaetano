import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Store, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import CaseSlidePresentation, { type Persona, type SlideContent } from "./CaseSlidePresentation";
import tccPantysImg from "@/assets/tcc-pantys.jpg";
import caseAssaiCover from "@/assets/case-assai-cover.jpg";
import caseSocCover from "@/assets/case-soc-cover.jpg";

/* ── Assaí slides ── */
const assaiSlides: SlideContent[] = [
  {
    label: "Contexto",
    title: "O Assaí precisava fidelizar seus 13M de usuários digitais",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Assaí Atacadista: +290 lojas, líder em atacarejo, mas com baixa presença digital e sem programa de fidelidade.</p>
          <p>O app Meu Assaí tinha 13M de usuários — uma base enorme sem estratégia de retenção ou engajamento recorrente.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Base de 13M de usuários no app sem loop de retenção — churn silencioso e baixo LTV digital.</p>
          <p>Oportunidade de crescimento via fidelização: aumentar ticket médio e frequência sem custo de aquisição adicional.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>App existente sem feature de engajamento recorrente — usuários entravam, usavam e saíam sem motivo para voltar.</p>
          <p>Necessidade de uma feature que se integrasse ao fluxo existente sem fricção adicional.</p>
        </div>
      ),
    },
  },
  {
    label: "Desafio",
    title: "Criar um programa de fidelidade integrado ao app existente",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Projetar o PontoAí: programa de pontos, cashback e apoio a produtores locais como feature do Meu Assaí.</p>
          <p>Posicionar a feature como diferencial competitivo frente a concorrentes com programas genéricos.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Objetivo: converter 80% dos usuários do app para a feature e manter taxa de resgate acima de 25%.</p>
          <p>Definir onboarding com ativação imediata e mecânica de recompensa que gere recorrência.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Definir MVP com User Story Mapping: pontos, cashback e catálogo de benefícios em 3 releases incrementais.</p>
          <p>Validar com personas reais — do gerente de restaurante ao consumidor final classe C/D.</p>
        </div>
      ),
    },
  },
  {
    label: "Estratégia",
    title: "Discovery + MVP + Product-Led Growth",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Pesquisa qualitativa e quantitativa para definir personas e mapear a jornada de compra completa.</p>
          <p>Plano de Product Marketing com ICP, posicionamento, tom de voz e estratégias de comunicação omnichannel.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Aquisição multicanal: redes sociais, WhatsApp, push notifications e influenciadores regionais.</p>
          <p>Gamificação com missões semanais, níveis de fidelidade (Bronze/Prata/Ouro) e recompensa imediata no onboarding.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Protótipo de alta fidelidade no Figma com testes de usabilidade e iterações baseadas em feedback.</p>
          <p>MVP funcional construído no Adalo para validação rápida antes do desenvolvimento full-stack.</p>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "Protótipo, testes de usabilidade e MVP funcional",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Estratégia omnichannel integrando app, loja física, WhatsApp e e-mail com histórico sincronizado.</p>
          <p>Onboarding em 5 etapas com tour guiado e benefício imediato para ativação.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://www.figma.com/proto/TfXQVQmtzir905VLL36tzs/Estudos?page-id=153%3A530&node-id=153-532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              Ver protótipo no Figma <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://postechfiapfase3.adalo.com/assa-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              Testar MVP <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Onboarding gamificado com recompensa no primeiro uso — cashback imediato + missão de boas-vindas.</p>
          <p>Push notifications contextuais baseadas em geolocalização e histórico de compra.</p>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Testes de usabilidade com usuários reais — iterações na hierarquia visual e fluxo de troca de pontos.</p>
          <p>MVP no Adalo validando fluxos core antes do handoff para desenvolvimento.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://www.figma.com/proto/TfXQVQmtzir905VLL36tzs/Estudos?page-id=153%3A530&node-id=153-532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              Ver protótipo <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://postechfiapfase3.adalo.com/assa-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              Testar MVP <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Resultado",
    title: "80% de conversão para a feature, NPS +20",
    content: {
      pmm: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "80%", l: "conversão app → feature" },
              { v: "NPS +20", l: "satisfação" },
              { v: "27,2%", l: "taxa de resgate" },
              { v: "5 fases", l: "ciclo completo" },
            ].map((m) => (
              <div key={m.l} className="text-center p-3 rounded-xl bg-accent/50">
                <p className="font-display text-xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "500→400", l: "80% entraram no PontoAí" },
              { v: "400→300", l: "60% viram benefícios" },
              { v: "300→210", l: "42% receberam pontos" },
              { v: "210→136", l: "27,2% trocaram" },
            ].map((m) => (
              <div key={m.l} className="p-3 rounded-xl bg-accent/50">
                <p className="font-display text-lg font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>74 usuários recebiam pontos mas não trocavam — redesign da tela de benefícios + CTAs contextuais como solução.</p>
          <p>3 OKRs estratégicos definidos para evolução contínua: engajamento, usabilidade e retenção recorrente.</p>
        </div>
      ),
    },
  },
  {
    label: "Aprendizados",
    title: "Dados, PLG e iteração contínua como motor de produto",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Segmentos diferentes precisam de abordagens distintas — jovens querem gamificação, público 50+ quer simplicidade e desconto direto.</p>
          <p>Posicionamento precisa ser validado com dados reais, não suposições internas.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>PLG com onboarding gamificado e benefício imediato foi mais eficaz que campanhas de aquisição pura.</p>
          <p>O funil de conversão e análise de cohort foram essenciais para priorizar melhorias de impacto.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Cada decisão embasada em dados — desde a escolha do MVP até ajustes de UX pós-teste.</p>
          <p>Continuous Discovery com feedback qualitativo revelou gaps que métricas quantitativas sozinhas não mostravam.</p>
        </div>
      ),
    },
  },
];

/* ── SOC Store slides ── */
const socStoreSlides: SlideContent[] = [
  {
    label: "Contexto",
    title: "Marketplace de SST com sinais de ineficiência na jornada",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>A SOC Store é um marketplace de treinamentos e serviços para profissionais de SST, com modelo de venda direta de cursos.</p>
          <p>Apesar de aquisição estruturada, sinais de ineficiência ao longo da jornada impactavam conversão e retenção.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Funil com queda significativa entre etapas — tráfego chegava mas não convertia proporcionalmente.</p>
          <p>Baixa ativação pós-conversão e retenção fraca sinalizavam problema na jornada, não na aquisição.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Experiência fragmentada entre LMS (Konviva) e pagamento (Safe2Pay) — plataformas não conversavam.</p>
          <p>Usuários abandonavam a jornada nos pontos de transição entre sistemas.</p>
        </div>
      ),
    },
  },
  {
    label: "Desafio",
    title: "Aumentar conversão, ativação e retenção reduzindo fricção",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Três gargalos: queda no funil de compra, experiência fragmentada entre plataformas e baixa ativação pós-conversão.</p>
          <p>Impacto direto: perda de receita, baixa eficiência de aquisição e menor LTV.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Hipóteses: fricção entre plataformas reduzia conversão; ausência de comunicação estruturada impactava ativação.</p>
          <p>A jornada não guiava o usuário de forma clara até a conclusão da compra.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Necessidade de integração entre LMS e pagamento para eliminar inconsistências na jornada.</p>
          <p>Mapeamento completo da experiência para identificar e priorizar pontos de fricção.</p>
        </div>
      ),
    },
  },
  {
    label: "Estratégia",
    title: "Três pilares: fricção, ativação e retenção",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid gap-3">
            {[
              { n: "01", t: "Redução de fricção", d: "Tornar o fluxo mais contínuo e intuitivo" },
              { n: "02", t: "Aumento de ativação", d: "Garantir avanço pós-conversão" },
              { n: "03", t: "Retenção via relacionamento", d: "Comunicação contínua estruturada" },
            ].map((p) => (
              <div key={p.n} className="flex gap-3 items-start">
                <span className="font-display text-lg font-bold text-primary/40">{p.n}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{p.t}</p>
                  <p className="text-sm">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Abordagem data-driven: análise de funil para identificar onde o tráfego se perdia.</p>
          <p>Foco em quick wins de conversão + fundação de CRM para retenção de longo prazo.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Mapeamento end-to-end da jornada com priorização por impacto no negócio.</p>
          <p>Integração de sistemas como requisito técnico fundamental para experiência consistente.</p>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "CRM, integração de sistemas e otimização de jornada",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Reestruturação de CRM no HubSpot: fluxos automatizados, segmentação por comportamento e nutrição ao longo do funil.</p>
          <p>Ajustes na comunicação, copy e timing dos e-mails. Iterações nos fluxos de nutrição com foco em conversão.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Testes em pontos críticos da jornada: ajustes de copy, timing e CTAs.</p>
          <p>Segmentação baseada em comportamento para personalizar comunicação e aumentar relevância.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Integração entre Konviva (LMS) e Safe2Pay (pagamento) — redução de etapas e inconsistências.</p>
          <p>Mapeamento completo da experiência com identificação e priorização de pontos de fricção.</p>
        </div>
      ),
    },
  },
  {
    label: "Resultado",
    title: "+20% conversão, +10% retenção, jornada integrada",
    content: {
      pmm: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "+20%", l: "aumento em conversão" },
              { v: "+10%", l: "aumento em retenção" },
              { v: "LMS", l: "integração Konviva" },
              { v: "CRM", l: "fluxos HubSpot" },
            ].map((m) => (
              <div key={m.l} className="text-center p-3 rounded-xl bg-accent/50">
                <p className="font-display text-xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>+20% de conversão com otimização de funil e CRM estruturado.</p>
          <p>+10% de retenção com estratégias de relacionamento e comunicação pós-compra.</p>
          <p>Melhor aproveitamento do tráfego existente — eficiência de aquisição sem custo adicional.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Jornada mais fluida com integração de plataformas — redução significativa de fricção.</p>
          <p>Melhoria na experiência do usuário evidenciada por métricas de engajamento e retenção.</p>
        </div>
      ),
    },
  },
  {
    label: "Aprendizados",
    title: "Jornada, CRM e integração como alavancas de crescimento",
    content: {
      pmm: (
        <div className="space-y-3">
          <p>Conversão não depende apenas de aquisição, mas da qualidade da jornada.</p>
          <p>Pequenas fricções acumuladas geram grande impacto em receita. CRM é alavanca direta de retenção e LTV.</p>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p>Com mais tempo: testes A/B estruturados em toda a jornada e dashboards de funil em tempo real.</p>
          <p>Evoluiria segmentação com comportamento avançado e exploraria upsell e cross-sell.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Integração entre sistemas é essencial para experiência consistente — não é nice-to-have.</p>
          <p>Mapeamento de jornada precisa ser contínuo, não pontual. Fricções ressurgem com novas features.</p>
        </div>
      ),
    },
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
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState<"assai" | "soc" | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      id: "assai" as const,
      tag: "Tech Challenge · FIAP",
      title: "PontoAí — Programa de fidelidade do Assaí Atacadista",
      description: "Concepção estratégica completa de uma feature de fidelidade para o app do Assaí: do discovery à análise de métricas.",
      icon: ShoppingCart,
      link: "/case/assai-pontoai",
      slides: assaiSlides,
      metrics: [
        { value: "80%", label: "conversão" },
        { value: "NPS +20", label: "satisfação" },
      ],
    },
    {
      id: "soc" as const,
      tag: "SOC Store · Marketplace",
      title: "Otimização da jornada e integração de sistemas na SOC Store",
      description: "Atuação na interseção entre marketing, produto e experiência, com foco em CRM, integração e crescimento.",
      icon: Store,
      link: "/case/soc-store",
      slides: socStoreSlides,
      metrics: [
        { value: "+20%", label: "conversão" },
        { value: "+10%", label: "retenção" },
      ],
    },
  ];

  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Projetos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Projetos <span className="italic font-medium">em destaque</span>
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-2xl mb-12">
            Aqui estão alguns dos projetos onde atuei com foco em estratégia, execução e resultado.
            Selecione um case para explorar no modo apresentação.
          </p>
        </motion.div>

        {/* Case selector cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {cases.map((cs) => (
            <motion.button
              key={cs.id}
              onClick={() => {
                setActiveCase(activeCase === cs.id ? null : cs.id);
                setTimeout(() => slideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-left p-6 rounded-2xl border transition-all ${
                activeCase === cs.id
                  ? "border-primary bg-accent/30 shadow-md"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">
                  {cs.tag}
                </span>
                <cs.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
                {cs.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{cs.description}</p>
              <div className="flex gap-4">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-display text-xl font-bold text-foreground">{m.value}</span>
                    <span className="font-body text-xs text-muted-foreground ml-1">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Slide presentation */}
        <div ref={slideRef}>
          <AnimatePresence mode="wait">
            {activeCase && (
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <CaseSlidePresentation
                  slides={cases.find((c) => c.id === activeCase)!.slides}
                  onViewFull={() => {
                    const cs = cases.find((c) => c.id === activeCase)!;
                    window.location.href = cs.link;
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Academic Projects */}
        <div className="mt-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-6">
            Projetos acadêmicos
          </p>
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
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground">
                      <project.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground mt-1.5 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.skills.map((skill) => (
                        <span key={skill} className="font-body text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display text-lg font-bold text-foreground">{project.metric.value}</p>
                        <p className="font-body text-xs text-muted-foreground">{project.metric.label}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        {project.linkLabel}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Need AnimatePresence import
import { AnimatePresence } from "framer-motion";

export default CaseStudies;
