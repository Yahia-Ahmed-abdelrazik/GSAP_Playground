import gsap from "gsap";
const card = document.querySelector("#card");

gsap.from(card, {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power4.Out",
});

//
card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 1.8,
    ease: "power4.inOut",
    transformPerspective: 1200,
    transformOrigin: "center",
  });
});
//
card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 1.8,
    ease: "power4.inOut",
    transformPerspective: 1200,
    transformOrigin: "center",
  });
});
