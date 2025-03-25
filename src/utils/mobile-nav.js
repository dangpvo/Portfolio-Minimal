const mobileNav = () => {
  const headerBars = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;

  function showMobileNav() {
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
  }

  function hideMobileNav() {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }

  headerBars.addEventListener("click", function () {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      showMobileNav();
    } else {
      hideMobileNav();
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      isMobileNavOpen = false;
      hideMobileNav();
    });
  });
};

export default mobileNav;
