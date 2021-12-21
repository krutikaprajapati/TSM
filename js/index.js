// introslide run only when index page call means only one time
function introslide() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to('.intro-logo', { y: "0%", duration: 1 });
    tl.to('.intro-text', { y: "0%", duration: 1 });
    tl.to('.intro-lastRow', { opacity: 1, duration: 0.2, stagger: 0.2 });

    var id = setInterval(frame, 64);
    var intro = document.getElementById("intro");
    var loading = 0;
    // after sometime call to home page
    function frame() {
        if (loading == 100) {
            clearInterval(id);
            window.open("home.html", "_self");
        } else {
            loading = loading + 1;
            if (loading == 90) {
                intro.style.animation = "fadeout 1s ease";
            }
        }
    }
}

// Footer Section Gmail box input validation
function validation() {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
    }
}

//Targeting Top Button To scroll at the top
var topbutton = document.getElementById("topBtn");
var nav = document.getElementById("navbar");
// When the user scrolls down 20px from the top of the document, show the button
// window.addEventListener('scroll',scrollFunction())
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
        nav.style.background = "#161831";
    } else {
        topbutton.style.display = "none";
        nav.style.background = "transparent";
    }
}

// When the user clicks on the button, scroll to the top of the document
function atTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Disabling Functionality
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}



// // navbar active class on scroll
// const sections = document.querySelectorAll(".active-change");
// const navA = document.querySelectorAll("nav div .collapse .navbar-nav a");

// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navA.forEach((a) => {
//     a.classList.remove("active");
//     if (a.classList.contains(current)) {
//       a.classList.add("active");
//     }
//   });
// });