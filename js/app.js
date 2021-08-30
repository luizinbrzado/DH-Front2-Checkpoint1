var corpo = document.body;


function criarForm() {
    corpo.innerHTML = `
    <div class="bobo">
        <p class="pBobo">Fica fofocando aí, bobo(a)</p>
        <img class="imgBobo" src="./img/sergio-mallandro.jpeg" alt="Sergio malandro - 'yeeah yeeahh glu glu'">
    </div>
    `;

    function Formulario() {
        setTimeout(() => {
            corpo.innerHTML = `
            <div class"all">
                <div class="form">
                    <h3>Envie sua fofoca</h3>
                    <div>
                        <label for="title">Título:</label>
                        <input type="text" id="title" placeholder="Cê ficou sabendo, nem te conto" required>
                    </div>
                    <div>
                        <label for="desc">Descrição:</label>
                        <input type="text" id="desc" placeholder="Fulano fez... com Clicano e Betano" required>
                    </div>
                    <div>
                        <label for="imgUrl">Imagem:</label>
                        <input type="text" id="imgUrl" placeholder="Imagem ilustrativa da fofoca" required>
                    </div>
                    <button class="btnPrincipal" onclick="novoCard()">Enviar</button>
                </div>

                <div class="cards">
                </div>
            </div>
            `
        }, 1);
    }

    Formulario();
}

function novoCard() {
    let div = document.createElement("div");
    div.setAttribute("class", 'divfofoca');

    var title = document.body.querySelector("#title");
    var desc = document.body.querySelector("#desc");
    var imgUrl = document.body.querySelector("#imgUrl");
    var cards = document.body.querySelector('.cards');

    div.innerHTML = `
            <h2>${title.value}</h2>
            <p>${desc.value}</p>
            <img src="${imgUrl.value}" alt="${title.value}">
            `;
    
    cards.appendChild(div);

    title.value = "";
    desc.value = "";
    imgUrl.value = "";

    title.focus();
}