"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "0rem";
          nav.current.style.height = "6rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "0rem";
        nav.current.style.height = "6rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-6.25rem";
        nav.current.style.height = "6rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [emailForm, setEmailForm] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        topic: topic,
        message: message,
      }),
    });
    setEmailForm(false);
  };

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

      <div
        className="containerHolder"
        style={{ flexDirection: "row", alignItems: "flex-end" }}
      >
        <div className="containerHolder" style={{ justifyContent: "flex-end" }}>
          <div
            className="card-title"
            style={{
              display: emailForm ? "flex" : "none",
              maxWidth: "92.5%",
              justifyContent: "left",
            }}
          >
            <div style={{ paddingBottom: "1rem" }}>
              <div className="description">
                <h2>Contact</h2>
              </div>
              <p style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
                {"["} INQUIRY FORM {"]"}
              </p>
            </div>
          </div>
          <div
            style={{
              display: emailForm ? "none" : "block",
              textAlign: "center",
            }}
          >
            <span className="description">Success</span>
            <br />
            <p>
              Your message has been received.
              <br />A response will follow shortly.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: emailForm ? "flex" : "none",
              width: "92.5%",
              marginBottom: "4rem",
            }}
          >
            <input
              type="text"
              placeholder="NAME"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="EMAIL"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="SUBJECT"
              required
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
            />
            <textarea
              placeholder="MESSAGE"
              required
              style={{ height: "14rem", resize: "none" }}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                paddingBlock: "1rem",
                borderRadius: "1rem",
                color: "black",
                textAlign: "center",
                background: "white",
                fontWeight: "600",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              {"["} SUBMIT {"]"}
            </button>
          </form>
        </div>
        <video
          className="cardContact"
          src="/Plants.mp4"
          width="1920"
          height="1080"
          autoPlay
          loop
          playsInline
          muted
        />
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
