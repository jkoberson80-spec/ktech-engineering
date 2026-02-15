 import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Ktech Engineering</h1>
      <p>Bienvenue sur le site officiel.</p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/services">
          <button style={{ margin: "10px" }}>Services</button>
        </Link>

        <Link href="/securite">
          <button style={{ margin: "10px" }}>Sécurité</button>
        </Link>

        <Link href="/contact">
          <button style={{ margin: "10px" }}>Contact</button>
        </Link>
      </div>
    </div>
  );
}
