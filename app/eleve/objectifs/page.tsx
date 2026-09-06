export default function ObjectifsPage() {
  const objectifs = [
    { titre: "Réviser 3 chapitres", periode: "Cette semaine", actuel: 1, total: 3 },
    { titre: "Faire 20 exercices", periode: "Cette semaine", actuel: 8, total: 20 },
    { titre: "Travailler 30 min par jour", periode: "Objectif quotidien", actuel: 20, total: 30 },
    { titre: "Atteindre 80 % de progression", periode: "Objectif général", actuel: 16, total: 80 }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <a href="/eleve" className="text-indigo-600 font-semibold">
          ← Retour à mon espace
        </a>

        <div className="mt-8">
          <h1 className="text-4xl font-bold">🎯 Mes objectifs</h1>
          <p className="mt-2 text-slate-600">
            Fixe-toi des objectifs simples et avance à ton rythme.
          </p>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-2">
          {objectifs.map((objectif) => {
            const pourcentage = Math.min(
              Math.round((objectif.actuel / objectif.total) * 100),
              100
            );

            return (
              <div key={objectif.titre} className="bg-white rounded-2xl p-6 shadow-sm border">
                <h2 className="text-xl font-bold">{objectif.titre}</h2>
                <p className="text-sm text-slate-500 mt-1">{objectif.periode}</p>

                <div className="mt-5 flex justify-between text-sm font-semibold">
                  <span>{objectif.actuel} / {objectif.total}</span>
                  <span>{pourcentage}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${pourcentage}%` }}
                  />
                </div>

                <button className="mt-5 w-full rounded-xl bg-indigo-600 text-white py-3 font-semibold hover:bg-indigo-700">
                  Continuer
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-indigo-50 rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold">💪 Chaque effort compte !</p>
          <p className="text-slate-600 mt-2">
            Avance un peu chaque jour pour atteindre tes objectifs.
          </p>
        </div>
      </div>
    </main>
  );
}
