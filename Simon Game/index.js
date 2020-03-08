window.color = ['green', 'red', 'yellow', 'blue'];

function gameLevelGenerator() {
  window.game.inputArr = [];
  let count = window.game.stage;
  console.log("window stage = " + window.game.stage);

  if (window.game.content) {
    window.game.content.push(Math.floor(Math.random() * 4)); // returns a random integer from 0 to 3
  } else {
    window.game.content = [Math.floor(Math.random() * 4)];
  }

  setTimeout(function() {
    displayPatter(0, window.game.content);
  }, 1000);
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
    console.log("user input " + window.game.inputArr);
    console.log("game content" + window.game.content);

    
    if(window.game.content.length === window.game.inputArr.length ){
        if((window.game.content.toString() ) === (window.game.inputArr.toString())){
            window.game.stage ++;
            let stageName = 'Stage ' + window.game.stage; 
            $('h1').text(stageName);
            gameLevelGenerator();
        }else {
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
      
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 200);
      
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

//  Used to display the full pattern to the player
function displayPatter(index, array) {
    if(index >= array.length)
      return;
   
    $("#" + window.color[array[index]]).fadeOut(150).fadeIn(150);
    playSound(window.color[array[index]]);
    index ++;
    setTimeout(displayPatter.bind({}, index, array), 500);
  }


// function playEffect(color) {
//     playSound(color);
//     $('.'+color).addClass('pressed');
//     setTimeout(() => {
//         $('.'+color).removeClass("pressed");
//     }, 200);
// }

function playSound(name) {
    let soundAddress = "sounds/" + name + ".mp3";
    let sound = new Audio(soundAddress);
    sound.play();
}

