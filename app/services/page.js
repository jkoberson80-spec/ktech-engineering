 "use client";

export default function Services() {
  return (
    <main
      style={{
        padding: "140px 40px",
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* TITRE */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "800",
          marginBottom: "20px",
          color: "#0f172a",
        }}
      >
        Services Premium
      </h1>

      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto 100px auto",
          fontSize: "18px",
          color: "#64748b",
        }}
      >
        Des solutions technologiques haut de gamme pour garantir performance,
        sécurité et innovation.
      </p>

      {/* CARTES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            icon: "🔐",
            title: "Sécurité Électronique",
            text: "Surveillance intelligente, contrôle d’accès et systèmes avancés pour entreprises.",
          },
          {
            icon: "🌐",
            title: "Réseaux & Infrastructure IT",
            text: "Déploiement d’infrastructures performantes, sécurisées et évolutives.",
          },
          {
            icon: "🛡️",
            title: "Cybersécurité & Conseil",
            text: "Audit, protection des données et accompagnement stratégique.",
          },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
              padding: "60px 45px",
              width: "360px",
              borderRadius: "28px",
              boxShadow: "0 30px 70px rgba(15,23,42,0.08)",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-18px)";
              e.currentTarget.style.boxShadow =
                "0 35px 80px rgba(15,23,42,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 30px 70px rgba(15,23,42,0.08)";
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "25px",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                marginBottom: "20px",
                color: "#0f172a",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {service.text}
            </p>
          </div>
        ))}
      </div>
{/* POURQUOI NOUS CHOISIR */}
<div style={{ marginTop: "140px" }}>
  <h2
    style={{
      fontSize: "40px",
      fontWeight: "800",
      marginBottom: "20px",
      color: "#0f172a",
    }}
  >
    Pourquoi nous choisir
  </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto 80px auto",
      fontSize: "18px",
      color: "#64748b",
    }}
  >
    Nous combinons expertise technique, innovation et excellence
    opérationnelle pour offrir des solutions fiables et durables.
  </p>

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
        icon: "⚡",
        title: "Intervention Rapide",
        text: "Réactivité maximale pour assurer continuité et sécurité.",
      },
      {
        icon: "🎓",
        title: "Expertise Certifiée",
        text: "Équipe qualifiée avec forte expérience terrain.",
      },
      {
        icon: "🔒",
        title: "Solutions Sécurisées",
        text: "Approche centrée sur la protection des données.",
      },
      {
        icon: "🤝",
        title: "Accompagnement Sur Mesure",
        text: "Stratégie personnalisée adaptée à votre activité.",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          width: "260px",
          padding: "40px 25px",
          borderRadius: "22px",
          background: "white",
          boxShadow: "0 20px 50px rgba(15,23,42,0.07)",
          transition: "all 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-12px)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(15,23,42,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow =
            "0 20px 50px rgba(15,23,42,0.07)";
        }}
      >
        <div style={{ fontSize: "32px", marginBottom: "20px" }}>
          {item.icon}
        </div>

        <h4
          style={{
            fontSize: "18px",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#0f172a",
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            fontSize: "14px",
            color: "#64748b",
            lineHeight: "1.7",
          }}
        >
          {item.text}
        </p>
      </div>
    ))}
  </div>
</div>
{/* CHIFFRES CLÉS */}
<div
  style={{
    marginTop: "140px",
    padding: "100px 40px",
    background: "linear-gradient(90deg, #0f172a, #1e293b)",
    borderRadius: "30px",
    color: "white",
  }}
>
  <h2
    style={{
      fontSize: "38px",
      fontWeight: "800",
      marginBottom: "70px",
    }}
  >
    Nos Chiffres Clés
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "70px",
      flexWrap: "wrap",
    }}
  >
    {[
      { number: "150+", label: "Projets réalisés" },
      { number: "98%", label: "Clients satisfaits" },
      { number: "10+", label: "Années d'expérience" },
      { number: "24/7", label: "Support & assistance" },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          textAlign: "center",
          minWidth: "180px",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "15px",
            background: "linear-gradient(90deg, #1FA2B8, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {item.number}
        </div>

        <div
          style={{
            fontSize: "16px",
            color: "#cbd5e1",
          }}
        >
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>
      {/* CTA PREMIUM */}
      
 
<div style={{ marginTop: "120px" }}>
  <h3
    style={{
      fontSize: "26px",
      marginBottom: "30px",
      color: "#0f172a",
    }}
  >
    Discutons de votre projet dès aujourd’hui
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    {/* EMAIL */}
    <a
      href="mailto:contact@ktech-engineering.com"
      style={{
        padding: "18px 40px",
        borderRadius: "50px",
        background: "linear-gradient(90deg, #1FA2B8, #2563eb)",
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        textDecoration: "none",
        boxShadow: "0 15px 40px rgba(37,99,235,0.3)",
      }}
    >
      📧 Nous écrire par email
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/237677612062"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "18px 40px",
        borderRadius: "50px",
        backgroundColor: "#25D366",
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        textDecoration: "none",
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      }}
    >
      💬 Contact WhatsApp
    </a>
  </div>
</div>
    </main>
  );
}






