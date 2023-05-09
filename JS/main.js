const background = document.querySelector(".body");
const wrapper = document.querySelector(".wrapper");
const buttonL = document.querySelector("#button-light-switch");
const buttonD = document.querySelector("#button-dark-switch");
const text = document.querySelectorAll(".text-color");


buttonD.addEventListener("click", function () {
  background.classList.remove("body");
  wrapper.classList.remove("wrapper");
  text.forEach((item)=> item.classList.remove('text-color'));

  background.classList.add("body-background-color-dr");
  wrapper.classList.add("wrapper-color-dr");

  text.forEach((item)=> item.classList.add('text-color-dr'));
});

buttonL.addEventListener("click", function () {
  background.classList.remove("body-background-color-dr");
  wrapper.classList.remove("wrapper-color-dr");
  text.forEach((item)=> item.classList.remove('text-color-dr'));

  background.classList.add("body");
  wrapper.classList.add("wrapper");

  text.forEach((item)=> item.classList.add('text-color'));
});
