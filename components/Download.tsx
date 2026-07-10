export default function Download() {
  return (
    <section
      id="telecharger"
      className="py-24 px-6"
      style={{ backgroundColor: "#1B6B3A" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 16l-4-4h3V4h2v8h3l-4 4z"
              fill="white"
            />
            <path
              d="M20 18H4v2h16v-2z"
              fill="white"
            />
          </svg>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
          Téléchargez MaTontine
        </h2>
        <p
          className="text-lg max-w-md mx-auto mb-12"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          L&apos;application est disponible sur Android. Gratuit pour commencer,
          sans carte bancaire requise.
        </p>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Android */}
          <a
            href="https://drive.google.com/file/d/1YMp_XfOttM6lmjWWAHHQwqkYsW_lok0f/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-5 rounded-2xl transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "white" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.523 15.341l-2.55-4.415 2.55-4.415A2 2 0 0016 4H8a2 2 0 00-1.523 2.511l2.55 4.415-2.55 4.415A2 2 0 008 18h8a2 2 0 001.523-2.659z"
                fill="#1B6B3A"
              />
              <path d="M12 2v2M12 20v2M6 7l-2-2M18 7l2-2" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div className="text-left">
              <p className="text-xs" style={{ color: "#6B7B6C" }}>
                Disponible sur
              </p>
              <p className="font-bold text-base" style={{ color: "#1B6B3A" }}>
                Android (APK)
              </p>
            </div>
          </a>

          {/* iOS — coming soon */}
          <div
            className="flex items-center gap-4 px-8 py-5 rounded-2xl opacity-50 cursor-not-allowed"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.15)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.146 2c-.667 0-1.5.667-2 1.333C9.5 4 9.167 5 9.5 5.667 10.5 5.667 11.5 5 12.167 4.167 12.833 3.333 12.833 2 12.146 2z"
                fill="white"
              />
              <path
                d="M15.5 6.5C14.5 6.5 13 7.5 11.5 7.5S8.5 6.5 7 7c-2 .667-3.5 3-3.5 5.5 0 5 3 8.5 5 8.5.667 0 1.5-.5 2.5-.5s1.833.5 2.5.5c2 0 5-3.5 5-8.5 0-2.5-1.5-4.833-3.5-5.5z"
                fill="white"
              />
            </svg>
            <div className="text-left">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Bientôt disponible
              </p>
              <p className="font-bold text-base text-white">iOS (iPhone)</p>
            </div>
          </div>
        </div>

        {/* Key points */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              ),
              title: "Code PIN sécurisé",
              desc: "Vos données restent protégées même en cas de perte du téléphone.",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="white" strokeWidth="2" strokeLinecap="round"
                  />
                </svg>
              ),
              title: "Sans SMS répétés",
              desc: "Une seule vérification SMS à l'inscription, puis accès par PIN.",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"
                    fill="none" stroke="white" strokeWidth="2"
                  />
                </svg>
              ),
              title: "Aucun engagement",
              desc: "Gratuit pour démarrer. Pas de carte bancaire, pas d'abonnement caché.",
            },
          ].map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {point.icon}
              </div>
              <p className="font-bold text-white text-sm">{point.title}</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
