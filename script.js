// ===============================
// FLASH EFFECT
// ===============================

const flash = document.querySelector(".flash");

function triggerFlash() {
  flash.style.background = "rgba(255,255,255,0.15)";
  setTimeout(() => flash.style.background = "rgba(255,255,255,0)", 100);
  setTimeout(() => flash.style.background = "rgba(255,255,255,0.1)", 250);
  setTimeout(() => flash.style.background = "rgba(255,255,255,0)", 350);
}

setInterval(triggerFlash, 3000);


// ===============================
// BASIC PROTECTION
// ===============================

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {

  if (e.ctrlKey && e.key.toLowerCase() === "u") e.preventDefault();
  if (e.ctrlKey && e.key.toLowerCase() === "s") e.preventDefault();
  if (e.ctrlKey && e.key.toLowerCase() === "p") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") e.preventDefault();
  if (e.key === "F12") e.preventDefault();

});


// ===============================
// OPTIONAL DEVTOOLS DETECTION
// (Add it HERE at the bottom)
// ===============================

setInterval(function () {
  if (
    window.outerHeight - window.innerHeight > 150 ||
    window.outerWidth - window.innerWidth > 150
  ) {
    document.body.innerHTML = "";
    window.location.href = "about:blank";
  }
}, 1000);
