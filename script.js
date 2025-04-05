function scrollToSection() {
  const section = document.querySelector(".features-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


function submitWaitlist(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const msg = document.getElementById("form-msg");

  fetch("https://script.google.com/macros/s/AKfycbyh4w_eKLZm5-LoWVHUDZ4fCvxp6qXshxF_5hv0bLhu0iB1HarOU83oT_PS4SJ8eV1n/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
  .then(() => {
    msg.textContent = "You're on the list! See you in the future 🚀";
    msg.style.color = "#18FFB7";
  })
  .catch((error) => {
    console.error("Error:", error);
    msg.textContent = "Failed to connect. Try again later.";
    msg.style.color = "red";
  });

  e.target.reset();
}

const canvas = document.getElementById('ui-particles');
const ctx = canvas.getContext('2d');

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.2 + 0.3,
    dx: Math.random() * 0.3 - 0.15,
    dy: Math.random() * 0.3 - 0.15,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#00fff5";
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();

const cursorDot = document.getElementById("cursor-dot");

const lines = [
  "Proof of Human.",
  "In a world flooded by AI, Gensoul verifies what’s real.",
  "Built for creators. Not content."
];

let container = document.getElementById("typewriter-container");
let currentLine = 0;
let charIndex = 0;
let isTyping = true;

function typeNextChar() {
  if (!isTyping) return;

  if (charIndex < lines[currentLine].length) {
    container.innerHTML += lines[currentLine].charAt(charIndex);
    charIndex++;
    setTimeout(typeNextChar, 40);
  } else {
    container.innerHTML += "<br/>";
    currentLine++;
    if (currentLine < lines.length) {
      charIndex = 0;
      setTimeout(typeNextChar, 500);
    } else {
      isTyping = false; // Done typing
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeNextChar();
});
