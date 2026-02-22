 import Link from "next/link";

function ZoneIntervention() {
  return (
    <section
      style={{
        padding: "120px 40px",
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "700",
          marginBottom: "30px",
          color: "#0f172a",
        }}
      >
        Zone d’Intervention
      </h2>

      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          fontSize: "18px",
          color: "#475569",
          lineHeight: "1.7",
        }}
      >
        KTECH Engineering accompagne les entreprises basées à
        <strong> Douala (siège)</strong>, partout au <strong>Cameroun</strong>
        et dans toute l’<strong>Afrique Centrale</strong>.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          padding: "160px 40px 140px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              lineHeight: "1.2",
              marginBottom: "30px",
            }}
          >
            Solutions Technologiques & Sécurité Professionnelle
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              maxWidth: "800px",
              margin: "0 auto 50px auto",
              lineHeight: "1.7",
            }}
          >
            KTECH Engineering accompagne les entreprises dans la cybersécurité,
            les réseaux informatiques, la surveillance électronique et
            l’infrastructure technologique avec des solutions fiables et sur mesure.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/services">
              <button
                style={{
                  padding: "16px 32px",
                  backgroundColor: "#1FA2B8",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Découvrir nos services
              </button>
            </Link>

            <Link href="/contact">
              <button
                style={{
                  padding: "16px 32px",
                  backgroundColor: "transparent",
                  color: "#1FA2B8",
                  border: "2px solid #1FA2B8",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Demander un devis
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "120px 40px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "60px",
            color: "#0f172a",
          }}
        >
          Nos Domaines d’Expertise
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Sécurité Électronique",
              text: "Surveillance intelligente, contrôle d’accès et systèmes avancés.",
            },
            {
              title: "Réseaux & Infrastructure IT",
              text: "Déploiement et maintenance d’infrastructures sécurisées.",
            },
            {
              title: "Cybersécurité & Conseil",
              text: "Audit, protection des données et accompagnement stratégique.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8fafc",
                padding: "40px 30px",
                width: "320px",
                borderRadius: "16px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ marginBottom: "20px", color: "#1FA2B8" }}>
                {item.title}
              </h3>
              <p style={{ color: "#475569", lineHeight: "1.6" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ZONE INTERVENTION */}
      <ZoneIntervention />

      {/* STATS SECTION */}
      <section
        style={{
          padding: "120px 40px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "60px" }}>
          Nos Chiffres Clés
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "+120", label: "Projets réalisés" },
            { value: "+50", label: "Clients accompagnés" },
            { value: "98%", label: "Taux de satisfaction" },
            { value: "24/7", label: "Support & assistance" },
          ].map((stat, index) => (
            <div key={index}>
              <h3
                style={{
                  fontSize: "48px",
                  color: "#1FA2B8",
                  marginBottom: "10px",
                }}
              >
                {stat.value}
              </h3>
              <p style={{ color: "#cbd5e1" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
