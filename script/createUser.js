
const BASE_URL = "accenture-java-desafio.herokuapp.com/";
const CONTENT = "application/json";
const MODE = "cors";
const LOCALHOST = "localhost:5500/"



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
        .then( res => {
            if (res.ok){
                console.log(res.json())
                return createCardLoginRealizado();
            }
            location.replace(`${LOCALHOST}error.html`)
            return Promise.reject(res)
        })
    } catch (error) {
        console.log(error)
    }
}


function createCardLoginRealizado(){

}