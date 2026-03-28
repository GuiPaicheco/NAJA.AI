export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="glass rounded-2xl px-6 py-3 flex justify-between items-center">

        <span className="font-bold text-lg tracking-wide">
          NAJA.AI
        </span>

        <div className="flex gap-6 text-sm opacity-80">
          <a href="/" className="hover:text-accent">Início</a>
          <a href="/chat" className="hover:text-accent">Assistente</a>
        </div>

      </div>
    </div>
  );
}