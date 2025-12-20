gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      rotation: 5,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
    });
  },
});
