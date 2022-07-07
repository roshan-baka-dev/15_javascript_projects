
console.log("running");

const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    const r=getrandcolor();
    const g=getrandcolor();
    const b=getrandcolor();
    document.body.style.backgroundColor="rgb("+ r +","+ g +","+ b +")";
});

function getrandcolor()
{
    return Math.floor(Math.random()*1000)%300;
}