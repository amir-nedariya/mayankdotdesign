"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animationFrameId;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.0005;

      // Creating the S-curve particle field from the image
      const particleSpacing = 15;
      const rows = Math.ceil(height / particleSpacing);
      const cols = Math.ceil(width / particleSpacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const px = j * particleSpacing;
          const py = i * particleSpacing;

          // S-curve interference logic to match the image
          // The image has a vertical flow with horizontal wavy offset
          const verticalProgress = py / height;
          const horizontalOffset = Math.sin(verticalProgress * Math.PI * 2 + time) * 150;
          const secondaryWave = Math.cos(verticalProgress * Math.PI * 4 - time * 0.5) * 50;

          const centerX = width / 2 + horizontalOffset + secondaryWave;
          const distanceToCenter = Math.abs(px - centerX);

          // Particles only appear near the "S" path
          const pathWidth = 200;
          const opacity = Math.max(0, 0.25 - (distanceToCenter / pathWidth));

          if (opacity > 0.01) {
            const size = Math.max(0.5, 1.2 - (distanceToCenter / 300));
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            // Copper/Bronze gradient color
            const r = 230 + Math.sin(time + verticalProgress) * 20;
            const g = 126 + Math.cos(time) * 20;
            const b = 34;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.fill();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", init);
    init();
    draw();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return <section style={{ height: "100vh", background: "#000" }} />;

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Dynamic Particle Wave Background */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", opacity: 0.8 }}
        />
      </div>


      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%", // Re-centering for better balance with the new background
          transform: "translateX(-50%)",
          zIndex: 15,
        }}
      >
        <Image
          src="/profilee.png"
          alt="profile"
          width={600}
          height={800}
          priority
          style={{
            objectFit: "contain",
            height: "92vh",
            width: "auto",
            filter: "drop-shadow(0 0 100px rgba(0,0,0,0.8))",
          }}
        />
      </motion.div>

      <div
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          maxWidth: "1600px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Content Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            left: "5%",
            zIndex: 30,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(255,255,255,0.08)",
              padding: "10px 24px",
              borderRadius: "50px",
              width: "fit-content",
              border: "1px solid rgba(255,255,255,0.12)",
              marginBottom: "24px",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="status-dot"
              style={{
                width: "8px",
                height: "8px",
                background: "#39FF14",
                borderRadius: "50%",
                boxShadow: "0 0 12px #39FF14",
              }}
            />
            <span
              style={{
                fontSize: "0.85rem",
                color: "#fff",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
            >
              Open for freelance works.
            </span>
          </motion.div>

          {/* Intro Text */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              maxWidth: "420px",
              lineHeight: "1.6",
              color: "#fff",
              marginBottom: "32px",
              fontWeight: "300",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.01em",
            }}
          >
            Hey there I'm a{" "}
            <span
              style={{
                color: "var(--accent)",
                fontWeight: "600",
              }}
            >
              Brand & UI & UX Designer
            </span>{" "}
            working in the global marketplace.
          </motion.h3>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{
              background: "none",
              color: "#fff",
              padding: "14px 38px",
              borderRadius: "50px",
              border: "1px solid var(--accent)",
              fontWeight: "600",
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Explore Work
          </motion.button>
        </div>
      </div>
      {/* BOTTOM LOGOS MARQUEE */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: 0,
          width: "100%",
          overflow: "hidden",
          zIndex: 40,
        }}
      >
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
            width: "fit-content",
            padding: "20px 0",
          }}
        >
          {[
            "webito.png",
            "wheyer.png",
            "arwa logo 1.png",
            "UNILOG-P-3556464 1.png",
            "KAILASHA LOGO final 1 1.png",
            "vedcool4 1.png",
            "Group 2.png",
            "webito.png",
            "wheyer.png",
            "arwa logo 1.png",
            "UNILOG-P-3556464 1.png",
            "KAILASHA LOGO final 1 1.png",
            "vedcool4 1.png",
            "Group 2.png",
          ].map((logo, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "140px",
                height: "45px",
                opacity: 0.6,
                flexShrink: 0,
              }}
            >
              <Image
                src={`/logo/${logo}`}
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}