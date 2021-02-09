
const BASE_URL = "https://accenture-java-desafio.herokuapp.com/";
const CONTENT = "application/json";
const MODE = "cors";

document.getElementById('submitFormCadastro').addEventListener('submit', e => {
    e.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const name = document.getElementById('name').value;
    const user = document.getElementById('user').value;
    const senha = document.getElementById('senha').value;
    const senhaDeNovo = document.getElementById('senhaDeNovo').value;
    if (senha === senhaDeNovo){
        createUser(cpf, user, name, senha);
    }
    else {
        console.log('senhas erradas');
    }
})

async function createUser(cpf, user, nome, senha){
    try{
        await fetch(`${BASE_URL}usuarios`, {
            mode: MODE,
            method: "POST",
            body: JSON.stringify({
                cpf: cpf,
                login: user,
                nome: nome,
                senha: senha
            }),
            headers: {
                'Content-type': CONTENT
            }
        })
        .then( response => {
            if (response.ok){
                console.log(response.json())
                window.location.replace('login.html')
            }
            // window.location.replace('error.html');
            return Promise.reject(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function redirectToLogin(){
    window.location.replace('login.html')
}
