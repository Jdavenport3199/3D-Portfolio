"use client";
import Image from "next/image";
import Scene from "./components/Scene";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Link from "next/link";
import Tools from "./components/Tools";
import About from "./components/About";
import { ReactLenis } from "@studio-freight/react-lenis";

const SceneLoading = dynamic(() => import("./components/Scene"), {
  ssr: false,
});

export default function Home() {
  const toolsDiv = useRef<HTMLDivElement>(null);
  const workDiv = useRef<HTMLDivElement>(null);
  const aboutDiv = useRef<HTMLDivElement>(null);
  const contactDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <ReactLenis root>
      <main>
        <div className="nav">
          <button onClick={() => scrollTo(toolsDiv)}>Tools</button>
          <button onClick={() => scrollTo(workDiv)}>Work</button>
          <button onClick={() => scrollTo(aboutDiv)}>About</button>
          <button onClick={() => scrollTo(contactDiv)}>Contact</button>
        </div>

        <div
          style={{
            position: "fixed",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <Scene />
        </div>

        <div className="containerHolder">
          <div className="containerTitle">
            <h1>
              3D Artist &
              <br />
              Concept Designer
            </h1>
            <div className="cardHolder" style={{ paddingTop: "4rem" }}>
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
          </div>

          <div className="container" ref={toolsDiv}>
            <hr />
          </div>
          <Tools />

          <div className="container" ref={workDiv}>
            <hr />
          </div>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>Work</h2>
          </div>
          <div className="container">
            <div className="cardHolder" style={{ justifyContent: "center" }}>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>

          <div className="container" ref={aboutDiv}>
            <hr />
          </div>
          <About />

          <div className="container" ref={contactDiv}>
            <hr />
          </div>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>Contact</h2>
          </div>
          <p
            style={{
              fontWeight: "200",
              color: "whitesmoke",
              marginBottom: "1rem",
              fontSize: "20px",
            }}
          >
            christiandavenport.studio@gmail.com
          </p>
          <div
            className="icon-container"
            style={{ marginBottom: "2rem", gap: "1rem" }}
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/christiandavenport.studio/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "3rem",
                height: "3rem",
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
                width: "3rem",
                height: "3rem",
                borderRadius: "100rem",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "#f5f5f510",
              }}
            >
              <Image src={"/unreal.svg"} width={27} height={28} alt="" />
            </Link>
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
              style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}
            >
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </ReactLenis>
  );
}
