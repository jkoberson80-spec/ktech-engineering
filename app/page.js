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
  );
}
