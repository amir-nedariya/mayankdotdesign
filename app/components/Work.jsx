"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "SNAKE RUSH GAME",
    category: "UI/UX DESIGN",
    image: "/project_snake.png",
  },
  {
    id: "02",
    title: "FLOW GUARD INDUSTRIAL",
    category: "WEB DESIGN",
    image: "/project_flow.png",
  },
  {
    id: "03",
    title: "WEBITO INFOTECH",
    category: "UI/UX DESIGN",
    image: "/project_webito.png",
  },
  {
    id: "04",
    title: "SNAKE RUSH GAME",
    category: "UI/UX DESIGN",
    image: "/project_snake_mockup.png",
  },
];

export default function Work() {
  return (
    <section
      id="work"
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
          position: "relative",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            marginBottom: "70px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
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
            // OUR PORTFOLIO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: "800",
              lineHeight: "1",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            FEATURED PROJECTS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              maxWidth: "650px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.7",
              fontSize: "0.98rem",
            }}
          >
            These selected projects reflect my passion for blending
            strategy with creativity — solving real problems through
            thoughtful design and impactful storytelling.
          </motion.p>
        </div>

        {/* PROJECT LIST */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            position: "relative",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <Link
            href="/projects"
            style={{
              padding: "15px 34px",
              border: "1px solid #FFD000",
              color: "#FFD000",
              borderRadius: "50px",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: "700",
              transition: "0.3s ease",
            }}
            className="browse-btn"
          >
            Browse All Projects
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .browse-btn:hover {
          background: #ffd000;
          color: #000;
        }

        @media (max-width: 900px) {
          .project-card {
            height: 380px !important;
          }

          .project-title {
            font-size: 1.6rem !important;
          }
        }

        @media (max-width: 640px) {
          .project-card {
            height: 290px !important;
            border-radius: 16px !important;
          }

          .project-title {
            font-size: 1.2rem !important;
          }

          .project-category {
            font-size: 0.65rem !important;
            padding: 7px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="project-card"
      style={{
        position: "relative",
        width: "100%",
        height: "520px",
        borderRadius: "22px",
        overflow: "hidden",
        background: "#111",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* IMAGE */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{
          objectFit: "cover",
          transition: "0.5s ease",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15), rgba(0,0,0,0.25))",
          zIndex: 1,
        }}
      />

      {/* ID */}
      <div
        style={{
          position: "absolute",
          top: "28px",
          left: "30px",
          zIndex: 3,
          color: "rgba(255,255,255,0.72)",
          fontSize: "0.82rem",
          fontWeight: "600",
          letterSpacing: "0.12em",
          fontFamily: "monospace",
        }}
      >
        {project.id}
      </div>

      {/* CENTER CONTENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <motion.h3
          whileHover={{
            scale: 1.03,
          }}
          className="project-title"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3.6rem)",
            fontWeight: "900",
            textTransform: "uppercase",
            lineHeight: "1",
            letterSpacing: "-1px",
            marginBottom: "18px",
            textShadow: "0 10px 25px rgba(0,0,0,0.5)",
          }}
        >
          {project.title}
        </motion.h3>

        <div
          className="project-category"
          style={{
            padding: "10px 22px",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.92)",
            color: "#000",
            fontSize: "0.72rem",
            fontWeight: "700",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            backdropFilter: "blur(10px)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "120px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          zIndex: 2,
        }}
      />
    </motion.div>
  );
}