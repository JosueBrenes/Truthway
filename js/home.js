$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$("body").scrollspy({
  target: ".navbar-fixed-top",
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});

// Website icon //

const favicon = document.getElementById("favicon");
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  favicon.setAttribute("href", "./img/favicon-light.png");
} else {
  favicon.setAttribute("href", "./img/favicon-dark.png");
}

// Verse of the day //

fetch("https://beta.ourmanna.com/api/v1/get/?format=json&order=random")
  .then((response) => response.json())
  .then((data) => {
    const verseText = data.verse.details.text;
    const verseReference = `${data.verse.details.reference} (RVR1960)`;
    document.querySelector(".custom-text").textContent = verseText;
    document.querySelector(".custom-reference").textContent = verseReference;
  })
  .catch((error) => console.error(error));
