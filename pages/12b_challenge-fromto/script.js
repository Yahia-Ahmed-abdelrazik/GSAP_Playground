import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button");
const container = document.querySelector(".reactions");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const emoji = btn.dataset.emoji;

    // Create emoji element
    const span = document.createElement("span");
    span.classList.add("reaction-emoji");
    span.textContent = emoji;
    container.appendChild(span);

    // Button position
    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const startX = btnRect.left - containerRect.left + btnRect.width / 2;
    const startY = btnRect.top - containerRect.top + btnRect.height / 2;

    // Initial position
    gsap.set(span, {
      x: startX - 50,
      y: startY - 50,
      scale: 0.6,
      opacity: 1,
    });

    // Animation
    gsap.fromTo(
      span,
      {
        y: startY - 50,
        scale: 0.6,
        rotation: 0,
        opacity: 1,
      },
      {
        y: startY - 120,
        scale: 1.2,
        rotation: gsap.utils.random(-30, 30),
        opacity: 0,
        duration: 1.2,
        ease: "power1.out",
        onComplete: () => span.remove(),
      }
    );
  });
});
