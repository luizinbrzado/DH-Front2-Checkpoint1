var corpo = document.body.querySelector("main");


function criarFormFofoca() {
    corpo.innerHTML = `
    <div class="bobo">
        <p class="pBobo">Fica fofocando aí, bobo(a)</p>
        <img class="imgBobo" src="./img/sergio-mallandro.jpeg" alt="Sergio malandro - 'yeeah yeeahh glu glu'">
    </div>
    `;

    function form() {
        setTimeout(() => {
            corpo.innerHTML = `
            <div class="all">
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
        }, 1000);
    }

    form();
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

function criarEquipe() {
    corpo.innerHTML = `
    <div class="equipe">
        <div>
            <img class="imgPerfil" src="./img/Paulocagao.png" alt="Cagão Master">
            <h2>Paulo Cagão Ventura</h2>
            <a href="" target="_blank"><img class="imgContatos" src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/github.jpg" alt=""></a>
            <a href="https://www.linkedin.com/in/paulo-ventura-50079913/" target="_blank"><img class="imgContatos" src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" alt=""></a>
        </div>
        <div>
            <img class="imgPerfil" src="./img/NelsonBestayashi.png" alt="Cagão Master">
            <h2>Nelson Bestayashi</h2>
            <a href="" target="_blank"><img class="imgContatos" src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/github.jpg" alt=""></a>
            <a href="https://www.linkedin.com/in/nelsonkobayashi/" target="_blank"><img class="imgContatos" src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" alt=""></a>
        </div>
        <div>
            <img class="imgPerfil" src="./img/tapioca.png" alt="Cagão Master">
            <h2>Luiz Tapioca Boy</h2>
            <a href="" target="_blank"><img class="imgContatos" src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/github.jpg" alt=""></a>
            <a href="https://www.linkedin.com/in/luizinbrzado/" target="_blank"><img class="imgContatos" src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" alt=""></a>
        </div>
    </div>
    `;
}

function criarFormContato() {
    corpo.innerHTML = `
    <div class="contato">
        <form action="#" method="POST">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="João Vitor" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="nome@domain.com" required>
            </div>
            <div>
                <label for="tituloassunto">Título do assunto:</label>
                <input type="text" id="tituloassunto" placeholder="Quero fazer um projeto" required>
            </div>
            <div>
                <label for="assunto">Assunto:</label>
                <textarea name="assunto" id="assunto" cols="30" rows="10"></textarea required>
            </div>
            <button type="sumbit">Enviar</button>
        </form>
    </div>
    `;
}