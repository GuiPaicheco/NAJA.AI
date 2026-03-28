"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { getBotResponse } from "./chatBrain";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Olá! Sou o NAJA.AI." },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function speak(text: string) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 600));

    const botText = getBotResponse(userText);

    setIsTyping(false);

    setMessages((prev) => [...prev, { role: "bot", text: "" }]);

    let current = "";

    for (let i = 0; i < botText.length; i++) {
      current += botText[i];

      await new Promise((r) => setTimeout(r, 6));

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "bot",
          text: current,
        };
        return updated;
      });
    }

    speak(botText);
  }

  return (
    <main className="min-h-screen flex flex-col">

      <Navbar />

      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 mt-24">

        <div className="flex-1 space-y-4 overflow-y-auto pb-4">

          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-2xl max-w-[85%] whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-accent text-black ml-auto"
                    : "glass"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <div className="glass p-4 rounded-2xl max-w-[80%] opacity-70">
              digitando...
            </div>
          )}

          <div ref={bottomRef} />

        </div>

        <div className="flex gap-2 pb-6">

          <input
            className="flex-1 p-4 rounded-xl bg-white/10 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua pergunta..."
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button
            onClick={sendMessage}
            className="bg-accent text-black px-6 rounded-xl font-semibold hover:scale-105 transition"
          >
            Enviar
          </button>

        </div>

      </div>

    </main>
  );
}