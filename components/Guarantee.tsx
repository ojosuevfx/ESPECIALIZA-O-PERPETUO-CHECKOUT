"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <section
      id="garantia"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "40px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "20% auto auto 50%",
          width: "560px",
          height: "300px",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(200,169,110,0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        className="guarantee-card"
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-8%" }}
        style={{
          width: "900px",
          padding: "56px 64px",
          borderRadius: "24px",
          background: "radial-gradient(100% 130% at 50% 0%, rgba(200,169,110,0.14) 0%, rgba(26,30,30,0.98) 42%, #0D0F10 100%)",
          border: "1px solid rgba(200,169,110,0.24)",
          boxShadow: "0 0 56px rgba(200,169,110,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
          display: "grid",
          gridTemplateColumns: "88px 1fr",
          gap: "32px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(200,169,110,0.10)",
            border: "1px solid rgba(200,169,110,0.22)",
          }}
        >
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
            <path d="M24 5.5l15 5.5v11.2c0 9.7-6.2 16.5-15 20.3-8.8-3.8-15-10.6-15-20.3V11l15-5.5z" stroke="#c8a96e" strokeWidth="2" strokeLinejoin="round" />
            <path d="M17 24l4.5 4.5L31.5 18" stroke="#c8a96e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", alignItems: "flex-start" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e" }}>
            Garantia de 7 dias
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "38px", lineHeight: "114%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: 0 }}>
            Você não corre riscos.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "170%", color: "#8A9AA4", margin: 0, maxWidth: "620px" }}>
            Se dentro de 7 dias você perceber que a formação não é para você, devolvemos 100% do seu investimento. Sem burocracia.
          </p>
          <Link
            href="#ingresso"
            className="btn-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 30px",
              borderRadius: "200px",
              background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)",
              textDecoration: "none",
              marginTop: "6px",
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0D0F10" }}>
              Quero estudar Lógica Aristotélica
            </span>
          </Link>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 980px) { .guarantee-card { width: calc(100% - 48px) !important; padding: 40px 32px !important; } }
        @media (max-width: 640px) { .guarantee-card { grid-template-columns: 1fr !important; width: calc(100% - 40px) !important; padding: 36px 24px !important; } .guarantee-card h2 { font-size: 30px !important; } }
      `}</style>
    </section>
  );
}
