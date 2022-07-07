//set intial value
let count=0;

let value=document.getElementById("num");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        const id=e.currentTarget.id;
        if(id=="dec")
            count--;
        else if(id=="inc")
            count++;
        else
            count=0;
        
            console.log(count);

        value.textContent=count;
    });
});