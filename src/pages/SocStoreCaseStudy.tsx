import { motion } from "framer-motion";
import { ArrowLeft, Store, ChevronRight, Mail, Settings, Users, TrendingUp, Compass, Lightbulb, Scale, Brain, Target, AlertTriangle, BarChart3, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

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

const SocStoreCaseStudy = () => {
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
                <Store className="w-6 h-6" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold">Case de Produto</p>
                <p className="font-body text-sm text-muted-foreground">Estratégia, decisão e impacto</p>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] mb-6">
              SOC Store — <span className="italic font-medium text-primary">Como transformei otimização de funil em +20% de conversão com integração de sistemas</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              De uma jornada fragmentada entre 3 plataformas a um funil integrado que aumentou conversão em 20% e retenção em 10% — com hipóteses validadas, trade-offs documentados e decisões de priorização claras.
            </p>

            <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
              <div><span className="text-foreground font-semibold">Papel:</span> Analista de Marketing de Produto</div>
              <div><span className="text-foreground font-semibold">Foco:</span> Growth, CRM & Integração</div>
              <div><span className="text-foreground font-semibold">Ferramentas:</span> HubSpot, Konviva, Safe2Pay, GA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <Section>
        <div className="bg-secondary text-secondary-foreground">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+20%", label: "Aumento em conversão" },
              { value: "+10%", label: "Aumento em retenção" },
              { value: "3→1", label: "Plataformas integradas" },
              { value: "CRM", label: "Fluxos automatizados" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold">{m.value}</p>
                <p className="font-body text-sm text-secondary-foreground/60 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 01. Contexto de Negócio */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">01 · Contexto de Negócio</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Antes da <span className="italic font-medium">solução</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  A SOC Store é um marketplace de treinamentos e serviços para profissionais de SST (Segurança e Saúde no Trabalho), com modelo de receita baseado em venda direta de cursos. A aquisição era estruturada, mas o funil tinha ineficiências ocultas.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  O tráfego chegava, mas a conversão não acompanhava. A jornada do usuário passava por 3 plataformas distintas (site, LMS Konviva e gateway Safe2Pay) sem integração — cada transição era uma oportunidade de abandono.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-destructive" />
                    <p className="font-body text-sm font-bold text-foreground">Conversão abaixo do potencial</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">Queda significativa no funil de compra — tráfego qualificado se perdia entre plataformas.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-destructive" />
                    <p className="font-body text-sm font-bold text-foreground">LTV limitado</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">Sem comunicação pós-compra estruturada, retenção era baixa. Cada aluno comprava um curso e não voltava.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-destructive" />
                    <p className="font-body text-sm font-bold text-foreground">CAC crescente sem compensação</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">Investimento em aquisição não se pagava: custo por cliente subia, mas LTV permanecia baixo sem estratégia de retenção.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 02. Problema Estratégico */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">02 · Problema Estratégico</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              A decisão <span className="italic font-medium">por trás da otimização</span>
            </h2>
            <div className="max-w-3xl">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                O problema não era "melhorar a experiência" — era decidir <strong className="text-foreground">onde alocar esforço limitado para máximo impacto em receita</strong>: investir em mais tráfego ou consertar o funil que desperdiçava o tráfego existente?
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border-2 border-border bg-background">
                  <div className="flex items-center gap-2 mb-3">
                    <Scale className="w-5 h-5 text-muted-foreground" />
                    <p className="font-body text-sm font-bold text-foreground">Opção A: Mais tráfego</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-3">Aumentar investimento em aquisição. Resultado rápido, mas amplificava as ineficiências do funil — cada real gasto convertia menos do que deveria.</p>
                  <span className="inline-block font-body text-xs font-semibold px-3 py-1 rounded-full bg-destructive/10 text-destructive">Descartada</span>
                </div>
                <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <p className="font-body text-sm font-bold text-foreground">Opção B: Otimizar o funil</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-3">Integrar sistemas, reduzir fricção e estruturar CRM. Mais complexo, mas cada melhoria multiplicava o valor de todo o tráfego existente.</p>
                  <span className="inline-block font-body text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Escolhida</span>
                </div>
              </div>
              <div className="mt-8 p-5 rounded-xl bg-accent/30 border border-primary/10">
                <p className="font-body text-sm text-accent-foreground">
                  <span className="font-semibold">💡 Trade-off central: </span>
                  Mais tráfego daria resultado em semanas, mas com ROI decrescente. Otimização do funil levaria meses, mas criaria fundação escalável — cada novo visitante converteria mais. Dados mostraram que o problema era conversão, não volume.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 03. Hipóteses de Produto */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">03 · Hipóteses de Produto</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              O que acreditávamos <span className="italic font-medium">antes de agir</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  h: "Fricção entre plataformas mata conversão",
                  desc: "A transição entre site → LMS → gateway de pagamento criava pontos de abandono invisíveis. Eliminar essas transições aumentaria conversão proporcionalmente.",
                  validation: "Validada — integração de sistemas resultou em +20% de conversão.",
                },
                {
                  icon: Brain,
                  h: "Ausência de CRM impacta retenção",
                  desc: "Sem comunicação estruturada pós-compra, o aluno não tinha motivo para voltar. CRM com segmentação comportamental criaria loop de retenção.",
                  validation: "Validada — fluxos HubSpot contribuíram para +10% de retenção.",
                },
                {
                  icon: Rocket,
                  h: "Jornada confusa dificulta decisão de compra",
                  desc: "O usuário não conseguia navegar de forma clara até a conclusão da compra. Simplificar a jornada reduziria desistências no meio do funil.",
                  validation: "Validada — mapeamento e ajustes na jornada reduziram drop-off em etapas críticas.",
                },
              ].map((item) => (
                <div key={item.h} className="p-6 rounded-2xl border border-border bg-card">
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-body font-bold text-foreground mb-2">{item.h}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <div className="p-3 rounded-lg bg-accent/30">
                    <p className="font-body text-xs text-accent-foreground"><span className="font-semibold">Status: </span>{item.validation}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 04. Decisão de Produto */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">04 · Decisão de Produto</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Por que <span className="italic font-medium">essa abordagem</span>
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed">
                Priorizamos usando um framework de <strong className="text-foreground">impacto em receita × esforço de implementação × risco</strong>. A integração de sistemas + CRM venceu não por ser o mais rápido, mas por resolver a causa raiz.
              </p>

              <div className="space-y-4">
                <h3 className="font-body font-bold text-foreground">Alternativas avaliadas e descartadas:</h3>
                {[
                  { alt: "Apenas otimizar copy e CTAs", why: "Quick win, mas tratava sintoma, não causa. Sem integração, a fricção continuaria gerando abandono independente da comunicação." },
                  { alt: "Migrar para plataforma all-in-one", why: "Resolveria a fragmentação, mas alto custo de migração e risco operacional. O negócio não podia parar para migrar." },
                  { alt: "Investir só em CRM sem integração", why: "Melhoraria retenção, mas sem resolver o funil quebrado, novos alunos continuariam sendo perdidos na conversão." },
                ].map((item) => (
                  <div key={item.alt} className="flex gap-4 p-4 rounded-xl border border-border bg-background">
                    <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">{item.alt}</p>
                      <p className="font-body text-sm text-muted-foreground">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <p className="font-body text-sm font-semibold text-foreground mb-2">Decisão final: abordagem em 3 frentes simultâneas</p>
                <div className="space-y-2">
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">Frente 1:</strong> Integração LMS + pagamento — eliminar fricção na jornada de compra</p>
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">Frente 2:</strong> CRM no HubSpot — estruturar comunicação pós-compra e nutrição</p>
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">Frente 3:</strong> Otimização da jornada — mapeamento e priorização de pontos de fricção</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 05. Execução */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">05 · Execução</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              O <span className="italic font-medium">porquê</span> das decisões
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Integração Konviva + Safe2Pay",
                    why: "A transição entre 3 plataformas era o maior ponto de abandono. Integrar LMS e pagamento reduziu etapas e eliminou inconsistências — cada clique removido era conversão recuperada.",
                  },
                  {
                    title: "CRM com segmentação comportamental",
                    why: "Fluxos genéricos tinham baixo engajamento. Segmentação baseada em comportamento (curso visualizado, carrinho abandonado, conclusão) permitiu comunicação relevante e no timing certo.",
                  },
                  {
                    title: "Mapeamento end-to-end da jornada",
                    why: "Sem visão completa, otimizações pontuais não tinham efeito sustentável. O mapeamento revelou fricções invisíveis que métricas agregadas não mostravam.",
                  },
                  {
                    title: "Iterações em copy e timing de e-mails",
                    why: "Dados mostraram que timing era mais impactante que copy. E-mails enviados 2h após abandono tinham 3x mais abertura que e-mails de 24h — priorizamos timing sobre criatividade.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl border border-border bg-card">
                    <h4 className="font-body font-bold text-foreground text-sm mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.why}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-border bg-background">
                  <h4 className="font-body text-sm font-bold text-foreground mb-4">Stack de ferramentas</h4>
                  <div className="flex flex-wrap gap-3">
                    {["HubSpot", "Konviva (LMS)", "Safe2Pay", "Google Analytics"].map((tool) => (
                      <span key={tool} className="font-body text-sm px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-accent/30 border border-primary/10">
                  <p className="font-body text-sm text-accent-foreground">
                    <span className="font-semibold">Atuação cross-funcional: </span>
                    Ponte entre marketing, produto e operações. Cada decisão era validada com dados e alinhada com as 3 áreas antes de execução.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 06. Impacto e Métricas */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">06 · Impacto e Métricas</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Não só <span className="italic font-medium">números — leitura de negócio</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Resultados quantitativos</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "+20%", desc: "conversão no funil" },
                    { value: "+10%", desc: "retenção de alunos" },
                  ].map((r) => (
                    <div key={r.value} className="p-6 rounded-2xl bg-secondary text-secondary-foreground text-center">
                      <p className="font-display text-4xl font-bold mb-2">{r.value}</p>
                      <p className="font-body text-sm text-secondary-foreground/70">{r.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Redução de fricção na jornada com integração de sistemas",
                    "Melhor aproveitamento do tráfego existente — eficiência sem custo adicional",
                    "Fundação de CRM para estratégia de retenção de longo prazo",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 p-4 rounded-xl border border-border bg-background">
                      <span className="text-primary font-bold">→</span>
                      <p className="font-body text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Leitura de negócio</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">+20% conversão = receita incremental sem CAC adicional. </span>
                      O mesmo investimento em tráfego passou a gerar 20% mais clientes — ROI direto da otimização de funil.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">+10% retenção = aumento de LTV. </span>
                      Cada aluno retido representa uma nova venda potencial sem custo de aquisição — impacto composto ao longo do tempo.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Projeção: </span>
                      Com CRM estruturado, projetamos que a taxa de recompra suba de ~5% para ~15% em 6 meses — triplicando o LTV médio e viabilizando investimento maior em aquisição.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 07. Aprendizados */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">07 · Aprendizados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              O que não funcionou <span className="italic font-medium">e o que mudaria</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-body font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" /> O que não funcionou
                </h3>
                <div className="space-y-3">
                  {[
                    "Primeiros fluxos de CRM tinham segmentação genérica — taxas de abertura abaixo de 15%. Só melhorou com segmentação comportamental granular.",
                    "Otimizações de copy sem dados de jornada tinham impacto marginal. O mapeamento end-to-end deveria ter sido o primeiro passo, não o terceiro.",
                    "Faltou dashboard de funil em tempo real — decisões eram baseadas em análises retroativas, perdendo oportunidade de reagir rapidamente.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                      <span className="text-destructive font-bold shrink-0">✗</span>
                      <p className="font-body text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-body font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" /> O que mudaria
                </h3>
                <div className="space-y-3">
                  {[
                    "Implementar testes A/B estruturados desde o início — cada mudança no funil com controle e grupo experimental, não apenas comparação antes/depois.",
                    "Criar dashboards de acompanhamento de funil em tempo real — visibilidade imediata de drop-offs para reagir em dias, não semanas.",
                    "Explorar estratégias de upsell e cross-sell com segmentação avançada — o CRM tinha dados suficientes para personalização mais profunda.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5">
                      <span className="text-primary font-bold shrink-0">→</span>
                      <p className="font-body text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 08. Influência e Stakeholders */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">08 · Influência e Stakeholders</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Como influenciei <span className="italic font-medium">as decisões</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Convenci a priorizar funil sobre aquisição",
                  text: "Apresentei análise comparativa de ROI: cada R$1 em otimização de funil gerava 3x mais retorno que R$1 em tráfego. Stakeholders redirecionaram budget de mídia paga para integração de sistemas.",
                },
                {
                  title: "Alinhamento entre marketing e produto",
                  text: "Marketing queria mais leads, produto queria melhor UX. Demonstrei com dados que ambos se beneficiariam da integração: mais conversão para marketing, menos fricção para produto. Win-win que desbloqueou colaboração.",
                },
                {
                  title: "Gestão de prioridades com operações",
                  text: "A integração de sistemas dependia de operações, que tinha outras prioridades. Negociei implementação faseada que não interrompia o fluxo existente enquanto construía a solução integrada.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-body font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* OKRs */}
            <div className="mt-12">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">OKRs estratégicos para evolução</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    obj: "Maximizar conversão do funil",
                    krs: ["Reduzir drop-off entre etapas em 30%", "Taxa de conversão de visitante a comprador: de X% para X+5%"],
                  },
                  {
                    obj: "Escalar retenção via CRM",
                    krs: ["Taxa de recompra: de ~5% para 15%", "NPS pós-curso acima de +30"],
                  },
                  {
                    obj: "Habilitar decisões data-driven",
                    krs: ["Dashboard de funil em tempo real implementado", "Testes A/B em 100% das mudanças de jornada"],
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
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-3xl font-bold mb-4">
            Gostou da análise?
          </p>
          <p className="font-body text-secondary-foreground/60 mb-8">
            Vamos conversar sobre como posso contribuir para o seu time de Produto ou Marketing.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:gabriellecontato@outlook.com.br"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Entre em contato
            </a>
            <a
              href="https://www.linkedin.com/in/gabriellecaetano/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-secondary-foreground/20 px-8 py-3.5 rounded-full font-body text-sm font-medium hover:bg-secondary-foreground/10 transition-colors"
            >
              LinkedIn
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

export default SocStoreCaseStudy;
