const steps = [
  {
    number: "1",
    title: "Le gérant crée un groupe",
    description:
      "Créez votre groupe de tontine, définissez le montant de cotisation, la fréquence et le nombre de membres. Un code d'invitation unique est généré.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Les membres rejoignent",
    description:
      "Chaque membre reçoit le code d'invitation, rejoint le groupe via l'application et crée son code PIN personnel. Pas de SMS à chaque connexion.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 1v3M10 1v3M14 1v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Les cotisations sont suivies",
    description:
      "Le gérant marque les cotisations reçues à chaque cycle. Les membres voient leur bilan en temps réel et reçoivent des rappels automatiques.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 11l3 3L22 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Chacun reçoit son tour",
    description:
      "Le gérant confirme la remise de la mise à chaque membre selon l'ordre défini. L'historique complet est conservé pour la transparence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="py-24 px-6"
      style={{ backgroundColor: "#F7F9F7" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9963A" }}
          >
            Le processus
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: "#1B6B3A" }}
          >
            Comment ça marche
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "#6B7B6C" }}
          >
            Quatre étapes simples pour gérer votre tontine de bout en bout,
            sans papier et sans confusion.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #1B6B3A 20%, #1B6B3A 80%, transparent)",
              opacity: 0.2,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: "#1B6B3A", color: "white" }}
                >
                  {step.icon}
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: "#C9963A", color: "white" }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  className="font-bold text-lg mb-3 leading-snug"
                  style={{ color: "#2C3E2D" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7B6C" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-3xl p-10 text-center"
          style={{ backgroundColor: "#E8F2EC" }}
        >
          <p
            className="text-2xl font-black mb-2"
            style={{ color: "#1B6B3A" }}
          >
            Prêt à démarrer votre tontine ?
          </p>
          <p className="text-sm mb-6" style={{ color: "#6B7B6C" }}>
            Créez votre premier groupe en moins de 2 minutes.
          </p>
          <a
            href="#telecharger"
            className="inline-block px-8 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#1B6B3A" }}
          >
            Télécharger MaTontine
          </a>
        </div>
      </div>
    </section>
  );
}
