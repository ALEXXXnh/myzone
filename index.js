

const bttn1 = document.querySelector(".projects")
bttn1.addEventListener('click', function (){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".projectspage").style.display = "flex";
    });   
const bttn2 = document.querySelector(".backprojects")
bttn2.addEventListener('click', function (){
    document.querySelector(".home").style.display = "flex";
    document.querySelector(".projectspage").style.display = "none";
    });
const bttn3 = document.querySelector(".items")
bttn3.addEventListener('click', function (){
    document.querySelector(".wishlist").style.display = "flex";
    document.querySelector(".home").style.display = "none";
    });
const bttn4 = document.querySelector(".backwish")
bttn4.addEventListener('click', function (){
    document.querySelector(".home").style.display = "flex";
    document.querySelector(".wishlist").style.display = "none";
    });
const bttn5 = document.querySelector(".linqs")
bttn5.addEventListener('click', function (){
    document.querySelector(".about").style.display = "flex";
    document.querySelector(".home").style.display = "none";
    });
const bttn6 = document.querySelector(".backme")
bttn6.addEventListener('click', function (){
    document.querySelector(".about").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    });
const bttn7 = document.querySelector(".assets")
bttn7.addEventListener('click', function (){
    document.querySelector(".assetz").style.display = "flex";
    document.querySelector(".home").style.display = "none";
    });
const bttn8 = document.querySelector(".backassets")
bttn8.addEventListener('click', function (){
    document.querySelector(".assetz").style.display = "none";
    document.querySelector(".home").style.display = "flex";
    });


