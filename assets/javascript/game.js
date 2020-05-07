const reset_Button = document.querySelector("#reset-button");
const shoot1_Button = document.querySelector("#teamone-shoot-button");
const shoot2_Button = document.querySelector("#teamtwo-shoot-button");


let num_Resets = document.querySelector("#num-resets");
let shot1_Total = document.querySelector("#teamone-numshots");
let goal1_Total = document.querySelector("#teamone-numgoals");
let shot2_Total = document.querySelector("#teamtwo-numshots");
let goal2_Total = document.querySelector("#teamtwo-numgoals");
let reset_Result = document.querySelector("#reset-result");

shoot1_Button.addEventListener("click", function () {
    shot1_Total.innerHTML++;
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 51) {
        goal1_Total.innerHTML++;
    }
});

shoot2_Button.addEventListener("click", function () {
    shot2_Total.innerHTML++;
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 51) {
        goal2_Total.innerHTML++;
    }
});

reset_Button.addEventListener("click", function () {
    let totalNumResets = Number(num_Resets.innerHTML) + 1;
    shot1_Total.innerHTML = 0;
    goal1_Total.innerHTML = 0;
    shot2_Total.innerHTML = 0;
    goal2_Total.innerHTML = 0;
    num_Resets.innerHTML = totalNumResets;
});

