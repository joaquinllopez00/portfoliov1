const loadingGif = () => {
  const gif = document.querySelector("iframe");

  setTimeout(() => {
    document.body.style.overflow = "visible";
    gsap.to(gif, { opacity: 0, scale: 2 });
  }, 3000);
};

const welcomeFadeIn = () => {
  const clouds = document.querySelector(".clouds");
  const welcome = document.querySelectorAll(".welcome");
  const firstname = document.querySelector(".firstname");
  const backdrop = document.querySelector(".welcome-page__fadein");
  const hello = document.querySelector(".welcome-message__firstSubcontainer");
  const welcomeHello = document.querySelector(".hello");
  const lastname = document.querySelector(".lastname");
  const arrow = document.querySelector(".arrow");
  const fullstack = welcome[3];
  const developer = welcome[4];
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.body.style.overflow = "visible";
  }, 3000);
  const welcomeTL = gsap.timeline({ defaults: { duration: 0.7, ease: "power4.inOut" } });
  welcomeTL.fromTo(backdrop, { opacity: 1 }, { opacity: 0, display: "none" }, "+=3");
  welcomeTL.fromTo(clouds, { opacity: 0 }, { opacity: 1 }, "-=0.5");
  welcomeTL.fromTo(hello, { rotationX: 80, rotationZ: 10, opacity: 0 }, { rotationX: 0, rotationZ: 0, opacity: "1" });
  welcomeTL.fromTo(fullstack, { opacity: 0, x: -60, rotationY: -180 }, { opacity: 1, x: 0, rotationY: 0 });
  welcomeTL.fromTo(
    developer,
    { opacity: 0, x: 60, rotationY: 180, rotationZ: 180 },
    { opacity: 1, x: 0, rotationY: 0, rotationZ: 0 },
    "-=1",
  );
  if (window.innerWidth > 500) {
    welcomeTL.fromTo(welcomeHello, { opacity: 1, x: 0 }, { opacity: 0 }, "+=1");
    welcomeTL.fromTo(
      lastname,
      { display: "none", opacity: 0, rotationX: -180 },
      { display: "block", rotationX: 0, opacity: 1 },
      "-=1.5",
    );
    welcomeTL.fromTo(hello, { x: 0 }, { x: -250 }, "-=1");
  }
  welcomeTL.fromTo(arrow, { y: +20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
};

const buttonTransform = () => {
  const button = document.querySelector(".visit-page");
  const glow = document.querySelector(".glow");
  button.addEventListener("mouseover", () => {
    button.style.animation = `buttonHover 0.3s ease forwards`;
    button.classList.toggle("toggled");
    glow.classList.toggle("glowToggle");
  });
  button.addEventListener("mouseout", () => {
    button.style.animation = `buttonUnhover 0.3s ease forwards`;
    button.classList.toggle("toggled");
    glow.classList.toggle("glowToggle");
  });
};

const buttonOnClick = () => {
  const button = document.querySelector(".visit-page");
  button.addEventListener("click", () => {
    const nav = document.querySelector("nav").offsetTop;
    const verticalNav = document.querySelector(".vertical-nav");
    window.scrollTo({
      top: `${nav}`,
      left: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      verticalNav.classList.toggle("vertical-nav__toggled");
    }, 500);
  });
};

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    if (nav.style.opacity === "" || nav.style.opacity === "0") {
      nav.style.display = "flex";
      gsap.to(nav, { opacity: 1 });
      burger.classList.toggle("toggle");
    } else {
      burger.classList.toggle("toggle");
      gsap.to(nav, { opacity: 0 });
      nav.style.display = "none";
    }
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
};

