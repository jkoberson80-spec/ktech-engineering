export default function About() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          padding: "120px 20px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "800",
              marginBottom: "25px",
              letterSpacing: "-1px",
            }}
          >
            À propos de KTECH Engineering
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            Entreprise technologique basée à Douala, spécialisée dans la
            conception, le déploiement et la sécurisation d’infrastructures
            numériques pour entreprises et institutions en Afrique centrale.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Notre Mission
            </h2>
            <p style={{ lineHeight: "1.8", color: "#475569" }}>
              Accompagner les organisations dans leur transformation
              technologique en proposant des solutions fiables,
              sécurisées et évolutives adaptées aux exigences
              du monde professionnel moderne.
            </p>
          </div>

          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Notre Vision
            </h2>
            <p style={{ lineHeight: "1.8", color: "#475569" }}>
              Devenir un acteur technologique de référence en Afrique
              centrale, reconnu pour son excellence opérationnelle,
              sa rigueur technique et son accompagnement durable.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "70px",
            }}
          >
            Notre Expertise
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                title: "Infrastructure Réseau",
                text: "Conception et déploiement d’architectures réseau performantes et sécurisées adaptées aux environnements professionnels.",
              },
              {
                title: "Cybersécurité",
                text: "Protection des systèmes d’information contre les menaces internes et externes grâce à des solutions avancées.",
              },
              {
                title: "Vidéosurveillance Intelligente",
                text: "Systèmes de surveillance IP haute performance pour entreprises et industries.",
              },
              {
                title: "Téléphonie IP & Solutions IT",
                text: "Solutions de communication modernes et évolutives adaptées aux structures en croissance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.05)",
                  transition: "0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    color: "#1FA2B8",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.7" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(90deg, #1FA2B8, #2563eb)",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            marginBottom: "30px",
          }}
        >
          Discutons de votre projet technologique
        </h2>

        <a
          href="/contact"
          style={{
            padding: "16px 40px",
            backgroundColor: "white",
            color: "#2563eb",
            borderRadius: "50px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Nous contacter
        </a>
      </section>
    </main>
  );
}
