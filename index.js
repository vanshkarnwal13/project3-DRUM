// document.querySelector(".w").addEventListener("click",handleClick);
// document.querySelector(".a").addEventListener("click",handleClick);
// document.querySelector(".s").addEventListener("click",handleClick);
// document.querySelector(".d").addEventListener("click",handleClick);
// document.querySelector(".j").addEventListener("click",handleClick);
// document.querySelector(".k").addEventListener("click",handleClick);
// document.querySelector(".l").addEventListener("click",handleClick);
document.querySelector(".btn").addEventListener("click",function(){
    alert("thanks for playing beats. see u soon...");
})


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML= this.innerHTML;
        handleClick(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    handleClick(event.key);
    buttonAnimation(event.key);
});

function handleClick(buttonInnerHTML){
   
   
    switch(buttonInnerHTML){
        case "w":
            var audio1=new Audio(src="sounds/tom-1.mp3");
            audio1.play();
            break;
            
        case "a":
            var audio2=new Audio(src="sounds/tom-2.mp3");
            audio2.play();
            break;
        
        case "s":
            var audio3=new Audio(src="sounds/tom-3.mp3");
            audio3.play();
            break;
        
        case "d":
            var audio4=new Audio(src="sounds/tom-4.mp3");
            audio4.play();
            break;
            
        case "j":
            var audio5=new Audio(src="sounds/snare.mp3");
            audio5.play();
            break;
            
        case "k":
            var audio6=new Audio(src="sounds/crash.mp3");
            audio6.play();
            break;  
            
        case "l":
            var audio7=new Audio(src="sounds/kick-bass.mp3");
            audio7.play();
            break;
        
        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },300);

}

