export default function Contact() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contact</h1>
      {/* Email */}
<p style={{ marginBottom: "15px" }}>
  <a
    href="mailto:contact@ktech-engineering.com"
    style={{
      color: "#1FA2B8",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "16px",
    }}
  >
    📧 contact@ktech-engineering.com
  </a>
</p>

{/* Téléphone */}
<p style={{ marginBottom: "15px" }}>
  <a
    href="tel:+237677612062"
    style={{
      color: "#1FA2B8",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "16px",
    }}
  >
    📞 +237 677 612 062
  </a>
</p>
    </div>
  );
}

