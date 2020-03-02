
$('.btn').click(function() {
    let soundLocalLocation = 'sounds/' + this.id + '.mp3';
    let sound = new Audio(soundLocalLocation);
    sound.play();
});

document.addEventListener('keydown', function(e){    
    if(e.code === 'KeyA'){
        $('h1').text('Level 1');
    }
});

