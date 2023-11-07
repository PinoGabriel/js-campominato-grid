
let play = document.getElementById("buttonPlay")

let containerMain = document.getElementById("container_main")

let level = document.getElementById("level")



play.addEventListener("click", function () {
    containerMain.innerHTML = ""

    if (level.value == "easy") {
        console.log("selezionato easy");
        generaGriglia(100, "square_easy");
    } else if (level.value == "med") {
        console.log("selezionato med");
        generaGriglia(81, "square_medium")
    } else {
        generaGriglia(49, "square_hard")
    }

})



function generaGriglia(numeroCelle, className) {
    for (let i = 1; i <= numeroCelle; i++) {
        console.log(i);
        const div = document.createElement("div");
        div.classList.add(className);
        containerMain.appendChild(div);

        div.addEventListener("click", function () {
            if (div.innerHTML == "") {
                div.innerHTML = i;
            } else {
                div.innerHTML = "";
            }
            div.classList.toggle("square_bg");
        });
    }
}