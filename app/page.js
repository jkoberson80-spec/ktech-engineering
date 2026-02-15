 import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main style={{
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        color: "white",
        padding: "120px 40px",
        textAlign: "center",
  
      }}>
        <div style={{ maxWidth: "900px" }}>
         <div style={{ 
          maxWidth: "900px",
          margin: "0 auto"
             }}>

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
