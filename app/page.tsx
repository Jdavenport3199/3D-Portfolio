"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Scene from "./components/Scene";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Link from "next/link";

const SceneLoading = dynamic(() => import("./components/Scene"), {
  ssr: false,
});

export default function Home() {
  const galleryDiv = useRef<HTMLDivElement>(null);
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
    <main>
      <div className="nav">
        <button onClick={() => scrollTo(galleryDiv)}>Gallery</button>
        <button onClick={() => scrollTo(contactDiv)}>Contact</button>
      </div>

      <div className="containerHolder">
        <div className="blur"></div>
        <div className="container" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              zIndex: 1,
              width: "40%",
              height: "100%",
            }}
          >
            <Scene />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "10rem",
              left: "0px",
              zIndex: 0,
            }}
          >
            <h1>I'm Christian.</h1>
            <br />
            <h2>3D Artist / Concept Designer</h2>
            <br />
            <br />
            <br />
            <p>
              Explore my catalogue of 3D models, animations, and renders.
              Available for commissions.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={galleryDiv}
        className="containerHolder"
        style={{
          alignItems: "center",
          background: "#7F7B8210",
          borderTop: "1px solid #7F7B8220",
          borderBottom: "1px solid #7F7B8220",
        }}
      >
        <div className="container">
          <div className="cardHolder">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </div>

      <div
        ref={contactDiv}
        className="containerHolder"
        style={{ alignItems: "center" }}
      >
        <div className="blur"></div>
        <div className="container">
          <div
            style={{
              display: emailForm ? "none" : "block",
              textAlign: "center",
            }}
          >
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
              style={{ height: "10rem", resize: "none" }}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="iconHolder">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/christiandavenport.studio/"
        >
          <Image src={"/images/instagram.svg"} width={28} height={28} alt="" />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/"
        >
          <Image src={"/images/x.svg"} width={28} height={28} alt="" />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.unrealengine.com/marketplace/en-US/store"
        >
          <Image src={"/images/unreal.svg"} width={27} height={28} alt="" />
        </Link>
      </div>
    </main>
  );
}
