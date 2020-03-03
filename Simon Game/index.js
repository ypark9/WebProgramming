

function initGame() {
    this.game = {};
    this.totalCount = 1;
    this.isStarted = true;
    console.log(initGame);
}

function gameLevelGenerator() {
    let count = this.totalCount;
    for(let i = 0; i < count; i++){
        //console.log(i);
        if(this.game[totalCount])
        push(Math.floor(Math.random() * 4));     // returns a random integer from 1 to 4
        else
        this.game[totalCount] = [Math.floor(Math.random() * 4)];
    }

    for(let step of this.game[totalCount]){
        if(step === 0){
            $(".green").trigger('click');
        }
        else if (step === 1){
            $(".red").trigger('click');
        }
        else if(step === 2){
            $(".yellow").trigger('click');
        }
        else if (step === 3){
            $(".blue").trigger('click');
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
        console.log(this.isStarted);
        if(this.isStarted)
            alert("Game is started, you babo Pumba!")
        else
            initGame();
    }
});


