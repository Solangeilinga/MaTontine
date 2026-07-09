const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Connexion par code PIN",
    description:
      "Après la première inscription par SMS, l'accès se fait par code PIN à 4 chiffres. Pas de SMS à chaque connexion — votre crédit téléphonique est préservé.",
    tag: "Sécurité",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Groupes multiples",
    description:
      "Gérez plusieurs groupes de tontine en parallèle. Chaque groupe a son propre code d'invitation, ses cotisations et son suivi des tours.",
    tag: "Gestion",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Suivi des cotisations",
    description:
      "Marquez les cotisations reçues, en attente ou en retard. Visualisez le récapitulatif du cycle actuel et partagez-le directement sur WhatsApp.",
    tag: "Transparence",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>
    ),
    title: "Rappels automatiques",
    description:
      "Les membres reçoivent des rappels SMS à J-7, J-3 et J-1 avant l'échéance de leur cotisation. Moins de relances manuelles pour le gérant.",
    tag: "Automatisation",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Historique des tours",
    description:
      "Consultez l'ordre des tours, qui a déjà reçu sa mise et qui attend encore. Tout est traçable et visible par le gérant.",
    tag: "Traçabilité",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Données sécurisées",
    description:
      "Le PIN est stocké de manière chiffrée sur nos serveurs. Il reste valide même si vous changez de téléphone ou réinstallez l'application.",
    tag: "Sécurité",
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  Sécurité: { bg: "#E8F2EC", color: "#1B6B3A" },
  Gestion: { bg: "#F7F0E3", color: "#C9963A" },
  Transparence: { bg: "#E8F2EC", color: "#1B6B3A" },
  Automatisation: { bg: "#F7F0E3", color: "#C9963A" },
  Traçabilité: { bg: "#E8F2EC", color: "#1B6B3A" },
};

export default function Features() {
  return (
    <section
      id="fonctionnalites"
      className="py-24 px-6"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9963A" }}
          >
            Fonctionnalités
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight max-w-md"
              style={{ color: "#1B6B3A" }}
            >
              Tout ce qu&apos;il faut pour gérer votre tontine
            </h2>
            <p
              className="text-base max-w-xs"
              style={{ color: "#6B7B6C" }}
            >
              Conçu pour les gérants et les membres. Simple à prendre en main,
              complet dans ses fonctions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const tagStyle = tagColors[feature.tag] || tagColors["Gestion"];
            return (
              <div
                key={feature.title}
                className="p-7 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid #E8F2EC",
                  backgroundColor: "white",
                }}
              >
                {/* Tag */}
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-5"
                  style={{ backgroundColor: tagStyle.bg, color: tagStyle.color }}
                >
                  {feature.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#E8F2EC", color: "#1B6B3A" }}
                >
                  {feature.icon}
                </div>

                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: "#2C3E2D" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7B6C" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
