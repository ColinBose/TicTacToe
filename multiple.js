var turn = 1;
   var total = 0;
var bArray = new Array(3);
  for (var i = 0; i < 3; i++) {
    bArray[i] = new Array(3);
  }

var boardCoord = new Array();
 var current;
 var animate = false;
 var anicount1 = 0;
 var anicount2= 0;
var drag1;
var stop = 0;
var drag2;
var player1;
var player2;
var y = 0;
var src1;
var src2;
var img = new Image(50, 50);
var dragg1;
var dragg2;
var p1w = 0;
var p2w = 0;
$(document).ready(function() {
showMenu(1);
$("#howto").click(function(){

});
$("#submitage").click(function(){
var age1 = document.getElementById('age1').value;
var age2 = document.getElementById('age2').value;

var realage1 = age1 % 12;
var realage2 = age2 % 12;
if(realage1 == realage2)
{
    if(realage1 != 1)
    {
        realage2 = 1;
    }
    else
    {
        realage2 = 2;
    }
}
drag1 = getPlayer(realage1);
drag2 = getPlayer(realage2);

console.log(drag1);
var id1 = drag1.substring(1);
var id2 = drag2.substring(1);
src1 = drag1.substring(1);
src2 = drag2.substring(1);
console.log(src1);
src1 = "images/" + src1 + "2.png";
src2 = "images/" + src2 + "2.png";

 dragg1 = drag1.substring(1);
 dragg2 = drag2.substring(1);
console.log(src1);


$('#firstimg').attr("src", src1);
$('#secondimg').attr("src", src2);
$('#firstimg').attr("class", id1);
$('#secondimg').attr("class", id2);
$('#firstimg').attr("id", id1);
$('#secondimg').attr("id", id2);
$('#player1').css('border', "thick solid black");
$('#player2').css('border', "thick solid black");


document.getElementById(dragg1).style.visibility="visible";
document.getElementById(dragg2).style.visibility="visible";

showMenu(5);
console.log(drag1);
console.log(drag2);
$(drag1).draggable({
        helper: 'clone'

    });


      $(drag2).draggable({
        helper: 'clone'

    });



});
$("#reset").click(function(){
   clearBoard(1);
});
$("#single").click(function(){
    window.location.href = "singleplayer.html";

});

$("#multi").click(function(){
 showMenu(2);
});
$("#howto").click(function(){
 showMenu(3);
});
$("#about").click(function(){
 showMenu(4);
});
$("#back1").click(function(){
 showMenu(1);
});
$("#back2").click(function(){
 showMenu(1);
});
$("#menu").click(function(){
   clearBoard(1);
     $("#player1 img").remove();
      $("#player2 img").remove();
     $("#player1").append("<img id='firstimg' src=''/>");
    $("#player2").append("<img id='secondimg' src=''/>");
showMenu(1);

});
function showMenu(a)
{
    if(a == 1){
    document.getElementById('mainMenu').style.visibility='visible';
    document.getElementById('mainMenu').style.display='block';
    document.getElementById('board').style.visibility='hidden';
    document.getElementById('board').style.display ="none";
    document.getElementById('howto').style.visibility="visible";
      
    document.getElementById('about2').style.visibility="hidden";
    document.getElementById('about2').style.display="none";

    document.getElementById('multiplayer').style.visibility="hidden";
    document.getElementById('multiplayer').style.display="none";
    }
    if(a == 2){
       document.getElementById('multiplayer').style.visibility="visible";
       document.getElementById('multiplayer').style.display="block";  
       document.getElementById('mainMenu').style.display='none';
       document.getElementById('board').style.visibility='hidden';
    document.getElementById('board').style.display ="none";
     document.getElementById('about2').style.visibility="hidden";
    document.getElementById('about2').style.display="none";
    }
    if(a == 3){
document.getElementById('board').style.visibility='hidden';
    document.getElementById('board').style.display ="none";
     document.getElementById('mainMenu').style.display='none'; 
     document.getElementById('about2').style.visibility="visible";
     document.getElementById('about2').style.display ="block";
     document.getElementById('header').innerHTML = "How to Play";
     document.getElementById("info").innerHTML = "Enter your age in the text fields to recieve your" + " zodiac animal to play as. <br />Then attempt to make 3 in a row to win!";

    }
     if(a == 4){
document.getElementById('board').style.visibility='hidden';
    document.getElementById('board').style.display ="none";
     document.getElementById('mainMenu').style.display='none'; 
     document.getElementById('about2').style.visibility="visible";
     document.getElementById('about2').style.display ="block";
     document.getElementById('header').innerHTML = "About Us";
     document.getElementById("info").innerHTML = "Colin Bose and Jackee Ma are first semester CST students at BCIT.<br /> They teamed up to make this great game.";

    }
    if(a == 5){
    document.getElementById('about2').style.visibility="hidden";
    document.getElementById('about2').style.display="none";
    document.getElementById('mainMenu').style.visibility='dieen';
    document.getElementById('mainMenu').style.display='none';
    document.getElementById('board').style.visibility='visible';
    document.getElementById('board').style.display ="block";
    document.getElementById('howto').style.visibility="hidden";
      
    
    document.getElementById('multiplayer').style.visibility="hidden";
    document.getElementById('multiplayer').style.display="none"; 
    }
}
for (var x = 0; x< 3; x++){
    for(var y = 0; y < 3; y++)
    {
        bArray[x][y] = 0;
    }
 }




    $(".div1").droppable({
        drop: function(event, ui) {


                if($(ui.draggable).attr("id") == dragg1)

                {
                    turn = 1;
            $(this).css('background-image', 'url(' + src1 + ')');
            $(this).css('background-color', '#282828');



            }
            else{
turn = 0;
             $(this).css('background-image', 'url(' + src2 + ')');
               $(this).css('background-color', '#787878');

            }

current = $(event.target).attr('id');
$(drag1).draggable({
        helper: 'clone'

    });


      $(drag2).draggable({
        helper: 'clone'

    });
var currentnum = current.substring(5);
total++;

var currentx = currentnum % 3;
var currenty = Math.floor(currentnum / 3);

var winner;
setArray(current, currenty, currentx);
if(checkWin(currenty, currentx))
{
total = 0;
    if(turn == 0)
{


                    
                    stop = 0;
                    y = 0;
                   
                    drawMe();
p2w++

winner = dragg2;

}
else
{
    p1w++;
      console.log("spenser");
                stop = 0;
                y = 0;
                  console.log(y + "zzzz");
                 drawMe();
winner = dragg1;


}
setTimeout(function(){
winnerAlert(winner);
     clearBoard();
    },200);
}
if(total == 9)
{
 setTimeout(function(){
winnerAlert("No one")
     clearBoard();
    },200);

}
}
    });

});
var drawMe = function() {

console.log(turn + "TTTTT");
if(turn == 1){
    ctx = document.getElementById('canvas1').getContext('2d');

    srcer = "images/" + dragg1 + '.png';
    img.src = srcer;
}
else
{
     ctx = document.getElementById('canvas2').getContext('2d');
    srcer = "images/" + dragg2 + '.png';
    img.src = srcer;
}

     stop = setInterval(animateLeaf, 50);

};

