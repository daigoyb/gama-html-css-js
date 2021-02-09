
const BASE_URL = "accenture-java-desafio.herokuapp.com/";
const CONTENT = "application/json";
const MODE = "cors";

document.getElementById('submitFormCadastro').addEventListener('submit', submitCadastroForm)

function submitCadastroForm(event){
    event.preventDefault();
    const cpf = document.getElementById('cpf');
    const name = document.getElementById('name');
    const user = document.getElementById('user');
    const senha = document.getElementById('senha');
    const senhaDeNovo = document.getElementById('senhaDeNovo');
    if (senha === senhaDeNovo){
        await createUser(cpf, user, name, senha);
    }
    
}

async function createUser(cpf, user, nome, senha){
    try{
        const res = await fetch(`${BASE_URL}usuarios`, {
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
                console.log(res.json())
                window.location.replace('login.html')
            }
            window.location.replace('error.html');
            return Promise.reject(res)
        })
    } catch (error) {
        console.log(error)
    }
}

function redirectToLogin(){
    window.location.replace('login.html')
}


function createCardLoginRealizado(){
    let wrapper = document.createElement('div');
    wrapper.className('wrapper');
    
}