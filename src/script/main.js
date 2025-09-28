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

    // Add any other global JavaScript functionalities here
});

