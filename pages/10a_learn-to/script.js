import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "power2.Out",
    onComplete() {
      gsap.to(".toast", {
        y: 0,
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        delay: 2.5,
        ease: "power2.Out",
        onComplete: showToastLoop,
      });
    },
  });
};

showToastLoop();
