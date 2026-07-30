"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function IconTranslation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h8M8 6v1.5M5 7.5c0 2.5 2 4.5 5 5M14 7.5c-1 1.5-3 3-5.5 4" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17l1.5-4 1.5 4M13 15.5h3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19h8" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
function IconPlatform() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="5" width="15" height="11" rx="2" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M8 19h8M12 16v3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 9h8M8 12h5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
function IconFlexibility() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M12 8v4l2.5 2" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 6.5l-2 2M18.5 6.5l2 2" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
const benefits = [
  {
    Icon: IconTranslation,
    title: "Formação em Lógica Aristotélica",
    desc: "Acesso ao curso completo de lógica, estruturado na ordem tradicional da filosofia clássica.",
  },
  {
    Icon: IconFlexibility,
    title: "2 anos de acesso à plataforma",
    desc: "São 2 anos de acesso à plataforma Hubla, com as aulas sendo entregues semanalmente para você estudar e revisar com calma todo o conteúdo.",
  },
  {
    Icon: IconPlatform,
    title: "Aulas gravadas em alta qualidade",
    desc: "As aulas são disponibilizadas gradualmente na plataforma para você assistir e reassistir no seu tempo.",
    logo: "/hubla-mark.webp",
  },
];

export default function TurmaFundadora() {
  return (
    <>
      <section
        id="beneficios"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "120px 0",
          borderTop: "1px solid rgba(244,245,246,0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(200,169,110,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div className="tf-inner" style={{ width: "1140px", position: "relative", zIndex: 1 }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-8%" }}
            style={{ textAlign: "center", marginBottom: "72px" }}
          >
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "114%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 20px" }}>
              O que você recebe entrando hoje{" "}
              <span style={{ color: "#c8a96e", fontStyle: "italic" }}>na formação:</span>
            </h2>
          </motion.div>

          {/* Benefits grid */}
          <div className="tf-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {benefits.map(({ Icon, title, desc, logo }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  padding: "28px 24px",
                  borderRadius: "16px",
                  background: "radial-gradient(100% 100% at 50% 0px, #1A1E1E 0%, #0D0F10 100%)",
                  border: "1px solid rgba(244,245,246,0.07)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  minHeight: "230px",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.07) 0%, transparent 60%)", pointerEvents: "none" }}
                />

                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "rgba(200,169,110,0.07)",
                  border: "1px solid rgba(200,169,110,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  overflow: "hidden",
                }}>
                  {logo ? (
                    <Image
                      src={logo}
                      alt="Hubla"
                      width={20}
                      height={20}
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                    />
                  ) : (
                    <Icon />
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", lineHeight: "130%", color: "#F4F5F6", margin: 0 }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "160%", color: "#8A9AA4", margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1199px) { .tf-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 900px) { .tf-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .tf-inner { padding: 0 24px !important; } .tf-grid, .tf-bonus-grid { grid-template-columns: 1fr !important; } .tf-bonus-card { padding: 22px 18px !important; } .tf-bonus-card h3 { font-size: 17px !important; } }
      `}</style>
    </>
  );
}
