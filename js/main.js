
let containerMain = document.getElementById("container_main")

for (let i = 1; i < 101; i++) {
    console.log(i);
    const div = document.createElement("div")
    div.classList.add("square");
    containerMain.appendChild(div)

    div.addEventListener("click", function(){
        div.innerHTML = i
    })
}