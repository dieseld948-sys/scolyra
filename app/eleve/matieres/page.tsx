export default function MatieresPage() {
  const matieres = [
    { icon: "📐", nom: "Mathématiques", description: "Algèbre, géométrie, fonctions et probabilités" },
    { icon: "⚛️", nom: "Sciences physiques", description: "Physique et chimie pour mieux comprendre le monde" },
    { icon: "🌱", nom: "SVT", description: "Sciences de la vie et de la Terre" },
    { icon: "🇫🇷", nom: "Français", description: "Lecture, expression, grammaire et littérature" },
    { icon: "🇬🇧", nom: "Anglais", description: "Compréhension, vocabulaire et expression" },
    { icon: "🌍", nom: "Histoire-Géographie", description: "Comprendre les sociétés, les territoires et le monde" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-indigo-600">SCOLYRA</a>
          <a href="/eleve" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
            ← Retour à mon espace
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-indigo-600 font-semibold mb-2">ESPACE ÉLÈVE</p>
          <h1 className="text-4xl font-bold mb-3">Mes matières 📚</h1>
          <p className="text-slate-600 text-lg">
            Choisis une matière pour commencer à apprendre, réviser et progresser.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {matieres.map((matiere) => (
            <div
              key={matiere.nom}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{matiere.icon}</div>
              <h2 className="text-xl font-bold mb-2">{matiere.nom}</h2>
              <p className="text-slate-600 text-sm leading-6 mb-6">{matiere.description}</p>
              <a href={matiere.nom === "Mathématiques" ? "/eleve/matieres/mathematiques" : "#"} className="block w-full rounded-xl bg-indigo-600 text-white py-3 font-semibold text-center hover:bg-indigo-700 transition">
                Accéder aux cours
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
