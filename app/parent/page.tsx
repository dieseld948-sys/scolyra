export default function ParentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600">SCOLYRA</p>
            <h1 className="mt-1 text-3xl font-black">Espace Parent</h1>
            <p className="mt-2 text-slate-500">
              Accompagnez votre enfant vers la réussite scolaire.
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold shadow-sm hover:bg-slate-100"
          >
            ← Accueil
          </a>
        </header>

        <section className="mt-10 rounded-3xl bg-indigo-600 p-8 text-white shadow-lg">
          <p className="text-sm font-semibold opacity-90">Bienvenue sur SCOLYRA</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-black">
            Donnez à votre enfant les outils pour mieux apprendre.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
            Retrouvez les ressources, révisions et outils nécessaires pour
            accompagner efficacement sa progression.
          </p>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">👨‍🎓</div>
            <h3 className="mt-4 text-lg font-bold">Mon enfant</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Consultez les informations et les objectifs scolaires de votre
              enfant.
            </p>
            <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
              Voir le profil
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📚</div>
            <h3 className="mt-4 text-lg font-bold">Ressources</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Accédez aux fiches de révision et aux ressources pédagogiques.
            </p>
            <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
              Explorer
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📊</div>
            <h3 className="mt-4 text-lg font-bold">Suivi des progrès</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Suivez progressivement les résultats et les efforts de votre
              enfant.
            </p>
            <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
              Consulter
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🎯</div>
            <h3 className="mt-4 text-lg font-bold">Objectifs</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Définissez des objectifs de travail adaptés au niveau scolaire.
            </p>
            <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
              Définir
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📝</div>
            <h3 className="mt-4 text-lg font-bold">Révisions</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Organisez les séances de révision et les matières prioritaires.
            </p>
            <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
              Organiser
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">💡</div>
            <h3 className="mt-4 text-lg font-bold">Conseils aux parents</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Découvrez des conseils pour mieux accompagner votre enfant.
            </p>
            <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
              Découvrir
            </button>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
          <h2 className="font-bold">Prochaine étape</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Nous allons ensuite connecter cet espace à un véritable tableau de
            bord avec les informations de l’élève, les matières et les progrès.
          </p>
        </section>
      </div>
    </main>
  );
}