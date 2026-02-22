export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          À propos de KTECH Engineering
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Entreprise technologique basée à Douala, spécialisée dans la conception,
          le déploiement et la sécurisation d’infrastructures numériques
          pour entreprises et institutions en Afrique centrale.
        </p>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Notre mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Accompagner les organisations dans leur transformation technologique
          en leur proposant des solutions fiables, sécurisées et évolutives,
          adaptées aux exigences du monde professionnel moderne.
        </p>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Notre expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Réseau</h3>
              <p className="text-gray-600">
                Conception et déploiement d’architectures réseau performantes,
                sécurisées et adaptées aux environnements professionnels.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Cybersécurité</h3>
              <p className="text-gray-600">
                Protection des systèmes d’information contre les menaces
                internes et externes grâce à des solutions avancées.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Vidéosurveillance Intelligente</h3>
              <p className="text-gray-600">
                Mise en place de systèmes de surveillance IP haute performance
                pour entreprises, industries et institutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Téléphonie IP & Solutions IT</h3>
              <p className="text-gray-600">
                Solutions de communication modernes, centralisées et
                évolutives adaptées aux structures en croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Notre vision
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Devenir un acteur technologique de référence en Afrique centrale,
          reconnu pour son excellence opérationnelle, sa rigueur technique
          et sa capacité à accompagner durablement ses partenaires.
        </p>
      </section>

      {/* PRÉSENCE */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Présence régionale
        </h2>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Basée à Douala, KTECH Engineering intervient au Cameroun
          et dans l’ensemble de l’Afrique centrale pour accompagner
          les entreprises dans la modernisation et la sécurisation
          de leurs infrastructures technologiques.
        </p>
      </section>

    </main>
  );
}
