const player1 = "X";
const player2 = "O";

var playTime = player2;
var gameOver = false;

VezTurno();
inEspacos();

function VezTurno()
{
        if (gameOver) 
        {
            return;
        }

        if (playTime == player1)
        {
            var player = document.querySelectorAll("div#Turno img")[0];
            player.setAttribute("src", "icons/X.png");
        }
        else
        {
            var player = document.querySelectorAll("div#Turno img")[0];
            player.setAttribute("src", "icons/O.png");
        }
}

function inEspacos()
{
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++)
    {
        espacos[i].addEventListener("click", function()
        {

            if (gameOver)
            {
                return;
            }
    
            if (this.getElementsByTagName("img").length == 0)
            {
                if (playTime == player1)
                {
                    this.innerHTML = "<img src='icons/X.png'  height='80px'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }
            
                else 
                {
                    this.innerHTML = "<img src='icons/O.png' height='80px'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                
              VezTurno();
              VerificarVencedor();

            }
            
        });
       

    }
}

async function VerificarVencedor()
{
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != ""))
    {
        vencedor = a1;
    }

    else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != ""))
    {
        vencedor = b2;
    }

    else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != ""))
    {
        vencedor = c3;
    }

    if (vencedor != "")
    {
        gameOver = true;
        await sleep(100);
        var txtVencedor = document.getElementById('txtVencedor');
        txtVencedor.innerHTML = "O vencedor é o player: " +vencedor+"<br><br>";
        
        var btnRecomecar = document.getElementById('btnRecomecar');
        btnRecomecar.removeAttribute("disabled");
        btnRecomecar.addEventListener('click', function () 
        {
            window.location.reload();
        });
        
    }

    else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "")     
    {
        gameOver = true;
        await sleep(100);
        var txtVencedor = document.getElementById('txtVencedor');
        txtVencedor.innerHTML = "Não há vencedor, EMPATE!!!<br><br>";
           
        var btnRecomecar = document.getElementById('btnRecomecar');
        btnRecomecar.removeAttribute("disabled");
        btnRecomecar.addEventListener('click', function () 
        {
            window.location.reload();
        });
         
      
    }

    function sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
 audio = document.getElementById('audio');
 
    function play(){
        audio.play();
        audio.loop = true
    }
 
    function pause(){
        audio.pause();
    }
 
    function stop(){
        audio.pause();
        audio.currentTime = 0;
    }
 
    function aumentar_volume(){
        if( audio.volume < 1)  audio.volume += 0.1;
    }
 
    function diminuir_volume(){
        if( audio.volume > 0)  audio.volume -= 0.1;
    }
         
    function mute(){
        if( audio.muted ){
            audio.muted = false;
        }else{
            audio.muted = true;
        }
    }