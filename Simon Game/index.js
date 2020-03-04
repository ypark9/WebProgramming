function gameLevelGenerator() {
    let count = window.game.stage;
    for(let i = 0; i < count; i++){
        //console.log(i);
        if(window.game.content) {
            window.game.content. push(Math.floor(Math.random() * 4));     // returns a random integer from 1 to 4
        }
        else {
            window.game.content = [];
            window.game.stage = [Math.floor(Math.random() * 4)];
        }
    }

    for(let step of window.game.stage){
        if(step === 0){
            $(".green").trigger('click');
            $('.green').addClass('pressed');
            setTimeout(() => {
                $('.green').removeClass("pressed");
            }, 200);
        }
        else if (step === 1){
            $(".red").trigger('click');
            $('.red').addClass('pressed');
            setTimeout(() => {
                $('.red').removeClass("pressed");
            }, 200);        }
        else if(step === 2){
            $(".yellow").trigger('click');
            $('.yellow').addClass('pressed');
            setTimeout(() => {
                $('.yellow').removeClass("pressed");
            }, 200);        }
        else if (step === 3){
            $(".blue").trigger('click');
            $('.blue').addClass('pressed');
            setTimeout(() => {
                $('.blue').removeClass("pressed");
            }, 200);
        }
    }
}

$(".btn").click(function(){    
    let soundAddress = "sounds/" + this.id + ".mp3";
    let sound = new Audio(soundAddress);
    sound.play();
});

document.addEventListener('keydown', function(e) {    
    if(e.code === "KeyA")
    {   
        if($('h1').text() === 'Press A Key to Start') {
            $('h1').text('Stage 1');
            window.game = {};
            window.game['stage'] = 1;
            gameLevelGenerator();
        }
        else {
            alert('Game is already started! :) ');
        }
    }
});


