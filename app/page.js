  import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: "120px 20px"
      }}>
        <h1 style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "#1FA2B8"
        }}>
          Solutions de Sécurité & Infrastructure IT
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.6"
        }}>
          KTECH Engineering accompagne les entreprises dans la sécurité électronique,
          la cybersécurité, les réseaux informatiques et l’infrastructure technologique.
        </p>

        <Link href="/contact">
          <button style={{
            padding: "15px 35px",
            fontSize: "16px",
            backgroundColor: "#1FA2B8",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Demander un audit
          </button>
        </Link>
      </section>


      {/* SECTION SERVICES */}
      <section style={{
        padding: "80px 20px",
        backgroundColor: "#111827"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "32px",
          color: "#1FA2B8"
        }}>
          Nos Expertises
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>

          <div style={{
            backgroundColor: "#0F172A",
            padding: "30px",
            width: "280px",
            borderRadius: "8px"
          }}>
            <h3>🔐 Sécurité Électronique</h3>
            <p>Vidéosurveillance, contrôle d’accès, alarmes intelligentes.</p>
          </div>

          <div style={{
            backgroundColor: "#0F172A",
            padding: "30px",
            width: "280px",
            borderRadius: "8px"
          }}>
            <h3>🌐 Réseaux & Infrastructure</h3>
            <p>Installation, configuration et maintenance réseaux professionnels.</p>
          </div>

          <div style={{
            backgroundColor: "#0F172A",
            padding: "30px",
            width: "280px",
            borderRadius: "8px"
          }}>
            <h3>🛡️ Cybersécurité</h3>
            <p>Audit, protection des systèmes et sécurisation des données.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
