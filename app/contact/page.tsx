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
        <Link href={"/"} style={{ width: "350px", textAlign: "center" }}>
          {"["} WORK {"]"}
        </Link>
        <Link href={"/contact"} style={{ width: "350px", textAlign: "center" }}>
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
        <div
          className="card-title"
          style={{
            display: emailForm ? "flex" : "none",
          }}
        >
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
    </main>
  );
}
