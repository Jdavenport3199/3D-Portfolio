import Image from "next/image";

export default function About() {
  return (
    <div className="containerHolder">
      <div style={{ paddingBottom: "2rem" }}>
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
          src={"/images/profile.png"}
          width={200}
          height={200}
          alt=""
          style={{ borderRadius: "100rem" }}
        />
        <p
          style={{
            paddingBlock: "1rem",
            fontSize: "24px",
            color: "whitesmoke",
            fontWeight: "800",
          }}
        >
          Christian Davenport
        </p>
        <p style={{ fontWeight: "200" }}>Charlotte, NC</p>
        <p
          style={{
            paddingTop: "1rem",
            textAlign: "center",
            color: "whitesmoke",
          }}
        >
          I am proficient in Blender, Substance Painter, and Unreal Engine.
          <br />
          Additionally, I regularly utilize the Adobe Suite when working on
          projects.
        </p>
      </div>
    </div>
  );
}
