 
document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     ANO ATUAL AUTOMÁTICO
  ========================= */
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* =========================
     MODAL PROMO
  ========================= */
  const modal = document.getElementById("promoModal");
  if (!modal) return; // segurança

  const closeBtn = modal.querySelector(".close");

  const STORAGE_KEY = "promo_seen_date";
  const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

  const now = Date.now();
  const lastSeen = localStorage.getItem(STORAGE_KEY);

  // Abrir após 1s se nunca viu ou passou 3 dias
  if (!lastSeen || now - lastSeen > THREE_DAYS) {
    setTimeout(() => {
      modal.style.display = "flex";

      // garante animação sempre
      const content = modal.querySelector(".modal-content");
      if (content) {
        content.classList.remove("animate");
        void content.offsetWidth; // reflow
        content.classList.add("animate");
      }

      localStorage.setItem(STORAGE_KEY, now);
    }, 1000);
  }

  /* =========================
     FECHAMENTO
  ========================= */

  // Fechar no X
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Fechar clicando fora
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
 
