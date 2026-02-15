import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      background: "linear-gradient(to right, #0f172a, #1e293b)",
      color: "white",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      <div style={{ maxWidth: "900px" }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px"
        }}>
          Solutions Technologiques & Sécurité Professionnelle
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#cbd5e1",
          marginBottom: "40px"
        }}>
          KTECH Engineering accompagne les entreprises dans la cybersécurité,
          les réseaux informatiques, la surveillance électronique et
          l’infrastructure technologique.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          <Link href="/services">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1FA2B8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Nos Services
            </button>
          </Link>

          <Link href="/contact">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "transparent",
              color: "#1FA2B8",
              border: "2px solid #1FA2B8",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Demander un devis
            </button>
          </Link>
        </div>
      </div>
    </main>
<section style={{
  padding: "80px 40px",
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

    {/* Carte 1 */}
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

    {/* Carte 2 */}
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

    {/* Carte 3 */}
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

  );
}
