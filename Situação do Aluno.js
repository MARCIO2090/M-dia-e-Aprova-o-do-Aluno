function MediaeSituacao(){
  
// Capturar os valores
var AV1 = document.getElementById('txtAV1').value;
var AV2 = document.getElementById('txtAV2').value;
var AV3 = document.getElementById('txtAV3').value;
var outResultado = document.getElementById('outResultado');

//Verificar as notas
var media, AV1, AV2, AV3;

n1= prompt ("Informe a primeira nota: ");
n1= eval (AV1) ;

n2= prompt ("Informe a segunda nota: ");
n2= eval (AV2) ; 

n3= prompt ("Informe a terceira nota: "); 
n3= eval (AV3);

media = (n1 + n2)/2; 

if (media >= 6)
{alert("Parabéns Fulano, você foi aprovado");}

else if (media <= 4)
{alert("Fulano, você foi reprovado");}

else
{alert("Recuperação");}

if (AV1 && AV2 <= AV3);


}
document.getElementById('bntExibir').addEventListener('click', Exibir)
