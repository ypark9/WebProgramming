var buttonlist = document.querySelectorAll("button");
for(var i = 0; i < buttonlist.length; i++)
{
    buttonlist[i].addEventListener("click", function() {
        alert("I got clicked.");}
        );
}