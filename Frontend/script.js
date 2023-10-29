const formulario = document.querySelector("form");

const Iname = document.querySelector(".name");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

function cadastra () {
    fetch("http://localhost:8080/cadastrar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Iname.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value
        })
    })
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
}

function limpa () {
        Iname.value = "";
        Iemail.value = "";
        Isenha.value = "";
        Itel.value = "";
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    cadastra();
    limpa();
})
