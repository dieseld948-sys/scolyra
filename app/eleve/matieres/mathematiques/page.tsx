export default function MathematiquesPage() {
  const chapitres = [
    "Calcul littéral",
    "Équations et inéquations",
    "Fonctions",
    "Géométrie",
    "Théorème de Thalès",
    "Théorème de Pythagore",
    "Probabilités",
    "Statistiques"
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-indigo-600">SCOLYRA</a>
          <a href="/eleve/matieres" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
            ← Mes matières
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-indigo-600 text-white rounded-3xl p-8 mb-10">
          <div className="text-5xl mb-4">📐</div>
          <p className="font-semibold opacity-90 mb-2">ESPACE ÉLÈVE</p>
          <h1 className="text-4xl font-bold mb-3">Mathématiques</h1>
          <p className="text-indigo-100 text-lg">
            Révise les notions essentielles, entraîne-toi et progresse à ton rythme.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Mes chapitres</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chapitres.map((chapitre, index) => (
            <div
              key={chapitre}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
            >
              <div className="text-sm font-semibold text-indigo-600 mb-3">
                CHAPITRE {index + 1}
              </div>
              <h3 className="font-bold text-lg mb-5">{chapitre}</h3>
              <button className="w-full rounded-xl bg-indigo-600 text-white py-2.5 font-semibold hover:bg-indigo-700 transition">
                Commencer
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
