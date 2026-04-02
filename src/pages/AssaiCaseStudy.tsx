import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Users, Search, Lightbulb, Rocket, BarChart3, Target, TrendingUp, MessageSquare, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import pontoaiScreenshot from "@/assets/pontoai-app-screenshot.jpg";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

const phases = [
  {
    num: "01",
    title: "Análise de Mercado",
    subtitle: "Fase 1 — Understand",
    icon: Search,
    content: [
      "Análise completa do Assaí Atacadista: +290 lojas, líder em atacarejo no Brasil com faturamento de R$20 bi/trimestre.",
      "Segmentação demográfica, geográfica, psicográfica e comportamental dos clientes.",
      "Análise PESTEL avaliando fatores políticos, econômicos, sociais, tecnológicos, ambientais e legais.",
      "SWOT identificando forças (presença nacional), fraquezas (pouca presença digital), oportunidades (fidelização via app) e ameaças (concorrência digital).",
    ],
    highlight: "Oportunidade identificada: programa de fidelidade digital para reter clientes e aumentar ticket médio.",
  },
  {
    num: "02",
    title: "Discovery & Personas",
    subtitle: "Fase 2 — Discover",
    icon: Users,
    content: [
      "Criação de personas baseadas em pesquisas qualitativas e quantitativas — do gerente de restaurante ao consumidor final.",
      "Mapa de Empatia para compreender dores, expectativas e interações dos consumidores.",
      "Journey Map detalhado mapeando toda a experiência de compra — da descoberta ao pós-compra.",
      "Formulação e validação de hipóteses de pesquisa com usuários reais.",
      "Definição do MVP com User Story Mapping e planejamento de releases.",
    ],
    highlight: "MVP definido: feature 'PontoAí' — programa de pontos, cashback e produtos locais integrados ao app Meu Assaí.",
  },
  {
    num: "03",
    title: "Build & Ship",
    subtitle: "Fase 3 — Protótipo & Testes",
    icon: Lightbulb,
    content: [
      "Protótipo de alta fidelidade no Figma com fluxos completos de pontos, cashback e produtos locais.",
      "Testes de usabilidade com usuários reais — avaliando navegação, compreensão e satisfação.",
      "Iterações no design baseadas em feedback direto dos testes.",
      "Construção do MVP funcional na plataforma Adalo.",
    ],
    links: [
      { label: "Testar MVP no Adalo", url: "https://postechfiapfase3.adalo.com/assa-app" },
    ],
    highlight: "Principais ajustes: simplificação do fluxo de troca de pontos e melhoria na hierarquia visual das ofertas.",
  },
  {
    num: "04",
    title: "Growth & PLG",
    subtitle: "Fase 4 — Aquisição & Retenção",
    icon: Rocket,
    content: [
      "Plano de aquisição multicanal: redes sociais, WhatsApp, e-mail marketing, push notifications e influenciadores regionais.",
      "Estratégia omnichannel integrando app, loja física, WhatsApp e e-mail com histórico sincronizado.",
      "Onboarding em 5 etapas com tour guiado e recompensa imediata ao primeiro uso.",
      "Gamificação: missões semanais, desafios sustentáveis e níveis de fidelidade (Bronze, Prata, Ouro).",
      "Plano de Product Marketing com ICP definido, posicionamento, tom de voz e estratégias de precificação via pontos.",
    ],
    highlight: "Product-Led Growth: onboarding gamificado + cashback imediato + comunicação multicanal integrada.",
  },
  {
    num: "05",
    title: "Learn & Iterate",
    subtitle: "Fase 5 — Métricas & Evolução",
    icon: BarChart3,
    content: [
      "Framework de métricas: Taxa de Conversão por etapa do funil, Duração de Sessão, Taxa de Ativação, Retenção (Cohort) e Taxa de Resgate.",
      "Análise de funil: 500 usuários → 400 no PontoAí (80%) → 300 viram benefícios (60%) → 210 receberam pontos (42%) → 136 trocaram (27,2%).",
      "NPS Transacional com entrevistas qualitativas: score +20 com insights acionáveis.",
      "3 OKRs estratégicos: engajamento inicial, usabilidade da troca de pontos e retenção recorrente.",
      "Roadmap de 3 meses com Continuous Discovery e iteração baseada em dados.",
    ],
    highlight: "Insight principal: 74 usuários recebiam pontos mas não trocavam — redesign da tela de benefícios + CTAs contextuais como solução.",
  },
];

const funnelData = [
  { label: "Acessaram o app", value: 500, pct: "100%" },
  { label: "Entraram no PontoAí", value: 400, pct: "80%" },
  { label: "Viram benefícios", value: 300, pct: "60%" },
  { label: "Receberam pontos", value: 210, pct: "42%" },
  { label: "Trocaram pontos", value: 136, pct: "27,2%" },
];

const AssaiCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex items-center h-16">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold">Tech Challenge · FIAP</p>
                <p className="font-body text-sm text-muted-foreground">Pós-Graduação em Digital Product Management</p>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] mb-6">
              PontoAí — <span className="italic font-medium text-primary">Assaí Atacadista</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Concepção estratégica completa de uma feature de programa de fidelidade para o app do Assaí Atacadista.
              Do discovery à análise de métricas, passando por protótipo, growth e Product-Led Growth — em 5 fases
              do ciclo de produto digital.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
              <div><span className="text-foreground font-semibold">Papel:</span> Product Manager (acadêmico)</div>
              <div><span className="text-foreground font-semibold">Equipe:</span> 4 integrantes</div>
              <div><span className="text-foreground font-semibold">Duração:</span> 5 fases (~10 meses)</div>
              <div><span className="text-foreground font-semibold">Curso:</span> FIAP · Pós Tech 3DPMT</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <Section>
        <div className="bg-secondary text-secondary-foreground">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5 fases", label: "Ciclo completo de produto" },
              { value: "80%", label: "Conversão app → feature" },
              { value: "NPS +20", label: "Satisfação do usuário" },
              { value: "27,2%", label: "Taxa de resgate de pontos" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold">{m.value}</p>
                <p className="font-body text-sm text-secondary-foreground/60 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Context */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">O Contexto</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  O Assaí Atacadista é uma das maiores redes de atacarejo do Brasil, com mais de 290 lojas em todas
                  as regiões do país. Apesar da forte presença física, a empresa tinha pouca presença digital e
                  não era reconhecida por inovações nesse segmento.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  O app Meu Assaí já contava com 13 milhões de usuários, mas faltava uma estratégia robusta de
                  fidelização que conectasse o digital ao comportamento de compra na loja física.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">O Desafio</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Criar uma feature de fidelidade — o <strong className="text-foreground">PontoAí</strong> — que
                  integrasse programa de pontos, cashback e apoio a produtores locais, gerando recorrência e
                  aumentando o ticket médio.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  O projeto deveria abordar todo o ciclo de gestão de produto: análise de mercado, discovery,
                  prototipação, growth e iteração baseada em dados.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Processo</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16">
              As 5 fases <span className="italic font-medium">do projeto</span>
            </h2>
          </Section>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <Section key={phase.num}>
                <div className="relative pl-8 md:pl-20 border-l-2 border-border hover:border-primary/40 transition-colors">
                  {/* Phase number */}
                  <div className="absolute -left-5 md:-left-5 top-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-sm font-bold">
                    {phase.num}
                  </div>

                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <phase.icon className="w-5 h-5 text-primary" />
                      <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">{phase.subtitle}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{phase.title}</h3>

                    <ul className="space-y-2 mb-4">
                      {phase.content.map((item, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 rounded-xl bg-accent/50 border border-primary/10">
                      <p className="font-body text-sm text-accent-foreground">
                        <span className="font-semibold">💡 </span>
                        {phase.highlight}
                      </p>
                    </div>

                    {phase.links && phase.links.length > 0 && (
                      <div className="mt-6 space-y-6">
                        {/* App Preview */}
                        <div className="rounded-2xl border border-border bg-background overflow-hidden">
                          <div className="p-4 border-b border-border">
                            <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold">Preview do App</p>
                          </div>
                          <div className="p-6 flex justify-center bg-muted/30">
                            <img
                              src={pontoaiScreenshot}
                              alt="Preview do app PontoAí - Assaí Atacadista"
                              loading="lazy"
                              width={512}
                              height={1024}
                              className="w-48 md:w-56 rounded-2xl shadow-lg text-left"
                            />
                          </div>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                {link.label.includes("Figma") ? (
                                  <svg viewBox="0 0 38 57" className="w-5 h-6" fill="none">
                                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="hsl(var(--primary))"/>
                                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="hsl(var(--primary))" opacity="0.4"/>
                                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="hsl(var(--primary))" opacity="0.6"/>
                                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="hsl(var(--primary))" opacity="0.8"/>
                                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="hsl(var(--primary))" opacity="0.6"/>
                                  </svg>
                                ) : (
                                  <Rocket className="w-5 h-5 text-primary" />
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                                <p className="font-body text-xs text-muted-foreground">{link.label.includes("Figma") ? "Protótipo interativo" : "MVP funcional"}</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel & Charts Visualization */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Resultados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Dados <span className="italic font-medium">do projeto</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Funnel Chart */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Funil de conversão</h3>
                <div className="space-y-3">
                  {funnelData.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-body text-sm font-medium text-foreground">{step.label}</span>
                        <span className="font-body text-sm text-muted-foreground">{step.value} ({step.pct})</span>
                      </div>
                      <div className="h-8 bg-muted rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(step.value / 500) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.15 }}
                          className="h-full bg-primary/80 rounded-lg flex items-center justify-end pr-3"
                        >
                          <span className="font-body text-xs font-bold text-primary-foreground">{step.pct}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* NPS Visual Chart */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">NPS Score</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                      <motion.circle
                        cx="50" cy="50" r="40" fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="12"
                        strokeDasharray={`${40 * 2 * Math.PI * 0.4} ${40 * 2 * Math.PI}`}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 40 * 2 * Math.PI }}
                        whileInView={{ strokeDashoffset: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-3xl font-bold text-foreground">+20</span>
                      <span className="font-body text-xs text-muted-foreground">NPS Score</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                  {[
                    { label: "Promotores", value: "40%", color: "bg-primary" },
                    { label: "Neutros", value: "40%", color: "bg-muted-foreground/30" },
                    { label: "Detratores", value: "20%", color: "bg-destructive/60" },
                  ].map((seg) => (
                    <div key={seg.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${seg.color}`} />
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground">{seg.value}</p>
                        <p className="font-body text-xs text-muted-foreground">{seg.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* NPS & User Feedback */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Feedback</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                  NPS <span className="italic font-medium">& insights</span>
                </h2>

                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary-foreground">+20</span>
                  </div>
                  <div>
                    <p className="font-body text-foreground font-semibold">NPS Transacional</p>
                    <p className="font-body text-sm text-muted-foreground">40% Promotores · 40% Neutros · 20% Detratores</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Target, text: "Onboarding precisa comunicar valor imediato — risco de churn em públicos menos digitais" },
                    { icon: TrendingUp, text: "35% dos usuários com pontos não trocavam — tela de benefícios confusa" },
                    { icon: MessageSquare, text: "Jovens pedem gamificação; perfis tradicionais querem desconto direto" },
                  ].map((insight) => (
                    <div key={insight.text} className="flex gap-3 p-4 rounded-xl border border-border bg-background">
                      <insight.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-muted-foreground">{insight.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Evolução</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                  OKRs <span className="italic font-medium">estratégicos</span>
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      obj: "Maximizar engajamento inicial",
                      krs: ["Reduzir perda app→PontoAí de 20% para 10%", "Aumentar clique no botão PontoAí em 30%", "Onboarding com +80% visualização completa"],
                    },
                    {
                      obj: "Melhorar usabilidade da troca de pontos",
                      krs: ["Reduzir não-resgate de 35% para 20%", "Aumentar visualização de benefícios em 25%", "Coletar feedback de 100+ usuários"],
                    },
                    {
                      obj: "Aumentar retenção recorrente",
                      krs: ["Retenção mês 2: de 60% para 75%", "Missões semanais com conclusão >50%", "Retorno ao PontoAí em 3 meses: 30%→50%"],
                    },
                  ].map((okr) => (
                    <div key={okr.obj} className="p-5 rounded-xl border border-border bg-background">
                      <h4 className="font-body font-bold text-foreground text-sm mb-3">{okr.obj}</h4>
                      <ul className="space-y-1">
                        {okr.krs.map((kr) => (
                          <li key={kr} className="font-body text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">→</span>
                            {kr}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Aprendizados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              O que <span className="italic font-medium">aprendi</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Data-Driven Decisions",
                  text: "Cada decisão foi embasada em dados — desde a escolha do MVP até os ajustes de UX. O funil de conversão e a análise de cohort foram essenciais para priorizar melhorias.",
                },
                {
                  title: "Product-Led Growth",
                  text: "O PLG com onboarding gamificado e benefício imediato se mostrou mais eficaz que campanhas de aquisição pura. O produto precisa vender sozinho.",
                },
                {
                  title: "Iteração Contínua",
                  text: "O NPS e feedback qualitativo revelaram que segmentos diferentes precisam de abordagens distintas — jovens querem gamificação, público 50+ quer simplicidade.",
                },
              ].map((learning) => (
                <div key={learning.title} className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-body font-bold text-foreground mb-3">{learning.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{learning.text}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-3xl font-bold mb-4">
            Gostou do meu trabalho?
          </p>
          <p className="font-body text-secondary-foreground/60 mb-8">
            Vamos conversar sobre como posso contribuir para o seu time de Product Marketing.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:gabriellecontato@outlook.com.br"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Entre em contato
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-secondary-foreground/20 px-8 py-3.5 rounded-full font-body text-sm font-medium hover:bg-secondary-foreground/10 transition-colors"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center font-body text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Gabrielle Caetano
      </footer>
    </div>
  );
};

export default AssaiCaseStudy;
