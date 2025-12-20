import gsap from "gsap";
gsap.to(".box", {
  opacity: 1,
  scale: 1.2,
  rotate: 360,
  borderRadius: "50%",
  y: 100,
  x: 200,
  duration: 2,
  ease: "power2.inOut",
  yoyo: true,
  repeat: -1,
});
