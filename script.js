const languageSwitch = document.getElementById("languageSwitch");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".main-nav");
let currentLanguage = "pt";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-pt][data-en]").forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.innerHTML = value;
  });
  languageSwitch.textContent = language === "pt" ? "EN" : "PT";
  languageSwitch.setAttribute("aria-label", language === "pt" ? "Switch to English" : "Mudar para português");
}
languageSwitch.addEventListener("click", () => setLanguage(currentLanguage === "pt" ? "en" : "pt"));
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
