function toggleTheme () {
    var container = document.body;
    container.classList.toggle("dark-mode");
}

var togglebutton = document.getElementById("toggleButton");
togglebutton.onclick = toggleTheme;