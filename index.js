var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0; i< numberOfDrumButton; i++){

document.querySelectorAll("button")[i].addEventListener("mouseover", 
    function ()
    { 
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
);
}


document.addEventListener("keypress", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
} 
);


function makeSound(key){
    // console.log(key)
    switch (key) {
        case "s":
             var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();
             break;
        case "r":
             var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;
        case "g":
             var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;
        case "m":
             var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
             break;
        case "p":
             var snare = new Audio('sounds/snare.mp3');
             snare.play();
             break;
        case "d":
             var crash = new Audio('sounds/crash.mp3');
             crash.play();
             break;
        case "n":
             var kick = new Audio('sounds/kick-bass.mp3');
             kick.play();
             break;
    
        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentkey)
{
     var activebutton = document.querySelector("."+currentkey);

     activebutton.classList.add("pressed")

     setTimeout(function()  {
          activebutton.classList.remove("pressed");
     }, 100);
}



