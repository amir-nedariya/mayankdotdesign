"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "UI/UX DESIGN",
    description:
      "I design user-centered digital experiences that combine functionality and visual appeal, focusing on usability, feedback, and seamless interactions.",
    tool: "FIGMA",
    image: "/services/1.jpg",
  },
  {
    id: "02",
    title: "GRAPHIC DESIGN",
    description:
      "I design user-centered digital experiences that combine functionality and visual appeal, focusing on usability, feedback, and seamless interactions.",
    tool: "CANVA, PHOTOSHOP, ADOBE ILLUSTRATOR",
    image: "/services/2.jpg",
  },
  {
    id: "03",
    title: "WEB DESIGN",
    description:
      "I design user-centered digital experiences that combine functionality and visual appeal, focusing on usability, feedback, and seamless interactions.",
    tool: "FIGMA",
    image: "/services/3.jpg",
  },
  {
    id: "04",
    title: "BRANDING",
    description:
      "I design user-centered digital experiences that combine functionality and visual appeal, focusing on usability, feedback, and seamless interactions.",
    tool: "BLENDER",
    image: "/services/4.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#050505",
        color: "#fff",
        padding: "110px 5%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            marginBottom: "70px",
            paddingBottom: "38px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                color: "#FFD000",
                fontSize: "0.82rem",
                fontWeight: "700",
                letterSpacing: "0.16em",
                marginBottom: "18px",
                fontFamily: "monospace",
              }}
            >
              // OUR SERVICES
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                fontWeight: "800",
                lineHeight: "1",
                textTransform: "uppercase",
                letterSpacing: "-2px",
              }}
            >
              WHAT I CAN FOR YOU
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              maxWidth: "430px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.7",
              fontSize: "0.95rem",
              textAlign: "right",
            }}
          >
            As a digital designer, I am a visual storyteller,
            crafting experiences that connect deeply and spark
            creativity.
          </motion.p>
        </div>

        {/* SERVICES */}
        <div>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                background: "rgba(255,255,255,0.015)",
              }}
              className="service-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr 1fr",
                gap: "34px",
                alignItems: "center",
                padding: "34px 0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                transition: "0.3s ease",
              }}
            >
              {/* LEFT */}
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.12em",
                    fontFamily: "monospace",
                    display: "block",
                    marginBottom: "30px",
                  }}
                >
                  {service.id}
                </span>

                <h3
                  className="service-title"
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    textTransform: "uppercase",
                    letterSpacing: "-1px",
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* CENTER IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                style={{
                  position: "relative",
                  height: "180px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#111",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.35), transparent)",
                  }}
                />
              </motion.div>

              {/* RIGHT */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.58)",
                    lineHeight: "1.75",
                    fontSize: "0.9rem",
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    marginTop: "26px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.32)",
                      letterSpacing: "0.16em",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.tool}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 1000px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 768px) {
          .service-title {
            font-size: 1.2rem !important;
          }
        }

        @media (max-width: 640px) {
          #services {
            padding: 90px 5% !important;
          }
        }
      `}</style>
    </section>
  );
}