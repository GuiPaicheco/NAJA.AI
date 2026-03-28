import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">

      <Navbar />

      <div className="flex flex-col items-center justify-center mt-24 z-10">

        {/* LOGO GIGANTE */}
        <Image
          src="/logo.png"
          alt="NAJA.AI Logo"
          width={220}
          height={220}
          className="mb-6 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        />

        <h1 className="text-5xl font-bold text-center">
          NAJA.AI
        </h1>

        <p className="mt-4 text-lg text-center opacity-80 max-w-md">
          Assistente inteligente acadêmico para transformar a experiência no campus.
        </p>

        <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">

          <a
            href="/chat"
            className="bg-accent text-black py-3 rounded-xl font-semibold text-center hover:scale-105 transition"
          >
            Testar Assistente
          </a>

          <button className="glass py-3 rounded-xl hover:bg-white/10 transition">
            Ver Demonstração
          </button>

        </div>

      </div>

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-secondary blur-[140px] opacity-25 top-10" />
      <div className="absolute w-[400px] h-[400px] bg-accent blur-[140px] opacity-15 bottom-10" />

    </main>
  );
}