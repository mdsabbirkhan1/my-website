
  window.addEventListener("DOMContentLoaded", function () {
    const consentBar = document.getElementById("cookieConsent");
    const acceptBtn = document.getElementById("acceptCookies");

    // Check if already accepted
    if (localStorage.getItem("cookieAccepted") === "true") {
      consentBar.style.display = "none";
    }

    // On accept
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieAccepted", "true");
      consentBar.style.display = "none";
    });
  });
