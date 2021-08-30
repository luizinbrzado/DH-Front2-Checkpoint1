let corpo = document.body;
let divCards = document.body.querySelector('.Cards');
function criarForm() {
    corpo.innerHTML = `
    <div class="bobo">
        <p class="pBobo">Fica fofocando aí, bobo</p>
        <img class="imgBobo" src="./sergio-mallandro.jpeg" alt="Sergio malandro - 'yeeah yeeahh'">
    </div>
    `;

    function Formulario() {
        setTimeout(() => {
            corpo.innerHTML = `
            <div class="formFofoca">
                <form method="post" action="#">
                    <h3>Envie sua fofoca</h3>
                    <div>
                        <label for="title">Título:</label>
                        <input type="text" id="title" placeholder="Título aqui" required>
                    </div>
                    <div>
                        <label for="desc">Descrição:</label>
                        <input type="text" id="desc" placeholder="Descrição (opcional)">
                    </div>
                    <div>
                        <label for="imgUrl">Imagem:</label>
                        <input type="text" id="imgUrl" placeholder="Imagem ilustrativa da fofoca" required>
                    </div>
                    <button type="submit" onclick="novoCard()">Enviar</button>
                </form>
            </div>
            `
        }, 2000);
    }

    Formulario();
}

let divForm = document.body.querySelector(".formFofoca")

function novoCard() {
    
}

boloDe = foo.append(bar1, bar2, bar3);