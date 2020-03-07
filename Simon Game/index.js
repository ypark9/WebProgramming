function gameLevelGenerator() {
    window.game.inputArr = [];
    let count = window.game.stage;
    for(let i = 0; i < count; i++){
        //console.log(i);
        if(window.game.content) {
            window.game.content.push(Math.floor(Math.random() * 4));     // returns a random integer from 0 to 3
        }
        else {
            //window.game.content = [];
            window.game.content = [Math.floor(Math.random() * 4)];
        }
    }

    for(let step of window.game.content){
        // (function(step){
        //     setTimeout(function(){
        //         console.log('value is ', step);
        //     }, 3000);
        // })(step);

        if(step === 0){
            playSound('green');
            $('.green').addClass('pressed');
            setTimeout(() => {
                $('.green').removeClass("pressed");
            }, 200);
        }
        else if (step === 1){
            playSound('red');
            $('.red').addClass('pressed');
            setTimeout(() => {
                $('.red').removeClass("pressed");
            }, 200);        }
        else if(step === 2){
            playSound('yellow');
            $('.yellow').addClass('pressed');
            setTimeout(() => {
                $('.yellow').removeClass("pressed");
            }, 200);        }
        else if (step === 3){
            playSound('blue');
            $('.blue').addClass('pressed');
            setTimeout(() => {
                $('.blue').removeClass("pressed");
            }, 200);
        }
    }
}

$(".btn").click(function(){ 
    playSound(this.id);
    console.log(this.id);
    
    let choice = 1;
    if(this.id  === "green"){
        choice = 0;
    }
    else if (this.id  === 'red'){
        choice = 1;
    }
    else if(this.id  === 'yellow'){
        choice = 2;
    }
    else if (this.id  === "blue"){
        choice = 3;
    }
    console.log('choice = ' + choice);
    
    window.game.inputArr.push(choice);
    console.log(window.game.inputArr);
    console.log(window.game.content);

    
    if(window.game.content.length === window.game.inputArr.length ){
        if(JSON.stringify(window.game.content ) === JSON.stringify(window.game.inputArr)){
            alert('Correct!');
            window.game.stage ++;
            let stageName = 'Stage ' + window.game.stage; 
            $('h1').text(stageName);
            gameLevelGenerator();
        }else {
            alert('Uh oh..!');
            let stageName = 'Game over '; 
            $('h1').text(stageName);
            window.game.stage = 0;
        }
    }
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


function playSound(name) {
    let soundAddress = "sounds/" + name + ".mp3";
    let sound = new Audio(soundAddress);
    sound.play();
}

