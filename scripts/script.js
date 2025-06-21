document.addEventListener("DOMContentLoaded", () => {
  /* Buttons */
  const startButton = document.getElementById("startButton");
  const backButtons = document.querySelectorAll(".back-btn");
  const projectButton = document.getElementById("projectsButton");
  const resumeButton = document.getElementById("resumeButton");
  const aboutButton = document.getElementById("aboutButton");
  const contactButton = document.getElementById("contactButton");

  /* Website Effects */
  const startScreen = document.getElementById("startScreen");
  const flicker = document.getElementById("flicker");
  const staticBg = document.getElementById("static-bg");

  /* Pages */
  const dashboard = document.getElementById("dashboard");
  const resumeScreen = document.getElementById("resumePage");
  const projectScreen = document.getElementById("projectPage");
  const aboutScreen = document.getElementById("aboutPage");
  const contactScreen = document.getElementById("contactPage");

  /* Start Button */
  if (startButton) {
    startButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");
      staticBg.classList.remove("hidden");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        startScreen.classList.add("hidden");
        dashboard.classList.remove("hidden");
      }, 1000);
    });
  }

  /* Resume Page  */
  if (resumeButton) {
    resumeButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        dashboard.classList.add("hidden");
        resumeScreen.classList.remove("hidden");
      }, 1000);
    });
  }

  /* Projects Page */
  if (projectButton) {
    projectButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        dashboard.classList.add("hidden");
        projectScreen.classList.remove("hidden");
      }, 1000);
    });
  }

  /* About me Page */
  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        dashboard.classList.add("hidden");
        aboutScreen.classList.remove("hidden");
      }, 1000);
    });
  }

  /* Contact Page */
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");
        dashboard.classList.add("hidden");
        contactScreen.classList.remove("hidden");
      }, 1000);
    });
  }

  /* Back Button */
  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("flicker-animation");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("flicker-animation");

        // Hide all pages
        document
          .querySelectorAll(
            ".project-page, .resume-page, .about-page, .contact-page"
          )
          .forEach((page) => page.classList.add("hidden"));

        // Show dashboard
        dashboard.classList.remove("hidden");
      }, 1000);
    });
  });

  /* EmailJS Contact Form Handler */
  emailjs.init("seup3yiZP0aF2d243"); // Public key

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("service_hznato9", "template_own208u", this)
        .then(() => {
          this.reset();
        })
        .catch((err) => {
          alert("Failed to send: " + JSON.stringify(err));
        });
    });
  }
});
