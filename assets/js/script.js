let nome = window.document.getElementById('nome')
let nomeOk = false

let email = document.querySelector('#email')
let emailOk = false

let assunto = document.querySelector('#assunto')
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome()
{

    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3)
    {
        txtNome.innerHTML = "Nome inválido."
        txtNome.style.color = 'red'
    }
    else
    {
        txtNome.innerHTML = "Nome válido."
        txtNome.style.color = 'green'
         nomeOk = true

    }
}

function validaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) 
    {
        txtEmail.innerHTML = "Email inválido."
        txtEmail.style.color = 'red'    
    }
    else
    {
        txtEmail.innerHTML = "Email válido."
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto()
{
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length>100) 
    {
        txtAssunto.innerHTML = "Sua mensagem ultrapassa o limite de 100 caracteres."
        txtAssunto.style.color = 'red' 
        txtAssunto.style.display = 'block' 
    }
    else
    {
        txtAssunto.style.display = 'none' 
        assuntoOk = true
    }
}

function enviar ()
{
    if (nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert("Formulário enviado com sucesso!")
    }
    else
    {
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}

function zoomMapa()
{
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function normalMapa()
{
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}