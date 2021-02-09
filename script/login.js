
const BASE_URL = "https://accenture-java-desafio.herokuapp.com/";
const CONTENT = "application/json";
const MODE = "cors";
const LOCALHOST = "localhost:5500/"

document.getElementById('submitLogin').addEventListener('submit', e => {
    e.preventDefault();
    const login = document.getElementById('login__username').value;
    const passwd = document.getElementById('login__password').value;
    console.log(login, passwd)
    loginForm(login, passwd);
})



async function loginForm(user, senha){
    try {
        await fetch(`${BASE_URL}login`, {
            mode: MODE,
            method: "POST",
            body: JSON.stringify({
                senha: senha,
                usuario: user,
            }),
            headers: {
                'Content-type': CONTENT
            }
        })
        .then( res => {
            if (res.ok){
                location.replace('dashboard.html');
                const resData = res.json()
                console.log(resData);
            }
            // location.replace('error.html')
            return Promise.reject(res)
        })
    } catch (error) {
        console.log(error);
    }
}


async function alterarSenha(user, senha){
    try {
        const response = await fetch(`${BASE_URL}altera-senha`, {
            method: "POST",
            body: JSON.stringify({
                senha: senha,
                usuario: user,
            }),
            headers: {
                'Content-type': CONTENT
            }
        })
        .then( res => {
            if (res.ok){
                console.log(res.json());
                location.replace('altera-senha.html');
            }
            location.replace('error.html')
            return Promise.reject(res)
        })
    } catch (error) {
        console.log(error);
    }
}