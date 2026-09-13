import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — MaTontine",
  description:
    "Politique de confidentialité de l'application MaTontine : données collectées, usage, conservation et suppression.",
};

const sections = [
  {
    title: "1. Qui sommes-nous",
    body: (
      <p>
        MaTontine est éditée à des fins de gestion de groupes d&apos;épargne
        rotative (tontines) en Afrique de l&apos;Ouest et Centrale. Pour toute
        question relative à vos données, contactez-nous à{" "}
        <a href="mailto:solangeilinga@gmail.com" className="underline" style={{ color: "#1B6B3A" }}>
          solangeilinga@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "2. Données que nous collectons",
    body: (
      <>
        <p>Selon votre usage de l&apos;application (gérant ou membre d&apos;un groupe), nous collectons :</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li><strong>Informations de compte :</strong> nom, numéro de téléphone, photo de profil (optionnelle).</li>
          <li><strong>Données financières de groupe :</strong> montants des cotisations, statuts de paiement, historique des tours de tontine. Ces données concernent l&apos;organisation du groupe, pas vos comptes bancaires ou Mobile Money personnels.</li>
          <li><strong>Données de paiement d&apos;abonnement :</strong> lorsque vous souscrivez à un forfait payant, votre numéro Mobile Money et l&apos;opérateur choisi sont transmis à notre prestataire de paiement (SebPay) pour traiter la transaction. Nous ne stockons jamais vos identifiants Mobile Money.</li>
          <li><strong>Identifiant de notification (token FCM) :</strong> pour vous envoyer des rappels de cotisation et notifications, via Firebase Cloud Messaging (Google).</li>
          <li><strong>Données techniques :</strong> Firebase Analytics peut collecter des identifiants d&apos;appareil et des statistiques d&apos;usage anonymisées pour nous aider à améliorer l&apos;application.</li>
        </ul>
        <p className="mt-3">
          Nous ne collectons <strong>pas</strong> votre localisation, vos contacts, vos photos (hors photo de profil), ni le contenu de vos SMS.
        </p>
      </>
    ),
  },
  {
    title: "3. Pourquoi nous utilisons ces données",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Créer et sécuriser votre compte (authentification par code SMS et code PIN).</li>
        <li>Faire fonctionner les groupes de tontine (suivi des cotisations, des tours, rappels).</li>
        <li>Traiter les paiements d&apos;abonnement via notre prestataire Mobile Money.</li>
        <li>Vous envoyer des notifications pertinentes (rappel de cotisation, changement dans votre groupe).</li>
        <li>Améliorer l&apos;application (statistiques d&apos;usage agrégées et anonymisées).</li>
      </ul>
    ),
  },
  {
    title: "4. Avec qui nous partageons des données",
    body: (
      <>
        <p>Nous ne vendons aucune donnée personnelle. Nous partageons certaines données uniquement avec les prestataires nécessaires au fonctionnement du service :</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li><strong>SebPay</strong> — traitement des paiements d&apos;abonnement par Mobile Money.</li>
          <li><strong>Africa&apos;s Talking</strong> — envoi des codes de vérification par SMS.</li>
          <li><strong>Google Firebase</strong> — notifications push et statistiques d&apos;usage.</li>
          <li><strong>Supabase</strong> — hébergement de notre base de données.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Combien de temps nous conservons vos données",
    body: (
      <p>
        Vos données de compte sont conservées tant que votre compte est actif.
        Les données financières de groupe (cotisations, tours) sont conservées
        même après le départ d&apos;un membre ou la suppression d&apos;un
        compte gérant, <strong>car elles constituent l&apos;historique
        partagé du groupe</strong> et sont nécessaires à l&apos;intégrité des
        enregistrements pour les autres membres. Lorsque vous supprimez votre
        compte, vos informations identifiantes (nom, téléphone, photo, code
        PIN) sont immédiatement et définitivement effacées ou rendues
        anonymes — mais les montants et dates de cotisations associés restent
        visibles pour le groupe, sans pouvoir être reliés à votre identité.
      </p>
    ),
  },
  {
    title: "6. Vos droits et la suppression de compte",
    body: (
      <>
        <p>Vous pouvez à tout moment :</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li><strong>Consulter et modifier</strong> votre nom et votre numéro de téléphone depuis l&apos;écran « Mon profil » de l&apos;application.</li>
          <li><strong>Supprimer votre compte immédiatement</strong> depuis l&apos;application : Profil → Supprimer mon compte (confirmation par code PIN).</li>
          <li>
            <strong>Demander la suppression sans l&apos;application</strong> via{" "}
            <a href="/delete-account" className="underline" style={{ color: "#1B6B3A" }}>
              ce formulaire
            </a>{" "}
            — traitée sous 30 jours maximum.
          </li>
        </ul>
        <p className="mt-3">
          La suppression via l&apos;application est immédiate. La demande via
          le formulaire web est vérifiée manuellement (un simple numéro de
          téléphone ne suffisant pas à prouver une identité) avant traitement,
          ce qui explique le délai.
        </p>
      </>
    ),
  },
  {
    title: "7. Sécurité",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Toutes les communications entre l&apos;application et nos serveurs sont chiffrées (HTTPS).</li>
        <li>Les codes PIN sont stockés sous forme hachée (jamais en clair) — même nous ne pouvons pas les lire.</li>
        <li>Les jetons de connexion sont stockés dans le stockage sécurisé chiffré de votre téléphone (Android Keystore).</li>
        <li>L&apos;accès aux données de chaque groupe est strictement limité à son gérant et à ses membres.</li>
      </ul>
    ),
  },
  {
    title: "8. Âge minimum",
    body: (
      <p>
        MaTontine s&apos;adresse à des personnes majeures capables de gérer
        des engagements financiers. L&apos;application n&apos;est pas
        destinée aux personnes de moins de 18 ans.
      </p>
    ),
  },
  {
    title: "9. Modifications de cette politique",
    body: (
      <p>
        Nous pouvons mettre à jour cette politique pour refléter des
        changements dans l&apos;application ou la réglementation. La date de
        dernière mise à jour est indiquée en haut de cette page. En cas de
        changement important, nous vous en informerons dans
        l&apos;application.
      </p>
    ),
  },
  {
    title: "10. Nous contacter",
    body: (
      <p>
        Pour toute question sur cette politique ou vos données personnelles :{" "}
        <a href="mailto:solangeilinga@gmail.com" className="underline" style={{ color: "#1B6B3A" }}>
          solangeilinga@gmail.com
        </a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F7F9F7" }}>
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9963A" }}
          >
            Légal
          </p>
          <h1
            className="text-4xl lg:text-5xl font-black tracking-tight mb-3"
            style={{ color: "#1B6B3A" }}
          >
            Politique de confidentialité
          </h1>
          <p className="text-sm" style={{ color: "#6B7B6C" }}>
            Dernière mise à jour : 2 août 2026
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-6 mb-12 text-sm leading-relaxed"
            style={{ backgroundColor: "#E8F2EC", color: "#134d2b" }}
          >
            <strong>En bref :</strong> nous collectons uniquement ce qui est
            nécessaire au fonctionnement de l&apos;application (identité,
            téléphone, cotisations), nous ne vendons aucune donnée, et vous
            pouvez demander la suppression de votre compte à tout moment —
            depuis l&apos;application ou via cette page.
          </div>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: "#2C3E2D" }}
                >
                  {s.title}
                </h2>
                <div
                  className="text-[0.95rem] leading-relaxed"
                  style={{ color: "#6B7B6C" }}
                >
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
