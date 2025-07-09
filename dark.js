
  const toggle = document.getElementById("darkModeToggle");

  // Check localStorage for saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggle.textContent = "🌙 Dark Mode";
    }
  });

  // Set correct label on load
  window.addEventListener("DOMContentLoaded", () => {
    toggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
