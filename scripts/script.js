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
  const sentScreen = document.getElementById("sentMessage");

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
            ".project-page, .resume-page, .about-page, .contact-page, .sent-msg"
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
          }, 1500);
        })
        .catch((err) => {
          alert("Failed to send: " + JSON.stringify(err));
        });
    });
  }
});

/* Project Slider Logic */
const projects = [
  {
    img: "./media/vietnamese.png",
    bio: "Vietnamese Translator — uses Whisper + GPT for real-time transcription and translation.",
    link: "https://github.com/your-username/project1",
  },
  {
    img: "./media/resume.png",
    bio: "Workout Tracker — built with Flask and Chart.js for visualizing gym progress.",
    link: "https://github.com/your-username/project2",
  },
  {
    img: "./media/resume.png",
    bio: "AI Recipe Bot — suggests meals using user input, OpenAI API, and edible APIs.",
    link: "https://github.com/your-username/project3",
  },
];

let currentProject = 0;

const projectImage = document.getElementById("project-image");
const projectBio = document.getElementById("project-bio");
const projectLink = document.getElementById("project-link");

const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

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
