/* Website icon */

const favicon = document.getElementById("favicon");
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  favicon.setAttribute("href", "./img/favicon-light.png");
} else {
  favicon.setAttribute("href", "./img/favicon-dark.png");
}
