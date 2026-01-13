document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

     $(document).ready(function () {
    const popupKey = "promoPopupLastClosed";
    const lastClosed = localStorage.getItem(popupKey);
    const now = new Date().getTime();
    const hours72 = 72 * 60 * 60 * 1000;

    // Só abre se nunca fechou OU já passaram 72h
    if (!lastClosed || now - lastClosed > hours72) {
      setTimeout(() => {
        $("#promoPopup").modal("show");
      }, 2000); // espera 2s antes de abrir
    }

    // Ao fechar, salva o horário
    $("#promoPopup").on("hidden.bs.modal", function () {
      localStorage.setItem(popupKey, new Date().getTime());
    });
  });

    
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("promoModal");
  const closeBtn = document.querySelector(".close");

  const STORAGE_KEY = "promo_seen_date";
  const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const lastSeen = localStorage.getItem(STORAGE_KEY);

  if (!lastSeen || now - lastSeen > THREE_DAYS) {
    setTimeout(() => {
      modal.style.display = "flex";
      localStorage.setItem(STORAGE_KEY, now);
    }, 1000);
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
 
 
});

