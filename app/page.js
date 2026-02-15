 import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
     
      <main
  style={{
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    padding: "160px 40px 140px 40px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "56px",
        fontWeight: "800",
        lineHeight: "1.2",
        marginBottom: "30px",
        letterSpacing: "-1px",
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
      <section style={{
        padding: "80px 40px 40px 40px",
        backgroundColor: "#f8fafc",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "36px",
          marginBottom: "60px",
          color: "#0f172a"
        }}>
          Nos Domaines d’Expertise
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>

          <div style={{
            backgroundColor: "white",
            padding: "30px",
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <h3 style={{ marginBottom: "15px", color: "#1FA2B8" }}>
              Sécurité Électronique
            </h3>
            <p style={{ color: "#475569" }}>
              Surveillance, contrôle d’accès, systèmes de sécurité avancés pour entreprises.
            </p>
          </div>

          <div style={{
            backgroundColor: "white",
            padding: "30px",
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <h3 style={{ marginBottom: "15px", color: "#1FA2B8" }}>
              Réseaux & Infrastructure IT
            </h3>
            <p style={{ color: "#475569" }}>
              Conception, installation et maintenance des infrastructures informatiques professionnelles.
            </p>
          </div>

          <div style={{
            backgroundColor: "white",
            padding: "30px",
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <h3 style={{ marginBottom: "15px", color: "#1FA2B8" }}>
              Cybersécurité & Conseil
            </h3>
            <p style={{ color: "#475569" }}>
              Audit, protection des données, accompagnement stratégique et formation.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US SECTION */}
      <section style={{
        padding: "60px 40px",
        backgroundColor: "#f8fafc",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "36px",
          marginBottom: "60px",
          color: "#0f172a"
        }}>
          Pourquoi Choisir KTECH Engineering ?
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>

          <div style={{ maxWidth: "300px" }}>
            <h3 style={{ color: "#1FA2B8", marginBottom: "15px" }}>
              Expertise Technique
            </h3>
            <p style={{ color: "#475569" }}>
              Une équipe spécialisée en cybersécurité, réseaux et infrastructures professionnelles.
            </p>
          </div>

          <div style={{ maxWidth: "300px" }}>
            <h3 style={{ color: "#1FA2B8", marginBottom: "15px" }}>
              Solutions Sur Mesure
            </h3>
            <p style={{ color: "#475569" }}>
              Chaque projet est étudié et conçu selon les besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div style={{ maxWidth: "300px" }}>
            <h3 style={{ color: "#1FA2B8", marginBottom: "15px" }}>
              Support & Accompagnement
            </h3>
            <p style={{ color: "#475569" }}>
              Assistance continue, maintenance et formation pour garantir la performance de vos systèmes.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
