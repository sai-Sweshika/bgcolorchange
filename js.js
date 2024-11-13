let input=document.getElementById("color")
let input2=document.getElementById("bRadius")
let image=document.querySelector("img");

function colorChange(z){
    console.log(z);

    if(z.key==="Enter"){
        document.body.style.background=`linear-gradient(${input.value})`
    }
}


function RadiusChange(z){
    console.log(z);

    if(z.key==="Enter"){
        image.style.borderRadius=`${input2.value}px`
    }
}