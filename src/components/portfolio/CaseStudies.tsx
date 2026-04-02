import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Store, ExternalLink, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CaseSlidePresentation, { type Persona, type SlideContent } from "./CaseSlidePresentation";

import caseAssaiCover from "@/assets/case-assai-cover.png";
import caseSocCover from "@/assets/case-soc-cover.png";

/* ── Assaí slides (STAR method — 1 idea per slide, concise) ── */
const assaiSlides: SlideContent[] = [
  {
    label: "Situação",
    title: "13M de usuários sem estratégia de retenção",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Assaí Atacadista: +290 lojas, líder em atacarejo. App Meu Assaí com 13M de usuários — mas sem programa de fidelidade ou engajamento recorrente.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Problema central</p>
            <p className="text-sm">Base massiva sem loop de retenção = churn silencioso e baixo LTV digital.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Base de 13M de usuários no app sem loop de retenção — oportunidade de aumentar ticket médio e frequência sem custo de aquisição adicional.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Oportunidade</p>
            <p className="text-sm">Crescimento via fidelização, não aquisição — melhor ROI por usuário.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>App existente sem feature de engajamento recorrente — usuários entravam, usavam e saíam sem motivo para voltar.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Gap de produto</p>
            <p className="text-sm">Nenhuma feature incentivava recorrência ou aprofundamento no uso.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Tarefa",
    title: "Criar programa de fidelidade integrado ao app",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Projetar o PontoAí: programa de pontos, cashback e apoio a produtores locais. Posicionar como diferencial competitivo.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Desafio estratégico</p>
            <p className="text-sm">Diferenciar de programas genéricos dos concorrentes através de propósito (produtores locais).</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Metas: converter 80% dos usuários do app e manter taxa de resgate acima de 25%.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">KPIs definidos</p>
            <p className="text-sm">Ativação imediata no onboarding + mecânica de recompensa que gere recorrência.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>MVP com User Story Mapping: pontos, cashback e catálogo de benefícios em 3 releases incrementais.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Scope</p>
            <p className="text-sm">Validar com personas reais — do gerente de restaurante ao consumidor final classe C/D.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Estratégia",
    title: "Discovery + PLG + gamificação",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Pesquisa quali/quanti para definir personas e jornada. Plano de PMM com ICP, posicionamento e comunicação omnichannel.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que essa abordagem?</p>
            <p className="text-sm">Concorrentes usavam programas genéricos. Diferenciamos com propósito (produtores locais) + gamificação, gerando engajamento emocional além do transacional.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Aquisição multicanal: redes sociais, WhatsApp, push e influenciadores regionais. Gamificação com missões, níveis (Bronze/Prata/Ouro) e recompensa imediata.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Trade-off considerado</p>
            <p className="text-sm">PLG vs. campanha tradicional — optamos por onboarding gamificado que converte organicamente, reduzindo CAC.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Protótipo no Figma com testes de usabilidade. MVP no Adalo para validação rápida antes do dev full-stack.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Decisão de produto</p>
            <p className="text-sm">Adalo como MVP permitiu validar hipóteses em semanas, não meses — priorizando aprendizado sobre perfeição técnica.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "Protótipo, testes e MVP funcional",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Estratégia omnichannel integrando app, loja, WhatsApp e e-mail. Onboarding em 5 etapas com benefício imediato.</p>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Onboarding gamificado com cashback imediato + missão de boas-vindas. Push notifications contextuais por geolocalização e histórico.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Decisão de growth</p>
            <p className="text-sm">Benefício imediato no primeiro uso — reduz time-to-value e aumenta chance de segunda visita.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Testes de usabilidade com usuários reais — iterações na hierarquia visual e fluxo de troca de pontos.</p>
          <div className="flex gap-3 flex-wrap mt-2">
            <a href="https://www.figma.com/proto/TfXQVQmtzir905VLL36tzs/Estudos?page-id=153%3A530&node-id=153-532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
              Ver protótipo <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://postechfiapfase3.adalo.com/assa-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
              Testar MVP <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Resultado",
    title: "80% de conversão, NPS +20, 27% resgate",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { v: "80%", l: "conversão app → feature" },
              { v: "NPS +20", l: "satisfação" },
              { v: "27,2%", l: "taxa de resgate" },
              { v: "5 fases", l: "ciclo completo" },
            ].map((m) => (
              <div key={m.l} className="text-center p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-2xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "500→400", l: "80% entraram no PontoAí" },
              { v: "400→300", l: "60% viram benefícios" },
              { v: "300→210", l: "42% receberam pontos" },
              { v: "210→136", l: "27,2% trocaram" },
            ].map((m) => (
              <div key={m.l} className="p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-lg font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>74 usuários recebiam pontos mas não trocavam — redesign da tela de benefícios + CTAs contextuais como solução.</p>
          <p>3 OKRs estratégicos para evolução contínua: engajamento, usabilidade e retenção recorrente.</p>
        </div>
      ),
    },
  },
  {
    label: "Aprendizados",
    title: "Insights estratégicos do projeto",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            "Segmentos diferentes precisam de abordagens distintas — jovens querem gamificação, público 50+ quer simplicidade.",
            "Posicionamento precisa ser validado com dados reais, não suposições internas.",
            "Propósito (produtores locais) gerou diferenciação real vs. programas genéricos.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      growth: (
        <div className="space-y-3">
          {[
            "PLG com onboarding gamificado foi mais eficaz que campanhas de aquisição pura.",
            "Funil de conversão e análise de cohort essenciais para priorizar melhorias.",
            "Benefício imediato no primeiro uso é o maior driver de ativação.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      product: (
        <div className="space-y-3">
          {[
            "Cada decisão embasada em dados — do MVP até ajustes de UX pós-teste.",
            "Continuous Discovery com feedback qualitativo revelou gaps que métricas quantitativas sozinhas não mostravam.",
            "MVP no-code acelerou o ciclo de aprendizado em semanas.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
    },
  },
];

/* ── SOC Store slides (STAR method) ── */
const socStoreSlides: SlideContent[] = [
  {
    label: "Situação",
    title: "Marketplace com jornada fragmentada e baixa conversão",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>SOC Store: marketplace de treinamentos para profissionais de SST. Aquisição estruturada, mas jornada com fricções que impactavam conversão e retenção.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Problema central</p>
            <p className="text-sm">Experiência fragmentada entre LMS e pagamento gerava queda no funil e perda de receita.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Funil com queda significativa entre etapas — tráfego chegava mas não convertia. Baixa ativação pós-conversão.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Diagnóstico</p>
            <p className="text-sm">Problema na jornada, não na aquisição — otimizar o funil teria mais ROI que mais tráfego.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Plataformas LMS (Konviva) e pagamento (Safe2Pay) não conversavam. Usuários abandonavam nos pontos de transição.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Gap técnico</p>
            <p className="text-sm">Falta de integração entre sistemas criava fricções invisíveis mas de alto impacto.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Tarefa",
    title: "Aumentar conversão e retenção reduzindo fricção",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Três gargalos identificados: queda no funil de compra, experiência fragmentada e baixa ativação pós-conversão.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Impacto direto</p>
            <p className="text-sm">Perda de receita, baixa eficiência de aquisição e menor LTV dos usuários.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Hipóteses: fricção entre plataformas reduzia conversão; ausência de comunicação estruturada impactava ativação.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Priorização</p>
            <p className="text-sm">Focamos em quick wins de conversão + fundação de CRM para retenção de longo prazo.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Necessidade de integração entre LMS e pagamento. Mapeamento completo da jornada para priorizar fricções.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Escopo</p>
            <p className="text-sm">Eliminar inconsistências na transição entre sistemas como prioridade P0.</p>
          </div>
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
              { n: "01", t: "Redução de fricção", d: "Fluxo mais contínuo e intuitivo" },
              { n: "02", t: "Aumento de ativação", d: "Garantir avanço pós-conversão" },
              { n: "03", t: "Retenção via CRM", d: "Comunicação contínua estruturada" },
            ].map((p) => (
              <div key={p.n} className="flex gap-3 items-start p-3 rounded-xl bg-accent/30">
                <span className="font-display text-lg font-bold text-primary/50">{p.n}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{p.t}</p>
                  <p className="text-sm">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que essa abordagem?</p>
            <p className="text-sm">Otimizar o que já existia antes de investir em aquisição — melhor ROI com menor risco.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Abordagem data-driven: análise de funil para identificar onde o tráfego se perdia.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Trade-off</p>
            <p className="text-sm">Investir em otimização de funil vs. mais tráfego. Dados mostraram que o problema era conversão, não volume.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Mapeamento end-to-end da jornada com priorização por impacto no negócio.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Decisão técnica</p>
            <p className="text-sm">Integração de sistemas como requisito P0 — sem isso, otimizações pontuais não teriam efeito sustentável.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "CRM, integração de sistemas e otimização",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Reestruturação de CRM no HubSpot: fluxos automatizados, segmentação comportamental e nutrição ao longo do funil.</p>
          <p>Ajustes em copy, timing de e-mails e iterações nos fluxos de nutrição.</p>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Testes em pontos críticos da jornada: ajustes de copy, timing e CTAs. Segmentação comportamental para personalizar comunicação.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Foco</p>
            <p className="text-sm">Cada teste medido por impacto em conversão e retenção — sem otimizações de vaidade.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Integração Konviva (LMS) + Safe2Pay (pagamento) — redução de etapas e inconsistências na jornada.</p>
          <p>Mapeamento completo da experiência com priorização de pontos de fricção por impacto.</p>
        </div>
      ),
    },
  },
  {
    label: "Resultado",
    title: "+20% conversão, +10% retenção",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "+20%", l: "aumento em conversão" },
              { v: "+10%", l: "aumento em retenção" },
              { v: "LMS", l: "integração Konviva" },
              { v: "CRM", l: "fluxos HubSpot" },
            ].map((m) => (
              <div key={m.l} className="text-center p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-2xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p className="font-semibold text-foreground">+20% de conversão com otimização de funil e CRM estruturado.</p>
          <p>+10% de retenção com estratégias de relacionamento e comunicação pós-compra.</p>
          <p>Melhor aproveitamento do tráfego existente — eficiência sem custo adicional de aquisição.</p>
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
    title: "Insights estratégicos",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            "Conversão depende da qualidade da jornada, não apenas da aquisição.",
            "Pequenas fricções acumuladas geram grande impacto em receita.",
            "CRM é alavanca direta de retenção e LTV.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      growth: (
        <div className="space-y-3">
          {[
            "Com mais tempo: testes A/B estruturados em toda a jornada.",
            "Dashboards de funil em tempo real como próximo passo.",
            "Segmentação avançada e estratégias de upsell/cross-sell como evolução.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      product: (
        <div className="space-y-3">
          {[
            "Integração entre sistemas é essencial — não é nice-to-have.",
            "Mapeamento de jornada precisa ser contínuo, não pontual.",
            "Fricções ressurgem com novas features — monitoramento constante.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
    },
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
      description: "Concepção estratégica completa: do discovery à análise de métricas, com protótipo e MVP funcional.",
      icon: ShoppingCart,
      cover: caseAssaiCover,
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
      cover: caseSocCover,
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
            Cases
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Projetos <span className="italic font-medium">em destaque</span>
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-2xl mb-12">
            Selecione um case para explorar no modo apresentação — cada slide adaptável por perfil de audiência.
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
              className={`text-left rounded-2xl border transition-all overflow-hidden ${
                activeCase === cs.id
                  ? "border-primary bg-accent/30 shadow-md"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="h-36 md:h-44 w-full overflow-hidden">
                <img
                  src={cs.cover}
                  alt={cs.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
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

      </div>
    </section>
  );
};

export default CaseStudies;
