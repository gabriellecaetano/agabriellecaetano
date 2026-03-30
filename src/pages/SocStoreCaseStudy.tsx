import { motion } from "framer-motion";
import { ArrowLeft, Store, ChevronRight, Mail, Settings, Users, TrendingUp } from "lucide-react";
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

const actions = [
  {
    num: "01",
    title: "CRM e automação",
    icon: Mail,
    items: [
      "Estruturação de fluxos de e-mail no HubSpot",
      "Nutrição de leads com base no comportamento",
    ],
  },
  {
    num: "02",
    title: "Experiência do usuário",
    icon: Users,
    items: [
      "Mapeamento da jornada",
      "Identificação de pontos de fricção",
    ],
  },
  {
    num: "03",
    title: "Integração de sistemas",
    icon: Settings,
    items: [
      "Integração da plataforma LMS (Konviva)",
      "Integração com meio de pagamento (Safe2Pay)",
    ],
  },
  {
    num: "04",
    title: "Estratégia de aquisição e retenção",
    icon: TrendingUp,
    items: [
      "Ajustes na comunicação",
      "Melhoria na experiência pós-compra",
    ],
  },
];

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
              Otimização de conversão e experiência na{" "}
              <span className="italic font-medium text-primary">SOC Store</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              A SOC Store é um marketplace de treinamentos e serviços voltado para profissionais de SST.
              O desafio era melhorar a conversão de usuários na plataforma, a experiência de compra e a integração entre sistemas.
            </p>

            <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
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
              { value: "+20%", label: "Aumento em conversões" },
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

      {/* Problem */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">O Problema</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  A jornada do usuário apresentava fricções: baixa conversão em etapas do funil,
                  experiência fragmentada entre plataformas e falta de automação no relacionamento com leads.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Isso impactava diretamente receita, retenção e experiência do usuário.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">O Objetivo</h2>
                <ul className="space-y-3">
                  {[
                    "Aumentar a taxa de conversão",
                    "Melhorar a experiência do usuário",
                    "Criar uma jornada mais fluida e integrada",
                    "Fortalecer retenção e relacionamento",
                  ].map((item) => (
                    <li key={item} className="font-body text-muted-foreground flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Ação</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16">
              O que <span className="italic font-medium">eu fiz</span>
            </h2>
          </Section>

          <div className="grid md:grid-cols-2 gap-6">
            {actions.map((action, i) => (
              <Section key={action.num}>
                <div className="p-6 rounded-2xl border border-border bg-background h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-sm font-bold">
                      {action.num}
                    </div>
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

      {/* Results */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Resultados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Impacto <span className="italic font-medium">gerado</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { value: "+20%", desc: "de aumento em conversões" },
                { value: "+10%", desc: "de aumento em retenção" },
              ].map((r) => (
                <div key={r.value} className="p-8 rounded-2xl bg-secondary text-secondary-foreground text-center">
                  <p className="font-display text-5xl font-bold mb-2">{r.value}</p>
                  <p className="font-body text-sm text-secondary-foreground/70">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Jornada mais fluida com integração de plataformas",
                "Melhoria na experiência do usuário e redução de fricções",
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

      {/* Learnings */}
      <section className="py-20 bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Aprendizados</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Aprendizados <span className="italic font-medium">estratégicos</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Jornada é conversão", text: "Pequenas melhorias na jornada geram grande impacto em conversão." },
                { title: "Integração é UX", text: "Integração entre sistemas é crucial para experiência do usuário." },
                { title: "CRM é retenção", text: "CRM bem estruturado aumenta retenção e LTV." },
              ].map((l) => (
                <div key={l.title} className="p-6 rounded-2xl border border-border bg-background">
                  <h3 className="font-body font-bold text-foreground mb-3">{l.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{l.text}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
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
