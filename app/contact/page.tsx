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
      <div className="logo">
        <Link href={"/"}>
          {"["} BACK {"]"}
        </Link>
      </div>

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
              maxWidth: "90%",
              justifyContent: "left",
            }}
          >
            <div style={{ paddingBottom: "2rem" }}>
              <div className="description">
                <h2>Contact</h2>
              </div>
              <p>
                I’M CURRENTLY AVAILABLE FOR FREELANCE PROJECTS, EMAIL ME FOR
                INQUIRIES.
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
              width: "90%",
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
                paddingBlock: "1.4rem",
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
        <div
          className="cardContactHolder"
          style={{
            width: "100%",
            overflow: "hidden",
            marginBottom: "4rem",
            marginRight: "2.5%",
            height: "85vh",
            borderRadius: "2rem",
          }}
        >
          <img className="cardContact" src="/test.jpg" />
        </div>
      </div>
    </main>
  );
}
