import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Target, TrendingUp, MessageSquare, ChevronRight, ExternalLink, Rocket, BarChart3, Users, Lightbulb, Scale, Brain, AlertTriangle } from "lucide-react";
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
      <section className="pt-24 pb-12 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold">Case de Produto</p>
                <p className="font-body text-sm text-muted-foreground">Estratégia, decisão e impacto</p>
              </div>
            </div>

            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              PontoAí — <span className="italic font-medium text-primary">Como construímos retenção em um app com 13M de usuários sem fidelização</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              De uma base massiva sem loop de retenção a um programa de fidelidade que converteu 80% dos usuários
              e revelou oportunidades de crescimento de LTV — com hipóteses, trade-offs e decisões documentadas.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
              <div><span className="text-foreground font-semibold">Papel:</span> Product Manager</div>
              <div><span className="text-foreground font-semibold">Equipe:</span> 4 integrantes</div>
              <div><span className="text-foreground font-semibold">Duração:</span> ~10 meses</div>
              <div><span className="text-foreground font-semibold">Contexto:</span> FIAP · Pós Tech</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <Section>
        <div className="bg-secondary text-secondary-foreground">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "80%", label: "Conversão app → feature" },
              { value: "NPS +20", label: "Product-market fit" },
              { value: "27,2%", label: "Taxa de resgate (oportunidade)" },
              { value: "10pp", label: "Gap de retenção M2→M3" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-display text-2xl md:text-4xl font-bold">{m.value}</p>
                <p className="font-body text-sm text-secondary-foreground/60 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 1. Contexto de Negócio */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">01 · Contexto de Negócio</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Antes da <span className="italic font-medium">solução</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  O Assaí Atacadista é líder em atacarejo no Brasil: +290 lojas, R$20 bi/trimestre de faturamento.
                  O app Meu Assaí tinha 13 milhões de usuários — uma base massiva, mas sem nenhuma estratégia de
                  fidelização digital.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Clientes compravam por conveniência e preço, não por lealdade. A ausência de um loop de retenção
                  significava que cada cliente perdido precisava ser recomprado — dependência total de aquisição.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-destructive" />
                    <p className="font-body text-sm font-bold text-foreground">Retenção em queda</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">60% → 50% entre M2 e M3 — churn acelerado sem programa de fidelidade.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-destructive" />
                    <p className="font-body text-sm font-bold text-foreground">LTV digital estagnado</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">Sem recorrência, o valor de cada usuário era limitado a uma sessão. CAC crescente sem compensação.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-destructive" />
                    <p className="font-body text-sm font-bold text-foreground">Competitividade em risco</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">Concorrentes (Carrefour, Atacadão) já tinham programas de fidelidade maduros. Assaí perdia share of wallet.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 2. Problema Estratégico */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">02 · Problema Estratégico</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              A decisão <span className="italic font-medium">por trás do produto</span>
            </h2>
            <div className="max-w-3xl">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                O problema real não era "criar um programa de pontos". Era decidir <strong className="text-foreground">como construir retenção
                sustentável sem cair na guerra de descontos</strong> que commoditiza o setor de atacarejo.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border-2 border-border bg-background">
                  <div className="flex items-center gap-2 mb-3">
                    <Scale className="w-5 h-5 text-muted-foreground" />
                    <p className="font-body text-sm font-bold text-foreground">Opção A: Desconto direto</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-3">Simples de implementar, alta adoção imediata. Mas comprime margem e sem diferenciação — Carrefour já fazia.</p>
                  <span className="inline-block font-body text-xs font-semibold px-3 py-1 rounded-full bg-destructive/10 text-destructive">Descartada</span>
                </div>
                <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <p className="font-body text-sm font-bold text-foreground">Opção B: Pontos + propósito</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-3">Mais complexo, mas cria moat competitivo. Produtores locais conectam com valores da marca e geram engajamento emocional.</p>
                  <span className="inline-block font-body text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Escolhida</span>
                </div>
              </div>
              <div className="mt-8 p-5 rounded-xl bg-accent/30 border border-primary/10">
                <p className="font-body text-sm text-accent-foreground">
                  <span className="font-semibold">💡 Trade-off central: </span>
                  Cashback puro teria adoção 2x mais rápida, mas retenção idêntica à concorrência. Modelo híbrido (cashback + gamificação + propósito) teria curva mais lenta, mas stickiness 2-3x maior segundo benchmarks de mercado.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 3. Hipóteses de Produto */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">03 · Hipóteses de Produto</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              O que acreditávamos <span className="italic font-medium">antes de construir</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  h: "Propósito gera diferenciação",
                  desc: "Apoio a produtores locais criaria vínculo emocional que programas genéricos de pontos não oferecem.",
                  validation: "Validada parcialmente — engajamento alto, mas comunicação precisava ser mais clara no onboarding.",
                },
                {
                  icon: Rocket,
                  h: "Cashback imediato reduz barreira",
                  desc: "Benefício tangível no primeiro uso eliminaria hesitação e aceleraria ativação de novos usuários.",
                  validation: "Validada — 80% de conversão app → feature indica que o value proposition ressoou.",
                },
                {
                  icon: Brain,
                  h: "Gamificação sustenta recorrência",
                  desc: "Missões semanais e níveis (Bronze, Prata, Ouro) manteriam o engajamento além da recompensa financeira.",
                  validation: "Parcialmente validada — engajamento inicial alto, mas retenção M2→M3 caiu 10pp. Necessita iteração.",
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

      {/* 4. Decisão de Produto */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">04 · Decisão de Produto</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Por que <span className="italic font-medium">PontoAí</span>
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed">
                Usamos um framework de priorização cruzando <strong className="text-foreground">impacto em retenção × complexidade × diferenciação competitiva</strong>.
                O modelo híbrido venceu não por ser o mais simples, mas por criar vantagem sustentável.
              </p>

              <div className="space-y-4">
                <h3 className="font-body font-bold text-foreground">Alternativas avaliadas e descartadas:</h3>
                {[
                  { alt: "Clube de descontos", why: "Carrefour e Atacadão já faziam — sem diferenciação. Retenção idêntica à concorrência." },
                  { alt: "Programa de pontos puro", why: "Baixa percepção de valor no atacarejo. Público-alvo (classe C/D) prefere benefício imediato a acúmulo." },
                  { alt: "Cashback sem gamificação", why: "Alta adoção mas sem stickiness. Sem motivo para voltar além do financeiro — facilmente copiável." },
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
                <p className="font-body text-sm font-semibold text-foreground mb-2">Decisão final: modelo híbrido em 3 releases</p>
                <div className="space-y-2">
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">R1:</strong> Acúmulo de pontos — validar engajamento básico</p>
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">R2:</strong> Resgate + cashback — validar conversão</p>
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">R3:</strong> Missões + produtores locais — validar retenção de longo prazo</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 5. Execução (resumida) */}
      <section className="py-12 md:py-20">
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
                    title: "Discovery com personas reais",
                    why: "Público heterogêneo (gerente de restaurante a consumidor final classe C/D) exigia pesquisa quali + quanti — não dava para assumir comportamento homogêneo.",
                  },
                  {
                    title: "MVP no-code (Adalo)",
                    why: "Permitiu validar hipóteses em semanas, não meses. Priorizamos aprendizado sobre perfeição técnica — cada semana de delay era semana sem dados.",
                  },
                  {
                    title: "Onboarding em 5 etapas máximo",
                    why: "Testes mostraram que público 50+ abandonava com mais etapas. Trade-off: menos educação no onboarding, mais descoberta progressiva.",
                  },
                  {
                    title: "PLG sobre campanha de aquisição",
                    why: "Benefício imediato no primeiro uso reduz time-to-value. O produto converte sozinho — CAC orgânico é 3-5x menor que mídia paga.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl border border-border bg-card">
                    <h4 className="font-body font-bold text-foreground text-sm mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.why}</p>
                  </div>
                ))}
              </div>

              {/* App Preview + CTA */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-background overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold">Preview do MVP</p>
                  </div>
                  <div className="p-6 flex justify-center bg-muted/30">
                    <img
                      src={pontoaiScreenshot}
                      alt="Preview do app PontoAí"
                      loading="lazy"
                      width={512}
                      height={1024}
                      className="w-48 md:w-56 rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <a
                  href="https://postechfiapfase3.adalo.com/assa-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-5 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Testar MVP no Adalo</p>
                    <p className="font-body text-xs text-muted-foreground">MVP funcional</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 6. Impacto e Métricas */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">06 · Impacto e Métricas</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Não só <span className="italic font-medium">números — leitura de negócio</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Funnel */}
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
                <div className="mt-6 p-4 rounded-xl bg-accent/30 border border-primary/10">
                  <p className="font-body text-sm text-accent-foreground">
                    <span className="font-semibold">Leitura: </span>
                    O gargalo principal está entre "receberam pontos" e "trocaram" (42% → 27%). 74 usuários acumulavam pontos sem trocar — problema de UX na tela de benefícios, não de interesse.
                  </p>
                </div>
              </div>

              {/* NPS + Business interpretation */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">NPS & Impacto financeiro</h3>
                <div className="flex items-center justify-center mb-6">
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
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">NPS +20 = product-market fit inicial. </span>
                      40% promotores indica que a proposta de valor ressoa, mas 20% detratores aponta fricções a resolver.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Projeção de ROI: </span>
                      Se taxa de resgate subir de 27% para 40% (meta do OKR), estima-se +15% de recorrência — aumento proporcional no LTV digital e redução de dependência de CAC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 7. Aprendizados e Iterações */}
      <section className="py-12 md:py-20">
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
                    "Taxa de resgate de 27% ficou abaixo do benchmark de mercado (35-45%). Tela de benefícios tinha UX confusa — descobrimos tarde no ciclo.",
                    "Retenção M2→M3 caiu 10pp. Faltou ciclo de reengajamento estruturado pós-onboarding — gamificação inicial não sustentou sozinha.",
                    "Comunicação do propósito (produtores locais) não era clara no onboarding. Muitos usuários não entendiam o benefício social.",
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
                    "Implementar análise de cohort semanal desde o início — detectar churn signals mais cedo e reagir em dias, não semanas.",
                    "Testes A/B no onboarding desde o dia 1 — personalização por perfil (jovens → gamificação, 50+ → simplicidade).",
                    "Envolver engenharia mais cedo para avaliar viabilidade de personalização — evitar débito técnico acumulado no MVP.",
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

      {/* 8. Influência e Stakeholders */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">08 · Influência e Stakeholders</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Como influenciei <span className="italic font-medium">as decisões</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Alinhamento com negócio",
                  text: "Traduzi dados de mercado em argumentos de negócio para justificar o investimento em fidelização vs. aquisição. Apresentei projeção de ROI que convenceu stakeholders a priorizar o projeto.",
                },
                {
                  title: "Gestão de trade-offs com design",
                  text: "Negociei com o time de design a simplificação do onboarding (de 8 para 5 etapas) usando dados de abandono como argumento — priorizando conversão sobre educação.",
                },
                {
                  title: "Comunicação cross-funcional",
                  text: "Criei rituais de alinhamento semanais com marketing, design e desenvolvimento. Documentei decisões e trade-offs para manter accountability e velocidade.",
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
                    obj: "Maximizar engajamento inicial",
                    krs: ["Reduzir perda app→PontoAí de 20% para 10%", "Onboarding com +80% visualização completa"],
                  },
                  {
                    obj: "Melhorar usabilidade da troca",
                    krs: ["Reduzir não-resgate de 35% para 20%", "Coletar feedback de 100+ usuários"],
                  },
                  {
                    obj: "Aumentar retenção recorrente",
                    krs: ["Retenção M2: de 60% para 75%", "Retorno ao PontoAí em 3 meses: 30%→50%"],
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="mailto:gabriellecontato@outlook.com.br"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              Entre em contato
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-secondary-foreground/20 px-8 py-3.5 rounded-full font-body text-sm font-medium hover:bg-secondary-foreground/10 transition-colors w-full sm:w-auto justify-center"
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
