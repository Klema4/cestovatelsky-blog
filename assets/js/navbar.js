navbar_toggle = document.getElementById("nav-toggler");
navbar_links = document.getElementsByClassName("nav-links");

function toggle_navbar() {
    for (var i = 0; i < navbar_links.length; i++) {
        navbar_links[i].classList.toggle("active");
    }
}

var theme_toggler = document.getElementById("theme-toggler");

function toggle_theme() {
    document.body.classList.toggle("dark-theme");
    if (theme_toggler.innerHTML == '<i class="ph-bold ph-moon"></i>') {
        theme_toggler.innerHTML = '<i class="ph-bold ph-sun"></i>';
    } else {
        theme_toggler.innerHTML = '<i class="ph-bold ph-moon"></i>';
    }

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

var cookies_consent = localStorage.getItem("cookies_consent");
if (cookies_consent == "true") {
    document.getElementById("cookies").style = "opacity: 0; visibility: hidden;";
} else {
    document.getElementById("cookies").style = "opacity: 1; visibility: visible;";
    // Block scrolling
    document.body.style.overflow = "hidden";
}

function accept_cookies() {
    localStorage.setItem("cookies_consent", "true");
    document.getElementById("cookies").style = "opacity: 0; visibility: hidden;";
    // Allow scrolling
    document.body.style.overflow = "unset";
}

function decline_cookies() {
    localStorage.setItem("cookies_consent", "false");
    document.getElementById("cookies").style = "opacity: 0; visibility: hidden;";
    // Allow scrolling
    document.body.style.overflow = "unset";
}

if (cookies_consent == "true") {
    var theme = localStorage.getItem("theme");
    if (theme == "dark") {
        document.body.classList.add("dark-theme");
        theme_toggler.innerHTML = '<i class="ph-bold ph-moon"></i>';
    } else {
        document.body.classList.remove("dark-theme");
        theme_toggler.innerHTML = '<i class="ph-bold ph-sun"></i>';
    }
}