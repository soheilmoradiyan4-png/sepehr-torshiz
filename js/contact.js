const revealElements =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    revealElements.forEach(element => {

        const top =
        element.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            element.classList.add("active");

        }

    });

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const cards =
document.querySelectorAll(".contact-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 25px rgba(212,175,55,.4)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});