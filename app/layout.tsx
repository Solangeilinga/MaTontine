import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaTontine — Gérez vos tontines facilement",
  description: "Application mobile de gestion de tontines pour l'Afrique de l'Ouest. Simplicité, confiance et transparence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
