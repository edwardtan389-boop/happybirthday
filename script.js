const music = document.getElementById("bgMusic");
const overlay = document.getElementById("tapOverlay");
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseDiv = document.getElementById("surprise");

// Start music and remove overlay on tap
overlay.addEventListener("click", () => {
  music.play().catch(err => console.log("Music play blocked:", err));
  overlay.style.display = "none";

  // Optional: initial confetti
  confetti({ particleCount: 150, spread: 70 });
  confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
  setTimeout(() => confetti({ particleCount: 80, spread: 100 }), 400);
});

// Show surprise message and slideshow
surpriseBtn.addEventListener("click", () => {
  surpriseDiv.classList.remove("hidden");

    surpriseBtn.style.display = "none";

  // Confetti again
  confetti({ particleCount: 150, spread: 70 });
});

// Slideshow logic
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Start slideshow every 3 seconds
setInterval(nextSlide, 3000);
