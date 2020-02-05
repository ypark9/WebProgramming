var buttonlist = document.querySelectorAll("button");
for(var i = 0; i < buttonlist.length; i++)
{
    buttonlist[i].addEventListener("click", function (i) {
        var buttonInnerHtml = this.innerHTML; 
        var sound = new Audio("sounds/snare.mp3");
        switch(buttonInnerHtml)
        {
            case "w": sound = new Audio("sounds/crash.mp3");
            break;
            case "a": sound = new Audio("sounds/snare.mp3");
            break;
            case "s": sound = new Audio("sounds/kick-bass.mp3");
            break;
            case "d": sound = new Audio("sounds/tom-1.mp3");
            break;            
            case "j": sound = new Audio("sounds/tom-2.mp3");
            break;
            case "k": sound = new Audio("sounds/tom-3.mp3");
            break;
            case "l": sound = new Audio("sounds/tom-4.mp3");
            break;
        }
        sound.play();
    });
}

document.addEventListener('keydown', logKey);

function logKey(e) {
    var sound = new Audio("sounds/snare.mp3");
    
    switch(e.code)
    {
        case "KeyW": sound = new Audio("sounds/crash.mp3");
        break;
        case "KeyA": sound = new Audio("sounds/snare.mp3");
        break;
        case "KeyS": sound = new Audio("sounds/kick-bass.mp3");
        break;
        case "KeyD": sound = new Audio("sounds/tom-1.mp3");
        break;            
        case "KeyJ": sound = new Audio("sounds/tom-2.mp3");
        break;
        case "KeyK": sound = new Audio("sounds/tom-3.mp3");
        break;
        case "KeyL": sound = new Audio("sounds/tom-4.mp3");
        break;
    }
    sound.play();
}