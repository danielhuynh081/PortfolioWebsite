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
  const mobileDashboard = document.getElementById("mobiledashboard");
  const resumeScreen = document.getElementById("resumePage");
  const projectScreen = document.getElementById("projectPage");
  const aboutScreen = document.getElementById("aboutPage");
  const contactScreen = document.getElementById("contactPage");
  const sentScreen = document.getElementById("sentMessage");

  /* Project Slider */

  let currentProject = 0;
  const projectImage = document.getElementById("project-image");
  const projectBio = document.getElementById("project-bio");
  const projectLink = document.getElementById("project-link");

  const prevBtn = document.getElementById("prevProject");
  const nextBtn = document.getElementById("nextProject");

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

        // Check screen width
        if (window.innerWidth <= 480) {
          // Show mobile dashboard
          mobileDashboard.classList.remove("hidden");
          dashboard.classList.add("hidden");
        } else {
          // Show regular dashboard
          dashboard.classList.remove("hidden");
          mobileDashboard.classList.add("hidden");
        }
      }, 850);
    });
  }

  /* Resume Page  */
  if (resumeButton) {
    resumeButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("channel-switch");

      setTimeout(() => {
        flicker.classList.add("hidden");
        dashboard.classList.add("hidden");
        resumeScreen.classList.remove("hidden");
        flicker.classList.remove("channel-switch");
      }, 350);
    });
  }

  /* Projects Page */
  if (projectButton) {
    projectButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("channel-switch");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("channel-switch");
        dashboard.classList.add("hidden");
        projectScreen.classList.remove("hidden");
      }, 350);
    });
  }

  /* About me Page */
  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("channel-switch");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("channel-switch");
        dashboard.classList.add("hidden");
        aboutScreen.classList.remove("hidden");
      }, 350);
    });
  }

  /* Contact Page */
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("channel-switch");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("channel-switch");
        dashboard.classList.add("hidden");
        contactScreen.classList.remove("hidden");
      }, 350);
    });
  }

  /* Back Button */
  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      flicker.classList.remove("hidden");
      flicker.classList.add("channel-switch");

      setTimeout(() => {
        flicker.classList.add("hidden");
        flicker.classList.remove("channel-switch");

        // Hide all pages
        document
          .querySelectorAll(
            ".project-page, .resume-page, .about-page, .contact-page, .sent-msg"
          )
          .forEach((page) => page.classList.add("hidden"));

        // Show dashboard
        dashboard.classList.remove("hidden");
      }, 350);
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
          // Hide contact page
          document.getElementById("contactPage").classList.add("hidden");

          // Show sent message popup (now outside contactPage)
          const sentScreen = document.getElementById("sentMessage");
          sentScreen.classList.remove("hidden");

          // Reset form
          this.reset();

          // After 3 seconds, hide popup and show dashboard
          setTimeout(() => {
            sentScreen.classList.add("hidden");
            document.getElementById("dashboard").classList.remove("hidden");
          }, 1000);
        })
        .catch((err) => {
          alert("Failed to send: " + JSON.stringify(err));
        });
    });
  }

  /* Project Slider Logic */
  const projects = [
    {
      img: "./media/vietnamese.png",
      bio: "Live Vietnamese Translator – transcribes speech with OpenAI Whisper and creates flashcards via Genanki to support Vietnamese language learning.",
      link: "",
    },
    {
      img: "./media/aispeech.png",
      bio: "AI Speech Improver – uses Streamlit, Python, and OpenAI Whisper to transcribe speech and provide post-analysis feedback on enunciation, pacing, and clarity for public speaking improvement.",
      link: "",
    },
    {
      img: "./media/macsystem.png",
      bio: "Maseeh Access Control System – built with React, Django, and PostgreSQL to streamline and manage student classroom access requests at PSU.",
      link: "",
    },
  ];

  function showProject(index) {
    const { img, bio, link } = projects[index];
    projectImage.src = img;
    projectBio.textContent = bio;
    projectLink.href = link;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentProject = (currentProject - 1 + projects.length) % projects.length;
      showProject(currentProject);
    });

    nextBtn.addEventListener("click", () => {
      currentProject = (currentProject + 1) % projects.length;
      showProject(currentProject);
    });
  }

  // Initialize the first project on page load
  if (projectImage && projectBio && projectLink) {
    showProject(currentProject);
  }
});
