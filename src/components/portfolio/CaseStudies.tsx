import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Store, ExternalLink, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CaseSlidePresentation, { type Persona, type SlideContent } from "./CaseSlidePresentation";

import caseAssaiCover from "@/assets/case-assai-cover.png";
import caseSocCover from "@/assets/case-soc-cover.png";

/* ── Assaí slides — Senior PM framing (strategic thinking + business impact) ── */
const assaiSlides: SlideContent[] = [
  {
    label: "Contexto de Negócio",
    title: "Líder em atacarejo, vulnerável em retenção digital",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Assaí Atacadista: +290 lojas, R$20 bi/trimestre. App Meu Assaí com 13M de usuários — mas sem estratégia de retenção digital. Clientes compravam por conveniência, não por lealdade.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Impacto no negócio</p>
            <p className="text-sm">Sem loop de fidelização, o LTV digital era baixo e a empresa dependia de aquisição constante (CAC crescente) para manter receita — modelo insustentável frente a concorrentes com programas de fidelidade maduros.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Base de 13M sem loop de retenção = dependência de CAC para crescimento. Retenção caía de 60% → 50% entre M2 e M3 — cada ponto de churn representava milhares de usuários perdidos.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Equação de negócio</p>
            <p className="text-sm">CAC em alta + LTV estagnado = margem comprimida. Fidelização era a alavanca de maior ROI disponível.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>App existente era transacional — sem feature que incentivasse recorrência. Usuários entravam, consultavam ofertas e saíam sem motivo para voltar.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Gap de produto</p>
            <p className="text-sm">Nenhum mecanismo de engajamento contínuo. O app não capturava valor da relação recorrente com o cliente.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Problema Estratégico",
    title: "Decisão de produto: como reter sem commoditizar",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>O problema não era "criar um programa de pontos" — era decidir como construir retenção sustentável sem cair na guerra de descontos do setor.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Trade-offs considerados</p>
            <p className="text-sm"><strong>Desconto direto</strong> (simples, mas comprime margem) vs. <strong>Pontos + propósito</strong> (mais complexo, mas diferenciador). Optamos pelo segundo: fidelização com identidade de marca.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Trade-off central: simplicidade (cashback puro, alta adoção) vs. complexidade (gamificação + propósito, maior stickiness). Ambos tinham riscos claros.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Decisão</p>
            <p className="text-sm">Modelo híbrido: cashback como porta de entrada (baixo atrito) + gamificação como retenção de longo prazo. O cashback compra a primeira visita; as missões sustentam a recorrência.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Três caminhos avaliados: (1) desconto direto na compra, (2) programa de pontos tradicional, (3) modelo híbrido com propósito social.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que descartamos as alternativas</p>
            <p className="text-sm">Desconto direto: sem diferenciação. Pontos tradicionais: concorrência já fazia. Modelo híbrido com produtores locais criava moat competitivo e engajamento emocional.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Hipóteses",
    title: "3 apostas de produto antes de construir",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            { h: "H1: Propósito gera diferenciação", d: "Apoio a produtores locais criaria vínculo emocional que programas genéricos não oferecem." },
            { h: "H2: Cashback imediato reduz barreira", d: "Benefício tangível no primeiro uso eliminaria hesitação e aceleraria ativação." },
            { h: "H3: Gamificação sustenta recorrência", d: "Missões e níveis manteriam o engajamento além da recompensa financeira." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <div><p className="text-sm font-semibold text-foreground">{item.h}</p><p className="text-sm">{item.d}</p></div>
            </div>
          ))}
        </div>
      ),
      growth: (
        <div className="space-y-3">
          {[
            { h: "H1: PLG > campanha de aquisição", d: "Onboarding gamificado com recompensa imediata teria maior conversão que campanha paga." },
            { h: "H2: Simplificar resgate = mais retenção", d: "Reduzir etapas de troca de pontos aumentaria taxa de resgate acima de 40%." },
            { h: "H3: Push contextual reativa usuários", d: "Notificações baseadas em geolocalização e histórico trariam usuários inativos de volta." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <div><p className="text-sm font-semibold text-foreground">{item.h}</p><p className="text-sm">{item.d}</p></div>
            </div>
          ))}
        </div>
      ),
      product: (
        <div className="space-y-3">
          {[
            { h: "H1: Onboarding em 5 etapas é o máximo aceitável", d: "Mais que isso, perderíamos usuários menos digitais (público 50+, classe C/D)." },
            { h: "H2: MVP no-code acelera aprendizado", d: "Adalo permitiria validar hipóteses em semanas — priorizar aprendizado sobre perfeição técnica." },
            { h: "H3: 3 releases incrementais > big bang", d: "Entregar valor rápido e iterar com dados reais reduziria risco de produto." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <div><p className="text-sm font-semibold text-foreground">{item.h}</p><p className="text-sm">{item.d}</p></div>
            </div>
          ))}
        </div>
      ),
    },
  },
  {
    label: "Decisão de Produto",
    title: "Por que PontoAí e não as alternativas",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Priorizamos o modelo <strong>pontos + cashback + produtores locais</strong> — não por ser o mais simples, mas por criar vantagem competitiva sustentável.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Alternativas descartadas</p>
            <p className="text-sm"><strong>Clube de descontos</strong> (Carrefour já fazia — sem diferenciação). <strong>Programa de pontos puro</strong> (baixa percepção de valor no atacarejo). O diferencial de produtores locais conectava com valores da marca e criava narrativa única.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Framework de priorização: impacto em retenção × complexidade de implementação × diferenciação competitiva.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Critério de decisão</p>
            <p className="text-sm">Cashback puro teria adoção mais rápida mas retenção igual à concorrência. Gamificação + propósito teria curva de adoção mais lenta, mas stickiness 2-3x maior (benchmark de mercado).</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Escopo do MVP definido com User Story Mapping: pontos, cashback e catálogo de benefícios — 3 releases incrementais priorizados por valor para o usuário.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Pensamento de produto</p>
            <p className="text-sm">Release 1: acúmulo de pontos (validar engajamento). Release 2: resgate + cashback (validar conversão). Release 3: missões + produtores locais (validar retenção de longo prazo).</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "Discovery → Protótipo → MVP → Testes",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Estratégia omnichannel integrando app, loja, WhatsApp e e-mail. Posicionamento validado com personas reais — do gerente de restaurante ao consumidor final.</p>
          <div className="flex gap-3 flex-wrap mt-2">
            <a href="https://postechfiapfase3.adalo.com/assa-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
              Testar MVP <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>PLG: onboarding gamificado com cashback imediato na primeira compra. Aquisição multicanal (push, WhatsApp, influenciadores regionais) com foco em ativação, não impressões.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que PLG e não campanha tradicional?</p>
            <p className="text-sm">Benefício imediato no primeiro uso reduz time-to-value. O produto converte sozinho — CAC de aquisição orgânica 3-5x menor que mídia paga.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Protótipo no Figma → testes de usabilidade com usuários reais → iterações → MVP funcional no Adalo para validação rápida.</p>
          <div className="flex gap-3 flex-wrap mt-2">
            <a href="https://postechfiapfase3.adalo.com/assa-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
              Testar MVP <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Impacto",
    title: "80% conversão · NPS +20 · insights acionáveis",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: "80%", l: "conversão app → feature" },
              { v: "NPS +20", l: "satisfação do usuário" },
              { v: "27,2%", l: "taxa de resgate" },
            ].map((m) => (
              <div key={m.l} className="text-center p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-2xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Leitura de negócio</p>
            <p className="text-sm">80% de conversão valida o posicionamento. NPS +20 indica product-market fit inicial. Taxa de resgate de 27% revela oportunidade: otimizar a tela de benefícios pode dobrar o engajamento recorrente — impacto direto no LTV.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "500→400", l: "80% entraram no PontoAí" },
              { v: "400→300", l: "60% viram benefícios" },
              { v: "300→210", l: "42% receberam pontos" },
              { v: "210→136", l: "27,2% trocaram" },
            ].map((m) => (
              <div key={m.l} className="p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-lg font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Impacto financeiro projetado</p>
            <p className="text-sm">Se a taxa de resgate subir de 27% para 40% (meta do OKR), o aumento estimado de recorrência é de +15% — o que representa aumento proporcional no LTV digital e redução de dependência de CAC.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>74 usuários recebiam pontos mas não trocavam — gap claro de usabilidade. Redesign da tela de benefícios + CTAs contextuais como solução priorizada.</p>
          <p>3 OKRs estratégicos definidos: engajamento inicial, usabilidade da troca e retenção recorrente — cada um com KRs mensuráveis e ownership claro.</p>
        </div>
      ),
    },
  },
  {
    label: "Aprendizados",
    title: "O que não funcionou e o que mudaria",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            "Propósito (produtores locais) gerou diferenciação real — mas a comunicação precisava ser mais clara no onboarding. Muitos usuários não entendiam o benefício social.",
            "Segmentos diferentes precisam de abordagens distintas: jovens querem gamificação, público 50+ quer simplicidade. Não priorizamos segmentação suficiente no MVP.",
            "Com mais tempo: testes A/B no onboarding e personalização por perfil desde o dia 1.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      growth: (
        <div className="space-y-3">
          {[
            "PLG funcionou para ativação, mas a retenção M2→M3 caiu 10pp. Faltou ciclo de reengajamento estruturado pós-onboarding.",
            "Taxa de resgate de 27% era abaixo do benchmark (35-45%). A tela de benefícios tinha UX confusa — descobrimos tarde demais no ciclo.",
            "Mudaria: implementar análise de cohort semanal desde o início para detectar churn signals mais cedo.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      product: (
        <div className="space-y-3">
          {[
            "MVP no-code (Adalo) acelerou validação em semanas — mas limitações técnicas impediram testes mais sofisticados de personalização.",
            "Continuous Discovery com feedback qualitativo revelou gaps que métricas quantitativas sozinhas não mostravam — especialmente em UX de resgate.",
            "Mudaria: envolver engenharia mais cedo para avaliar viabilidade de personalização e evitar débito técnico no MVP.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
    },
  },
];

/* ── SOC Store slides (STAR method) ── */
const socStoreSlides: SlideContent[] = [
  {
    label: "Situação",
    title: "Marketplace com jornada fragmentada e baixa conversão",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>SOC Store: marketplace de treinamentos para profissionais de SST. Aquisição estruturada, mas jornada com fricções que impactavam conversão e retenção.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Problema central</p>
            <p className="text-sm">Experiência fragmentada entre LMS e pagamento gerava queda no funil e perda de receita.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Funil com queda significativa entre etapas — tráfego chegava mas não convertia. Baixa ativação pós-conversão.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Diagnóstico</p>
            <p className="text-sm">Problema na jornada, não na aquisição — otimizar o funil teria mais ROI que mais tráfego.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Plataformas LMS (Konviva) e pagamento (Safe2Pay) não conversavam. Usuários abandonavam nos pontos de transição.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Gap técnico</p>
            <p className="text-sm">Falta de integração entre sistemas criava fricções invisíveis mas de alto impacto.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Tarefa",
    title: "Aumentar conversão e retenção reduzindo fricção",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Três gargalos identificados: queda no funil de compra, experiência fragmentada e baixa ativação pós-conversão.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Impacto direto</p>
            <p className="text-sm">Perda de receita, baixa eficiência de aquisição e menor LTV dos usuários.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Hipóteses: fricção entre plataformas reduzia conversão; ausência de comunicação estruturada impactava ativação.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Priorização</p>
            <p className="text-sm">Focamos em quick wins de conversão + fundação de CRM para retenção de longo prazo.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Necessidade de integração entre LMS e pagamento. Mapeamento completo da jornada para priorizar fricções.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Escopo</p>
            <p className="text-sm">Eliminar inconsistências na transição entre sistemas como prioridade P0.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Estratégia",
    title: "Três pilares: fricção, ativação e retenção",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid gap-3">
            {[
              { n: "01", t: "Redução de fricção", d: "Fluxo mais contínuo e intuitivo" },
              { n: "02", t: "Aumento de ativação", d: "Garantir avanço pós-conversão" },
              { n: "03", t: "Retenção via CRM", d: "Comunicação contínua estruturada" },
            ].map((p) => (
              <div key={p.n} className="flex gap-3 items-start p-3 rounded-xl bg-accent/30">
                <span className="font-display text-lg font-bold text-primary/50">{p.n}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{p.t}</p>
                  <p className="text-sm">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que essa abordagem?</p>
            <p className="text-sm">Otimizar o que já existia antes de investir em aquisição — melhor ROI com menor risco.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Abordagem data-driven: análise de funil para identificar onde o tráfego se perdia.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Trade-off</p>
            <p className="text-sm">Investir em otimização de funil vs. mais tráfego. Dados mostraram que o problema era conversão, não volume.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Mapeamento end-to-end da jornada com priorização por impacto no negócio.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Decisão técnica</p>
            <p className="text-sm">Integração de sistemas como requisito P0 — sem isso, otimizações pontuais não teriam efeito sustentável.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "CRM, integração de sistemas e otimização",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Reestruturação de CRM no HubSpot: fluxos automatizados, segmentação comportamental e nutrição ao longo do funil.</p>
          <p>Ajustes em copy, timing de e-mails e iterações nos fluxos de nutrição.</p>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Testes em pontos críticos da jornada: ajustes de copy, timing e CTAs. Segmentação comportamental para personalizar comunicação.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Foco</p>
            <p className="text-sm">Cada teste medido por impacto em conversão e retenção — sem otimizações de vaidade.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Integração Konviva (LMS) + Safe2Pay (pagamento) — redução de etapas e inconsistências na jornada.</p>
          <p>Mapeamento completo da experiência com priorização de pontos de fricção por impacto.</p>
        </div>
      ),
    },
  },
  {
    label: "Resultado",
    title: "+20% conversão, +10% retenção",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "+20%", l: "aumento em conversão" },
              { v: "+10%", l: "aumento em retenção" },
              { v: "LMS", l: "integração Konviva" },
              { v: "CRM", l: "fluxos HubSpot" },
            ].map((m) => (
              <div key={m.l} className="text-center p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-2xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p className="font-semibold text-foreground">+20% de conversão com otimização de funil e CRM estruturado.</p>
          <p>+10% de retenção com estratégias de relacionamento e comunicação pós-compra.</p>
          <p>Melhor aproveitamento do tráfego existente — eficiência sem custo adicional de aquisição.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Jornada mais fluida com integração de plataformas — redução significativa de fricção.</p>
          <p>Melhoria na experiência do usuário evidenciada por métricas de engajamento e retenção.</p>
        </div>
      ),
    },
  },
  {
    label: "Aprendizados",
    title: "Insights estratégicos",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            "Conversão depende da qualidade da jornada, não apenas da aquisição.",
            "Pequenas fricções acumuladas geram grande impacto em receita.",
            "CRM é alavanca direta de retenção e LTV.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      growth: (
        <div className="space-y-3">
          {[
            "Com mais tempo: testes A/B estruturados em toda a jornada.",
            "Dashboards de funil em tempo real como próximo passo.",
            "Segmentação avançada e estratégias de upsell/cross-sell como evolução.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
      product: (
        <div className="space-y-3">
          {[
            "Integração entre sistemas é essencial — não é nice-to-have.",
            "Mapeamento de jornada precisa ser contínuo, não pontual.",
            "Fricções ressurgem com novas features — monitoramento constante.",
          ].map((insight, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/30">
              <span className="text-primary font-bold shrink-0">→</span>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </div>
      ),
    },
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState<"assai" | "soc" | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      id: "assai" as const,
      tag: "Tech Challenge · FIAP",
      title: "PontoAí — Programa de fidelidade do Assaí Atacadista",
      description: "Concepção estratégica completa: do discovery à análise de métricas, com protótipo e MVP funcional.",
      icon: ShoppingCart,
      cover: caseAssaiCover,
      link: "/case/assai-pontoai",
      slides: assaiSlides,
      metrics: [
        { value: "80%", label: "conversão" },
        { value: "NPS +20", label: "satisfação" },
      ],
    },
    {
      id: "soc" as const,
      tag: "SOC Store · Marketplace",
      title: "Otimização da jornada e integração de sistemas na SOC Store",
      description: "Atuação na interseção entre marketing, produto e experiência, com foco em CRM, integração e crescimento.",
      icon: Store,
      cover: caseSocCover,
      link: "/case/soc-store",
      slides: socStoreSlides,
      metrics: [
        { value: "+20%", label: "conversão" },
        { value: "+10%", label: "retenção" },
      ],
    },
  ];

  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Cases
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Projetos <span className="italic font-medium">em destaque</span>
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-2xl mb-12">
            Selecione um case para explorar no modo apresentação — cada slide adaptável por perfil de audiência.
          </p>
        </motion.div>

        {/* Case selector cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {cases.map((cs) => (
            <motion.button
              key={cs.id}
              onClick={() => {
                setActiveCase(activeCase === cs.id ? null : cs.id);
                setTimeout(() => slideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-left rounded-2xl border transition-all overflow-hidden ${
                activeCase === cs.id
                  ? "border-primary bg-accent/30 shadow-md"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="h-36 md:h-44 w-full overflow-hidden">
                <img
                  src={cs.cover}
                  alt={cs.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">
                    {cs.tag}
                  </span>
                  <cs.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
                  {cs.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{cs.description}</p>
                <div className="flex gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="font-display text-xl font-bold text-foreground">{m.value}</span>
                      <span className="font-body text-xs text-muted-foreground ml-1">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Slide presentation */}
        <div ref={slideRef}>
          <AnimatePresence mode="wait">
            {activeCase && (
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <CaseSlidePresentation
                  slides={cases.find((c) => c.id === activeCase)!.slides}
                  onViewFull={() => {
                    const cs = cases.find((c) => c.id === activeCase)!;
                    window.location.href = cs.link;
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
