const btn=document.querySelectorAll(".nav-icon");
const header=document.querySelector(".header");

btn[0].addEventListener('click',function(){
    header.className+=" active";
});

btn[1].addEventListener('click',function(){
    header.className="header";
});