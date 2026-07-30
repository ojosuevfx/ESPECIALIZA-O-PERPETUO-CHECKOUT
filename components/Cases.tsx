"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Sempre quis estudar filosofia, mas, quando começava por conta própria, animava uma semana e logo me frustrava, e isso durante anos. Comecei faz 1 mês e parece um ano, de tanta coisa que a gente vê.",
    initials: "",
    name: "Aluno do Lyceum",
    role: "Depoimento",
  },
  {
    text: "Eu estava procurando uma ordem no conhecimento de Aristóteles e não encontrava. Ter encontrado o Lyceum me deu a paz de saber que finalmente achei esse lugar.",
    initials: "",
    name: "Aluno do Lyceum",
    role: "Depoimento",
  },
  {
    text: "Em apenas um ano, aprendi mais sobre filosofia clássica do que em toda a minha vida.",
    initials: "",
    name: "Aluno do Lyceum",
    role: "Depoimento",
  },
  {
    text: "As obras antes pareciam quase indecifráveis. Só de acompanhar as discussões, notei uma diferença muito significativa na minha compreensão.",
    initials: "",
    name: "Aluno do Lyceum",
    role: "Depoimento",
  },
  {
    text: "Sou professor e tenho dado aulas melhores graças ao Lyceum. Em nenhum outro curso você conhece as coisas de fato.",
    initials: "",
    name: "Aluno do Lyceum",
    role: "Depoimento",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 5);

function TestimonialsColumn({ items, duration = 15 }: { items: typeof testimonials; duration?: number }) {
  return (
    <div style={{ overflow: "hidden", flex: "1 1 0", minWidth: 0 }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "20px" }}
      >
        {[0, 1].map((_, idx) => (
          <React.Fragment key={idx}>
            {items.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 28px",
                  borderRadius: "20px",
                  background: "radial-gradient(100% 100% at 50% 0px, #1E2424 0%, #0D0F10 100%)",
                  border: "1px solid rgba(244,245,246,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(244,245,246,0.07)", paddingTop: "16px" }}>
                  <div
                    aria-label="Espaço reservado para foto do aluno"
                    style={{ width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0, border: "1px dashed rgba(200,169,110,0.32)", background: "rgba(200,169,110,0.06)" }}
                  />
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "13px", color: "#F4F5F6", margin: "0 0 2px", lineHeight: "1.3" }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", color: "#8A9AA4", margin: 0, opacity: 0.8 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function Cases() {
  return (
    <section
      id="depoimentos"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", maxWidth: "540px", textAlign: "center", marginBottom: "64px", padding: "0 24px" }}
      >
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "114%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: 0 }}>
          Depoimentos
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "165%", color: "#8A9AA4", margin: 0 }}>
          Relatos de alunos sobre o que muda quando existe ordem, texto e discussão guiada.
        </p>
      </motion.div>

      {/* Columns */}
      <div
        className="testimonials-cols"
        style={{
          display: "flex",
          gap: "20px",
          width: "1140px",
          maxHeight: "680px",
          overflow: "hidden",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      >
        <TestimonialsColumn items={firstColumn} duration={18} />
        <div className="col-hide-md" style={{ flex: "1 1 0", minWidth: 0 }}>
          <TestimonialsColumn items={secondColumn} duration={22} />
        </div>
        <div className="col-hide-lg" style={{ flex: "1 1 0", minWidth: 0 }}>
          <TestimonialsColumn items={thirdColumn} duration={20} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .testimonials-cols { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) { .col-hide-md { display: none !important; } .col-hide-lg { display: none !important; } .testimonials-cols { padding: 0 24px !important; } }
        @media (min-width: 769px) and (max-width: 1023px) { .col-hide-lg { display: none !important; } }
      `}</style>
    </section>
  );
}
