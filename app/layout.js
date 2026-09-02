import "./globals.css";

export const metadata = {
  title: {
    default: "Couverture Vasseur | Couvreur à Angers",
    template: "%s | Couverture Vasseur",
  },

  description:
    "Couverture Vasseur, artisan couvreur à Angers et dans le Maine-et-Loire. Réfection, réparation, couverture ardoise, zinguerie et entretien de toiture.",

  keywords: [
    "couvreur Angers",
    "couverture Angers",
    "artisan couvreur Angers",
    "toiture Angers",
    "ardoise Angers",
    "zinguerie Angers",
    "réparation toiture Angers",
    "couvreur Maine-et-Loire",
  ],

  authors: [
    {
      name: "Couverture Vasseur",
    },
  ],

  creator: "Couverture Vasseur",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Couverture Vasseur | Couvreur à Angers",
    description:
      "Artisan couvreur à Angers spécialisé en couverture ardoise, réfection, réparation, zinguerie et entretien de toiture.",
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
  },

  twitter: {
    card: "summary_large_image",
    title: "Couverture Vasseur | Couvreur à Angers",
    description:
      "Artisan couvreur à Angers spécialisé en couverture ardoise, réparation, zinguerie et entretien de toiture.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}