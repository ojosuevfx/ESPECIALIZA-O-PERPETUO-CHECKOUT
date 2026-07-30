"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Precisa ter estudado filosofia antes?", a: "Não. A formação começa das primeiras noções lógicas, antes de avançar para o conteúdo mais exigente." },
  { q: "Preciso ser católico?", a: "Não. Há alunos agnósticos e protestantes. O currículo é filosófico, ainda que dialogue naturalmente com a tradição clássica e cristã." },
  { q: "Preciso saber latim ou grego?", a: "Não. As obras utilizadas são disponibilizadas em tradução preparada para o estudo." },
  { q: "Só serve para quem já é avançado?", a: "Não. Você estudará das primeiras noções lógicas da realidade até conseguir montar um silogismo demonstrativo irrefutável." },
  { q: "Não tenho muito tempo, consigo acompanhar?", a: "Sim. As aulas serão disponibilizadas gradualmente para que você possa estudar com calma e no seu tempo." },
  { q: "É ao vivo ou gravado?", a: "Não. As aulas serão gravadas em alta qualidade de imagem e som e, depois da edição, serão disponibilizadas na plataforma para que você possa assistir quando quiser." },
  { q: "Como irei acessar as aulas?", a: "As aulas ficam gravadas e disponíveis na Plataforma Hubla, que possui aplicativo próprio para celular, em que você pode acessar no ônibus para a faculdade ou no caminho para o trabalho. Poderá assistir no seu próprio ritmo e revisar as aulas sempre que precisar." },
  { q: "Tem garantia?", a: "Sim. Você tem 7 dias de garantia incondicional após o início das aulas. Se perceber que a formação não é para você, a devolução é integral." },
  { q: "O acesso é vitalício?", a: "Não. Você poderá acessar durante dois anos a plataforma com as aulas, dando tempo para assistir tranquilamente todas as aulas mais de uma vez. Se precisar de mais tempo, o suporte estará sempre disponível para te atender." },
  { q: "O programa é presencial?", a: "Não. É 100% online." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-5%" }}
      style={{
        border: "1px solid rgba(214,173,97,0.16)",
        borderRadius: "22px",
        background: "rgba(16,17,13,0.72)",
        overflow: "hidden",
        boxShadow: open ? "0 0 36px rgba(214,173,97,0.08)" : "none",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "24px 28px",
          background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "24px",
        }}
      >
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
          fontSize: "14px", lineHeight: "145%",
          color: open ? "#F4F5F6" : "#9c927e",
          transition: "color 200ms ease",
        }}>
          {q}
        </span>

        <div style={{
          flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%",
          background: open ? "rgba(214,173,97,0.10)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 250ms ease",
        }}>
          <svg
            width="13" height="13" viewBox="0 0 16 16" fill="none"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 300ms ease" }}
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" stroke={open ? "#d6ad61" : "#9c927e"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: "14px", lineHeight: "170%", color: "#9c927e",
              margin: "0", padding: "0 28px 24px", maxWidth: "640px",
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0 90px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #070806 0%, #0a0b08 52%, #090806 100%)" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: "auto 0 0", height: "360px", background: "radial-gradient(ellipse at 16% 100%, rgba(214,173,97,0.11) 0%, transparent 58%), radial-gradient(ellipse at 86% 100%, rgba(92,74,39,0.24) 0%, transparent 62%)", pointerEvents: "none" }} />
      {/* Heading — centered */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-8%" }}
        style={{ textAlign: "center", marginBottom: "52px", maxWidth: "560px", padding: "0 24px", position: "relative", zIndex: 1 }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px",
          letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e",
          display: "block", marginBottom: "16px",
        }}>
          FAQ
        </span>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em",
          color: "#F4F5F6", margin: "0 0 16px",
        }}>
          Ainda tem dúvidas?{" "}
          <span style={{ color: "#c8a96e" }}>Respondemos aqui.</span>
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: "15px", lineHeight: "165%", color: "#9c927e", margin: 0,
        }}>
          Se sua dúvida não estiver respondida aqui, entre em contato com a nossa equipe antes da abertura das matrículas.
        </p>
      </motion.div>

      {/* Accordion */}
      <div className="faq-list" style={{ width: "900px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 24px", position: "relative", zIndex: 1 }}>
        {faqs.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-8%" }}
        style={{ position: "relative", zIndex: 1, marginTop: "70px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 3C8.83 3 3 8.48 3 15.23c0 2.5.8 4.82 2.18 6.76L4 29l7.24-2.2A13.9 13.9 0 0016 27.46c7.17 0 13-5.48 13-12.23S23.17 3 16 3z" stroke="#d6ad61" strokeWidth="2" strokeLinejoin="round" />
          <path d="M11.2 10.9c.24-.55.48-.56.7-.56h.6c.2 0 .52.08.8.4.28.33 1.05 1.05 1.05 2.55s-1.08 2.96-1.23 3.16c-.15.2-.22.37-.08.65.15.28.66 1.1 1.43 1.78.98.88 1.8 1.15 2.08 1.28.28.14.45.12.62-.07.18-.2.72-.82.92-1.1.2-.28.4-.23.68-.14.28.1 1.78.86 2.08 1.02.3.16.5.24.58.38.08.14.08.84-.2 1.64-.28.8-1.62 1.53-2.26 1.59-.58.05-1.32.08-2.13-.14-.49-.13-1.12-.36-1.93-.72-3.4-1.5-5.62-4.98-5.79-5.22-.17-.24-1.38-1.88-1.38-3.58s.87-2.54 1.18-2.88z" fill="#d6ad61" />
        </svg>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "120%", color: "#F4F5F6", margin: 0 }}>
          Dúvidas? Fale com o nosso suporte.
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", color: "#9c927e", margin: 0 }}>
          <a href="https://api.whatsapp.com/send/?phone=5555559936959&text=Olá%21+Vim+pela+página+da+Lógica+e+gostaria+de+falar+com+um+consultor.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ color: "#d6ad61", textDecoration: "none", fontWeight: 700 }}>Clique aqui</a>{" "}
          para falar com o suporte.
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 980px) { .faq-list { width: 100% !important; padding: 0 24px !important; } }
        @media (max-width: 720px) { .faq-list { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
