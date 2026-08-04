import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccountForm from "@/components/DeleteAccountForm";

export const metadata: Metadata = {
  title: "Supprimer mon compte — MaTontine",
  description:
    "Demandez la suppression de votre compte MaTontine, avec ou sans l'application installée.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F7F9F7" }}>
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9963A" }}
          >
            Compte
          </p>
          <h1
            className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: "#1B6B3A" }}
          >
            Supprimer mon compte
          </h1>
          <p className="text-base max-w-xl" style={{ color: "#6B7B6C" }}>
            Deux façons de procéder, selon que vous avez encore accès à
            l&apos;application ou non. Les deux entraînent la suppression
            définitive de vos informations personnelles — voir notre{" "}
            <a href="/privacy" className="underline" style={{ color: "#1B6B3A" }}>
              politique de confidentialité
            </a>{" "}
            pour le détail de ce qui est conservé (données de groupe,
            anonymisées) et de ce qui est effacé (identité).
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl p-7 bg-white border" style={{ borderColor: "rgba(43,62,45,0.1)" }}>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{ backgroundColor: "#E8F2EC" }}
              >
                🔒
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#2C3E2D" }}>
                Vous avez l&apos;application
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7B6C" }}>
                La suppression est immédiate et ne nécessite aucune attente.
              </p>
              <p className="text-sm font-semibold mt-4" style={{ color: "#2C3E2D" }}>
                Ouvrez l&apos;app → <em>Mon profil</em> →{" "}
                <em>Supprimer mon compte</em>, puis confirmez avec votre code
                PIN.
              </p>
            </div>

            <div className="rounded-2xl p-7 bg-white border" style={{ borderColor: "rgba(43,62,45,0.1)" }}>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{ backgroundColor: "#F7F0E3" }}
              >
                📋
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#2C3E2D" }}>
                Vous n&apos;avez plus l&apos;application
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7B6C" }}>
                Utilisez le formulaire ci-dessous. Un numéro de téléphone seul
                ne suffisant pas à prouver une identité, votre demande est
                vérifiée manuellement — comptez jusqu&apos;à 30 jours.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-white border max-w-xl" style={{ borderColor: "rgba(43,62,45,0.1)" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#2C3E2D" }}>
              Formulaire de demande
            </h2>
            <DeleteAccountForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
