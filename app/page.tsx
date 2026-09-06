
"use client";

import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState<"eleve" | "parent" | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight">SCOLYRA</h1>
            <p className="text-sm text-slate-500">
              Apprendre. Comprendre. S’organiser. Progresser.
            </p>
          </div>

          <div className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm sm:block">
            🎓 Éducation
          </div>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <span className="mb-5 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            La réussite scolaire commence ici
          </span>

          <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Une méthode plus simple pour{" "}
            <span className="text-indigo-600">mieux apprendre.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SCOLYRA accompagne les élèves et les parents avec des ressources
            pédagogiques claires, pratiques et accessibles.
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <button
              onClick={() => window.location.href="/eleve"}
              className="rounded-2xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-indigo-700"
            >
              👨‍🎓 Je suis élève
            </button>

            <button
              onClick={() => window.location.href="/parent"}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold shadow-sm transition hover:bg-slate-100"
            >
              👨‍👩‍👧 Je suis parent
            </button>
          </div>

          {role && (
            <div className="mt-8 rounded-2xl bg-white p-6 text-center shadow-md">
              <p className="font-bold">
                {role === "eleve"
                  ? "Bienvenue, futur champion ! 🚀"
                  : "Bienvenue sur SCOLYRA ! ❤️"}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Ton espace personnalisé arrive bientôt.
              </p>
            </div>
          )}
        </section>

        <section className="grid gap-4 pb-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📚</div>
            <h3 className="mt-3 font-bold">Réviser efficacement</h3>
            <p className="mt-2 text-sm text-slate-500">
              Des fiches synthétiques pour aller à l’essentiel.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🧠</div>
            <h3 className="mt-3 font-bold">Mieux comprendre</h3>
            <p className="mt-2 text-sm text-slate-500">
              Des explications simples adaptées au niveau de chaque élève.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🎯</div>
            <h3 className="mt-3 font-bold">Progresser</h3>
            <p className="mt-2 text-sm text-slate-500">
              Un accompagnement orienté vers les objectifs et la réussite.
            </p>
          </div>
        </section>

        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © 2026 SCOLYRA — Apprendre autrement.
        </footer>
      </section>
    </main>
  );
}