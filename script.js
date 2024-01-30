let marks=document.getElementById("h31").innerText;

let counter=0;
setInterval(() => {
    if(marks==70)
    {
        clearInterval();
    }
    else{
        counter+=2;
        document.getElementById("h31").innerText = counter+"%";
        marks=counter;
    }
}, 120);

let marks_1=document.getElementById("h32").innerText;
let counter_1=0;
setInterval(() => {
    if(marks_1==80)
    {
        clearInterval();
    }
    else{
        counter_1+=2;
        document.getElementById("h32").innerText = counter_1+"%";
        marks_1=counter_1;
    }
}, 120);

let marks_2=document.getElementById("h33").innerText;
let counter_2=0;
setInterval(() => {
    if(marks_2==90)
    {
        clearInterval();
    }
    else{
        counter_2+=2;
        document.getElementById("h33").innerText = counter_2+"%";
        marks_2=counter_2;
    }
}, 130);

let marks_3=document.getElementById("h34").innerText;
let counter_3=0;
setInterval(() => {
    if(marks_3==85)
    {
        clearInterval();
    }
    else{
        counter_3+=2;
        document.getElementById("h34").innerText = counter_3+"%";
        marks_3=counter_3;
    }
}, 130);
let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let btn=document.querySelector("#formbtn");
    btn.className="succesbtn";
    let msg=form.appendChild("h4");  
    msg.innerText="Message sent succesfully";
    msg.style.Color="green";  
})