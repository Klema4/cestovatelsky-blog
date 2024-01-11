navbar_toggle = document.getElementById("nav-toggler");
navbar_links = document.getElementsByClassName("nav-links");

function toggle_navbar() {
    for (var i = 0; i < navbar_links.length; i++) {
        navbar_links[i].classList.toggle("active");
    }
}