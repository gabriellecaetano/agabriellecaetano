import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Store, ExternalLink, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CaseSlidePresentation, { type Persona, type SlideContent } from "./CaseSlidePresentation";

import caseAssaiCover from "@/assets/case-assai-cover.png";
import caseSocCover from "@/assets/case-soc-cover.png";

/* ── Artefatos por etapa: enriquece slides de Execução ── */
const ARTIFACTS: Record<string, { stage: string; items: string }[]> = {
  pontoai: [
    { stage: "Discovery", items: "Pesquisa com 12 usuários reais (gerentes de restaurante e consumidores finais), mapeamento de personas, benchmark de programas de fidelidade concorrentes." },
    { stage: "Protótipo", items: "Wireframes de baixa fidelidade no Figma, validação com 5 usuários antes de avançar para desenvolvimento." },
    { stage: "MVP", items: "Funcionalidades priorizadas: cadastro, acúmulo de pontos, cashback na primeira compra, integração com app Meu Assaí existente." },
    { stage: "Testes", items: "Teste A/B da tela de onboarding, análise de funil de ativação, ajuste de copy com base em drop-off." },
  ],
  soc: [
    { stage: "Discovery", items: "Entrevistas com times de marketing, vendas e operações; auditoria da jornada atual; mapeamento de fricções entre Konviva, Safe2Pay e HubSpot." },
    { stage: "Protótipo", items: "Blueprint da nova jornada end-to-end e fluxos de automação no HubSpot validados com stakeholders antes do build." },
    { stage: "MVP", items: "Frente 1 — integração LMS + pagamento em produção; gatilhos de carrinho abandonado e segmentação comportamental ativos." },
    { stage: "Testes", items: "A/B em timing de e-mails (2h vs 24h), variações de copy e CTA; leitura de funil por coorte para isolar impacto." },
  ],
};

