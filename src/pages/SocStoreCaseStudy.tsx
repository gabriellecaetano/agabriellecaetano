import { motion } from "framer-motion";
import { ArrowLeft, Store, ChevronRight, Mail, Settings, Users, TrendingUp, Compass, FlaskConical, Lightbulb, Wrench } from "lucide-react";
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
                <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold">SOC Store · Marketplace</p>
                <p className="font-body text-sm text-muted-foreground">Treinamentos e serviços para profissionais de SST</p>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.05] mb-6">
              Aumento de conversão e retenção através da otimização da jornada e integração de sistemas na{" "}
              <span className="italic font-medium text-primary">SOC Store</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Atuei como ponte entre marketing, produto e experiência do usuário, com foco em crescimento e otimização de funil.
            </p>

            <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground mt-8">
              <div><span className="text-foreground font-semibold">Papel:</span> Analista de Marketing de Produto</div>
              <div><span className="text-foreground font-semibold">Foco:</span> Growth, CRM & Integração</div>
              <div><span className="text-foreground font-semibold">Ferramentas:</span> HubSpot, Konviva, Safe2Pay, GA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <Section>
        <div className="bg-secondary text-secondary-foreground">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+20%", label: "Aumento na taxa de conversão" },
              { value: "+10%", label: "Aumento em retenção" },
              { value: "LMS", label: "Integração Konviva" },
              { value: "CRM", label: "Fluxos HubSpot" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold">{m.value}</p>
                <p className="font-body text-sm text-secondary-foreground/60 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contexto */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Contexto</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4 max-w-3xl">
              A SOC Store é um marketplace de treinamentos e serviços voltado para profissionais de SST, com modelo de receita baseado em venda direta de cursos.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">
              Apesar de um fluxo estruturado de aquisição, existiam sinais de ineficiência ao longo da jornada do usuário, impactando diretamente a conversão e retenção.
            </p>
          </Section>
        </div>
      </section>

      {/* Problema */}
      <section className="py-16 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">O Problema</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A análise da jornada revelou três principais gargalos:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Queda de usuários ao longo do funil de compra",
                "Experiência fragmentada entre plataformas (LMS e pagamento)",
                "Baixa ativação e retenção após a conversão",
              ].map((item) => (
                <li key={item} className="font-body text-muted-foreground flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-5 rounded-xl border border-border bg-background">
              <p className="font-body text-sm font-semibold text-foreground mb-2">Impacto direto:</p>
              <div className="flex flex-wrap gap-4">
                {["Perda de receita", "Baixa eficiência de aquisição", "Menor LTV dos usuários"].map((item) => (
                  <span key={item} className="font-body text-sm text-muted-foreground flex items-center gap-1.5">
                    <span className="text-primary font-bold">→</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Hipóteses */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Análise</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Hipóteses
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A partir dos dados e comportamento dos usuários, levantei as seguintes hipóteses:
            </p>
            <div className="space-y-4">
              {[
                "A fricção entre plataformas estava reduzindo a conversão no momento de compra",
                "A ausência de comunicação estruturada impactava ativação e retenção",
                "A jornada não guiava o usuário de forma clara até a conclusão da compra",
              ].map((h, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <span className="font-display text-2xl font-bold text-primary/30">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-body text-muted-foreground leading-relaxed pt-1">{h}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Estratégia */}
      <section className="py-16 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Abordagem</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Estratégia
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Defini uma abordagem focada em três pilares:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Redução de fricção na jornada", desc: "Tornar o fluxo mais contínuo e intuitivo" },
                { title: "Aumento de ativação", desc: "Garantir que o usuário avance após a conversão" },
                { title: "Retenção via relacionamento", desc: "Estruturar comunicação contínua com o usuário" },
              ].map((p, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-background">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-sm font-bold mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-body font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Execução */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Ação</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Execução
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-12">
              Atuei de ponta a ponta, conectando marketing, produto e experiência:
            </p>
          </Section>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Reestruturação de CRM",
                items: [
                  "Criação de fluxos automatizados no HubSpot",
                  "Segmentação baseada em comportamento",
                  "Nutrição de leads ao longo do funil",
                ],
              },
              {
                icon: Settings,
                title: "Integração de sistemas",
                items: [
                  "Integração entre LMS (Konviva) e pagamento (Safe2Pay)",
                  "Redução de etapas e inconsistências na jornada",
                ],
              },
              {
                icon: Compass,
                title: "Otimização da jornada",
                items: [
                  "Mapeamento completo da experiência do usuário",
                  "Identificação e priorização de pontos de fricção",
                  "Ajustes na comunicação e fluxo de navegação",
                ],
              },
            ].map((action, i) => (
              <Section key={i}>
                <div className="p-6 rounded-2xl border border-border bg-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <action.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-foreground">{action.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {action.items.map((item) => (
                      <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Experimentação */}
      <section className="py-16 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Testes</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Experimentação
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Durante o processo, foram realizados testes como:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Ajustes na comunicação dos e-mails (copy e timing)",
                "Mudanças em pontos críticos da jornada",
                "Iterações nos fluxos de nutrição",
              ].map((item) => (
                <li key={item} className="font-body text-muted-foreground flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-accent/50 border border-primary/10">
              <p className="font-body text-sm text-accent-foreground">
                <span className="font-semibold">Foco sempre em: </span>
                impacto em conversão e retenção
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Resultados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Impacto <span className="italic font-medium">gerado</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { value: "+20%", desc: "de aumento na taxa de conversão" },
                { value: "+10%", desc: "de aumento na retenção" },
              ].map((r) => (
                <div key={r.value} className="p-8 rounded-2xl bg-secondary text-secondary-foreground text-center">
                  <p className="font-display text-5xl font-bold mb-2">{r.value}</p>
                  <p className="font-body text-sm text-secondary-foreground/70">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Redução de fricção na jornada com integração de sistemas",
                "Aumento da eficiência da aquisição (melhor aproveitamento do tráfego)",
              ].map((item) => (
                <div key={item} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                  <span className="text-primary font-bold">→</span>
                  <p className="font-body text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Aprendizados */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Aprendizados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Aprendizados <span className="italic font-medium">estratégicos</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Conversão não depende apenas de aquisição, mas da qualidade da jornada",
                "Pequenas fricções acumuladas geram grande impacto em receita",
                "CRM é uma alavanca direta de retenção e LTV",
                "Integração entre sistemas é essencial para experiência consistente",
              ].map((l, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-xl border border-border bg-background">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{l}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* O que faria diferente */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Reflexão</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que eu faria <span className="italic font-medium">diferente</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Se tivesse mais tempo/recursos:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Implementaria testes A/B estruturados em toda a jornada",
                "Criaria dashboards de acompanhamento de funil em tempo real",
                "Evoluiria a segmentação com base em comportamento avançado",
                "Exploraria estratégias de upsell e cross-sell",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-xl border border-border bg-card">
                  <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="py-16 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-6">Ferramentas utilizadas</p>
            <div className="flex flex-wrap gap-3">
              {["HubSpot", "Konviva (LMS)", "Safe2Pay", "Google Analytics"].map((tool) => (
                <span key={tool} className="font-body text-sm px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-medium">
                  {tool}
                </span>
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

export default SocStoreCaseStudy;
