
  const toggle = document.getElementById("darkModeToggle");

  // Check localStorage for saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    // Add switching animation
    toggle.classList.add("switching");
    
    document.body.classList.toggle("dark-mode");

    // Save theme preference and update icon
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
      toggle.title = "Switch to Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
      toggle.title = "Switch to Dark Mode";
    }
    
    // Remove animation class after animation completes
    setTimeout(() => {
      toggle.classList.remove("switching");
    }, 500);
  });

  // Set correct icon and title on load
  window.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("dark-mode")) {
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
      toggle.title = "Switch to Light Mode";
    } else {
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
      toggle.title = "Switch to Dark Mode";
    }
  });
