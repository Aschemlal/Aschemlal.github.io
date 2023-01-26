let div = document.getElementById("mouse")
let titre = document.getElementById("titre")

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    div.style.left = x + "px"
    div.style.top = y + "px"
})
