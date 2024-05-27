"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const workDiv = useRef<HTMLDivElement>(null);
  const aboutDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    // <ReactLenis root>
    <main>
      <div className="nav" ref={nav}>
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Home
        </button>
        <button onClick={() => scrollTo(workDiv)}>Work</button>
        <button onClick={() => scrollTo(aboutDiv)}>About</button>
        <button
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Contact
        </button>
      </div>

      <div className="containerHolder">
        <div
          className="containerTitle"
          style={{ width: "95%", marginTop: "4rem" }}
        >
          <h1>
            3D ARTIST
            <br />
            CONCEPT DESIGNER
          </h1>
          <div className="cardHolder">
            <div className="card-title">
              <div>
                <p>01</p>
                <h2>
                  <br />
                  3D Modeling
                </h2>
              </div>
            </div>
            <div className="card-title">
              <div>
                <p>02</p>
                <h2>
                  <br />
                  Concept Design
                </h2>
              </div>
            </div>
            <div className="card-title">
              <div>
                <p>03</p>
                <h2>
                  <br />
                  Game Ready Assets
                </h2>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.6rem",
              marginTop: "8rem",
            }}
          >
            <div className="blinking-dot"></div>
            <p className="blink">AVAILABLE FOR FREELANCE</p>
            <div className="blinking-dot"></div>
          </div>
          <div
            className="icon-container"
            style={{ marginTop: "2rem", gap: "1rem" }}
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/christiandavenport.studio/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "4rem",
                height: "4rem",
                borderRadius: "100rem",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "#f5f5f510",
              }}
            >
              <Image src={"/instagram.svg"} width={28} height={28} alt="" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.unrealengine.com/marketplace/en-US/profile/christiandavenport.studio?count=20&sortBy=effectiveDate&sortDir=DESC&start=0"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "4rem",
                height: "4rem",
                borderRadius: "100rem",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "#f5f5f510",
              }}
            >
              <Image src={"/unreal.svg"} width={34} height={34} alt="" />
            </Link>
          </div>
        </div>

        <div
          style={{ paddingBottom: "2rem", paddingTop: "6rem" }}
          ref={workDiv}
        >
          <h2>Work</h2>
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className="cardHolder" style={{ justifyContent: "center" }}>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>

        <div className="containerHolder">
          <div
            style={{ paddingBottom: "2rem", paddingTop: "6rem" }}
            ref={aboutDiv}
          >
            <h2>About</h2>
          </div>
          <div
            className="container"
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image
              src={"/profile.png"}
              width={200}
              height={200}
              alt=""
              style={{ borderRadius: "100rem" }}
            />
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "24px",
                color: "whitesmoke",
                fontWeight: "600",
              }}
            >
              Christian Davenport
            </p>
            <p style={{ fontWeight: "200" }}>Charlotte, NC</p>
            <p className="bio">
              I&apos;m Chrisitan, a 3D Artist and Concept Designer proficient in
              Blender, Substance Painter, and Unreal Engine. I create visually
              stunning and technically sophisticated assets and environments for
              games, films, and interactive media. Additionally, I regularly
              utilize the Adobe Suite to enhance my creative workflow,
              seamlessly integrating 2D and 3D elements, intricate texturing,
              and compelling visual storytelling.
            </p>
          </div>
        </div>

        <div className="containerHolder">
          <div style={{ paddingBottom: "2rem" }}>
            <h2>Contact</h2>
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
