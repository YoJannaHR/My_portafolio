const d = document;

export function hamburgetMenu(panelBtn, panel, menuLink) {


  d.addEventListener("click", (e) => {

    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
      console.log("ya cambie");
    }
    if(e.target.matches(menuLink)){
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
