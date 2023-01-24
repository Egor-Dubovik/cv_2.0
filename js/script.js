const tabButtons = document.querySelectorAll(".tabs__button");
const tabBlocks = document.querySelectorAll(".tabs__block");
const tabButtonsBlock = document.querySelector(".tabs__buttons");

const changeTabs = (event) => {
  tabButtons.forEach((button) =>
    button.classList.remove("tabs__button--active")
  );
  currentTabButton = event.target;
  currentTabButton.classList.add("tabs__button--active");

  tabBlocks.forEach((block) => {
    currentBlock = currentTabButton.dataset.tab;
    currentBlock === block.id
      ? block.classList.add("tabs__block--active")
      : block.classList.remove("tabs__block--active");
  });
};

const eventListeners = (event) => {
  event.preventDefault();

  if (event.target.classList.contains("tabs__button")) changeTabs(event);
};

tabButtonsBlock.addEventListener("click", eventListeners);
