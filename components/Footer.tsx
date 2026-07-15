export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6"
      style={{ backgroundColor: "#0f3d20", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">MaTontine</span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Application mobile de gestion de tontines pour l&apos;Afrique de
              l&apos;Ouest. Simplicité, confiance et transparence.
            </p>
          </div>

          {/* Application */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Application</p>
            <ul className="space-y-3">
              {[
                { label: "Fonctionnalités", href: "#fonctionnalites" },
                { label: "Comment ça marche", href: "#comment-ca-marche" },
                { label: "Pour qui", href: "#pour-qui" },
                { label: "Télécharger", href: "https://drive.google.com/file/d/1EBbmFX0No5KkzqduPnmxt-2J1mwsr8xM/view?usp=sharing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pays */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Pays couverts</p>
            <ul className="space-y-3">
              {[
                "Burkina Faso",
                "Côte d'Ivoire",
                "Mali",
                "Sénégal",
                "Bénin",
                "Maroc",
              ].map((country) => (
                <li
                  key={country}
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {year} MaTontine. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Confidentialité", "Conditions d'utilisation", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
