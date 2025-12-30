import gsap from "gsap";

const toast = document.querySelectorAll(".toast");
// console.log(hightOfTost);
const showToastLoop = () => {
  gsap.to(toast, {
    y: function (index, target) {
      const hightOfTost = target.offsetHeight;
      return -140 - index * (hightOfTost + 5);
    },
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power2.Out",
    stagger: 1,
    onComplete() {
      gsap.to(toast, {
        y: 0,
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        delay: 1,
        stagger: 0.8,
        ease: "power2.Out",
        onComplete: showToastLoop,
      });
    },
  });
};

showToastLoop();
