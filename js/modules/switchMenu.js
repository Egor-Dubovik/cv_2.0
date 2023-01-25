const menuBody = document.querySelector(".menu__body");
const iconBurger = document.querySelector(".icon-menu");
const blackoutBlock = document.querySelector(".blackout");

function closeMenu(arr) {
  arr.forEach((el) => el.classList.remove("_active"));
}

function openMenu(...arr) {
  arr.forEach((el) => el.classList.toggle("_active"));
  document.body.classList.toggle("_lock");
}

export const switchMenu = () => {
  iconBurger.addEventListener("click", () => {
    openMenu.apply(this, [menuBody, iconBurger, blackoutBlock]);
  });

  menuBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__link")) {
      closeMenu([menuBody, iconBurger, blackoutBlock]);
      document.body.classList.remove("_lock");
    }
  });

  document.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".menu")) {
      closeMenu([menuBody, iconBurger, blackoutBlock]);
      document.body.classList.remove("_lock");
    }
  });
};
