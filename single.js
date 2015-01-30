 var turn = 1;
        var total = 1;
        var bArray = new Array(3);
        for (var i = 0; i < 3; i++) {
            bArray[i] = new Array(3);
        }
        var bRotato = new Array(3);
        for (var i = 0; i < 3; i++) {
            bRotato[i] = new Array(3);
        }
        
        var drawer = 0;
        
        var rerotations;
        var starter;
        var rotations;
        var cornerStart;
        var sideStart;
        
        var current;
        var strategy;
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
        var second = false;
        var opening;
        $(document).ready(function() {
            showMenu();
            $("#home").click(function(){
    window.location.href = "index.html";

});
            document.getElementById('board').style.display = "none";
        $("#submitage").click(function(){
        var age1 = document.getElementById('age1').value;
            document.getElementById('board').style.display = "block";
        var realage1 = age1 % 12;
        drag1 = getPlayer(realage1);
        var id1 = drag1.substring(1);
        src1 = drag1.substring(1);
        src1 =  "images/" +src1 + "2.png";
        src2 =  "images/" + src2 + "2.png";
        dragg1 = drag1.substring(1);
        $('#firstimg').attr("src", src1);
        $('#firstimg').attr("class", id1);
        $('#firstimg').attr("id", id1);
        $('#player1').css('border', "thick solid black");
        for (var x = 0; x< 3; x++){
            for(var y = 0; y < 3; y++)
            {
                bRotato[x][y] = 0;
            }
        }
        document.getElementById(dragg1).style.visibility="visible";
        document.getElementById('board').style.visibility="visible";
        $(drag1).draggable({
                helper: 'clone'
            });
        document.getElementById('startup').style.visibility='hidden';
        document.getElementById('startup').style.display='none';
       
        clearBoard();
        });
        $("#reset").click(function(){
        clearBoard(1);
        });
        $("#menu").click(function(){
        clearBoard(1);
            $("#player1 img").remove();
            $("#player1").append("<img id='firstimg' src=''/>");
        showMenu();
        });
        function showMenu()
        {
            document.getElementById('startup').style.visibility='visible';
        document.getElementById('startup').style.display='block';
        document.getElementById('board').style.visibility='hidden';
         document.getElementById('board').style.display = "none";
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
        current = $(event.target).attr('id')
        $(drag1).draggable({
                helper: 'clone'
            });
        var currentnum = current.substring(5);
        var currentx = currentnum % 3;
        var currenty = Math.floor(currentnum / 3);
        var winner;
        setArray(current, currenty, currentx);
        setRotation(rotations, currenty, currentx, 2, current, 2)
        }
            });
        });
        var drawMe = function() {
        if(drawer == 1){
            ctx = document.getElementById('canvas1').getContext('2d');
            srcer = "images/" + dragg1 + '.png';
            img.src = srcer;
        }
        else if(drawer == 2)
        {
            ctx = document.getElementById('canvas2').getContext('2d');
            srcer =  "images/" + 'medhat.png';
            img.src = srcer;
        }
        else
            {     ctx = document.getElementById('canvas1').getContext('2d');
            srcer = "images/" + 'medhat.png';
            img.src = srcer;
        }
            stop = setInterval(animateLeaf, 25);
        };
        function searchWinner(currenty, currentx, tt)
        {
        
        if(checkWin(currenty, currentx, tt))
        {
            total = 0;
            if(turn == 1)
        {
        
        drawer = 1;
                            stop = 0;
                            y = 0;
                            drawMe();
        p2w++
        winner = dragg1;
        }
        else
        {
            drawer = 2;
        
            p1w++;
                        stop = 0;
                        y = 0;
                        drawMe();
        winner = "Medhat";
        starter = true;
        }
        setTimeout(function(){
        winnerAlert(winner);
            clearBoard();
            if(starter)
            {
                starter = false;
            }
            },20);
        }
        else
        {
            
        }
        if(total == 9 )
        {
            drawer = 3;
            drawMe();
        setTimeout(function(){
        winnerAlert("Medhat still")
            clearBoard();
            if(starter)
        {
                starter = false;
            }
            },20);
        }
        }
        var animateLeaf = function() {
            if(drawer == 1)
            {
        if (y < (ctx.canvas.height - ((anicount1*50) + 40))) {
        ctx.clearRect(0, 0, ctx.canvas.width, ((460 - anicount1 * 50 - 15)));
        ctx.drawImage(img, 0, y);
            y += 10;
        } else {
            clearInterval(stop);
        y=0;
        anicount1++;
        }
        }
        else if(drawer == 2)
        {
        if (y < (ctx.canvas.height - ((anicount2*50) + 40))) {
        ctx.clearRect(0, 0, ctx.canvas.width, ((460 - anicount2 * 50 - 15)));
        ctx.drawImage(img, 0, y);
            y += 10;
        } else {
            clearInterval(stop);
        y=0;
        anicount2++;
        }
        }
        else
        {
        if (y < (ctx.canvas.height - ((anicount1*50) + 40))) {
        ctx.clearRect(0, 0, ctx.canvas.width, ((460 - anicount1 * 50 - 15)));
        ctx.drawImage(img, 0, y);
            y += 10;
        } else {
            clearInterval(stop);
        y=0;
        anicount1++;
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
        bArray[y][z] = 2;
        setRotation(rotations, y, z, 2, 0, 5);
        var posi = "#" + x;
        $(posi).droppable("disable");
        searchWinner(y, z, 1);
        }
        else
        {
      
            bArray[y][z] = 1;
            $(x).css('background-image', 'url("images/medhat2.png")');
            $(x).css('background-color', '#282828');
        $(x).droppable("disable");
        searchWinner(y, z, 1);
        }
        console.log(bArray[0][0] + " " + bArray[0][1] + " " + bArray[0][2]);
        console.log(bArray[1][0] + " " + bArray[1][1] + " " + bArray[1][2]);
        console.log(bArray[2][0] + " " + bArray[2][1] + " " + bArray[2][2]);
        total++;
       
        if(turn == 1)
        {
    
            playMove();
        }
        }
        function playMove()
        {
         
            turn = 0;
        second = false;
        if(total == 1)
        {
            strategy = 0;
            var curBoard = 0;
            var fx = 0;
            var fy = 0;
            var ranX = Math.floor(Math.random() * 3);
            var ranY = Math.floor(Math.random() * 3);
        fx = ranX;
        fy = ranY;

            if(fy == 1 && fx == 1)
            {
                fy = 2;
                fx = 2;
            }

        if(fx == 1 || fy == 1)
            {
                cornerStart = false;
                sideStart = true;
            }
            else
            {
                cornerStart = true;
                sideStart = false;
            }

       
            rotations = rotationFactor(fy, fx);
            curBoard = fy * 3 + fx;
            curBoard = '#board' + curBoard;
            setRotation(rotations, fy, fx, 1, 0, 1);
            //setRotation(rotations, fy, fx, 1, curBoard, 1);
        }
        if(total == 3)
        {
            
            var playeryx = getIndex();
        var playery = playeryx.substring(0,1);
        var playerx = playeryx.substring(1);

            if (cornerStart){



        if(playeryx == "01")
        {
        strategy = 1;
        setRotation(rerotations, 2, 0, 1, 0, 2);
        }
        else if(playeryx == "02")
        {
        strategy = 2;
        setRotation(rerotations, 2, 2, 1, 0, 2);
        }
        else if(playeryx == "10")
        {
            setRotation(rerotations, 0, 2, 1, 0, 2);
            strategy = 3;
        }
        else if(playeryx == "11")
        {
            setRotation(rerotations, 2, 2, 1, 0, 2);
            strategy = 4;
        }
        else if(playeryx == "12")
        {
            setRotation(rerotations, 0, 2, 1, 0, 2);
            strategy = 5;
        }
        else if(playeryx == "20")
        {
            setRotation(rerotations, 0, 2, 1, 0, 2);
            strategy = 6;
        }
        else if(playeryx == "21")
        {
            setRotation(rerotations, 0, 2, 1, 0, 2);
            strategy = 7;
        }
        else if(playeryx == "22")
        {
            setRotation(rerotations, 2, 0, 1, 0, 2);
            strategy = 8;
        }

        }
        else if(sideStart)
        {

          
            if (playeryx == "12")
            {


                setRotation(rerotations, 0, 2, 1, 0, 2);
                strategy = 1;

            }
           else if(playeryx == "02"){
                setRotation(rerotations, 2, 2, 1, 0, 2);
                strategy = 3;

            }
            else if(playeryx == "00"){
                setRotation(rerotations, 2, 0, 1, 0, 2);
                strategy = 2;
            }
          else if(playeryx == "22"){
                setRotation(rerotations, 2, 0, 1, 0, 2);
                strategy = 4;
            }
          else if(playeryx == "21"){
              setRotation(rerotations, 2, 0, 1, 0 ,2);
              strategy = 5;
          }
          else if(playeryx == "11"){
              setRotation(rerotations, 1, 2, 1, 0 ,2);
              strategy = 6;
          }
          else if(playeryx =="10"){
              setRotation(rerotations, 0, 0, 1, 0, 2);

          strategy = 7;

            }
             else if(playeryx =="20")
             {
                
              setRotation(rerotations, 2, 2, 1, 0 ,2);
              strategy = 8;
            }
}

}

        if (total == 5)
           
        {
       if(cornerStart){
            if(strategy == 1){
                if(bRotato[1][0] == 2){
                    setRotation(rerotations, 1, 1, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 1, 0, 1, 0, 2);
                }
            }
            if(strategy == 2){
                if(bRotato[1][1] == 2){
                    setRotation(rerotations, 2, 0, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 1, 1, 1, 0, 2);
                }
            }
            if(strategy == 3){
        if(bRotato[0][1] == 2){
                    setRotation(rerotations, 2, 2, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 0, 1, 1, 0, 2);
                }
            }
            if(strategy == 4){
              
        calcMove();
            }
            if(strategy == 5){
        if(bRotato[0][1] == 2){
                    setRotation(rerotations, 2, 0, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 0, 1, 1, 0, 2);
                }
            }
            if(strategy == 6){
        if(bRotato[0][1] == 2){
                    setRotation(rerotations, 2, 2, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 0, 1, 1, 0, 2);
                }
            }
            if(strategy == 7){
        if(bRotato[0][1] == 2){
                    setRotation(rerotations, 1, 1, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 0, 1, 1, 0, 2);
                }
            }
            if(strategy == 8){
                
                if(bRotato[1][0] == 2){

                    setRotation(rerotations, 0, 2, 1, 0, 2);
                }
                else
                {
                    setRotation(rerotations, 1, 0, 1, 0, 2);
                }
            }
}
           if(sideStart){

if(strategy == 2)
{
     if(bRotato[1][0] == 2 || bRotato[0][2] == 2 || bRotato[2][2] == 2)
        {
            setRotation(rerotations, 1, 1, 1, 0, 2);
        }
        else if(bRotato[1][1] == 2){
         
            calcMove();
         }
         else
         {
            setRotation(rerotations, 1, 1, 1, 0, 2);
         }
    
}
if(strategy == 1){

 if(bRotato[1][1] == 2)
 {
  
    calcMove();
 }
else{
        setRotation(rerotations, 1, 1, 1, 0, 2);
    }
}
    if(strategy == 3)
    {
      
        if(bRotato[1][2] == 2 || bRotato[0][0] == 2 || bRotato[2][0] == 2)
        {
            setRotation(rerotations, 1, 1, 1, 0, 2);
        }
        else if(bRotato[1][1] == 2){
          
            calcMove();
         }
         else
         {
            setRotation(rerotations, 1, 1, 1, 0, 2);
         }
    }
    if(strategy == 4){
if(bRotato[0][2] == 2 || bRotato[1][2] == 2 || bRotato[0][0] == 2)
{ 
    calcMove();
}
else
{
   setRotation(rerotations, 0, 0, 1, 0, 2);
}
    }
    if(strategy == 5)
    {
if(bRotato[0][0] == 2 || bRotato[0][2] == 2)
{ 
    calcMove();

    }
    else{
        setRotation(rerotations, 0, 0, 1, 0, 2);
    }
}
if(strategy == 6)
{ 
    calcMove();
}
if(strategy == 7)
{
    if(bRotato[1][1] == 2)
 { 
    calcMove();
 }
else{
        setRotation(rerotations, 1, 1, 1, 0, 2);
    }}
    if (strategy == 8){
        if(bRotato[0][2] == 2)
{ 
    calcMove();
}
else if(bRotato[1][0] == 2)
{
    setRotation(rerotations, 0, 0, 1, 0, 2);
}
else if(bRotato[0][0] == 2)
{
    setRotation(rerotations, 1, 0, 1, 0, 2);
}
else
{
   setRotation(rerotations, 0, 2, 1, 0, 2);
}
    }
}
}





        if (total == 7)
        { 
            calcMove();
        }
        if(total == 9)
        {


                calcMove();

        }
        }
        function calcMove(){
            
        var turnover = false;
        for (var y = 0; y < 3; y++){
            for (var x = 0; x < 3; x++)
            {
                if(bArray[y][x] == 0)
                {
                    bArray[y][x] = 1;
                if(checkWin(y, x, 1)){
                    curBoard = y*3 + x;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, y, x);
                    turnover = true;
                    x = 3;
                    y = 3;
            }
            else{
                bArray[y][x] = 0;
                }
            }
        }
        }
            if(!turnover){
                for(var yv = 0; yv < 3; yv++){
            for(var xv = 0; xv < 3; xv++)
            {
             
                if(bArray[yv][xv] == 0)
                {
                    bArray[yv][xv] = 2;
                if(checkWin(yv, xv, 1)){
                    
                    curBoard = yv*3 + xv;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, yv, xv);
                    turnover = true;
                    xv = 3;
                    yv = 3;
            }
            else{
                bArray[yv][xv] = 0;
                }
            }
        }
        }
        }
        if(!turnover)
        {
             for(var yz = 0; yz < 3; yz++){
            for(var xz = 0; xz < 3; xz++)
            {
                
                if(bArray[yz][xz] == 0)
                {
                    
                   curBoard = yz*3 + xz;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, yz, xz);
                  yz = 3;
                   xz = 3;
                }
            }
        }
        }
        }
        function setRotation(rotaFacto, ypo, xpo, playss, curBoard, turner)
        {
            var sety, setx;
            if(rotaFacto == 1)
            {
                if(ypo == 0){
                    sety = ypo + (2 - xpo);
                }
                else if(ypo== 1){
                    sety = ypo + (1 - xpo);
                }
                else{
                    sety = ypo - xpo;
                }
                if(xpo == 0){
                    setx = xpo + ypo;
                }
                else if(xpo == 1){
                    setx = xpo + (ypo - 1);
                }
                else {
                    setx = xpo + (ypo - 2);
                }
                if(playss == 1)
                {
                if(turner == 1)
                {           curBoard = ypo*3 + xpo;
                    curBoard = "#board" + curBoard;
        
                    setArray(curBoard, ypo, xpo);
                }
                else
                    {
                        curBoard = sety*3 + setx;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, sety, setx);
                }
            }
        if(turner != 1 && playss == 1)
        {
            bRotato[ypo][xpo] = playss;
        }
        else
        {
            bRotato[sety][setx] = playss;
        }
        if(playss == 2)
        {
            bRotato[sety][setx] = playss;
        }
        }
            else if(rotaFacto == 2)
            {
               
                if(ypo == 0){
                    sety = ypo + 2;
                }
                else if(ypo== 1){
                    sety = ypo;
                }
                else{
                    sety = ypo - 2;
                }
                if(xpo == 0){
                    setx = xpo + 2;
                }
                else if(xpo == 1){
                    setx = xpo;
                }
                else {
                    setx = xpo - 2;
                }
                if(playss == 1)
                {
                if(turner == 1)
        {
            curBoard = ypo*3 + xpo;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, ypo, xpo);
                }
                else
                    {
                        curBoard = sety*3 + setx;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, sety, setx);
                }
            }
        if(turner != 1 && playss == 1)
        {
            bRotato[ypo][xpo] = playss;
        }
        else
        {
            bRotato[sety][setx] = playss;
        }
        if(playss == 2)
        {
            bRotato[sety][setx] = playss;
        }
        }
            else if(rotaFacto == 3)
            {
      
                if(ypo == 0){
                    sety = ypo + xpo;
                }
                else if(ypo == 1){
                    sety = ypo + (xpo - 1);
                }
                else{
                    sety = ypo + (xpo - 2);
                }
                if(xpo == 0){
                    setx = xpo + (2 - ypo);
                }
                else if(xpo == 1){
                    setx = xpo + (xpo - ypo);
            }
                else {
                    setx = xpo + (ypo * -1);
                }
      
                if(playss == 1)
        {
            if(turner == 1)
                {           curBoard = ypo*3 + xpo;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, ypo, xpo);
                }
                else
                    {
                        curBoard = sety*3 + setx;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, sety, setx);
                }
            }
        if(turner != 1 && playss == 1)
        {
            bRotato[ypo][xpo] = playss;
        }
        else
        {
            bRotato[sety][setx] = playss;
        }
        if(playss == 2)
        {
            bRotato[sety][setx] = playss;
        }
        }
            else
            {
        sety = ypo;
        setx = xpo;
                if(playss == 1)
                {
                if(turner == 1)
                {           curBoard = ypo*3 + xpo;
                    curBoard = "#board" + curBoard;
       
                    setArray(curBoard, ypo, xpo);
                }
                else
                    {
                        curBoard = sety*3 + setx;
                    curBoard = "#board" + curBoard;
                    setArray(curBoard, sety, setx);
                }
            }
        if(turner != 1 && playss == 1)
        {
            bRotato[ypo][xpo] = playss;
        }
        else
        {
            bRotato[sety][setx] = playss;
        }
        if(playss == 2)
        {
            bRotato[sety][setx] = playss;
        }
        }
            console.log(bRotato[0][0] + " " + bRotato[0][1] + " " + bRotato[0][2]);
            console.log(bRotato[1][0] + " " + bRotato[1][1] + " " + bRotato[1][2]);
            console.log(bRotato[2][0] + " " + bRotato[2][1] + " " + bRotato[2][2]);
        }
        function getIndex()
        {
        for (var x = 0; x< 3; x++){
            for(var y = 0; y < 3; y++)
            {
            if(bRotato[x][y] == 2)
            {
            return x +"" + y;
            }
            }
        }
        return "broken";
        }
        function rotationFactor(ypo, xpo)
        {
            if(xpo == 2 && ypo != 2)
            {
                rerotations = 3;
                return 1;
            }
            else if(ypo == 2 && xpo != 0)
            {   rerotations = 2;
                return 2;
            }
            else if(xpo == 0 && ypo > xpo)
            {   rerotations = 1;
                return 3;
            }
            else
                {    rerotations = 4;
                return 4;
            }
        }
        function getPlayer(a)
        {
       
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
        }
            }
        }
        function clearBoard(a)
        {
            for(x = 0; x < 9; x++)
            {
                var loc = "#board" + x;
                $(loc).css('background-image', "");
                $(loc).css('background-color', "");
        document.getElementById("age1").value ="";
            var redrag = "#board" + x;
        $(redrag).droppable("enable");
            }
            for (var x = 0; x< 3; x++){
            for(var y = 0; y < 3; y++)
            {
                bArray[x][y] = 0;
            }
        }
        for (var x = 0; x< 3; x++){
            for(var y = 0; y < 3; y++)
            {
                bRotato[x][y] = 0;
            }
        }
        if (a == 1)
        {
            $("#flag1 img").remove();
        ctx = document.getElementById('canvas1').getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx = document.getElementById('canvas2').getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        anicount1 =0;
        anicount2 = 0;
        }
        total = 1;
        playMove();
        if(anicount2 == 9 || anicount1 == 9)
        {
            alert("You are inferior, give up");
             $("#flag1 img").remove();
        ctx = document.getElementById('canvas1').getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx = document.getElementById('canvas2').getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        anicount1 =0;
        anicount2 = 0;
        }
        }
        function checkWin(a, b, c)
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
        if(c == 1){
            if(vertWin == 2 || horzWin == 2 || diagWin1 == 2 || diagWin2 == 2)
            {
                return true;
            }
        }}