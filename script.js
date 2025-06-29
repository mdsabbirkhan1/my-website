
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tools-container");
  if (!container) return;

  const toolCards = Array.from(container.querySelectorAll(".tool-card"));

  // ✅ ইউজার যখন টুল ব্যবহার করে (লিঙ্কে ক্লিক)
  toolCards.forEach(card => {
    const toolId = card.dataset.toolId;
    const link = card.querySelector(".tool-link");

    if (toolId && link) {
      link.addEventListener("click", () => {
        const count = parseInt(localStorage.getItem(toolId) || "0", 10);
        localStorage.setItem(toolId, count + 1);
      });
    }
  });

  // ✅ পেজ লোডে usage অনুযায়ী sort করে দেখানো
  const sortedCards = toolCards.sort((a, b) => {
    const countA = parseInt(localStorage.getItem(a.dataset.toolId) || "0", 10);
    const countB = parseInt(localStorage.getItem(b.dataset.toolId) || "0", 10);
    return countB - countA;
  });

  // ✅ container-এ নতুন করে append
  sortedCards.forEach(card => {
    container.appendChild(card);
  });
});
