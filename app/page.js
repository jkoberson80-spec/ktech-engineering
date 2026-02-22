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
    background: "radial-gradient(circle at top left, #1e293b, #0f172a)",
    color: "white",
    padding: "180px 40px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
    }}
  >
    <h1
      style={{
        fontSize: "64px",
        fontWeight: "800",
        marginBottom: "30px",
        letterSpacing: "-1px",
      }}
    >
      L’Excellence Technologique
      <br />
      au Service des Entreprises
    </h1>

    <p
      style={{
        fontSize: "22px",
        color: "#cbd5e1",
        maxWidth: "800px",
        margin: "0 auto 60px auto",
        lineHeight: "1.7",
      }}
    >
      Cybersécurité, infrastructures IT et sécurité électronique
      pour organisations exigeantes en Afrique centrale.
    </p>

    <div style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
      <Link href="/contact">
        <button
          style={{
            padding: "18px 40px",
            background: "linear-gradient(135deg, #1FA2B8, #2563eb)",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(31,162,184,0.3)",
          }}
        >
          Démarrer un projet
        </button>
      </Link>

      <Link href="/services">
        <button
          style={{
            padding: "18px 40px",
            backgroundColor: "transparent",
            border: "2px solid #1FA2B8",
            borderRadius: "12px",
            color: "#1FA2B8",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Voir nos expertises
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
           <div style={{ marginTop: "80px", textAlign: "center" }}>
  <a
    href="https://wa.me/237677612062?text=Bonjour%20KTECH%20Engineering,%20je%20souhaite%20discuter%20d’un%20projet."
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding: "18px 40px",
      backgroundColor: "#25D366",
      color: "white",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "16px",
      textDecoration: "none",
      boxShadow: "0 15px 35px rgba(37,211,102,0.4)",
      transition: "0.3s ease",
    }}
  >
    💬 Discuter sur WhatsApp
  </a>
</div>
      </section>
    </>
  );
}
