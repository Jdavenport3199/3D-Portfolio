"use client";
import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BeatLoader } from "react-spinners";
import { clash_display } from "./ui/fonts";

export default function Home() {
  const pistolDiv = useRef<HTMLDivElement>(null);
  const guitarDiv = useRef<HTMLDivElement>(null);
  const raygunDiv = useRef<HTMLDivElement>(null);
  const keyboardDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const GuitarScene = dynamic(() => import("./components/GuitarScene"), {
    ssr: false,
    loading: () => <BeatLoader color="#ffffff80" />,
  });

  const PistolScene = dynamic(() => import("./components/PistolScene"), {
    ssr: false,
    loading: () => <BeatLoader color="#ffffff80" />,
  });

  const RaygunScene = dynamic(() => import("./components/RaygunScene"), {
    ssr: false,
    loading: () => <BeatLoader color="#ffffff80" />,
  });

  return (
    <main>
      <div className="background"></div>
      <div className="overlay"></div>

      <nav>
        <div className="nav-dropdown">
          <div className="nav-button">
            <p className="menu">WORKS</p>
            <button className="nav-link" onClick={() => scrollTo(pistolDiv)}>
              STEAMPUNK PISTOL
            </button>
            <button className="nav-link" onClick={() => scrollTo(raygunDiv)}>
              RAYGUN
            </button>
            <button className="nav-link" onClick={() => scrollTo(guitarDiv)}>
              SOULEATER GUITAR
            </button>
            <button className="nav-link" onClick={() => scrollTo(keyboardDiv)}>
              KEYBOARD ADVERTISEMENT
            </button>
          </div>
        </div>
      </nav>

      <div className="container-holder">
        <div className="container-title">
          <h1 className={`title1 ${clash_display.className}`}>3D ARTIST &</h1>
          <h1 className={`title2 ${clash_display.className}`}>
            DIGITAL DESIGNER
          </h1>
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
              }}
            >
              YOUTUBE{" "}
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
              }}
            >
              INSTAGRAM{" "}
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
              }}
            >
              UNREAL MARKETPLACE{" "}
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
              }}
            >
              EMAIL{" "}
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
          <br />
          <span id="fade">SCROLL TO EXPLORE WORK</span>
        </div>

        <div className="project" ref={pistolDiv}>
          <div className="grid">
            <div className="grid-item">
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
            <div className="grid-item">
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
            <div
              className="grid-item"
              style={{
                gridRow: "span 2",
                gridColumn: "span 2",
              }}
            >
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
            <div
              className="grid-item"
              style={{
                gridColumn: "span 2",
              }}
            >
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="card">
            <div className="scene-holder">
              <PistolScene />
            </div>
            <h1>STEAMPUNK PISTOL</h1>
            <span>
              GAME ASSET {"["} 2024 {"]"}
            </span>
            <div className="description">
              <p>
                THIS NEXT-GEN IN-GAME ASSET OFFERS UNMATCHED PERFORMANCE AND
                AESTHETICS, TURNING YOUR VIRTUAL ADVENTURES INTO A
                VICTORIAN-INSPIRED MASTERPIECE.
              </p>
            </div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://sketchfab.com/3d-models/steampunk-weapon-4acd86492f214750bc2d5f180b5373bc"
            >
              DOWNLOAD ASSET
            </Link>
          </div>
        </div>

        <div className="project" ref={raygunDiv}>
          <div className="grid">
            <div className="grid-item">
              <img src="/raygun/FPS.png" />
            </div>
            <div className="grid-item">
              <img src="/raygun/finalcolorside.png" />
            </div>
            <div
              className="grid-item"
              style={{
                gridRow: "span 2",
                gridColumn: "span 2",
              }}
            >
              <img src="/raygun/wireframe.png" />
            </div>
            <div
              className="grid-item"
              style={{
                gridColumn: "span 2",
              }}
            >
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="card">
            <div className="scene-holder">
              <RaygunScene />
            </div>
            <h1>RAYGUN</h1>
            <span>
              GAME ASSET {"["} 2024 {"]"}
            </span>
            <div className="description">
              <p>
                THIS NEXT-GEN IN-GAME ASSET OFFERS UNMATCHED PERFORMANCE AND
                AESTHETICS, TURNING YOUR VIRTUAL ADVENTURES INTO A
                VICTORIAN-INSPIRED MASTERPIECE.
              </p>
            </div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://sketchfab.com/3d-models/raygun-cod-zombies-e9150105368a45ab9289af00649e9dac"
            >
              DOWNLOAD ASSET
            </Link>
          </div>
        </div>

        <div className="project" ref={guitarDiv}>
          <div className="grid">
            <div className="grid-item">
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
            <div className="grid-item">
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
            <div
              className="grid-item"
              style={{
                gridRow: "span 2",
                gridColumn: "span 2",
              }}
            >
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
            <div
              className="grid-item"
              style={{
                gridColumn: "span 2",
              }}
            >
              <img
                src="/placeholder.png"
                style={{ width: "40px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="card">
            <div className="scene-holder">
              <GuitarScene />
            </div>
            <h1>SOULEATER GUITAR</h1>
            <span>
              GAME ASSET {"["} 2024 {"]"}
            </span>
            <div className="description">
              <p>
                THIS NEXT-GEN IN-GAME ASSET DELIVERS UNPARALLELED PERFORMANCE
                AND AESTHETICS, TRANSFORMING YOUR VIRTUAL JOURNEY INTO AN EPIC
                MUSICAL ODYSSEY.
              </p>
            </div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://sketchfab.com/3d-models/soul-eater-guitar-a25a66cd1cf945a4947b1babb76ea377"
            >
              DOWNLOAD ASSET
            </Link>
          </div>
        </div>

        <div className="project" ref={keyboardDiv}>
          <div className="grid" style={{ marginBottom: "0" }}>
            <div
              className="grid-item"
              style={{
                gridRow: "span 3",
                gridColumn: "span 2",
              }}
            >
              <video
                src="KeyboardExport.mp4"
                width="0"
                height="1080"
                autoPlay
                loop
                playsInline
                muted
              />
            </div>
          </div>
          <div className="card">
            <h1>KEYBOARD ADVERTISEMENT</h1>
            <span>
              PRODUCT DESIGN {"["} 2024 {"]"}
            </span>
            <div className="description">
              <p>
                THE NEXT-GEN KEYBOARD COMBINES ERGONOMICS AND STYLE, ELEVATING
                YOUR TYPING EXPERIENCE TO NEW HEIGHTS. IT OFFERS PRECISION AND
                COMFORT, TRANSFORMING THE WAY YOU INTERACT WITH YOUR DEVICE.
              </p>
            </div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=rn_0iXlSWJk"
            >
              VIEW THE FULL VIDEO
            </Link>
          </div>
        </div>

        <footer>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@christiandavenport.studio"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            YOUTUBE{" "}
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
            }}
          >
            INSTAGRAM{" "}
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
            }}
          >
            UNREAL MARKETPLACE{" "}
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
            }}
          >
            EMAIL{" "}
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
        </footer>
      </div>
    </main>
  );
}
