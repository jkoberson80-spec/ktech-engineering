 import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: "100px 20px",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "white"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          KTECH ENGINEERING
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto 30px" }}>
          Solutions technologiques et sécurité professionnelle pour entreprises modernes.
        </p>
        <Link href="/contact">
          <button style={{
            padding: "15px 30px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
          }}>
            Demander un devis
          </button>
        </Link>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "80px 20px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Nos Domaines d’Expertise
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <div>
            <h3>🔧 Ingénierie</h3>
            <p>Solutions techniques adaptées à vos besoins.</p>
          </div>

          <div>
            <h3>🔐 Sécurité</h3>
            <p>Protection avancée des infrastructures.</p>
          </div>

          <div>
            <h3>⚡ Innovation</h3>
            <p>Technologies modernes et performantes.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
