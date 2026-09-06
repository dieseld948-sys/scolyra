"use client";

import { useState } from "react";

export default function CalculLitteralPage() {
  const [termine, setTermine] = useState(false);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <a href="/eleve/matieres/mathematiques" className="text-indigo-600">← Mathématiques</a>

        <div className="bg-white rounded-3xl p-8 mt-6 shadow-sm">
          <p className="text-indigo-600 font-semibold">MATHÉMATIQUES • CHAPITRE 1</p>
          <h1 className="text-4xl font-bold mt-2">Calcul littéral ✏️</h1>

          <p className="text-slate-600 text-lg mt-4">
            Apprends à réduire et développer des expressions avec des lettres.
          </p>

          <div className="mt-8 bg-slate-50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold">📖 À retenir</h2>
            <p className="mt-3 leading-7">
              Le calcul littéral permet de représenter des nombres inconnus avec des lettres.
              Pour réduire une expression, on regroupe les termes semblables.
            </p>
          </div>

          <div className="mt-6 bg-indigo-50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold">💡 Exemple</h2>
            <p className="mt-3 text-lg">3x + 2x = 5x</p>
            <p className="mt-2 text-lg">2(x + 3) = 2x + 6</p>
          </div>

          <div className="mt-6 bg-white border rounded-2xl p-6">
            <h2 className="text-2xl font-bold">🧠 Mini-exercice</h2>
            <p className="mt-3 font-semibold">Réduis : 4x + 3x - 2</p>
            <p className="mt-3">Réponse : <strong>7x - 2</strong></p>
          </div>

          <button onClick={() => setTermine(!termine)} className="mt-8 bg-indigo-600 text-white rounded-xl px-6 py-3 font-semibold">
            {termine ? "✓ Chapitre terminé" : "✓ Marquer comme terminé"}
          </button>
        </div>
      </div>
    </main>
  );
}
