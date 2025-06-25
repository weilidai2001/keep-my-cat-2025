import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="slideshow">
      <main
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "initial",
          marginTop: "20px",
        }}
      >
        <img
          style={{ position: "absolute", width: "100%" }}
          className="slideshow__hero-image"
          src="/index.gif"
        />
      </main>
      <footer className="flex justify-center mt-[20px]">
        <Button href="/intro" text="START" />
      </footer>
    </div>
  );
}
