/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/

const alterTheme = document.getElementById("button-alter-theme"); 
const body = document.querySelector("body");
const imageAlterTheme = document.querySelector(".button");

alterTheme.addEventListener("click", function(){
    const darkModeOn = body.classList.contains("dark");

    body.classList.toggle("dark");

    if(darkModeOn){
        imageAlterTheme.setAttribute("src", "./src/Sprites/sun.png");
    }else{
        imageAlterTheme.setAttribute("src", "./src/Sprites/moon.png");
    }
});

