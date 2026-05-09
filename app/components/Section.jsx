"use client";
import { motion } from "framer-motion";

export default function Section({ num, title, children, id }) {
  return (
    <section id={id} style={{ padding: 'var(--section-padding)', borderTop: '1px solid var(--border)' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-num">{num}</div>
        {title && <h2 style={{ fontSize: '4rem', marginBottom: '3rem' }}>{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}
