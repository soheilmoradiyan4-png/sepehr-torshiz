const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("active");

        }

    });

});


const topBtn = document.getElementById("topBtn");

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


const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 25px rgba(212,175,55,0.4)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});