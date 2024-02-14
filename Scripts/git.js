const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yesBtn");
const moveRandom = document.querySelector("#move-random");

yesBtn.addEventListener("click", () => {
    question.innerHTML =
    gif.src =

    yesBtn.addEventListener("click", () => {
        question.innerHTML =
        gif.src =
    });
});

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}


moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});
