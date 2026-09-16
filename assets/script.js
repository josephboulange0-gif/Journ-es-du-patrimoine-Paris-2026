const tabButtons = document.querySelectorAll(".tab-btn");
const daySections = document.querySelectorAll(".day");

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
    /* private browsing or blocked storage: ignore */
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
  /* ignore */
}
showDay(initialDay);
