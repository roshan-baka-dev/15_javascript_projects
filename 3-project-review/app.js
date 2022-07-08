const review = [
    {
        id:1,
        name:"roshan lakra",
        job:"web developer",
        img:"https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_960_720.jpg",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti consequatur similique cum delectus natus rem quae corporis vel rerum nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eveniet optio facilis ad iure recusandae odit perferendis. Labore, porro nobis."
    },
    {
        id:2,
        name:"anish lakra",
        job:"Gamer",
        img:"https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_960_720.jpg",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean"
    },
    {
        id:3,
        name:"ajit kujur",
        job:"video editor",
        img:"https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",
        text:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic"
    },
]

//select items
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');


const prevbtn=document.querySelector(".prev-btn");
const randbtn=document.querySelector(".random-btn");
const nextbtn=document.querySelector(".next-btn");

let currentItem=0;


// window.addEventListener('DOMContentLoaded',function(){
//     show(currentItem);
// });

function show(person){
    const item=review[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

//add eventlistener for previous button

prevbtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0)
        currentItem=review.length-1;
    show(currentItem);
});

//add eventlistener for next button

nextbtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>review.length-1)
        currentItem=0;
    show(currentItem);
});

//add eventlistener for random button

randbtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*10)%3;
    show(currentItem);
});