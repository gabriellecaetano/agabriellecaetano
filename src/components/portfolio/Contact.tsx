import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Contato</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Vamos <span className="italic font-medium">conversar?</span>
          </h2>
          <p className="font-body text-secondary-foreground/70 max-w-lg mx-auto mb-12">
            Estou em busca de novas oportunidades em Product Marketing.
            Vamos trocar uma ideia sobre como posso agregar ao seu time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:gabriellecontato@outlook.com.br"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            gabriellecontato@outlook.com.br
          </a>
          <a
            href="https://www.linkedin.com/in/gabriellecaetano/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-secondary-foreground/20 text-secondary-foreground px-8 py-3.5 rounded-full font-body text-sm font-medium hover:bg-secondary-foreground/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 font-body text-xs text-secondary-foreground/40"
        >
          <Phone className="w-3 h-3" />
          +55 (13) 99161-5732
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
