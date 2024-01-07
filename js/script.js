console.log("hello");

let yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// navigartion menu

let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//smooth scrolling
let allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = link.getAttribute("href");

    //Scroll back to top
    if (href == "#") window.scrollTo({ top: 0, behavior: "smooth" });

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// sticky Navigation

let obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //  in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(document.querySelector(".section-hero"));
