"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer
      id="contact"
      style={{
        background: "#050505",
        color: "#fff",
        padding: "110px 5% 40px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
        }}
      >
        {/* TOP SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "90px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                color: "#D4AF37",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                marginBottom: "35px",
                fontWeight: "700",
                fontFamily: "monospace",
              }}
            >
              // CONTACT
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.8rem)",
                lineHeight: "0.95",
                fontWeight: "800",
                textTransform: "uppercase",
                marginBottom: "70px",
                letterSpacing: "-2px",
              }}
            >
              LET’S WORK
              <br />
              TOGATHER
            </motion.h2>

            {/* CONTACT INFO */}
            <div style={{ marginBottom: "60px" }}>
              <div style={{ marginBottom: "38px" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  +91 6355455309
                </h3>

                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  PHONE NUMBER
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  mayankbhatol6308@gmail.com
                </h3>

                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  EMAIL ADDRESS
                </span>
              </div>
            </div>

            {/* SOCIALS */}
            <div
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
              }}
            >
              <SocialIcon d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.634l4.717 6.237L18.244 2.25z" />

              <SocialIcon d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />

              <SocialIcon d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "70px 60px",
              position: "relative",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "35px",
              }}
            >
              <InputField label="Full name" type="text" />
              <InputField label="Email" type="email" />
              <InputField label="Phone Number" type="tel" />

              {/* SELECT */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    marginBottom: "12px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Service Needed ?
                </label>

                <select
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    paddingBottom: "14px",
                    color: "rgba(255,255,255,0.85)",
                    outline: "none",
                    fontSize: "1rem",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  <option style={{ background: "#000" }}>
                    Select Service
                  </option>

                  <option style={{ background: "#000" }}>
                    UI/UX Design
                  </option>

                  <option style={{ background: "#000" }}>
                    Web Development
                  </option>

                  <option style={{ background: "#000" }}>
                    Branding
                  </option>
                </select>
              </div>

              <InputField
                label="What Can I Help You..."
                type="text"
              />

              {/* BUTTON */}
              <div style={{ marginTop: "15px" }}>
                <motion.button
                  whileHover={{
                    background: "#D4AF37",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "15px 28px",
                    borderRadius: "40px",
                    border: "1px solid #D4AF37",
                    background: "transparent",
                    color: "#D4AF37",
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                >
                  Submit Your Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* BIG TEXT */}
      <div style={{ paddingTop: "0px", overflow: "hidden" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5.2vw, 15rem)",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.88)",
            marginBottom: "20px",
            lineHeight: "1.1",
            whiteSpace: "nowrap",
            fontFamily: "Michroma, sans-serif",
          }}
        >
          MAYANK CHAUDHARY
        </h1>

        {/* COPYRIGHT */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            maxWidth: "100%",
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "rgba(255, 255, 255, 0.88)",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
          >
            © Copyright 2026. All Rights Reserved By MayankDesignix
          </p>
        </div>
      </div>
    </footer>
  );
}

/* INPUT FIELD */
function InputField({ label, type }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "0.82rem",
          marginBottom: "12px",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        {label} *
      </label>

      <input
        type={type}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          paddingBottom: "14px",
          color: "#fff",
          outline: "none",
          fontSize: "1rem",
          transition: "0.3s ease",
        }}
        onFocus={(e) =>
        (e.target.style.borderBottom =
          "1px solid #D4AF37")
        }
        onBlur={(e) =>
        (e.target.style.borderBottom =
          "1px solid rgba(255,255,255,0.12)")
        }
      />
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ d }) {
  return (
    <motion.a
      href="#"
      whileHover={{
        y: -3,
        color: "#D4AF37",
      }}
      style={{
        color: "rgba(255,255,255,0.55)",
        transition: "0.3s ease",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={d} />
      </svg>
    </motion.a>
  );
}