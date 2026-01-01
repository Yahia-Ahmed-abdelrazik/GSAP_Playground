import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 80,
  opacity: 0,
  scale: 0.9,
  delay: 0.2,
  duration: 1,
  ease: "power3.Out",
  stagger: 0.3,
});

repeat.addEventListener("click", () => {
  animation.restart();
});
