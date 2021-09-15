const navIcon = document.querySelector(".navIcon");
      const navMenu = document.querySelector(".navMenu");
      const navBar = document.querySelector(".navBar");

      navIcon.addEventListener("click", () => {
        navMenu.classList.toggle("navShow");
        navIcon.classList.toggle("open");
        navBar.classList.toggle("navTransition");
      })