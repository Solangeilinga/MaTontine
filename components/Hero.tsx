export default function Hero() {
  return (
    <section
      className="pt-32 pb-24 px-6 min-h-screen flex items-center"
      style={{ backgroundColor: "#1B6B3A" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                backgroundColor: "rgba(201,150,58,0.2)",
                color: "#C9963A",
                border: "1px solid rgba(201,150,58,0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Application mobile disponible
            </div>

            <h1
              className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Gérez vos
              <br />
              <span style={{ color: "#C9963A" }}>tontines</span>
              <br />
              en toute
              <br />
              confiance
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              MaTontine simplifie la gestion de vos groupes d&apos;épargne
              tournante. Suivez les cotisations, gérez les tours et gardez
              tous les membres informés — depuis votre téléphone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1EBbmFX0No5KkzqduPnmxt-2J1mwsr8xM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-bold text-white text-center transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#C9963A" }}
              >
                Télécharger gratuitement
              </a>
              <a
                href="#comment-ca-marche"
                className="px-8 py-4 rounded-2xl font-semibold text-center transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                }}
              >
                Voir comment ça marche
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl opacity-30"
                style={{ backgroundColor: "#C9963A", transform: "scale(0.8)" }}
              />

              {/* Phone */}
              <div
                className="relative w-72 rounded-[3rem] overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: "#0f3d20",
                  border: "2px solid rgba(255,255,255,0.1)",
                  aspectRatio: "9/19",
                }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 pt-4 pb-2">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div
                    className="w-24 h-5 rounded-full"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                  />
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-sm"
                        style={{
                          width: 4,
                          height: 4 + i * 2,
                          backgroundColor: "white",
                          opacity: i === 3 ? 1 : 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 pt-3 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white/60 text-xs">Bonjour</p>
                      <p className="text-white font-bold text-base">Mes tontines</p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Group cards */}
                  {[
                    { name: "Tontine Famille", amount: "10 000", members: 8, progress: 75 },
                    { name: "Groupe Collègues", amount: "25 000", members: 5, progress: 40 },
                  ].map((group) => (
                    <div
                      key={group.name}
                      className="rounded-2xl p-4 mb-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {group.name}
                          </p>
                          <p className="text-white/50 text-xs">
                            {group.members} membres
                          </p>
                        </div>
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{ backgroundColor: "rgba(201,150,58,0.2)", color: "#C9963A" }}
                        >
                          {group.amount} F
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${group.progress}%`,
                            backgroundColor: "#C9963A",
                          }}
                        />
                      </div>
                      <p className="text-white/40 text-xs mt-1">
                        {group.progress}% collecté
                      </p>
                    </div>
                  ))}

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    {[
                      { label: "Prochaine échéance", value: "3 jours" },
                      { label: "Tour suivant", value: "Ibrahim" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl p-3"
                        style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      >
                        <p className="text-white/40 text-xs mb-1">{stat.label}</p>
                        <p className="text-white font-bold text-sm">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className="grid grid-cols-3 gap-8 mt-20 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "100%", label: "Gratuit pour commencer" },
            { value: "0 SMS", label: "de connexion répétés" },
            { value: "PIN", label: "Accès sécurisé hors ligne" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
