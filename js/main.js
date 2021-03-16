function botao(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
   // alert("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://www.facebook.com");
    window.location.href ="https://www.facebook.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
    elemento.innerHTML = "Obrigado por passar o mouse aqui"
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui";    
    elemento.innerHTML = "Passe o Mouse aqui"
}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemtento){
    console.log(elemtento.value)
}
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua Idade");
console.log(validaIdade(idade));
/*
function soma(n1, n2){
    return n1 +n2;
}

alert(soma(5, 10));


function setReplace(frase, nome , novo_nome){
    return frase.replace(nome , novo_nome)
}

alert(setReplace("vai japão" , "Japão" , "Brasil"));
*/

/*

var d = new Date();
alert(d);
//alert(d getday());
var count = 0;
while (count < 5){
    console.log(count);
    //count = count +1;
    count ++ ;
    alert(count);
    
};
var frutas =[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"limão", cor:"verde"}]
var fruta ={nome:"maça", cor:"vermelha"};
var lista = ["maça","pêra", "Laranja"];
var nome = "Luiz Gustavo Lazarini";
var idade = prompt("qual a sua idade");
//var idade = 45;
var idade2 = 10; 
var frase = "Japão é o melhor time do mundo"
alert("Bem vindo "+ nome)
alert(nome + " tem "+ idade + " anos");
alert("Se adicinar mais 10 ele tera "); 
alert(idade + idade2)//ele ira somar as 2 idades
console.log(nome);
console.log(idade + idade2)
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
lista.push("uva");//adiciona itens 
lista.pop();
console.log(lista);//mostra item
console.log(lista.length);//conta os itens 
console.log(lista.toString());
console.log(lista.join(" - ")); //colocar um simbolo entre os nomes 
console.log(fruta);
alert(fruta.cor);
console.log(frutas);
alert(frutas[1].nome);
alert(frutas[1].cor);
alert(frutas[2].nome);
alert(frutas[2].cor);
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
