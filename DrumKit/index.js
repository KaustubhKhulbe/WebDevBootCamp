document.querySelectorAll(".drum").forEach(function(btn){
     btn.addEventListener("click", function(){
               playChar(btn.innerHTML);

               buttonAnimation(btn.innerHTML);
          })
     }
)

document.addEventListener("keydown", function(e){
     playChar(e.key);

     buttonAnimation(e.key);
})

function playChar(char){
     switch(char){
          case "w":
               new Audio('sounds/tom-1.mp3').play();
               break;
          case "a":
               new Audio('sounds/tom-2.mp3').play();
               break;
          case "s":
               new Audio('sounds/tom-3.mp3').play();
               break;
          case "d":
               new Audio('sounds/tom-4.mp3').play();
               break;
          case "j":
               new Audio('sounds/crash.mp3').play();
               break;
          case "k":
               new Audio('sounds/kick-bass.mp3').play();
               break;
          case "l":
               new Audio('sounds/snare.mp3').play();
               break;
          default:
     }
}

function buttonAnimation(char){
     var activeBtn = document.querySelector("." + char);
     activeBtn.classList.add("pressed");

     setTimeout(function (){
          activeBtn.classList.remove("pressed");
     }, 100);
}