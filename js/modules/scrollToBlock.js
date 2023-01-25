const anchors = document.querySelectorAll("a[href*='#']");

const scrollFeature = (block) => {
  window.scroll({
    left: 0,
    top: block.offsetTop - 80,
    behavior: "smooth",
  });
};

export const scrollToblock = () => {
  for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      scrollFeature(document.querySelector("" + blockID));
    });
  }
};
