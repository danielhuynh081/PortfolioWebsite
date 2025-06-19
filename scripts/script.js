document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const backButton = document.getElementById("backButton");
  const startScreen = document.getElementById("startScreen");
  const dashboard = document.getElementById("dashboard");
  const flicker = document.getElementById("flicker");
  const staticBg = document.getElementById("static-bg");

  const resumeButton = document.getElementById("resumeButton");
  const resumeScreen = document.getElementById("resumePage");

  /* START BUTTON */
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

  /* RESUME PAGE BUTTON */
  if (resumeButton) {
    resumeButton.addEventListener("click", () => {
      // Start flickering effect
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        // Hide flicker and start screen, then show dashboard
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        dashboard.classList.add("hidden");
        resumeScreen.classList.remove("hidden");
      }, 1000);
    });
  }

  /* BACK BUTTON */
  if (backButton) {
    backButton.addEventListener("click", () => {
      // Start flickering effect
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        // Hide flicker and show start screen
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        resumeScreen.classList.add("hidden");
        dashboard.classList.remove("hidden");
      }, 1000);
    });
  }
});
