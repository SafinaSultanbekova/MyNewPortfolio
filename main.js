function bgchange(color) {
    let colorarray = ["#eacbb0", "#230b06"];
    document.body.style.background = colorarray[color];
}
 
var colorarray = ["#eacbb0", "#230b06"];
var colorbox = document.getElementById("colorbox");
 
colorarray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgchange(index);
    });
    colorbox.appendChild(span);
});