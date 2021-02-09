
const BASE_URL = "accenture-java-desafio.herokuapp.com/";
const CONTENT = "application/json";
const MODE = "cors";
const LOCALHOST = "localhost:5500/"



async function login(user, senha){
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
                location.replace('dashboard.html');
                const resData = res.json()
                console.log(resData);
                
            }
            location.replace('error.html')
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
                location.replace('login.html');
            }
            location.replace('error.html')
            return Promise.reject(res)
        })
    } catch (error) {
        console.log(error);
    }
}