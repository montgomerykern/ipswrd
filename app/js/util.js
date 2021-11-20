var slider = document.getElementById("length");
var output = document.getElementById("difficulty");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}