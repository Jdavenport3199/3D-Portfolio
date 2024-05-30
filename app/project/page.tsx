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
              <p>01</p>
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
              <p>02</p>
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
    </main>
  );
}
