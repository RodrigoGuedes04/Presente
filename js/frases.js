const frases = [

    "De todas as coincidências da vida, encontrar você continua sendo a minha favorita.",

    "Se eu pudesse escolher meu lugar favorito no mundo, escolheria qualquer lugar onde você estivesse.",

    "Seu sorriso consegue melhorar dias que você nem sabia que estavam ruins.",

    "Você transformou momentos comuns em algumas das minhas lembranças favoritas.",

    "Eu não preciso de um dia perfeito. Só preciso de um dia com você.",

    "Você é aquele pensamento que aparece do nada e termina em sorriso.",

    "Tem alguma coisa em você que faz meu coração se sentir em casa.",

    "Entre todas as pessoas do mundo, meu coração decidiu reconhecer o seu.",

    "Se amar você fosse uma viagem, eu nunca perguntaria quando vamos voltar.",

    "Você não entrou apenas na minha vida. Você mudou a forma como eu vejo ela.",

    "Meu lugar favorito continua sendo alguns centímetros ao lado de você.",

     "Eu sou seu girassol pois eu sempre vou pra onde você estiver",

    "Talvez eu nunca consiga explicar completamente o quanto você significa para mim.",

    "Você faz parte das coisas que eu agradeço silenciosamente por ter encontrado.",

    "Algumas pessoas deixam lembranças. Você deixou um lar dentro de mim.",

    "Quando penso no futuro, gosto principalmente das partes em que você aparece.",

    "Seu abraço consegue fazer o mundo parecer um pouco menos complicado.",

    "Eu poderia conhecer milhares de pessoas e ainda procuraria alguma coisa sua em todas elas.",

    "Minha definição favorita de sorte tem seu nome: Giulia.",

    "Você é uma das razões pelas quais meus dias ficaram mais bonitos.",

    "Não sei o que fiz para merecer você, mas pretendo agradecer à vida todos os dias.",

    "Às vezes tudo que eu preciso para sorrir é lembrar que existe um nós.",

    "Não quero uma história perfeita. Quero uma história verdadeira, desde que seja com você.",

    "A melhor parte de muitos dos meus dias acontece quando consigo falar com você.",

    "Se felicidade tivesse endereço, talvez fosse o seu abraço.",

    "Existem bilhões de pessoas no mundo e ainda assim meu coração resolveu escolher você.",

    "Você é minha pessoa favorita para contar coisas que provavelmente não interessariam a mais ninguém.",

    "Talvez amor seja isso: querer continuar escolhendo a mesma pessoa mesmo conhecendo cada detalhe dela.",

    "Seu nome ficou perigosamente bom quando aparece perto da palavra amor.",

    "Com você até ficar fazendo absolutamente nada parece ser um bom plano.",

    "Eu escolheria conhecer você novamente, mesmo sabendo que acabaria completamente apaixonado.",

    "Se eu pudesse guardar um som para sempre, talvez fosse sua risada.",

    "Você deixa meu coração com aquela sensação de finalmente ter encontrado alguma coisa que nem sabia que procurava.",

    "Meu amor por você mora nas grandes declarações, mas principalmente nos pequenos detalhes.",

    "Eu gosto de quem sou quando estou ao seu lado.",

    "De algum jeito você virou parte dos planos que antes eram apenas meus.",

    "Você é a pessoa que eu gostaria de encontrar no final de todos os meus dias.",

    "Se eu pudesse mandar uma mensagem para mim mesmo no passado, diria apenas: espere até conhecer a Giulia.",

    "Não importa quantas vezes eu veja você. Sempre parece pouco.",

    "Você conseguiu transformar quatro letras em uma das palavras mais bonitas que conheço: nós.",

    "Não quero prometer o impossível. Quero apenas continuar tentando fazer você se sentir amada todos os dias.",

    "Talvez o universo seja enorme, mas ainda acho incrível que nossos caminhos tenham se encontrado.",

    "Sua existência tornou minha vida um lugar mais bonito.",

    "Eu ainda sorrio quando percebo que posso chamar você de meu amor.",

    "Você é meu presente favorito que a vida entregou sem embalagem.",

    "Meu coração aparentemente tomou uma decisão permanente quando conheceu você.",

    "Se algum dia você esquecer o quanto é especial, volte aqui e clique neste botão outra vez.",

    "Giulia, mesmo nos dias comuns, amar você continua sendo extraordinário."

];


const frase =
    document.getElementById("frase");

const botao =
    document.getElementById("gerarFrase");

let ultimaFrase = "";


function gerarFrase() {

    let novaFrase =
        frases[
            Math.floor(
                Math.random() * frases.length
            )
        ];

    while (
        novaFrase === ultimaFrase
    ) {

        novaFrase =
            frases[
                Math.floor(
                    Math.random() * frases.length
                )
            ];

    }

    ultimaFrase =
        novaFrase;

    frase.classList.add(
        "sumir"
    );

    setTimeout(() => {

        frase.textContent =
            `"${novaFrase}"`;

        frase.classList.remove(
            "sumir"
        );

    }, 250);

}


botao.addEventListener(
    "click",
    gerarFrase
);