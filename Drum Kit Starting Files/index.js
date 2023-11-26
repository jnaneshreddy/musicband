

for  (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var btninner = this.innerHTML;
palysound(btninner);
btnanimation(btninner);
   
        
        });
}

document.addEventListener("keydown",function(event){
    palysound(event.key);
    btnanimation(event.key);
    
})

function palysound(key){

    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();            
        break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3')
            kick.play();
        break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom = new Audio('./sounds/tom-1.mp3');
            tom.play();
        break;
        case  "j":
            var hihat = new Audio('./sounds/tom-2.mp3');
            hihat.play();
        break;
        case  "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break;
        case  "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;
            
    
        default :
            break;
    }
}

function btnanimation(pressedkey){
    var activebtn = document.querySelector("."+pressedkey);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100)

}