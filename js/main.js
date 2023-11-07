
let play = document.getElementById("buttonPlay")

let containerMain = document.getElementById("container_main")

let level = document.getElementById("level")


play.addEventListener("click", function(){

    if (level.value == "easy") {
        console.log("selezionato easy");
        for (let i = 1; i < 101; i++) {
            console.log(i);
            const div = document.createElement("div")
            div.classList.add("square_easy");
            containerMain.appendChild(div)
        
            div.addEventListener("click", function () {
                if (div.innerHTML == "") {
                    div.innerHTML = i;
                } else {
                    div.innerHTML = "";
                }
                div.classList.toggle("square_bg");
            });
        }
    } else if (level.value == "med") {
        console.log("selezionato med");
        for (let i = 1; i < 82; i++) {
            console.log(i);
            const div = document.createElement("div")
            div.classList.add("square_medium");
            containerMain.appendChild(div)
        
            div.addEventListener("click", function () {
                if (div.innerHTML == "") {
                    div.innerHTML = i;
                } else {
                    div.innerHTML = "";
                }
                div.classList.toggle("square_bg");
            });
        }
    } else {
        for (let i = 1; i < 50; i++) {
            console.log(i);
            const div = document.createElement("div")
            div.classList.add("square_hard");
            containerMain.appendChild(div)
        
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

    


})