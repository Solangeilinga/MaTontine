"use client";

import { useState, FormEvent } from "react";

const API_BASE = "https://tontineapp-backend-33pp.onrender.com/api";

type Status = { type: "idle" | "success" | "error"; message: string };

export default function DeleteAccountForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch(`${API_BASE}/public/deletion-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Votre demande a été enregistrée. Elle sera traitée sous 30 jours maximum.",
        });
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Une erreur est survenue. Réessayez, ou contactez-nous directement par email.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Impossible de contacter le serveur. Vérifiez votre connexion, ou contactez-nous directement par email.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    borderColor: "rgba(43,62,45,0.15)",
    color: "#2C3E2D",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold mb-2"
          style={{ color: "#2C3E2D" }}
        >
          Nom complet *
        </label>
        <input
          id="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2"
          style={{ ...inputStyle, borderWidth: 1.5 }}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold mb-2"
          style={{ color: "#2C3E2D" }}
        >
          Numéro de téléphone associé au compte *
        </label>
        <input
          id="phone"
          type="tel"
          required
          minLength={8}
          placeholder="+229 61 00 00 00"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2"
          style={{ ...inputStyle, borderWidth: 1.5 }}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-2"
          style={{ color: "#2C3E2D" }}
        >
          Précisions (facultatif)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Gérant ou membre ? Nom du groupe si vous le connaissez..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 resize-y"
          style={{ ...inputStyle, borderWidth: 1.5 }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: "#1B6B3A" }}
      >
        {loading ? "Envoi en cours..." : "Envoyer la demande"}
      </button>

      {status.type !== "idle" && (
        <div
          role="status"
          className="rounded-xl px-4 py-3 text-sm"
          style={
            status.type === "success"
              ? { backgroundColor: "#E8F2EC", color: "#134d2b" }
              : { backgroundColor: "#FDEAEA", color: "#B4232C" }
          }
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
