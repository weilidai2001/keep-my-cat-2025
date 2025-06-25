export default function Home() {
  return (
    <div className="slideshow">
      <main style={{ position: "relative", width: "100%", paddingBottom: "100%", overflow: "initial", marginTop: "20px" }}>
        <img
          style={{ position: "absolute", width: "100%" }}
          className="slideshow__hero-image"
          src="/index.gif"
        />
      </main>
      <footer>
        <button
          style={{
            padding: "5px 15px",
            width: "auto",
            fontSize: "18px",
            margin: "20px auto",
          }}
        >
          START
        </button>
      </footer>
    </div>
  );
}
