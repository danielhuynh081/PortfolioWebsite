document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const startScreen = document.getElementById("startScreen");
  const dashboard = document.getElementById("dashboard");
  const flicker = document.getElementById("flicker");
  const staticBg = document.getElementById("static-bg");

  if (startButton) {
    startButton.addEventListener("click", () => {
      // Start flickering effect
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      // Show tv background
      staticBg.classList.remove("hidden");

      setTimeout(() => {
        // Hide flicker and start screen, then show dashboard
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        startScreen.classList.add("hidden");
        dashboard.classList.remove("hidden");
      }, 1000);
    });
  }
});
