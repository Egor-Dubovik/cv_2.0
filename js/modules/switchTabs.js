const tabButtonsBlock = document.querySelector(".tabs__buttons");
const tabButtons = document.querySelectorAll(".tabs__button");
const tabBlocks = document.querySelectorAll(".tabs__block");

export const switchTabs = (event) => {
  if (event != undefined) {
    event.preventDefault();

    tabButtons.forEach((button) =>
      button.classList.remove("tabs__button_active")
    );

    const currentTabButton = event.target;
    currentTabButton.classList.add("tabs__button_active");

    tabBlocks.forEach((block) => {
      const currentBlock = currentTabButton.dataset.tab;
      currentBlock === block.id
        ? block.classList.add("tabs__block_active")
        : block.classList.remove("tabs__block_active");
    });
  }
};

tabButtonsBlock.addEventListener("click", switchTabs);
