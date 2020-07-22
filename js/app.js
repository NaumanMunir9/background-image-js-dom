(function () {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
  ];
  let counter = 0;

  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        console.log(counter);
        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }

      if (target.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        console.log(counter);
        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();
