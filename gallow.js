var word = "Kto rano wstaje temu pan bóg daje";
word = word.toUpperCase();

var length = word.length;
var lettersSet = ['A','Ą','B','C','Ć','D','E','Ę','F','G', 'H', 'I','J','K','L','Ł','M','N','Ń', 'O','Ó', 'P','Q','R','S','Ś', 'T','U','V','W','X','Y','Z','Ź','Ż'];

var fail_count=0;

var word1 = "";

for(i=0;i<length;i++)
{
    if(word.charAt(i)==" ")word1 = word1 + " ";
    else word1 = word1 + "-";
}


function show_word()
{
    document.getElementById("field").innerHTML = word1;
}
function start()
{
    var divText = "";

    for(i=0;i<35;i++)
    {
        var element = "lett"+i;
        divText = divText + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+lettersSet[i]+'</div>';
        if((i+1)%7==0)divText = divText + '<div style="clear:both;"></div>';
    }

    document.getElementById("alphabet").innerHTML = divText;

    show_word();
}
String.prototype.setLetter = function(position, letter)
{
    if(position > this.length-1)
    {
        return this.toString();
    }
    else
    {
        return this.substr(0,position) + letter + this.substr(position+1);
    }
}
function check(nr)
{
    var checked = false;
    for(i=0; i<length; i++)
    {
        if(word.charAt(i)==lettersSet[nr])
        {
            word1 = word1.setLetter(i,lettersSet[nr]);
            checked = true;
        }
    }
    if(checked==true)
    {
        var element = "lett"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        show_word();
    }
    else
    {
        var element = "lett"+nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        fail_count++;
        var photo = "img/s"+fail_count+".jpg";
        document.getElementById("gallow").innerHTML = '<img src="'+photo+'" alt="""/>';
    }
    //Win
    if(word == word1)
    {
        document.getElementById("alphabet").innerHTML = "Yes, correct word: " + word + '<br><b><span class="reset" onclick="location.reload()">Again?</span>';
    }
}

window.onload = start;