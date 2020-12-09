var biblioteca=["corda","arvore","tristeza","amor","medo","sentimentos","preto","segredos","branco","anoitecer","positivo",

"jeans","botas","armado","objeto","imobilizar","apelar","caneca","subir","correr","cair","levantar","golpeado"];

var txtVencedor;

var qtde=biblioteca.length-1;

var pos=Math.round(Math.random()*qtde);

var palavra=biblioteca[pos];

var tam=palavra.length;

var acertos;

var errosMax=4;

var erros=0;

var desenhos=[];

var acertou=false;

var jogando=false;

var jog;

function defineLetras(L){

    var obj;

    for(var i=0;i<20;i++){

        obj=document.getElementById("letra"+i).value="";

        obj=document.getElementById("letra"+i).style.display="none";

    }

    for(var i=0;i<L;i++){

        obj=document.getElementById("letra"+i).style.display="inline-block";

    }

}

function inicia()
{

    jogando=true;

    jog=document.getElementById("letraJ");

    jog.value="";

    jog.focus();

    acertos=0;

    erros=0;

    acertos=false;

    document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas:";

    pos=Math.round(Math.random()*qtde);

    palavra=biblioteca[pos];

    tam=palavra.length;

    defineLetras(tam);

    document.getElementById("dvmsg").innerHTML="";

    desenhos[1]=document.getElementById("corda");
    
    desenhos[2]=document.getElementById("cabeca");

    desenhos[3]=document.getElementById("corpo");

    desenhos[4]=document.getElementById("perna");


    for(var i=1; i<5; i++)
    {

        desenhos[i].style.display="none";

    }

 }

 window.addEventListener("load",inicia);

 function dica()
 {

    alert(palavra);

    jog.focus();

}

function jogar()
{

    jog.focus();

    if(jog.value=="")
    {

        alert("Digite uma letra");

    }
    else
    {

        if(jogando)
        {

            var obj;

            var letraTmp;

            var letra;

            var pesq;

            letra=jog.value;

            jog.value="";

            acertou=false;

            pesq=palavra.match(letra);

            while(pesq!=null)
            {

                letraTmp=palavra.search(letra);

                obj=document.getElementById("letra"+letraTmp).value=letra;

                palavra=palavra.replace(letra,'0');

                acertos++;

                pesq=palavra.match(letra);

                acertou=true;

            }

            if(!acertou)
            {
                
                document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase() + "&nbsp ";

                erros++;

                if(erros<=4)
                {

                    desenhos[erros].style.display="block";

                }
                
                else
                {
                   
                    document.getElementById("perna").src="imagens/perna.png";
                    
                    document.getElementById("dvmsg").innerHTML="Game Over..";

                    jogando=false;
                }

            }

            if(acertos==tam)
            {
                document.getElementById("dvmsg").innerHTML="";

                document.getElementById("dvmsg").innerHTML="Parabéns você ganhou..";

                jogando=false;
            }

        }

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