import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const proofs = [
  { icon: Users, value: "80%", label: "adoção de feature", detail: "Conversão app → PontoAí" },
  { icon: Award, value: "NPS +20", label: "satisfação do usuário", detail: "Programa de fidelidade" },
  { icon: TrendingUp, value: "27%", label: "taxa de resgate", detail: "Engajamento com benefícios" },
  { icon: Zap, value: "+2", label: "GTM's lançados", detail: "SOC Store + PontoAí" },
];

const ProofStrip = () => {
  return (
    <section id="prova" className="py-16 md:py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-8 text-center"
        >
          Resultados comprovados
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {proofs.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-5 md:p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground">{p.value}</p>
              <p className="font-body text-sm text-secondary-foreground/70 mt-1">{p.label}</p>
              <p className="font-body text-xs text-secondary-foreground/40 mt-1">{p.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
