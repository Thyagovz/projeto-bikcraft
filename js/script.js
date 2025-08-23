const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

const parameter = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameter.forEach(activeProduct);

const question = document.querySelectorAll(".question button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);

  response.classList.toggle("active");
  const active = response.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventQuestion(question) {
  question.addEventListener("click", activeQuestion);
}

question.forEach(eventQuestion);

const gallery = document.querySelectorAll(".bicycle-img img");
const galleryContainer = document.querySelector(".bicycle-img");

function switchImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventsGallery(img) {
  img.addEventListener("click", switchImage);
}

gallery.forEach(eventsGallery);

if (window.SimpleAnime) {
  new SimpleAnime();
}
