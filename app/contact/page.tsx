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
          nav.current.style.height = "5rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "0rem";
        nav.current.style.height = "5rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-5.25rem";
        nav.current.style.height = "5rem";
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
      <div className="nav" ref={nav}>
        <Link href={"/"}>
          {"["} WORK {"]"}
        </Link>
        <Link href={"/contact"}>
          {"["} CONTACT {"]"}
        </Link>
      </div>

      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/background.jpg)",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "fixed",
          opacity: "0.05",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "fixed",
        }}
      ></div>

      <div className="containerHolder">
        <div className="card-title">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p>01</p>
            <h2>
              <br />
              Contact
            </h2>
          </div>
        </div>
        <div
          style={{
            display: emailForm ? "none" : "block",
            textAlign: "center",
            paddingBlock: "10rem",
          }}
        >
          <p style={{ color: "whitesmoke" }}>
            Your message has been received.
            <br />A response will follow shortly.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: emailForm ? "flex" : "none",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Topic"
            required
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
          />
          <textarea
            placeholder="Message"
            required
            style={{ height: "12rem", resize: "none" }}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <button type="submit">
              {"["} SUBMIT {"]"}
            </button>
          </div>
        </form>
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
              fill="whitesmoke"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/"
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
              fill="whitesmoke"
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
              fill="whitesmoke"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/christian-davenport-5228352ba/"
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
              fill="whitesmoke"
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
