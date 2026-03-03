// Repeating flash burst effect
const flash = document.querySelector(".flash");

function triggerFlash() {
  flash.style.background = "rgba(255,255,255,0.15)";
  setTimeout(() => {
    flash.style.background = "rgba(255,255,255,0)";
  }, 100);

  setTimeout(() => {
    flash.style.background = "rgba(255,255,255,0.1)";
  }, 250);

  setTimeout(() => {
    flash.style.background = "rgba(255,255,255,0)";
  }, 350);
}

// Flash every 3 seconds
setInterval(triggerFlash, 3000);
