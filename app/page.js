 import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 48px)",
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
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s"
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
          gap: "30px",
          flexWrap: "wrap"
        }}>

          {[
            {
              title: "🔐 Sécurité Électronique",
              text: "Vidéosurveillance, contrôle d’accès, alarmes intelligentes."
            },
            {
              title: "🌐 Réseaux & Infrastructure",
              text: "Installation, configuration et maintenance réseaux professionnels."
            },
            {
              title: "🛡️ Cybersécurité",
              text: "Audit, protection des systèmes et sécurisation des données."
            }
          ].map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#0F172A",
                padding: "30px",
                width: "300px",
                borderRadius: "10px",
                transition: "0.3s",
                boxShadow: "0 0 0 rgba(0,0,0,0)"
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
