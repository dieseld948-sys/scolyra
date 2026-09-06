export default function ProgressionPage() {
  const matieres = [
    { nom: "Mathématiques", progression: 25 },
    { nom: "Sciences physiques", progression: 10 },
    { nom: "SVT", progression: 15 },
    { nom: "Français", progression: 20 },
    { nom: "Anglais", progression: 10 },
    { nom: "Histoire-Géographie", progression: 15 }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-indigo-600">SCOLYRA</a>
          <a href="/eleve" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
            ← Espace Élève
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-indigo-600 font-semibold mb-2">ESPACE ÉLÈVE</p>
          <h1 className="text-4xl font-bold mb-3">Ma progression 📊</h1>
          <p className="text-slate-600 text-lg">
            Suis tes progrès et avance régulièrement vers tes objectifs.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
          <div className="flex items-end justify-between mb-3">
            <div>
              <h2 className="text-2xl font-bold">Progression générale</h2>
              <p className="text-slate-500 mt-1">Continue tes efforts !</p>
            </div>
            <span className="text-3xl font-bold text-indigo-600">16%</span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "16%" }}></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Progression par matière</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {matieres.map((matiere) => (
            <div
              key={matiere.nom}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">{matiere.nom}</h3>
                <span className="font-semibold text-indigo-600">{matiere.progression}%</span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full"
                  style={{ width: `${matiere.progression}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-indigo-50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-3">🎯 Ton prochain objectif</h2>
          <p className="text-slate-700">
            Termine ton prochain chapitre de Mathématiques et continue ta progression.
          </p>
        </div>
      </section>
    </main>
  );
}
