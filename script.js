window.addEventListener("DOMContentLoaded", () => {
let toggles = document.querySelectorAll(".toggle");

for (let t of toggles) {
  t.addEventListener("click", () => {
    let content = t.nextElementSibling;
    let shown = content.style.display === "block";
    content.style.display = shown ? "none" : "block";
  });
}
});

function changeText() {
let p = document.getElementById("dynamicText");
p.textContent = p.textContent === "Games that immerse you..." ? "Let the adventure begin." : "Press Start to continue...";
}

function hideImage() {
let img = document.getElementById("musicImg");
img.style.display = img.style.display === "none" ? "block" : "none";
}

function changeVibe() {
let title = document.getElementById("mainTitle");
title.style.color = title.style.color === "cyan" ? "#ffffff" : "cyan";
}

function highlightGenre(button) {
let all = document.querySelectorAll(".toggle");
for (let b of all) b.style.backgroundColor = "#4d8bf0";
button.style.backgroundColor = "#ff4081";
}

function highlightFAQ(block) {
block.style.backgroundColor = "#444";
setTimeout(() => {
  block.style.backgroundColor = "#222";
}, 500);
}

let genreViewCount = 0;
function trackGenreView(div) {
genreViewCount++;
if (!div.textContent.includes("Viewed")) {
  div.textContent += ` (Viewed ${genreViewCount} times)`;
} else {
  let baseText = div.textContent.split(" (Viewed")[0];
  div.textContent = `${baseText} (Viewed ${genreViewCount} times)`;
}
}