import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main className="relative w-full pb-[100%] overflow-visible mt-[100px]">
        <img className="absolute w-full" src="/index.gif" />
      </main>
      <footer className="flex justify-center mt-[20px]">
        <Button href="/intro" text="START" />
      </footer>
    </div>
  );
}
