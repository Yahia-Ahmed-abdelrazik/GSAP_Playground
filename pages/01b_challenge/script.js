import { gsap } from "gsap";

gsap.to(".card", {
  boxShadow: "0px 0px 40px rgba(84, 160, 255,.8)",
  duration: 0.5,
  yoyo: true,
  scale: 0.85,
  repeat: -1,
});
