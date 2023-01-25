const header = document.querySelector(".header");
const menuBody = document.querySelector(".menu__body");
const iconBurger = document.querySelector(".icon-menu");
const blackoutBlock = document.querySelector(".blackout");

function closeMenu(arr) {
  arr.forEach((el) => el.classList.remove("_active"));
}

function openMenu(...arr) {
  arr.forEach((el) => el.classList.toggle("_active"));
  document.body.classList.toggle("_lock");
  header.classList.toggle("_backgroun-visible");
}

export const switchMenu = () => {
  iconBurger.addEventListener("click", () => {
    openMenu.apply(this, [menuBody, iconBurger, blackoutBlock]);
  });

  menuBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu__link")) {
      closeMenu([menuBody, iconBurger, blackoutBlock]);
      document.body.classList.remove("_lock");
      header.classList.add("_backgroun-visible");
    }
  });

  document.addEventListener("mousedown", (event) => {
    if (!event.target.closest(".menu")) {
      closeMenu([menuBody, iconBurger, blackoutBlock]);
      document.body.classList.remove("_lock");
      header.classList.add("_backgroun-visible");
    }
  });
};
