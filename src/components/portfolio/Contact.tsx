import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Contato</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Vamos conversar sobre como posso gerar{" "}
            <span className="italic font-medium">crescimento no seu produto?</span>
          </h2>
          <p className="font-body text-secondary-foreground/70 max-w-lg mx-auto mb-10 text-base">
            Se você busca alguém que conecta estratégia, dados e execução para gerar impacto real:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:gabriellecontato@outlook.com.br"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-lg font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Entre em contato
          </a>
          <a
            href="https://www.linkedin.com/in/gabriellecaetano/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-secondary-foreground/20 text-secondary-foreground px-7 py-3 rounded-lg font-body text-sm font-medium hover:bg-secondary-foreground/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://wa.me/5513991615732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-secondary-foreground/20 text-secondary-foreground px-7 py-3 rounded-lg font-body text-sm font-medium hover:bg-secondary-foreground/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
