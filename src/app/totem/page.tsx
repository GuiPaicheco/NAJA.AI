"use client";

import { useState } from "react";
import { getBotResponse } from "../chat/chatBrain";

export default function Totem() {
  const [response, setResponse] = useState("Toque para começar");

  function ask(question: string) {
    const res = getBotResponse(question);
    setResponse(res);

    const speech = new SpeechSynthesisUtterance(res);
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl font-bold mb-10">
        NAJA.AI
      </h1>

      <div className="glass p-8 rounded-2xl mb-10 max-w-xl">
        {response}
      </div>

      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">

        <button onClick={() => ask("laboratórios")} className="bg-accent py-4 rounded-xl text-black">
          Laboratórios
        </button>

        <button onClick={() => ask("professores")} className="bg-accent py-4 rounded-xl text-black">
          Professores
        </button>

        <button onClick={() => ask("wifi")} className="bg-accent py-4 rounded-xl text-black">
          WiFi
        </button>

        <button onClick={() => ask("horário")} className="bg-accent py-4 rounded-xl text-black">
          Horários
        </button>

      </div>

    </main>
  );
}