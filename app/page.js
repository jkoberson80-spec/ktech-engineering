 import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      
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

    </div>
  );
}
