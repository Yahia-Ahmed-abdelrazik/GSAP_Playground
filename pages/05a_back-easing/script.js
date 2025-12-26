import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  const targetRect = target.getBoundingClientRect();
  const rowRect = tabRow.getBoundingClientRect();

  const width = targetRect.width;
  const offset = targetRect.left - rowRect.left;

  gsap.to(indicator, {
    width: width,
    x: offset,
    duration: 0.4,
    ease: "back.out(1.7)",
  });

  console.log("targetRect", targetRect, "rowRect", rowRect);
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});
