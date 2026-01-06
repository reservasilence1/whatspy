export default async function handler(req, res) {
  try {
    const phoneRaw = (req.query.phone || "").toString();
    const phone = phoneRaw.replace(/\D/g, "");

    if (phone.length < 11) {
      return res.status(400).json({ ok: false, error: "Número inválido" });
    }

    const instance = process.env.ZAPI_INSTANCE;
    const token = process.env.ZAPI_TOKEN;
    const clientToken = process.env.ZAPI_CLIENT_TOKEN;

    if (!instance || !token || !clientToken) {
      return res.status(500).json({ ok: false, error: "ENV da Z-API não configurada" });
    }

    const url = `https://api.z-api.io/instances/${instance}/token/${token}/profile-picture?phone=${encodeURIComponent(phone)}`;

    const r = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "client-token": clientToken,
      },
    });

    const text = await r.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    // Normaliza saída pra front: sempre devolve { profilePicture: "..." }
    let profilePicture = "";
    if (Array.isArray(data) && data[0] && data[0].link) profilePicture = data[0].link;
    else if (data && data.link) profilePicture = data.link;
    else if (data && data.profilePicture) profilePicture = data.profilePicture;

    return res.status(r.status).json({ ok: r.ok, profilePicture, data });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Erro interno", details: String(err?.message || err) });
  }
}
