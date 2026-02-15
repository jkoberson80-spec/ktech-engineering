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
      
<section
  style={{
    padding: "120px 40px",
    backgroundColor: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        fontWeight: "700",
        marginBottom: "20px",
        color: "#0f172a",
      }}
    >
      Nos Domaines d’Expertise
    </h2>

    <p
      style={{
        color: "#64748b",
        maxWidth: "700px",
        margin: "0 auto 80px auto",
        fontSize: "18px",
      }}
    >
      Des solutions technologiques complètes adaptées aux exigences des
      entreprises modernes.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      {/* CARD 1 */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "40px 30px",
          width: "320px",
          borderRadius: "16px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
          transition: "0.3s",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#1FA2B8" }}>
          Sécurité Électronique
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.6" }}>
          Surveillance intelligente, contrôle d’accès et systèmes de sécurité
          avancés pour entreprises et institutions.
        </p>
      </div>

      {/* CARD 2 */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "40px 30px",
          width: "320px",
          borderRadius: "16px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
          transition: "0.3s",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#1FA2B8" }}>
          Réseaux & Infrastructure IT
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.6" }}>
          Conception, déploiement et maintenance d’infrastructures
          informatiques performantes et sécurisées.
        </p>
      </div>

      {/* CARD 3 */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "40px 30px",
          width: "320px",
          borderRadius: "16px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
          transition: "0.3s",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#1FA2B8" }}>
          Cybersécurité & Conseil
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.6" }}>
          Audit, protection des données, accompagnement stratégique et
          formation pour garantir la résilience numérique.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* WHY US SECTION */}
       {/* WHY US SECTION */}
<section
  style={{
    padding: "120px 40px",
    backgroundColor: "#f1f5f9",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        fontWeight: "700",
        marginBottom: "20px",
        color: "#0f172a",
      }}
    >
      Pourquoi Choisir KTECH Engineering ?
    </h2>

    <p
      style={{
        color: "#64748b",
        maxWidth: "750px",
        margin: "0 auto 80px auto",
        fontSize: "18px",
      }}
    >
      Nous combinons expertise technique, innovation et accompagnement
      stratégique pour garantir des solutions fiables et durables.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        flexWrap: "wrap",
        textAlign: "left",
      }}
    >
      {/* ITEM 1 */}
      <div style={{ maxWidth: "300px" }}>
        <h3
          style={{
            color: "#1FA2B8",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Expertise Technique
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.7" }}>
          Une équipe hautement qualifiée en cybersécurité, réseaux et
          infrastructures critiques.
        </p>
      </div>

      {/* ITEM 2 */}
      <div style={{ maxWidth: "300px" }}>
        <h3
          style={{
            color: "#1FA2B8",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Solutions Sur Mesure
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.7" }}>
          Chaque projet est conçu selon les besoins spécifiques et les enjeux
          stratégiques de votre organisation.
        </p>
      </div>

      {/* ITEM 3 */}
      <div style={{ maxWidth: "300px" }}>
        <h3
          style={{
            color: "#1FA2B8",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Support & Accompagnement
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.7" }}>
          Assistance continue, maintenance proactive et formation pour garantir
          la performance durable de vos systèmes.
        </p>
      </div>
    </div>
  </div>
</section>
{/* STATS SECTION */}
<section
  style={{
    padding: "120px 40px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        fontWeight: "700",
        marginBottom: "80px",
      }}
    >
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
      {/* STAT 1 */}
      <div>
        <h3 style={{ fontSize: "48px", color: "#1FA2B8", marginBottom: "10px" }}>
          +120
        </h3>
        <p style={{ color: "#cbd5e1" }}>Projets réalisés</p>
      </div>

      {/* STAT 2 */}
      <div>
        <h3 style={{ fontSize: "48px", color: "#1FA2B8", marginBottom: "10px" }}>
          +50
        </h3>
        <p style={{ color: "#cbd5e1" }}>Clients accompagnés</p>
      </div>

      {/* STAT 3 */}
      <div>
        <h3 style={{ fontSize: "48px", color: "#1FA2B8", marginBottom: "10px" }}>
          98%
        </h3>
        <p style={{ color: "#cbd5e1" }}>Taux de satisfaction</p>
      </div>

      {/* STAT 4 */}
      <div>
        <h3 style={{ fontSize: "48px", color: "#1FA2B8", marginBottom: "10px" }}>
          24/7
        </h3>
        <p style={{ color: "#cbd5e1" }}>Support & assistance</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
