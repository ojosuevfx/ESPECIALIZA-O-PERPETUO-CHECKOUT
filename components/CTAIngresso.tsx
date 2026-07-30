"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FORM_URL = "https://pay.hub.la/CTTv7HhCY7SEmxnWkSZS";
const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
  "gclid",
  "wbraid",
  "gbraid",
];

function appendTrackingParams(baseUrl: string) {
  if (typeof window === "undefined") return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const form = new URL(baseUrl);

  TRACKING_PARAMS.forEach((param) => {
    const value = currentParams.get(param);
    if (value) form.searchParams.set(param, value);
  });

  return form.toString();
}

export default function CTAIngresso() {
  const benefits = [
    "Acesso à formação em Lógica Aristotélica",
    "Aulas liberadas semanalmente na plataforma",
    "2 anos para assistir e revisar todo o conteúdo",
    "Estudo da Filosofia da Razão, Órganon, silogismo e demonstração",
  ];

  return (
    <section
      id="ingresso"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "130px 0",
        borderTop: "1px solid rgba(244,245,246,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 18% 55%, rgba(32,42,34,0.42) 0%, transparent 62%), radial-gradient(ellipse 55% 65% at 82% 42%, rgba(214,173,97,0.10) 0%, transparent 68%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(7,9,8,0.10) 0%, rgba(9,15,13,0.72) 100%)" }} />

      <div className="offer-inner" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center", gap: "96px", width: "980px" }}>
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}
        >
          <div>
            <h2 className="offer-h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "34px", lineHeight: "112%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 18px", maxWidth: "520px" }}>
              Entre na formação que ensina você a pensar com ordem.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0, maxWidth: "460px" }}>
              Um percurso completo em Lógica Aristotélica para começar pela base certa, direto das fontes, com aulas gravadas e acesso prolongado para revisar sem pressa.
            </p>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "200px", border: "1px solid rgba(214,173,97,0.22)", background: "rgba(214,173,97,0.06)" }}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 7.5h12v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8zM3.5 5.5h13v2h-13v-2zM10 5.5v11" stroke="#d6ad61" strokeWidth="1.5" />
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px", color: "rgba(244,245,246,0.62)" }}>
              Incluído na sua matrícula
            </span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {benefits.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#8edb4f", marginTop: "9px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "160%", color: "rgba(244,245,246,0.86)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="price-card"
          style={{
            minHeight: "430px",
            borderRadius: "48px",
            padding: "54px 48px 38px",
            background: "radial-gradient(120% 100% at 50% 0%, rgba(19,23,22,0.96) 0%, rgba(10,13,12,0.98) 68%, #080A09 100%)",
            border: "1px solid rgba(214,173,97,0.16)",
            boxShadow: "0 32px 90px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.04)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 18%, rgba(214,173,97,0.12) 0%, transparent 58%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "26px", lineHeight: "120%", letterSpacing: "-0.02em", color: "rgba(244,245,246,0.34)", margin: "0 0 8px" }}>
              De: <span style={{ color: "#ff4d4d", textDecoration: "line-through" }}>R$ 1459,90</span>
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "26px", lineHeight: "120%", letterSpacing: "-0.02em", color: "rgba(244,245,246,0.34)", margin: "0 0 18px" }}>
              Por apenas:
            </p>
            <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", color: "rgba(244,245,246,0.38)", marginBottom: "-6px" }}>
              12x de
            </span>
            <strong className="price-value" style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "108px", lineHeight: "0.95", letterSpacing: "-0.06em", color: "#d6ad61", marginBottom: "18px", textAlign: "center" }}>
              69,90
            </strong>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(244,245,246,0.38)", margin: "0 0 22px", textAlign: "center" }}>
              ou R$ 675,90 à vista
            </p>
          </div>
          <Link
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            onClick={(event) => {
              event.currentTarget.href = appendTrackingParams(FORM_URL);
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "16px 30px",
              borderRadius: "200px",
              background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)",
              textDecoration: "none",
              position: "relative",
              zIndex: 1,
              width: "100%",
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "15px", color: "#0D0F10" }}>
              Quero garantir minha vaga
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span style={{ position: "relative", zIndex: 1, display: "block", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", color: "rgba(244,245,246,0.30)", marginTop: "14px", textAlign: "center" }}>
            Garanta sua vaga com garantia incondicional de 7 dias.
          </span>
        </motion.div>
      </div>

      <div className="offer-badges" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(3, auto)", justifyContent: "center", gap: "28px", marginTop: "52px" }}>
        {["10% de desconto para pagamento via pix", "Compra segura", "Garantia incondicional de 7 dias"].map((item) => (
          <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "200px", border: "1px solid rgba(214,173,97,0.14)", color: "rgba(244,245,246,0.44)", fontFamily: "'Inter', sans-serif", fontSize: "13px" }}>
            <span style={{ color: "#d6ad61" }}>✦</span>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 1199px) { .offer-inner { width: 100% !important; padding: 0 32px !important; gap: 56px !important; } }
        @media (max-width: 860px) { .offer-inner { grid-template-columns: 1fr !important; } .offer-badges { grid-template-columns: 1fr !important; padding: 0 24px !important; } }
        @media (max-width: 520px) { .offer-inner { padding: 0 24px !important; } .offer-h2 { font-size: 28px !important; } .price-card { border-radius: 30px !important; padding: 46px 28px 32px !important; min-height: 390px !important; } .price-value { font-size: 78px !important; } }
      `}</style>
    </section>
  );
}
