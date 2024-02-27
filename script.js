/*-----------SLIDER SHOW---------------*/
let contador =1;

setInterval( function(){
document.getElementById("slide" + contador).checked =true;
contador ++;
if( contador > 5) {
    contador = 1;
}
}, 3000);


// /*----------MENU HAMBUGUER------------*/ 
function clickMenu(){
    if(itens.style.display == 'block'){
    itens.style.display = 'none'
}else{
    itens.style.display = 'block';
}
}



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
        usernameHelper.innerText = "Seu nome deve ter 3 ou mais caracteres"
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

// -------------VALIDAÇÃO DATA DE AGENDAMENTO ------------- //
let dateInput = document.getElementById("date");
let dateLabel = document.querySelector('label[for="date"]');
let dateHelper = document.getElementById('date-helper');

mostrarPopup(dateInput, dateLabel);


// -------------VALIDAÇÃO HORÁRIO DE AGENDAMENTO ----------- //
let timeInput = document.getElementById("time");
let timeLabel = document.querySelector('label[for="time"]');
let timeHelper = document.getElementById('time-helper');

mostrarPopup(timeInput, timeLabel);


// -------------BOTÃO AGENDAMENTO/FORM ----------- //

function toggleForm() {
    const form = document.getElementById("appointmentForm");
    form.classList.toggle("hidden");
}



function abrir() {
    document.querySelector("form").style.opacity = 1
    document.querySelector("#corpo").style.opacity = 0.2
   

}
function fechar() {
    document.querySelector("form").style.opacity = 0
    document.querySelector("#corpo").style.opacity = 1
   
}
