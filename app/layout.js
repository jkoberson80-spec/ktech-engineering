 import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* NAVBAR */}
        <nav style={{
          backgroundColor: "#111",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "30px"
        }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>Accueil</Link>
          <Link href="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
          <Link href="/securite" style={{ color: "white", textDecoration: "none" }}>Sécurité</Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </nav>

        <main style={{ padding: "40px", textAlign: "center" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
