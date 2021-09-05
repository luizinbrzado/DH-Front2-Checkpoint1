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
                    <div class="divTitle">
                        <label for="title">Título:</label>
                        <input type="text" id="title" placeholder="Cê ficou sabendo, nem te conto" required>
                        <div id="title_error"></div>
                    </div>
                    <div class="divDesc">
                        <label for="desc">Descrição:</label>
                        <input type="text" id="desc" placeholder="Fulano fez... com Clicano e Betano" required>
                        <div id="desc_error"></div>
                    </div>
                    <div class="divImgURL">
                        <label for="imgUrl">Imagem:</label>
                        <input type="text" id="imgUrl" placeholder="Imagem ilustrativa da fofoca" required>
                        <div id="img_error"></div>
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

    let title = document.body.querySelector("#title");
    let desc = document.body.querySelector("#desc");
    let imgUrl = document.body.querySelector("#imgUrl");
    let cards = document.body.querySelector('.cards');

    // TÍTULO TESTES
    let titleError = '<p class="msgTitleError" style="color: #f00; margin-bottom: 10px;">É necessário escrever um título</p>';

    // DESCRIÇÃO TESTES
    let descError = '<p class="msgDescError" style="color: #f00; margin-bottom: 10px;" >É necessário escrever uma descrição</p>';

    // IMAGEM TESTES
    let imgError = '<p class="msgImgURLError" style="color: #f00; margin-bottom: 10px;">É necessário colocar uma imagem</p>';


    // VALIDAÇÃO DO TÍTULO
    if(title.value == '' || title.value != '' && title.parentNode.lastChild.textContent == "É necessário escrever um título"){
        title.parentNode.lastChild.remove()
    }

    if (title.value == null || title.value == "") {
        title.parentNode.innerHTML += titleError;
    }

    // VALIDAÇÃO DA DESCRIÇÃO
    if(desc.value == '' || desc.value != '' && desc.parentNode.lastChild.textContent == "É necessário escrever uma descrição"){
        desc.parentNode.lastChild.remove()
    }

    if (desc.value == null || desc.value == "") {
        desc.parentNode.innerHTML += descError;
    }

    // VALIDAÇÃO DA IMAGEM
    if(imgUrl.value == '' || imgUrl.value != '' && imgUrl.parentNode.lastChild.textContent == "É necessário colocar uma imagem"){
        imgUrl.parentNode.lastChild.remove()
    }

    if (imgUrl.value == null || imgUrl.value == "") {
        imgUrl.parentNode.innerHTML += imgError;
    }

    // COLOCA DADOS NO CARD
    if (title.value !== '' && desc.value !== '' && imgUrl.value !== '') {
        div.innerHTML = `
            <h2>${title.value}</h2>
            <p>${desc.value}</p>
            <img src="${imgUrl.value}" alt="${title.value}">
            `

        cards.appendChild(div);

        title.value = "";
        desc.value = "";
        imgUrl.value = "";

        title.focus();
    }
}

function criarEquipe() {
    corpo.innerHTML = `
    <div class="equipe">
        <div class="perfil">
            <a href="">
                <img src="./img/Paulo.png" alt="Foto do Paulo">
            </a>
            <div class="description">
                <div class="contatos">
                    <a href="" target="_blank">
                        <img class="imgContatos" src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/github.jpg" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/paulo-ventura-50079913/" target="_blank">
                        <img class="imgContatos" src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" alt="">
                    </a>
                </div>
                <h4>Paulo Ventura</h4>
            </div>
        </div>

        <div class="perfil">
            <a href="">
                <img src="./img/Nelson.png" alt="Foto do Nelson">
            </a>
            <div class="description">
                <div class="contatos">
                    <a href="https://github.com/NelsonKobayashi" target="_blank">
                        <img class="imgContatos" src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/github.jpg" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/nelsonkobayashi/" target="_blank">
                        <img class="imgContatos" src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" alt="">
                    </a>
                </div>
                <h4>Nelson Kobayashi</h4>
            </div>
        </div>

        <div class="perfil">
            <a href="">
                <img src="./img/Luiz.png" alt="Foto do Luiz">
            </a>
            <div class="description">
                <div class="contatos">
                    <a href="https://github.com/luizinbrzado" target="_blank">
                        <img class="imgContatos" src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/github.jpg" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/luizinbrzado/" target="_blank">
                        <img class="imgContatos" src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" alt="">
                    </a>
                </div>
                <h4>Luiz Gustavo</h4>
            </div>
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
                <textarea name="assunto" id="assunto" cols="30" rows="10" placeholder="Coloque aqui o corpo do texto" required></textarea>
            </div>
            <button type="sumbit">Enviar</button>
        </form>
    </div>
    `;
}