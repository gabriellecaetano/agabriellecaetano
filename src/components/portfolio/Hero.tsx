import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import gabriellePhoto from "@/assets/gabrielle-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
            <img src={gabriellePhoto} alt="Gabrielle Caetano" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-6">
            Product Marketing
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground mb-8"
        >
          Marketing não é sobre campanha.
          <br />
          <span className="italic font-medium text-primary">É sobre crescimento.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Sou Gabrielle Caetano, Analista de Marketing com foco em produto, dados e estratégia.
          Atuo conectando aquisição, retenção e experiência do usuário para gerar crescimento sustentável.
        </motion.p>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {[
            { value: "+20%", label: "aumento em conversões" },
            { value: "+10%", label: "melhoria em retenção" },
            { value: "SaaS", label: "& marketplace" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{m.value}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{m.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#cases"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Ver meus projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4" />
            Falar comigo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
