"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#050505",
        padding: "100px 5%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1450px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* HELLO */}
          <span
            style={{
              display: "block",
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: "0.12em",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            HELLO
          </span>

          {/* TITLE */}
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: "900",
              lineHeight: "1",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "30px",
              letterSpacing: "-2px",
            }}
          >
            I'M MAYANK CHAUDHARY
          </h2>

          {/* DESC */}
          <p
            style={{
              maxWidth: "650px",
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(255,255,255,0.62)",
              marginBottom: "50px",
            }}
          >
            I'm a UI/UX and Graphic Designer with over 2 years of
            hands-on experience crafting user-focused digital
            experiences. Currently pursuing my Bachelor of Computer
            Applications (BCA), I work at Quba Infotech where I design
            intuitive interfaces and impactful visuals for real-world
            projects.
          </p>

          {/* STATS */}
          <div
            style={{
              display: "flex",
              gap: "55px",
              flexWrap: "wrap",
              marginBottom: "45px",
            }}
          >
            <Stat number="2" label="Year of Experience" />
            <Stat number="10+" label="Completed Projects" />
            <Stat number="3" label="Clients on Worldwide" />
          </div>

          {/* SOCIAL + BTN */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* SOCIAL */}
            <div
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              <SocialIcon path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.634l4.717 6.237L18.244 2.25z" />

              <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />

              <SocialIcon path="M22 3.7c0-.9-.7-1.7-1.7-1.7H3.7C2.8 2 2 2.8 2 3.7v16.6c0 .9.8 1.7 1.7 1.7h16.6c.9 0 1.7-.8 1.7-1.7V3.7z" />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                background: "#fff",
                color: "#000",
              }}
              whileTap={{
                scale: 0.96,
              }}
              style={{
                padding: "13px 30px",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "transparent",
                color: "#fff",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "0.3s ease",
                fontWeight: "600",
              }}
            >
              My Story
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* DOT GLOW */}
          <div
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,208,0,0.25) 0%, rgba(255,208,0,0.08) 35%, transparent 70%)",
              filter: "blur(20px)",
              zIndex: 1,
              bottom: "80px",
            }}
          />

          {/* DOT PATTERN */}
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              left: "20px",
              bottom: "80px",
              backgroundImage:
                "radial-gradient(rgba(255,208,0,0.4) 1.4px, transparent 1.4px)",
              backgroundSize: "14px 14px",
              opacity: 0.7,
              zIndex: 1,
            }}
          />

          {/* BOX PATTERN */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 26px)",
              gap: "6px",
              zIndex: 1,
              opacity: 0.18,
            }}
          >
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: "26px",
                  height: "26px",
                  background: "#fff",
                }}
              />
            ))}
          </div>

          {/* IMAGE */}
          <div
            style={{
              position: "relative",
              width: "500px",
              height: "680px",
              zIndex: 5,
            }}
          >
            <Image
              src="/profilee.png"
              alt="Mayank"
              fill
              priority
              style={{
                objectFit: "contain",
                filter:
                  "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
              }}
            />
          </div>

          {/* FADE BOTTOM */}
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              width: "100%",
              height: "180px",
              background:
                "linear-gradient(to top, #050505, transparent)",
              zIndex: 6,
            }}
          />
        </motion.div>
      </div>

      {/* RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 1100px) {
          #about > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 768px) {
          #about {
            padding: 90px 5% !important;
          }
        }

        @media (max-width: 640px) {
          #about h2 {
            font-size: 2.1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

/* STATS */
function Stat({ number, label }) {
  return (
    <div>
      <h3
        style={{
          fontSize: "3rem",
          color: "#FFD000",
          fontWeight: "800",
          lineHeight: "1",
          marginBottom: "10px",
        }}
      >
        {number}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.95rem",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* SOCIAL */
function SocialIcon({ path }) {
  return (
    <motion.a
      href="#"
      whileHover={{
        y: -3,
        color: "#FFD000",
      }}
      style={{
        color: "rgba(255,255,255,0.65)",
        transition: "0.3s ease",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={path} />
      </svg>
    </motion.a>
  );
}