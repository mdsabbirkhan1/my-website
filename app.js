let deferredPrompt;
const installBanner = document.getElementById("installBanner");
const installBtn = document.getElementById("installBtn");
const closeBtn = document.getElementById("closeBtn");

// Show popup if not installed
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner.classList.remove("hidden");
});

// Install button click
installBtn.addEventListener("click", async () => {
  installBanner.classList.add("hidden");
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("Install outcome:", outcome);
    deferredPrompt = null;
  }
});

// Close popup
closeBtn.addEventListener("click", () => {
  installBanner.classList.add("hidden");
  localStorage.setItem("pwaInstallDismissed", "true");
});

// Show again on refresh if not installed
window.addEventListener("load", () => {
  if (!window.matchMedia('(display-mode: standalone)').matches) {
    const dismissed = localStorage.getItem("pwaInstallDismissed");
    if (!dismissed) {
      installBanner.classList.remove("hidden");
    }
  }
});

// app.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("✅ Service Worker Registered"))
    .catch(err => console.log("❌ SW registration failed:", err));
}