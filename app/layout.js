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

        <main>
  {children}
</main>

          {children}
<footer style={{
  backgroundColor: "#0f172a",
  color: "#cbd5e1",
  padding: "60px 40px",
  marginTop: "80px"
}}>
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px"
  }}>

    {/* Colonne 1 */}
    <div style={{ maxWidth: "300px" }}>
      <h3 style={{ color: "#1FA2B8", marginBottom: "15px" }}>
        KTECH Engineering
      </h3>
      <p>
        Solutions professionnelles en cybersécurité, réseaux,
        surveillance électronique et infrastructure IT.
      </p>
    </div>

    {/* Colonne 2 */}
    <div>
      <h4 style={{ color: "white", marginBottom: "15px" }}>
        Domaines
      </h4>
      <p>Sécurité électronique</p>
      <p>Réseaux informatiques</p>
      <p>Cybersécurité</p>
      <p>Infrastructure IT</p>
    </div>

    {/* Colonne 3 */}
    <div>
      <h4 style={{ color: "white", marginBottom: "15px" }}>
        Contact
      </h4>
      <p>Email : contact@ktech-engineering.com</p>
      <p>Téléphone : +XXX XXX XXX</p>
      <p>Support & Conseil professionnel</p>
    </div>

  </div>

  <div style={{
    marginTop: "40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "14px"
  }}>
    © {new Date().getFullYear()} KTECH Engineering — Tous droits réservés.
  </div>
</footer>

        </main>

      </body>
    </html>
  );
}
