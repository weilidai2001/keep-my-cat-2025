import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main className="relative w-full pb-[100%] overflow-visible mt-5">
        <img className="absolute w-full" src="/index.gif" />
      </main>
      <footer className="flex justify-center mt-5">
        <Button href="/intro" text="START" />
      </footer>
    </div>
  );
}
