const arabicSections = document.querySelectorAll('[lang="ar"]');

arabicSections.forEach(function(section) {

  const language = section.getAttribute("lang");

  if (language === "ar") {
    section.setAttribute("dir", "rtl");
  } else {
    section.setAttribute("dir", "ltr");
  }

});


const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", function(event) {

  event.preventDefault();

  formMessage.textContent = "Thank you for subscribing!";

  newsletterForm.reset();

});

const page = document.documentElement;

console.log(page);

const language = page.getAttribute("lang");

console.log(language);

if (language === "ar") {
    page.setAttribute("dir", "rtl");
} else {
    page.setAttribute("dir", "ltr");
}

const languageBtn = document.getElementById("languageBtn");

console.log(languageBtn);

languageBtn.addEventListener("click", function() {
    console.log("Language button clicked");
});

languageBtn.addEventListener("click", function() {
    console.log("Language button clicked");
});