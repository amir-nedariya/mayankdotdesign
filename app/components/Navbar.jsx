"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      height: '90px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      background: '#000',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
    }}>
      {/* Logo */}
      <Link href="/" style={{ position: 'relative', width: '100px', height: '45px' }}>
        <Image 
          src="/logo.png" 
          alt="Mayank Bhatti" 
          fill 
          style={{ objectFit: 'contain', objectPosition: 'left' }}
        />
      </Link>

      {/* Navigation Links - Centered */}
      <ul style={{
        display: 'flex',
        gap: '40px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        listStyle: 'none',
      }}>
        <li style={{ position: 'relative' }}>
          <Link href="/" style={{ color: 'var(--accent)', fontWeight: '500', fontSize: '0.95rem' }}>Home</Link>
          <div style={{
            width: '5px',
            height: '5px',
            background: 'var(--accent)',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)'
          }} />
        </li>
        <li><Link href="#about" style={{ color: 'white', opacity: 0.9, fontSize: '0.95rem' }}>About</Link></li>
        <li><Link href="#work" style={{ color: 'white', opacity: 0.9, fontSize: '0.95rem' }}>Work</Link></li>
        <li><Link href="#contact" style={{ color: 'white', opacity: 0.9, fontSize: '0.95rem' }}>Contact</Link></li>
      </ul>

      {/* Button - Right */}
      <Link href="/resume" style={{
        padding: '12px 30px',
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: '50px',
        color: 'white',
        fontSize: '0.85rem',
        fontWeight: '500',
        transition: 'all 0.3s ease'
      }} className="nav-btn">
        View Resume
      </Link>
    </nav>
  );
}