const ArtifactsByStage = ({ variant = "pontoai" }: { variant?: "pontoai" | "soc" }) => (
  <div className="p-4 rounded-xl bg-accent/30 border border-primary/10 space-y-2.5">
    <p className="text-sm font-semibold text-foreground">Artefatos por etapa</p>
    <ul className="space-y-2">
      {ARTIFACTS[variant].map((a) => (
        <li key={a.stage} className="text-sm leading-relaxed">
          <span className="font-semibold text-foreground">{a.stage}: </span>
          <span className="text-muted-foreground">{a.items}</span>
        </li>
      ))}
    </ul>
  </div>
);

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
          <ArtifactsByStage />
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
          <ArtifactsByStage />
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que PLG e não campanha tradicional?</p>
            <p className="text-sm">Benefício imediato no primeiro uso reduz time-to-value. O produto converte sozinho — CAC de aquisição orgânica 3-5x menor que mídia paga.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Protótipo no Figma → testes de usabilidade com usuários reais → iterações → MVP funcional no Adalo para validação rápida.</p>
          <ArtifactsByStage />
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
              { v: "80%", l: "conversão app → feature", b: "benchmark setor: 40–60%" },
              { v: "NPS +20", l: "satisfação do usuário", b: "benchmark fidelidade: NPS +5 a +15" },
              { v: "27,2%", l: "taxa de resgate", b: "benchmark varejo alimentar: 10–20%" },
            ].map((m) => (
              <div key={m.l} className="text-center p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-2xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
                <p className="text-[11px] text-muted-foreground/80 mt-2 flex items-center justify-center gap-1">
                  <span className="text-[#2d7c44] font-bold">↑</span>
                  <span>{m.b}</span>
                </p>
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

/* ── Marketplace de SST slides — Senior PM framing (strategic thinking + business impact) ── */
const socStoreSlides: SlideContent[] = [
  {
    label: "Contexto de Negócio",
    title: "Marketplace com jornada fragmentada entre 3 plataformas",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Marketplace de SST: plataforma para comercialização de treinamentos e serviços personalizados para profissionais de SST. Aquisição estruturada, mas jornada do usuário passava por 3 plataformas sem integração — cada transição era ponto de abandono.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Impacto no negócio</p>
            <p className="text-sm">Tráfego qualificado se perdia no funil. CAC crescente sem compensação — LTV limitado por ausência de retenção estruturada.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Funil com queda significativa entre etapas — tráfego chegava mas não convertia. Sem comunicação pós-compra, retenção era quase zero.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Equação de negócio</p>
            <p className="text-sm">Problema era conversão, não volume. Cada R$1 em otimização de funil teria 3x mais ROI que R$1 em tráfego.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Plataformas LMS (Konviva), pagamento (Safe2Pay) e site não conversavam. Usuários abandonavam nos pontos de transição entre sistemas.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Gap técnico</p>
            <p className="text-sm">Falta de integração criava fricções invisíveis de alto impacto — métricas agregadas não mostravam onde exatamente o usuário desistia.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Problema Estratégico",
    title: "Mais tráfego ou consertar o funil?",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>O problema não era "melhorar a experiência" — era decidir onde alocar esforço limitado para máximo impacto em receita.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Trade-off central</p>
            <p className="text-sm"><strong>Mais tráfego</strong> (resultado rápido, ROI decrescente) vs. <strong>Otimizar funil</strong> (mais complexo, mas cada melhoria multiplicava o valor de todo tráfego existente).</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Trade-off: investir em volume (escala rápida) vs. eficiência (fundação escalável). Dados mostraram que o gargalo era conversão, não alcance.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Decisão</p>
            <p className="text-sm">Otimização de funil + CRM estruturado. Cada novo visitante converteria mais — retorno composto ao longo do tempo.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Três caminhos: (1) otimizar copy/CTAs, (2) migrar para plataforma all-in-one, (3) integrar sistemas existentes + CRM.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Por que descartamos as alternativas</p>
            <p className="text-sm">Copy sozinha tratava sintoma. Migração era alto risco. Integração resolvia a causa raiz sem interromper operação.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Hipóteses",
    title: "3 apostas antes de agir",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            { h: "H1: Fricção entre plataformas mata conversão", d: "Eliminar transições entre sistemas aumentaria conversão proporcionalmente." },
            { h: "H2: CRM estruturado cria loop de retenção", d: "Comunicação pós-compra segmentada daria motivo para o aluno voltar." },
            { h: "H3: Jornada confusa dificulta decisão", d: "Simplificar o caminho até a compra reduziria desistências no meio do funil." },
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
            { h: "H1: Timing > copy em e-mails", d: "E-mails 2h após abandono teriam 3x mais abertura que 24h — priorizar timing sobre criatividade." },
            { h: "H2: Segmentação comportamental > demográfica", d: "Segmentar por ação (curso visto, carrinho abandonado) teria mais impacto que por perfil." },
            { h: "H3: Otimização de funil > mais tráfego", d: "Cada melhoria no funil multiplicaria o valor de todo investimento em aquisição." },
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
            { h: "H1: Integração é P0, não nice-to-have", d: "Sem integração, otimizações pontuais não teriam efeito sustentável na jornada." },
            { h: "H2: Mapeamento end-to-end revela fricções invisíveis", d: "Análise completa da jornada mostraria problemas que métricas agregadas escondiam." },
            { h: "H3: Implementação faseada reduz risco", d: "Execução em 3 frentes simultâneas sem interromper operação existente." },
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
    title: "Por que integração + CRM + otimização",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Priorizamos <strong>integração de sistemas + CRM + otimização de jornada</strong> — não por ser o mais rápido, mas por resolver a causa raiz e criar fundação escalável.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Alternativas descartadas</p>
            <p className="text-sm"><strong>Só otimizar copy</strong> (tratava sintoma). <strong>Migrar plataforma</strong> (alto risco operacional). <strong>Só CRM sem integração</strong> (retenção sem conversão). A abordagem completa atacava o ciclo inteiro.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Framework: impacto em receita × esforço × risco. Integração tinha maior impacto, CRM tinha menor risco, e otimização de jornada conectava os dois.</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Critério de priorização</p>
            <p className="text-sm">ROI projetado: otimização de funil 3x mais eficiente que aumento de tráfego. CRM como investimento de longo prazo em LTV.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Execução em 3 frentes: Frente 1 (integração LMS + pagamento), Frente 2 (CRM HubSpot), Frente 3 (mapeamento e otimização de jornada).</p>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Pensamento de produto</p>
            <p className="text-sm">Implementação faseada que não interrompia operação. Cada frente gerava valor independente, mas o impacto total era multiplicativo.</p>
          </div>
        </div>
      ),
    },
  },
  {
    label: "Execução",
    title: "Integração, CRM e otimização de jornada",
    content: {
      pmm: (
        <div className="space-y-4">
          <p>Atuação cross-funcional: ponte entre marketing, produto e operações. Cada decisão validada com dados e alinhada com as 3 áreas.</p>
          <ArtifactsByStage variant="soc" />
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Influência em stakeholders</p>
            <p className="text-sm">Converti budget de mídia paga para integração usando análise de ROI comparativo. Marketing e produto alinhados pelo win-win da integração.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-4">
          <p>Iterações em timing de e-mails (2h vs 24h), segmentação comportamental e CTAs. Cada teste medido por impacto em conversão — sem otimizações de vaidade.</p>
          <ArtifactsByStage variant="soc" />
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Insight de execução</p>
            <p className="text-sm">Timing foi mais impactante que copy — e-mails 2h após abandono tinham 3x mais abertura. Priorizamos timing sobre criatividade.</p>
          </div>
        </div>
      ),
      product: (
        <div className="space-y-4">
          <p>Integração Konviva + Safe2Pay: redução de etapas e eliminação de inconsistências. Mapeamento end-to-end revelou fricções que métricas agregadas não mostravam.</p>
          <p>CRM no HubSpot: fluxos automatizados com segmentação por comportamento (curso visto, carrinho abandonado, conclusão).</p>
          <ArtifactsByStage variant="soc" />
        </div>
      ),
    },
  },
  {
    label: "Impacto",
    title: "+20% conversão · +10% retenção · ROI 3x",
    content: {
      pmm: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "+20%", l: "conversão no funil", b: "benchmark e-learning: +5–10%" },
              { v: "+10%", l: "retenção de alunos", b: "benchmark cursos online: +3–7%" },
              { v: "3→1", l: "plataformas integradas", b: "benchmark mercado: 2–3 stacks separadas" },
              { v: "3x", l: "ROI vs. mais tráfego", b: "benchmark otimização CRM: 1,5–2x" },
            ].map((m) => (
              <div key={m.l} className="text-center p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="font-display text-2xl font-bold text-foreground">{m.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.l}</p>
                <p className="text-[11px] text-muted-foreground/80 mt-2 flex items-center justify-center gap-1">
                  <span className="text-[#2d7c44] font-bold">↑</span>
                  <span>{m.b}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/30 border border-primary/10">
            <p className="text-sm font-semibold text-foreground mb-1">Leitura de negócio</p>
            <p className="text-sm">+20% conversão = receita incremental sem CAC adicional. +10% retenção = aumento de LTV composto. Projeção: taxa de recompra de ~5% para ~15% em 6 meses.</p>
          </div>
        </div>
      ),
      growth: (
        <div className="space-y-3">
          <p className="font-semibold text-foreground">+20% de conversão com otimização de funil + integração de sistemas.</p>
          <p>+10% de retenção com CRM estruturado e comunicação pós-compra segmentada.</p>
          <p>Melhor aproveitamento do tráfego existente — eficiência sem custo adicional de aquisição.</p>
        </div>
      ),
      product: (
        <div className="space-y-3">
          <p>Jornada integrada entre 3 plataformas — fricção eliminada nos pontos de transição.</p>
          <p>CRM como fundação para estratégia de retenção de longo prazo — dados comportamentais alimentando decisões de produto.</p>
        </div>
      ),
    },
  },
  {
    label: "Aprendizados",
    title: "Erros, iterações e evolução",
    content: {
      pmm: (
        <div className="space-y-3">
          {[
            "Mapeamento end-to-end deveria ter sido o primeiro passo — otimizações pontuais sem visão completa tinham impacto marginal.",
            "Segmentação genérica de CRM não funciona — só segmentação comportamental granular gerou engajamento real.",
            "Com mais tempo: testes A/B estruturados e dashboard de funil em tempo real desde o dia 1.",
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
            "Primeiros fluxos de CRM tinham taxas de abertura abaixo de 15% — só melhorou com segmentação comportamental.",
            "Faltou dashboard em tempo real — decisões retroativas perdiam oportunidade de reagir rapidamente.",
            "Próximo passo: estratégias de upsell/cross-sell com dados comportamentais do CRM.",
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
            "Integração entre sistemas é P0, não nice-to-have — sem ela, otimizações pontuais não sustentam.",
            "Mapeamento de jornada precisa ser contínuo — fricções ressurgem com novas features.",
            "Implementação faseada reduziu risco operacional e manteve a operação funcionando durante a transição.",
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
      tag: "Case de Produto",
      title: "PontoAí — Como construímos retenção em um app com 13M de usuários",
      description: "Hipóteses, trade-offs e decisões de produto: de uma base massiva sem fidelização a 80% de conversão e NPS +20.",
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
      tag: "Case de Produto",
      title: "Marketplace de SST — Como transformei otimização de funil em +20% de conversão",
      description: "Hipóteses, trade-offs e decisões: de uma jornada fragmentada entre 3 plataformas a um funil integrado com +20% conversão e +10% retenção.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
              <div className="aspect-[8/5] w-full overflow-hidden">
                <img
                  src={cs.cover}
                  alt={cs.title}
                  loading="lazy"
                  decoding="async"
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

          {/* Placeholder card — case in development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-dashed border-primary/40 overflow-hidden bg-gradient-to-br from-background via-accent/40 to-primary/20 flex flex-col"
          >
            <div className="h-36 md:h-44 w-full bg-gradient-to-br from-accent/60 to-primary/30 flex items-center justify-center opacity-70">
              <span className="font-display italic text-primary/60 text-xl">em produção</span>
            </div>
            <div className="p-6 opacity-70">
              <div className="flex items-start justify-between mb-3">
                <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold px-2 py-0.5 rounded bg-primary/10">
                  Em breve
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
                Novo case em produção
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Estratégia GTM para lançamento B2B · 2025
              </p>
            </div>
          </motion.div>
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
