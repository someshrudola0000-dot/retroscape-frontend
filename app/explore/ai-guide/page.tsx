
"use client";

import { useState } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Tell me about this monument.",
  "Who built this monument?",
  "What is its historical importance?",
  "What makes its architecture unique?",
];

export default function AIGuidePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Namaste! Welcome to RetroScape AI Guide. I can help you explore historical monuments, their history, architecture, culture and fascinating stories. What would you like to discover?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    const question = input.trim();

    if (!question) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: question },
    ]);

    setInput("");
  };

  const handleSuggestion = (question: string) => {
    setMessages((previous) => [
      ...previous,
      { role: "user", content: question },
    ]);
  };

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d0e13]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-[#d6b36a]"
          >
            RetroScape
          </Link>

          <Link
            href="/explore"
            className="text-sm text-gray-400 transition hover:text-[#d6b36a]"
          >
            ← Back to Explore
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        {/* Introduction */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6b36a]/30 bg-[#d6b36a]/10 text-3xl">
            ✨
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b36a]">
            Your Historical Companion
          </p>

          <h1 className="text-3xl font-bold sm:text-5xl">
            Meet Your <span className="text-[#d6b36a]">AI Guide</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover the fascinating history, architecture, culture and stories
            of historical monuments through an interactive AI-powered guide.
          </p>
        </div>

        {/* Chat Container */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#11131a] shadow-2xl shadow-black/30">
          {/* Chat Header */}
          <div className="flex items-center gap-4 border-b border-white/10 px-5 py-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d6b36a]/15 text-2xl">
              ✨
            </div>

            <div className="flex-1">
              <h2 className="font-semibold text-white">
                RetroScape AI Guide
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Historical Monument Assistant
              </p>
            </div>

            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
              Demo UI
            </span>
          </div>

          {/* Messages */}
          <div className="flex min-h-[350px] flex-col gap-5 p-5 sm:min-h-[420px] sm:p-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b36a]/15 text-lg">
                    ✨
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-[#b89552] text-black"
                      : "rounded-bl-sm border border-white/10 bg-[#1a1d26] text-gray-200"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                    You
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="border-t border-white/10 px-5 py-5 sm:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Suggested Questions
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestion(question)}
                  className="rounded-full border border-[#d6b36a]/20 bg-[#d6b36a]/5 px-4 py-2 text-xs text-[#d6b36a] transition hover:bg-[#d6b36a]/15"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSend();
            }}
            className="flex gap-3 border-t border-white/10 bg-[#0d0e13] p-4 sm:p-6"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask anything about historical monuments..."
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#171922] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#d6b36a]/60"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              className="rounded-xl bg-[#b89552] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send ↑
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="mt-5 text-center text-xs leading-6 text-gray-500">
          AI responses will be enabled after backend integration.
          <br />
          Historical information should be verified using reliable sources.
        </p>
      </section>
    </main>
  );
}
