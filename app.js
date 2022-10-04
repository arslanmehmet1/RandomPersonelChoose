const question = document.querySelector(".questionNumber");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");

const buttonWho = document.querySelector(".who");
const buttonStart = document.querySelector(".start");

buttonWho.addEventListener("click", () => {
  const teamList = ["Joe", "FümeGri", "Mehmet", "İsmail", "Sezgin", "Murat"];
  let random = Math.trunc(Math.random() * 6);
  name.innerText = `${teamList[random]}`;
});

// const myInterval = () => {
//   if (counter < random2) {
//     counter++;
//     buttonWho.click();
//   } else {
//     name.classList.add("newName");
//     clearInterval(myChoose);
//   }
// };

buttonStart.addEventListener("click", () => {
  name.classList.remove("newName");
  let random2 = Math.trunc(Math.random() * 5) + 5;
  let counter = 0;
  const myChoose = setInterval(() => {
    if (counter < random2) {
      counter++;
      buttonWho.click();
    } else {
      name.classList.add("newName");
      clearInterval(myChoose);
    }
  }, 700);
});
