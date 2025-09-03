// Smooth scroll for navbar links
document.querySelectorAll('.navbar .links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth"
    });
    history.pushState(null, null, targetId);
  });
});

// Typing effect in Home
const text = ["Frontend Developer", "Web Designer", "Programmer"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    typingElement.textContent = currentText;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }
}

window.addEventListener('load', type);

const works = document.querySelectorAll(".work");
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close");
const modalBody = document.getElementById("modal-body");

// Project data
const projects = {
  1: {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, shopping cart, and checkout functionality. Implemented user authentication and payment processing integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    image: "https://via.placeholder.com/800x400/3498db/ffffff?text=E-commerce+Project",
    liveLink: "#",
    githubLink: "#"
  },
  2: {
    title: "Task Management App",
    description: "A cross-platform task management application with drag-and-drop functionality, due date reminders, and collaborative features for team projects.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    image: "https://via.placeholder.com/800x400/2c3e50/ffffff?text=Task+App+Project",
    liveLink: "#",
    githubLink: "#"
  },
  3: {
    title: "Travel Blog",
    description: "A visually appealing travel blog with dynamic content loading, category filtering, and interactive maps. Features a custom CMS for content management.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    image: "https://via.placeholder.com/800x400/e74c3c/ffffff?text=Travel+Blog+Project",
    liveLink: "#",
    githubLink: "#"
  },
  4: {
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout planning, progress charts, and social features to share achievements with friends.",
    technologies: ["React", "Express", "MySQL", "Chart.js", "JWT"],
    image: "https://via.placeholder.com/800x400/27ae60/ffffff?text=Fitness+App+Project",
    liveLink: "#",
    githubLink: "#"
  }
};

// Open modal with project details
works.forEach(work => {
  work.addEventListener("click", () => {
    const projectId = work.getAttribute("data-project");
    const project = projects[projectId];
    
    if (project) {
      modalBody.innerHTML = `
        <div class="project-details">
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.liveLink}" target="_blank">View Live</a>
            <a href="${project.githubLink}" target="_blank">GitHub</a>
          </div>
        </div>
      `;
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});


// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
    header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.background = '#000';
    header.style.boxShadow = 'none';
  }
});

//control hamburgerMenu 
const hamburgerMenu = document.getElementById('hamburger-menu');
const navCont = document.querySelector('.nav_cont');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    navCont.classList.toggle('active');
    navbar.classList.toggle('active');
});

//close hamburgerMenu (out)
document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navCont.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
        navCont.classList.remove('active');
        navbar.classList.remove('active');
    }
});

//close hamburgerMenu (on link)
document.querySelectorAll('.nav_cont a').forEach(link => {
    link.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        navCont.classList.remove('active');
        navbar.classList.remove('active');
    });
});