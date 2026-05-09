"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonialData = [
  {
    type: "testimonial",
    text: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    name: "John Harris",
    role: "Marketing Director",
    avatar: "/avatar_1.png",
  },
  {
    type: "testimonial",
    text: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    name: "John Harris",
    role: "Marketing Director",
    avatar: "/avatar_2.png",
  },
  {
    type: "statWhite",
    topText: "I've worked with 110 happy client",
    number: "98%",
    label: "Satisfaction Rate",
  },
  {
    type: "statYellow",
    topText: "My work helped clients grow their revenue by 200%",
    number: "200%",
    label: "Satisfaction Rate",
  },
  {
    type: "testimonial",
    text: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    name: "John Harris",
    role: "Marketing Director",
    avatar: "/avatar_3.png",
  },
  {
    type: "testimonial",
    text: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    name: "John Harris",
    role: "Marketing Director",
    avatar: "/avatar_1.png",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            marginBottom: "55px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: "#FFD000",
              fontSize: "0.85rem",
              fontWeight: "700",
              letterSpacing: "0.16em",
              marginBottom: "22px",
              fontFamily: "monospace",
            }}
          >
            // TESTIMONIAL
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              fontWeight: "800",
              lineHeight: "1",
              textTransform: "uppercase",
              marginBottom: "22px",
              letterSpacing: "-2px",
            }}
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              maxWidth: "620px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.7",
              fontSize: "0.98rem",
            }}
          >
            Here's what my clients have shared about their experiences
            working with me. Their trust and satisfaction motivate me to
            continue delivering designs that make an impact.
          </motion.p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {testimonialData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              style={{
                background:
                  item.type === "statWhite"
                    ? "#F5F5F5"
                    : item.type === "statYellow"
                      ? "#FFD000"
                      : "#151515",

                color:
                  item.type === "statWhite" ||
                    item.type === "statYellow"
                    ? "#000"
                    : "#fff",

                borderRadius: "14px",
                padding: "28px",
                minHeight: "230px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border:
                  item.type === "testimonial"
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "none",
                transition: "0.3s ease",
              }}
            >
              {/* TESTIMONIAL CARD */}
              {item.type === "testimonial" ? (
                <>
                  <div>
                    {/* STARS */}
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        marginBottom: "20px",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="#FFD000"
                        >
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                      ))}
                    </div>

                    <p
                      style={{
                        color: "rgba(255,255,255,0.68)",
                        lineHeight: "1.7",
                        fontSize: "0.92rem",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* PROFILE */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginTop: "28px",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "700",
                          marginBottom: "2px",
                        }}
                      >
                        {item.name}
                      </h4>

                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "rgba(255,255,255,0.38)",
                        }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      lineHeight: "1.6",
                      opacity: 0.72,
                      maxWidth: "240px",
                    }}
                  >
                    {item.topText}
                  </p>

                  <div>
                    <h2
                      style={{
                        fontSize: "4.5rem",
                        lineHeight: "1",
                        fontWeight: "900",
                        letterSpacing: "-3px",
                        marginBottom: "6px",
                      }}
                    >
                      {item.number}
                    </h2>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        opacity: 0.7,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}