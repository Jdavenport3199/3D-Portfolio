import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "AS-VAL",
    category: "Game Asset",
    description:
      "This high-quality AS-VAL 3D model is optimized for real-time rendering and is fully compatible with Unreal Engine. Designed with precision, it features detailed textures, realistic PBR materials, and an optimized polygon count for smooth performance in FPS and tactical shooters.",
    images: [
      "/AS-VAL/1.jpg",
      "/AS-VAL/2.jpg",
      "/AS-VAL/3.jpg",
      "/AS-VAL/4.jpg",
      "/AS-VAL/5.jpg",
    ],
    link: "https://www.fab.com/listings/45535118-21ae-419f-8163-ae5400da96d3",
  },
  {
    title: "Makarov PB",
    category: "Game Asset",
    description:
      "This highly detailed Makarov PB 3D model is fully optimized for Unreal Engine, delivering exceptional realism and performance for FPS, stealth, and tactical shooters. Designed with accuracy in mind, it features PBR materials, a functional suppressor, and smooth topology, making it perfect for real-time rendering.",
    images: [
      "/Makarov PB/1.jpg",
      "/Makarov PB/2.jpg",
      "/Makarov PB/3.jpg",
      "/Makarov PB/4.jpg",
      "/Makarov PB/5.jpg",
    ],
    link: "https://www.fab.com/listings/45535118-21ae-419f-8163-ae5400da96d3",
  },
];

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const project = projects[selectedProjectIndex];
  const [selectedImage, setSelectedImage] = useState(project.images[0]);

  const handleProjectChange = (direction: "next" | "prev") => {
    setSelectedProjectIndex((prevIndex) => {
      let newIndex =
        direction === "next"
          ? (prevIndex + 1) % projects.length
          : (prevIndex - 1 + projects.length) % projects.length;
      setSelectedImage(projects[newIndex].images[0]);
      return newIndex;
    });
  };

  return (
    <>
      <div className="project">
        <div className="grid">
          <img
            className="large-img"
            src={selectedImage}
            alt={project.title}
            style={{
              height: "73vh",
              border: "1px solid #F2F3F410",
              gridColumn: "span 5",
            }}
          />
          {project.images.map((img, index) => (
            <button key={index} onClick={() => setSelectedImage(img)}>
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                loading="lazy"
                style={{ border: "1px solid #F2F3F410" }}
              />
            </button>
          ))}
        </div>

        <div className="card">
          <h2>{project.title}</h2>
          <span>{project.category}</span>
          <div className="description">
            <p>{project.description}</p>
          </div>
          <div className="link">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="purchase-link"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.2rem",
                background: "#f5f5f520",
                borderRadius: "100px",
                padding: "1rem",
                paddingBlock: "0.4rem",
              }}
            >
              Purchase Asset{" "}
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
        </div>
      </div>

      <div className="project-navigation">
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.2rem",
            background: "#f5f5f520",
            borderRadius: "100px",
            padding: "1rem",
            width: "1rem",
            height: "1rem",
          }}
          onClick={() => handleProjectChange("prev")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
          >
            <path
              fill="white"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.2rem",
            background: "#f5f5f520",
            borderRadius: "100px",
            padding: "1rem",
            width: "1rem",
            height: "1rem",
          }}
          onClick={() => handleProjectChange("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
          >
            <path
              fill="white"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
