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
