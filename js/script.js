import { switchMenu } from "./modules/switchMenu.js";
import { scrollToblock } from "./modules/scrollToBlock.js";
import { switchTabs } from "./modules/switchTabs.js";

const preloader = document.querySelector(".preloader");

window.onload = function () {
  setTimeout(() => {
    if (!preloader.classList.contains("_done")) {
      preloader.classList.add("_done");
    }
    switchMenu();
    scrollToblock();
    switchTabs();
  }, 500);
};
