function changeImage(index, num) {
    var imgAddress = "";
    switch (num) {
        case 1: imgAddress = "images/dice1.png";
            break;
        case 2: imgAddress = "images/dice2.png";
            break;
        case 3: imgAddress = "images/dice3.png";
            break;
        case 4: imgAddress = "images/dice4.png";
            break;
        case 5: imgAddress = "images/dice5.png";
            break;
        case 6: imgAddress = "images/dice6.png";
            break;
        default:
            imgAddress = "images/dice1.png";
    }

    document.querySelectorAll("img")[index].setAttribute("src", imgAddress);
}

var num = Math.floor(Math.random() * 6) + 1; 
var num2 = 0; 
// run this loop until numberOne is different than numberThree
do {
    num2 = Math.floor(Math.random() * 6);
} while(num === num2);

changeImage(0, num);
changeImage(1, num2);

if(num > num2)
{
    document.querySelector("h1").textContent = "Player 1 won!"
}
else if((num < num2))
{
    document.querySelector("h1").textContent = "Player 2 won!"
}
else
{
    document.querySelector("h1").textContent = "Drew!"
}
