let hours = 0;
let mins=0;
let secs=0;
let milisecs = 0;

let startBool = false;
let resetBool = false;
let pauseBool= true;

document.getElementById("start-but").onclick  
=()=>
{
    startBool = true;
    resetBool = false;
    pauseBool = false;
    document.getElementById("pause-but").textContent = "Pause";
    document.getElementById("display-number").classList.remove("paused");
    document.getElementById("pause-but").classList.remove("pauseBut-paused-state");
    document.getElementById("start-but").classList.remove("startBut-paused-state");
}

document.getElementById("pause-but").onclick
=()=>
{
    if (hours ==0 && mins ==0 && secs ==0 && milisecs ==0)
    {
        window.alert("You haven't start the timer yet!");   
    }
    else
    {
        resetBool=false;
        pauseBool = !pauseBool;
            
        if (pauseBool)
        {
            document.getElementById("pause-but").textContent = "Continue";
            document.getElementById("start-but").classList.add("startBut-paused-state");
            document.getElementById("pause-but").classList.add("pauseBut-paused-state");

            document.getElementById("display-number").classList.add("paused");
            startBool = false;
        } 
        else
        {
            document.getElementById("pause-but").textContent = "Pause";
            document.getElementById("start-but").classList.remove("startBut-paused-state");
            document.getElementById("pause-but").classList.remove("pauseBut-paused-state");

            document.getElementById("display-number").classList.remove("paused");
            startBool = true;
        }

    }
    
}

document.getElementById("reset-but").onclick
=()=>
{
    startBool = false;
    resetBool = true;
    pauseBool = false;
    document.getElementById("pause-but").textContent = "Pause";
    document.getElementById("display-number").classList.remove("paused");
    document.getElementById("pause-but").classList.remove("pauseBut-paused-state");
    document.getElementById("start-but").classList.remove("startBut-paused-state");
}

setInterval(() => 
{

    document.getElementById("hour-dis").textContent=String(hours).padStart(2, "0");
    document.getElementById("min-dis").textContent =String(mins).padStart(2, "0");
    document.getElementById("sec-dis").textContent =String(secs).padStart(2,"0");
    document.getElementById("milisec-dis").textContent =String(milisecs).padStart(2, "0");

    if(startBool && !pauseBool && !resetBool)
    {
        milisecs++;
        if (milisecs == 100)
        {
            milisecs = 0;

            document.querySelector("#sec-dis").style.setProperty('--anim-second', 0.65 + 's');
            document.querySelector("#sec-dis").classList.add("change-display");

            secs++;

            document.querySelector("#sec-dis").addEventListener("animationend", function()
            {
                document.querySelector("#sec-dis").classList.remove("change-display");
            }, {once: true});
        }
        if (secs == 60)
        {
            secs=0;

            document.querySelector("#min-dis").style.setProperty('--anim-second', 1.5 + 's');
            document.querySelector("#min-dis").classList.add("change-display");
            
            mins++;

            document.querySelector("#min-dis").addEventListener("animationend", function()
            {
                document.querySelector("#min-dis").classList.remove("change-display");
            }, {once: true});
        }
        if (mins == 60)
        {
            mins = 0;

            document.querySelector("#hour-dis").style.setProperty('--anim-second', 1.5 + 's');
            document.querySelector("#hour-dis").classList.add("change-display");

            hours++;

            document.querySelector("#hour-dis").addEventListener("animationend", function()
            {
                document.querySelector("#hour-dis").classList.remove("change-display");
            }, {once: true});
        }
        if(hours == 100)
        {
            hours = 0;
            mins = 0;
            secs=0;
            milisecs =0;
        }
    } 
    else if(!startBool && !pauseBool && resetBool)
    {
        hours = 0;
        mins =0;
        secs =0;
        milisecs=0;
    }

}, 10)
    