 import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0F172A",
        color: "white"
      }}>
        
        <nav style={{
          
  backgroundColor: "#0f172a",
  padding: "18px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  borderBottom: "1px solid rgba(255,255,255,0.05)"
      
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}> 
    <img 
  src="/logo.jpg" 
  alt="KTECH Engineering Logo"
  width="40"
/>

  <span style={{ fontWeight: "bold", fontSize: "20px", color: "#1FA2B8" }}>
    KTECH ENGINEERING
  </span>
</div>


          <div style={{ display: "flex", gap: "25px" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>Accueil</Link>
            <Link href="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
            <Link href="/securite" style={{ color: "white", textDecoration: "none" }}>Sécurité</Link>
            <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
          </div>
        </nav>

        <main style={{ padding: "60px 20px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
