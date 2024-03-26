import Image from "next/image";

export default function Tools() {
  return (
    <div className="containerHolder">
      <div style={{ paddingBottom: "2rem" }}>
        <h2>Tools</h2>
      </div>
      <div className="icon-container" style={{ paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            className="icon"
            src={"/icons/blender.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p>Blender</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            className="icon"
            src={"/icons/unreal.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p>Unreal Engine</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            className="icon"
            src={"/icons/adobe.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p>Substance Painter</p>
        </div>
      </div>
      <div className="icon-container">
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            className="icon"
            src={"/icons/figma.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p>Figma</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            className="icon"
            src={"/icons/photoshop.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p>Photoshop</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image
            className="icon"
            src={"/icons/Illustrator.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p>Illustrator</p>
        </div>
      </div>
    </div>
  );
}
