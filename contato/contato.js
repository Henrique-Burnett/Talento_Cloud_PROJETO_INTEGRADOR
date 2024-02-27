// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label) {

    
    input.addEventListener('focus', function () {
        label.classList.add('required-popup')
    });
    
    input.addEventListener('blur', function () { 
        label.classList.remove('required-popup');
    })
}

mostrarPopup(usernameInput, usernameLabel);


usernameInput.addEventListener('change', function (evento) {
    let valor = evento.target.value


    if (valor.length < 3) {
        usernameInput.classList.remove('correct'); 
        usernameInput.classList.add('error');
        usernameHelper.innerText = "Seu nome deve conter 3 ou mais caracteres"
        usernameHelper.classList.add('visible')
    } else {
        usernameInput.classList.remove('error');
        usernameInput.classList.add('correct');
        usernameHelper.classList.remove('visible'); 

    }
})


// -------------VALIDAÇÃO DE EMAIL ------------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

mostrarPopup(emailInput, emailLabel);


emailInput.addEventListener("change", function (e) {
    let valor = e.target.value
    if (valor.includes("@") && valor.includes(".com")) { 

        emailInput.classList.remove('error');
        emailInput.classList.add('correct');
        emailHelper.classList.remove('visible');
    } else {

        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = "Insira um endereço de e-mail válido"
        emailHelper.classList.add('visible')

    }
})
