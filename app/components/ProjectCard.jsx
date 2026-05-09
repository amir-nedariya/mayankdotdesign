"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ title, category, image, num }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      style={{ cursor: 'pointer', marginBottom: '4rem' }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#111', borderRadius: '4px' }}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover', opacity: 0.8, transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease' }}
          className="project-image"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1.5rem' }}>
        <div>
          <div className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{category}</div>
          <h3 style={{ fontSize: '2rem' }}>{title}</h3>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'rgba(255,255,255,0.1)' }}>{num}</div>
      </div>
      <style jsx>{`
        div:hover .project-image {
          transform: scale(1.05);
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
}
