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
}

setInterval(() => 
{
    if (hours < 10)
    {
        document.getElementById("hour-dis").textContent = `${0}${hours}`;
    }
    else
    {
        document.getElementById("hour-dis").textContent = hours;
    }
    if (mins < 10)
    {
        document.getElementById("min-dis").textContent = `${0}${mins}`;
    }
    else
    {
        document.getElementById("min-dis").textContent = mins;
    }
    if (secs < 10)
    {
        document.getElementById("sec-dis").textContent = `${0}${secs}`;
    }
    else
    {
        document.getElementById("sec-dis").textContent = secs;
    }
    if (milisecs < 10)
    {
        document.getElementById("milisec-dis").textContent = `${0}${milisecs}`;

    }
    else
    {
        document.getElementById("milisec-dis").textContent = milisecs;
    }
    
    if(startBool && !pauseBool && !resetBool)
    {
        milisecs++;
        if (milisecs == 100)
        {
            milisecs = 0;
            secs++;
        }
        if (secs == 60)
        {
            secs=0;
            mins++;
        }
        if (mins == 60)
        {
            mins = 0;
            hours++;
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
    