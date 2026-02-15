 
import "./globals.css";

export const metadata = {
  title: "Ktech Engineering",
  description: "Services informatiques, vidéosurveillance, cybersécurité, maintenance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
