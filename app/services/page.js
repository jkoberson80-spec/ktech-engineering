 export default function Services() {
  return (
    <main
      style={{
        padding: "140px 40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* TITRE */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "20px",
          color: "#0f172a",
        }}
      >
        Nos Services
      </h1>

      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto 80px auto",
          fontSize: "18px",
          color: "#64748b",
        }}
      >
        Des solutions technologiques complètes pour accompagner les
        entreprises dans leur transformation numérique et leur sécurité.
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
            title: "Sécurité Électronique",
            text: "Surveillance intelligente, contrôle d’accès et systèmes de sécurité avancés pour entreprises et institutions.",
          },
          {
            title: "Réseaux & Infrastructure IT",
            text: "Conception, déploiement et maintenance d’infrastructures performantes et sécurisées.",
          },
          {
            title: "Cybersécurité & Conseil",
            text: "Audit de sécurité, protection des données et accompagnement stratégique.",
          },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "50px 40px",
              width: "340px",
              borderRadius: "22px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.07)",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-15px)";
              e.currentTarget.style.boxShadow =
                "0 30px 70px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 25px 60px rgba(0,0,0,0.07)";
            }}
          >
            <h3
              style={{
                marginBottom: "25px",
                color: "#1FA2B8",
                fontSize: "22px",
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
    </main>
  );
}
