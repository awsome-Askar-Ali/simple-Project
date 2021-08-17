var doc = document.querySelectorAll(".drum").length
for (i = 0; i < doc; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3');
        audio.play();
    })






// store = document.getElementById("Hello")
// h2 = document.createElement("h2")
// h2.name = "jjj"
// store.appendChild(h2)
// console.log(h2)

// function add(numb1, numb2) {
//     return numb1 + numb2
// }

// function sub(numb1, numb2) {
//     return numb1 - numb2
// }

// function add(numb1, numb2) {
//     return numb1 * numb2
// }

// function calc(numb1, numb2, ee) {
//     return ee(numb1, numb2)
// }