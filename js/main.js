let div = document.getElementById("mouse")
let title = document.getElementById("title")

document.addEventListener("mousemove", function(e) {
    var x = e.clientX-6;
    var y = e.clientY-6;
    div.style.left = x + "px"
    div.style.top = y + "px"
})


title.addEventListener("mouseover", function(e) {
    video.classList.add("oui")
    e.stopPropagation()
})
