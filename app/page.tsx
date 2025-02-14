"use client";
import ReactLenis from "lenis/react";
import Projects from "./components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <div className="background"></div>
        <div className="overlay"></div>
        <div className="container-holder">
          <div className="container-title">
            <h1>
              3D Artist.
              <br />
              Digital Designer.
            </h1>
            <span
              style={{
                lineHeight: 1.6,
                maxWidth: "800px",
                paddingTop: "2rem",
              }}
            >
              I&apos;m Christian, a 3D Artist and Digital Designer proficient in
              Blender, Substance Painter, and Unreal Engine. I create visually
              stunning and technically sophisticated assets and environments for
              games, films, and interactive media.
            </span>
            <div className="link-holder">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@christiandavenport.studio"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.2rem",
                  background: "#f5f5f520",
                  borderRadius: "100px",
                  padding: "1rem",
                  paddingBlock: "0.4rem",
                }}
              >
                Youtube{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="10"
                  viewBox="0 0 448 512"
                  fill="#F2F3F4"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/christiandavenport.studio/"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.2rem",
                  background: "#f5f5f520",
                  borderRadius: "100px",
                  padding: "1rem",
                  paddingBlock: "0.4rem",
                }}
              >
                Instagram{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="10"
                  viewBox="0 0 448 512"
                  fill="#F2F3F4"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.unrealengine.com/marketplace/en-US/profile/christiandavenport.studio?count=20&sortBy=effectiveDate&sortDir=DESC&start=0"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.2rem",
                  background: "#f5f5f520",
                  borderRadius: "100px",
                  padding: "1rem",
                  paddingBlock: "0.4rem",
                }}
              >
                Unreal Marketplace{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="10"
                  viewBox="0 0 448 512"
                  fill="#F2F3F4"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:christiandavenport.studio@gmail.com"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.2rem",
                  background: "#f5f5f520",
                  borderRadius: "100px",
                  padding: "1rem",
                  paddingBlock: "0.4rem",
                }}
              >
                Email{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="10"
                  viewBox="0 0 448 512"
                  fill="#F2F3F4"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
            </div>
            <div style={{ position: "absolute", bottom: "4rem" }}>
              <span style={{ color: "white" }}>Explore my work below.</span>
            </div>
          </div>

          <Projects />

          {/* <footer>
            <span>Copyright © 2025 Christian Davenport</span>
          </footer> */}
        </div>
      </main>
    </ReactLenis>
  );
}
