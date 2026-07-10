export default function ForWho() {
  return (
    <section
      id="pour-qui"
      className="py-24 px-6"
      style={{ backgroundColor: "#F7F9F7" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9963A" }}
          >
            Pour qui
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: "#1B6B3A" }}
          >
            Deux rôles, une seule appli
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gérant */}
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ backgroundColor: "#1B6B3A" }}
          >
            {/* Background decoration */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
              style={{ backgroundColor: "#C9963A" }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: "white" }}
            />

            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ backgroundColor: "rgba(201,150,58,0.2)", color: "#C9963A" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="#C9963A"
                  />
                </svg>
                Gérant
              </div>

              <h3 className="text-3xl font-black text-white mb-4 leading-snug">
                Vous organisez
                <br />
                la tontine
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Créez et gérez vos groupes, ajoutez les membres, suivez les
                cotisations et marquez les tours reçus. Tout depuis votre
                téléphone.
              </p>

              <ul className="space-y-3">
                {[
                  "Créer plusieurs groupes de tontine",
                  "Générer un code d'invitation unique",
                  "Suivre les cotisations en temps réel",
                  "Marquer les tours reçus",
                  "Partager le récapitulatif sur WhatsApp",
                  "Gérer les alertes de retard",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(201,150,58,0.25)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#C9963A"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://drive.google.com/file/d/1YMp_XfOttM6lmjWWAHHQwqkYsW_lok0f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9963A", color: "white" }}
              >
                Créer un compte gérant
              </a>
            </div>
          </div>

          {/* Membre */}
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{
              backgroundColor: "white",
              border: "2px solid #E8F2EC",
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5"
              style={{ backgroundColor: "#1B6B3A" }}
            />

            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ backgroundColor: "#E8F2EC", color: "#1B6B3A" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                    stroke="#1B6B3A" strokeWidth="2" strokeLinecap="round"
                  />
                  <circle cx="12" cy="7" r="4" stroke="#1B6B3A" strokeWidth="2"/>
                </svg>
                Membre
              </div>

              <h3
                className="text-3xl font-black mb-4 leading-snug"
                style={{ color: "#1B6B3A" }}
              >
                Vous participez
                <br />
                à la tontine
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#6B7B6C" }}>
                Rejoignez un groupe avec un code d&apos;invitation, suivez vos
                cotisations et consultez quand c&apos;est votre tour de
                recevoir.
              </p>

              <ul className="space-y-3">
                {[
                  "Rejoindre un groupe par code d'invitation",
                  "Voir l'ordre des tours",
                  "Consulter l'estimation de votre date de réception",
                  "Suivre vos cotisations payées / en attente",
                  "Recevoir des rappels avant l'échéance",
                  "Accéder depuis n'importe quel téléphone",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#E8F2EC" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#1B6B3A"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "#4a5a4b" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://drive.google.com/file/d/1YMp_XfOttM6lmjWWAHHQwqkYsW_lok0f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#1B6B3A", color: "white" }}
              >
                Rejoindre une tontine
              </a>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="mt-12 text-center">
          <p className="text-sm mb-4" style={{ color: "#6B7B6C" }}>
            Disponible pour les numéros
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { flag: "🇧🇫", name: "Burkina Faso", code: "+226" },
              { flag: "🇨🇮", name: "Côte d'Ivoire", code: "+225" },
              { flag: "🇲🇱", name: "Mali", code: "+223" },
              { flag: "🇸🇳", name: "Sénégal", code: "+221" },
              { flag: "🇧🇯", name: "Bénin", code: "+229" },
              { flag: "🇲🇦", name: "Maroc", code: "+212" },
            ].map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                style={{ backgroundColor: "white", border: "1.5px solid #E8F2EC" }}
              >
                <span>{country.flag}</span>
                <span style={{ color: "#2C3E2D" }}>{country.name}</span>
                <span style={{ color: "#6B7B6C" }}>{country.code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