const navLink = (link) => {
  let x;
  let burger = document.querySelector(".burger");
  let navBar = document.querySelector(".nav-links");
  let navLinks = document.querySelectorAll(".nav-links li");
  let screenSize = window.pageXOffset;
  switch (link) {
    case "about":
      x = document.getElementById("about").offsetTop;
      window.scrollTo({
        top: x - 150,
        left: 0,
        behavior: "smooth",
      });
      burger.classList.toggle("toggle");

      if (screenSize < 768) {
        gsap.to(navBar, { opacity: "0", display: "none" });
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
      }
      break;
    case "projects":
      x = document.getElementById("projects").offsetTop;
      window.scrollTo({
        top: x - 150,
        left: 0,
        behavior: "smooth",
      });
      burger.classList.toggle("toggle");
      if (screenSize < 768) {
        gsap.to(navBar, { opacity: "0", display: "none" });
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
      }
      break;
    case "contact":
      x = document.getElementById("contact").offsetTop;
      window.scrollTo({
        top: x - 150,
        left: 0,
        behavior: "smooth",
      });
      burger.classList.toggle("toggle");
      if (screenSize < 768) {
        gsap.to(navBar, { opacity: "0", display: "none" });
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
      }
      break;
  }
};

//ANIMATIONS _____________
//vertical nav
const vertNav = document.querySelector(".vertical-nav");
const nav = document.querySelector("nav");
//section 1
const about = document.querySelector("#about");
const aboutUnderline = document.querySelector(".about__underline");
const aboutImage = document.querySelector(".about-content__image");
const aboutHello = document.querySelector("#about-hello");
const aboutContent = document.querySelector("#about-hello__content");
const vertLine = document.querySelector("#about__vertical-line");
const horzLine = document.querySelector("#about__horizontal-line");
const hover = document.querySelector("#hover");
let x = 0;
//port intro section
const portfolio = document.querySelector("#projects");
const portfolioUnderline = document.querySelector(".projects__underline");
const techSkills = document.querySelector("#technical");
const skills = document.querySelectorAll(".projects-skills-languages");
let y = 0;
scroll = () => {
  const section = document.querySelectorAll("section");
  if (section[0].offsetTop - window.scrollY < 200 && x === 0) {
    console.log("first section animations");
    gsap.fromTo(vertNav, { x: -20, opacity: 0 }, { x: 0, opacity: 1 });
    aboutTL = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.inOut" } });
    aboutTL.fromTo(about, { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
    aboutTL.fromTo(aboutUnderline, { x: +200, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.8");
    aboutTL.fromTo(aboutImage, { x: -200, rotationZ: -20, opacity: 0 }, { rotationZ: 0, x: 0, opacity: 1 }, "-=0.5");
    aboutTL.fromTo(aboutHello, { x: +200, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.3");
    aboutTL.fromTo(aboutContent, { x: +200, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.7");
    aboutTL.fromTo(aboutContent, { x: +200, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.7");
    aboutTL.fromTo(vertLine, { width: 20, opacity: 0 }, { width: 200, opacity: 1 }, "-=0.7");
    aboutTL.fromTo(horzLine, { width: 20, opacity: 0 }, { width: 200, opacity: 1 }, "-=0.7");
    x += 1;
  } else if (section[0].offsetTop - window.scrollY > 500 && x === 1) {
    gsap.to(vertNav, { x: -20, opacity: 0 });
    gsap.fromTo(about, { x: 0, opacity: 1 }, { x: -200, opacity: 0 });
    gsap.fromTo(aboutUnderline, { x: 0, opacity: 1 }, { x: +200, opacity: 0 }, "-=0.8");
    gsap.fromTo(aboutImage, { rotationZ: 0, x: 0, opacity: 1 }, { x: -200, rotationZ: -20, opacity: 0 });
    gsap.fromTo(aboutHello, { x: 0, opacity: 1 }, { x: +200, opacity: 0 });
    gsap.fromTo(aboutContent, { x: 0, opacity: 1 }, { x: +200, opacity: 0 });
    gsap.fromTo(aboutContent, { x: 0, opacity: 1 }, { x: +200, opacity: 0 });
    gsap.fromTo(vertLine, { width: 200, opacity: 1 }, { width: 20, opacity: 0 });
    gsap.fromTo(horzLine, { width: 200, opacity: 1 }, { width: 20, opacity: 0 });
    x = 0;
  } else if (section[1].offsetTop - window.scrollY < 400 && y === 0) {
    y += 1;
    portTL = gsap.timeline({ defaults: { duration: 0.7, ease: "power3.inOut" } });
    portTL.fromTo(portfolio, { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
    portTL.fromTo(portfolioUnderline, { x: +200, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.8");
    portTL.fromTo(techSkills, { y: -10, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6");
    portTL.fromTo(skills[0], { y: +10, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6");
    portTL.fromTo(skills[1], { y: +10, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5");
    portTL.fromTo(skills[2], { y: +10, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4");
  } else if (section[1].offsetTop - window.scrollY > 430 && y === 1) {
    y = z = j = k = l = 0;
    let projectAboutR = projectAboutRight[0].children[0].children;
    let projectAboutL = projectAboutLeft[0].children[0].children;
    let projectAboutR1 = projectAboutRight[1].children[0].children;
    let projectAboutL1 = projectAboutLeft[1].children[0].children;
    gsap.to(portfolio, { x: -200, opacity: 0 });
    gsap.to(portfolioUnderline, { x: +200, opacity: 0 });
    gsap.to(techSkills, { y: -10, opacity: 0 });
    gsap.to(skills[0], { y: +10, opacity: 0 });
    gsap.to(skills[1], { y: +10, opacity: 0 });
    gsap.to(skills[2], { y: +10, opacity: 0 });
  }
};

const container = document.querySelectorAll(".projects__container");
const ScrollTrigger = () => {
  container.forEach((el, index) => {
    let containerTl = new gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top center",
        toggleActions: "play none none reverse",
        markers: false,
      },
      defaults: {
        duration: "0.7",
        ease: "power3.inOut",
      },
    });
    containerTl.fromTo(el.children[0], { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
    containerTl.fromTo(el.children[1], { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "+0.2");
  });
};

//ANIMATIONS END _____________ EVENTLISTENER FOR SCROLL BELOW

window.addEventListener("scroll", () => scroll());
aboutImage.addEventListener("mouseenter", () => {
  gsap.to(vertLine, { width: 180, opacity: 0 });
  gsap.to(horzLine, { width: 180, top: -30, opacity: 0 });
  if (window.innerWidth > 1000) {
    gsap.to(aboutImage, { boxShadow: "-20px -20px 25px #ee1d52" });
    gsap.to(hover, { opacity: 0 });
  }
});

//about image hover
aboutImage.addEventListener("mouseleave", () => {
  gsap.to(vertLine, { width: 200, opacity: 1 });
  gsap.to(horzLine, { width: 200, top: -20, opacity: 1 });
  if (window.innerWidth > 1000) {
    gsap.to(aboutImage, { boxShadow: "0px 0px 0px #ee1d52" });
    gsap.to(hover, { opacity: 1 });
  }
});

const initializeContact = () => {
  emailjs.init("user_9isBXwaZumJLmdq2e7bFo");
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const host = document.querySelector("#user_name").value;
    const emailAdd = document.querySelector("#user_email").value;
    const contents = document.querySelector("#message").value;
    const mess = document.getElementById("submit-message");
    emailjs
      .send("service_97k0vwi", "template_yvwn842", {
        from_name: host,
        to_name: "Joaquin",
        message: contents,
        reply_to: emailAdd,
        from_email: emailAdd,
      })
      .then(
        () => {
          mess.style.color = "#1dee7b";
          mess.innerText = "Success! I'll be getting back to you shortly!";
          setTimeout(() => {
            mess.innerText = "";
          }, 3000);
        },
        (error) => {
          mess.style.color = "#ee1d52";
          mess.innerText = "Something broke, email me at joaquinllopezzz@gmail.com";
        },
      );
  });
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//toTop button
const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const App = () => {
  initializeContact();
  loadingGif();
  navSlide();
  welcomeFadeIn();
  buttonTransform();
  buttonOnClick();
  ScrollTrigger();
};

App();
