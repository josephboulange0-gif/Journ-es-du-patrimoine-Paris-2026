const tabButtons = document.querySelectorAll(".tab-btn");
const daySections = document.querySelectorAll(".day");
const shareButton = document.querySelector("[data-share-button]");
const shareStatus = document.querySelector("[data-share-status]");

function showDay(day) {
  daySections.forEach((section) => {
    section.hidden = section.dataset.day !== day;
  });
  tabButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.day === day);
  });
  try {
    localStorage.setItem("jep2026-day", day);
  } catch (e) {
    /* Navigation privée ou stockage bloqué : ne rien faire. */
  }
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => showDay(btn.dataset.day));
});

let initialDay = "1";
try {
  const saved = localStorage.getItem("jep2026-day");
  if (saved) initialDay = saved;
} catch (e) {
  /* Navigation privée ou stockage bloqué : ne rien faire. */
}
showDay(initialDay);

function setShareStatus(message) {
  if (shareStatus) shareStatus.textContent = message;
}

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    const canonical = document.querySelector('link[rel="canonical"]');
    const url = canonical ? canonical.href : window.location.href;
    const shareData = {
      title: document.title,
      text: shareButton.dataset.shareText || "Découvrez cet itinéraire à pied pour les Journées européennes du patrimoine 2026 à Paris.",
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareStatus("Lien de partage ouvert.");
        return;
      } catch (error) {
        if (error.name === "AbortError") {
          setShareStatus("");
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareStatus("Lien copié : vous pouvez le coller dans votre message ou votre publication.");
    } catch (error) {
      window.prompt("Copiez le lien du parcours :", url);
      setShareStatus("Copiez le lien affiché pour le partager.");
    }
  });
}
