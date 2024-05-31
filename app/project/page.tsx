"use client";
import Link from "next/link";

export default function Project() {
  return (
    <main>
      <nav>
        <div className="nav-dropdown">
          <div className="nav-button">
            <p className="menu">
              {"["} MENU {"]"}
            </p>
            <Link href={"/"} className="nav-link">
              {"["} WORK {"]"}
            </Link>
            <Link href={"/contact"} className="nav-link">
              {"["} CONTACT {"]"}
            </Link>
          </div>
        </div>
      </nav>

      <div className="background"></div>
      <div className="background-overlay"></div>

      <div className="containerHolder">
        <div className="containerDescription">
          <div>
            <h1 style={{ fontSize: "clamp(36px, 6vw, 100px)" }}>Keyboard</h1>
            <br />
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
              PRODUCT DESIGN {"["} 2024 {"]"}
            </p>
          </div>
          <div>
            <div className="description">
              {/* <p>01</p> */}
              <h2>
                <br />
                About
              </h2>
            </div>
            <p>
              AUGMENTED REALITY (AR) AND VIRTUAL REALITY (VR) BRIDGE THE DIGITAL
              AND PHYSICAL WORLDS. THEY ALLOW YOU TO TAKE IN INFORMATION AND
              CONTENT VISUALLY, IN THE SAME WAY YOU TAKE IN THE WORLD.
            </p>
            <br />
            <div className="description">
              {/* <p>02</p> */}
              <h2>
                <br />
                Details
              </h2>
            </div>
            <ul>
              <li>AUGMENTED REALITY</li>
              <li>VIRTUAL REALITY</li>
              <li>DIGITAL AND PHYSICAL WORLDS</li>
              <li>INFORMATION AND CONTENT VISUALLY</li>
            </ul>
          </div>
        </div>
        <div className="containerImg">
          <div className="cardShowcase">
            <img className="img" src="/1.jpg" />
          </div>
          <div className="cardShowcase">
            <img className="img" src="/1.jpg" />
          </div>
        </div>
      </div>

      <footer>
        <div className="footer">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/christiandavenport.studio/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            INSTAGRAM{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="16"
              viewBox="0 0 448 512"
              fill="white"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/christiandavenport/shots"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            DRIBBBLE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="16"
              viewBox="0 0 448 512"
              fill="white"
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
              gap: "0.4rem",
            }}
          >
            UNREAL MARKET{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="16"
              viewBox="0 0 448 512"
              fill="white"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/christiandavenportstudio/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            LINKEDIN{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="16"
              viewBox="0 0 448 512"
              fill="white"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}
