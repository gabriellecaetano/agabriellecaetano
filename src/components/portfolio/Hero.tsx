import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import gabriellePhoto from "@/assets/gabrielle-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-6"
            >
              Product Marketing Manager
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-5"
            >
              Transformo estratégia
              <br />
              de produto em{" "}
              <span className="italic font-medium text-primary">crescimento mensurável.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              Product Marketing focada em PLG, Growth, Discovery e métricas de impacto.
              Conecto aquisição, retenção e experiência do usuário para gerar resultados reais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <a
                href="#cases"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Ver meus projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-body text-sm font-medium hover:bg-muted transition-colors"
              >
                <Mail className="w-4 h-4" />
                Falar comigo
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="w-64 h-80 rounded-2xl overflow-hidden ring-2 ring-primary/15 ring-offset-4 ring-offset-background shadow-2xl">
              <img src={gabriellePhoto} alt="Gabrielle Caetano" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#prova" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