var animateLeaf = function() {
    console.log(y);
    if(turn == 1)
    {
   if (y < (ctx.canvas.height - ((anicount1*50) + 40))) {

  ctx.clearRect(0, 0, ctx.canvas.width, ((460 - anicount1 * 50 - 15)));
  ctx.drawImage(img, 0, y);

    y += 10;



  } else {
console.log("Thomas DontHaveOne Carlton" + anicount1 + " " + anicount2);
    clearInterval(stop);
y=0;
anicount1++;

  }
}
else
{
if (y < (ctx.canvas.height - ((anicount2*50) + 40))) {
  ctx.clearRect(0, 0, ctx.canvas.width, ((460 - anicount2 * 50 - 15)));
  ctx.drawImage(img, 0, y);

    y += 10;



  } else {
console.log("Thomas HaveOne Carlton" + anicount1 + " " + anicount2);

    clearInterval(stop);
y=0;
anicount2++;

  }
}

};

function winnerAlert(a)
{
    alert(a + " wins!")
}
function setArray(x, y, z)
{

if(turn == 1)
{
    console.log("this ran i dumb");
    bArray[y][z] = 1;
     $(drag2).draggable('enable');
     $(drag1).draggable('disable');
$('#player2').css('border', "thick solid black");
$('#player1').css('border', "");

}

else
{

     bArray[y][z] = 2;
   $(drag2).draggable('disable');
     $(drag1).draggable('enable');
$('#player1').css('border', "thick solid black");
$('#player2').css('border', "");
}

var posi = "#" + x;

$(posi).droppable("disable");


}
function getPlayer(a)
{
console.log(a);

    switch (a)
    {

        case 0:
        {
            return ".monkey";

            break;
        }
        case 1:
        {
            return ".rooster";

            break;
        }
        case 2:
        {
            return ".dog";
            break;
        }
        case 3:
        {
            return ".pig";
            break;
        }
        case 4:
        {
            return ".rat";
            break;
        }
          case 5:
        {
            return ".ox";
            break;
        }
          case 6:
        {
            return ".tiger";
            break;
        }
          case 7:
        {
            return ".rabbit";
            break;
        }
          case 8:
        {
            return ".dragon";
            break;
        }
          case 9:
        {
            return ".snake";
            break;
        }
          case 10:
        {
            return ".horse";
            break;
        }
          case 11:
        {
            return ".sheep";
            break;
        }
        default:
        {
            console.log("BROKjjjED");        }
    }
}


