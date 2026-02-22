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

      {/* CTA PREMIUM */}
      <div style={{ marginTop: "120px" }}>
        <a
          href="/contact"
          style={{
            padding: "18px 40px",
            borderRadius: "50px",
            background: "linear-gradient(90deg, #1FA2B8, #2563eb)",
            color: "white",
            fontWeight: "600",
            fontSize: "16px",
            textDecoration: "none",
            boxShadow: "0 15px 40px rgba(37,99,235,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Discutons de votre projet
        </a>
      </div>
    </main>
  );
}

