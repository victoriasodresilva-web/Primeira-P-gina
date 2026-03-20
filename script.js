// pega o botão que mostra uma mensagem, usando o id dele no HTML
let botaoMensagem = document.getElementById("btnMensagem");

// pega o botão que muda a cor do card, usando o id dele no HTML
let botaoCor = document.getElementById("btnCor");

// pega o parágrafo onde a mensagem será exibida
let mensagem = document.getElementById("mensagem");

// pega o card principal da apresentação, usando a classe CSS
let card = document.querySelector(".apresentacao");

// adiciona um evento de clique no botão de mostrar mensagem
botaoMensagem.addEventListener("click", function () {

    // quando o botão for clicado, troca o texto do parágrafo pela mensagem desejada
    mensagem.innerText = "Olá! Seja bem-vindo ao meu mini currículo.";
});

// cria uma variável para controlar se a cor atual do card foi alterada ou não
let corAtual = 0;

// adiciona um evento de clique no botão de mudar cor
botaoCor.addEventListener("click", function () {

    // verifica se o valor atual da variável é 0
    if (corAtual == 0) {

        // se for 0, muda a cor de fundo do card para azul claro
        card.style.backgroundColor = "#dbeafe";

        // altera o valor da variável para 1, indicando que a cor foi trocada
        corAtual = 1;

    } else {

        // caso contrário, volta a cor de fundo do card para branco
        card.style.backgroundColor = "white";

        // altera o valor da variável para 0, indicando que voltou ao estado inicial
        corAtual = 0;
    }
});
