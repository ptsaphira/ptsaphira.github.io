document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

 
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("promoModal");
  const closeBtn = modal.querySelector(".close");

  const STORAGE_KEY = "promo_seen_date";
  const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

  const now = Date.now();
  const lastSeen = localStorage.getItem(STORAGE_KEY);

  // Abre após 1s se nunca viu ou passou 3 dias
  if (!lastSeen || now - lastSeen > THREE_DAYS) {
    setTimeout(() => {
      modal.style.display = "flex";
      localStorage.setItem(STORAGE_KEY, now);
    }, 1000);
  }

  // Fechar no X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fechar clicando fora
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
 

 
 
});