function clearBoard(a)
{
    for(x = 0; x < 9; x++)
    {
        var loc = "#board" + x;
        console.log(loc);
        $(loc).css('background-image', "");
        $(loc).css('background-color', "");
document.getElementById("age1").value ="";
document.getElementById("age2").value = "";
    var redrag = "#board" + x;
$(redrag).droppable("enable");
    }
    for (var x = 0; x< 3; x++){
    for(var y = 0; y < 3; y++)
    {
        bArray[x][y] = 0;
    }
 }
if (a == 1)
{
    $("#flag1 img").remove();
 $("#flag2 img").remove();
  ctx = document.getElementById('canvas1').getContext('2d');
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx = document.getElementById('canvas2').getContext('2d');
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  anicount1 =0;
  anicount2 = 0;
}

 total = 0;

}
function checkWin(a, b)
{

    var horzWin = 0;
    var vertWin = 0;
    var diagWin1 = 0;
    var diagWin2 = 0;

    for (xx = 1; xx <= 2; xx++)
    {

        if((a+xx)<= 2)
        {
            if(bArray[a+xx][b] == bArray[a][b])
            {

                vertWin++;

            }
            else
            {
                xx = 3;
            }
        }
    }
    for (xx = 1; xx <= 2; xx++)
    {
        if((a-xx) >= 0)

        {

            if(bArray[a-xx][b] == bArray[a][b])
            {

                vertWin++;

            }
            else
            {
                xx = 3;
            }
        }
    }
    for (xx = 1; xx <= 3; xx++)
    {

        if((b+xx)<= 2)
        {
            if(bArray[a][b+xx] == bArray[a][b])
            {

                horzWin++;

            }
            else
            {
                xx = 3;
            }
        }
    }
    for (xx = 1; xx <= 3; xx++)
    {
        if((b-xx) >= 0)

        {

            if(bArray[a][b-xx] == bArray[a][b])
            {

                horzWin++;

            }
            else
            {
                xx = 3;
            }
        }
    }
     for (yy = 1; yy <= 3; yy++)
    {
        if((a+yy)<= 2 && (b+yy) <= 2)
        {
            if(bArray[a+yy][b+yy] == bArray[a][b])
            {

                diagWin1++;

            }
            else
            {
                yy = 3;
            }
        }
    }
    for (yy = 1; yy <= 3; yy++)
    {

        if((a-yy) >= 0 && b-yy >=0)

        {

            if(bArray[a-yy][b-yy] == bArray[a][b])
            {

                diagWin1++;

            }
            else
            {
                yy = 3;
            }
        }
    }
     for (yy = 1; yy <= 3; yy++)
    {
        if((b-yy)>= 0 && (a+yy) <= 2)
        {
            if(bArray[a+yy][b-yy] == bArray[a][b])
            {

                diagWin2++;

            }
            else
            {
                yy = 3;
            }
        }
    }
    for (yy = 1; yy <= 3; yy++)
    {

        if((b+yy) <= 2 && a-yy >=0)

        {

            if(bArray[a-yy][b+yy] == bArray[a][b])
            {

                diagWin2++;

            }
            else
            {
                yy = 3;
            }
        }
    }

    if(vertWin == 2 || horzWin == 2 || diagWin1 == 2 || diagWin2 == 2)
    {
        console.log("WINNER");
        console.log(turn);
        return true;
    }
}