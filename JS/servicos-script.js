document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        // Obtém os valores dos campos
        var selectedService = document.getElementById('selectedService').value;
        var appointmentDate = document.getElementById('appointmentDate').value;
        var appointmentTime = document.getElementById('appointmentTime').value;

        // Realiza a validação
        if (selectedService === "" || appointmentDate === "" || appointmentTime === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        } else {
            // Se a validação passar, exiba a mensagem de confirmação
            document.getElementById("confirmationMessage").style.display = "block";
            event.preventDefault();  // Remova esta linha se quiser que o formulário seja enviado normalmente após a confirmação
        }
    });

    // Crie um array de objetos, onde cada objeto representa um serviço
    var services = [
        {name: "Corte Feminino", duration: "1h", price: "R$ 80,00"},
        {name: "Escova Feminino", duration: "1h", price: " à partir de R$ 100,00"},
        {name: "Coloração Feminino", duration: "2h", price: "R$ 120,00"},
        {name: "Mechas Feminino", duration: "2h", price: "R$ 150,00"},
        {name: "Tratamento Capilar", duration: "1.30h", price: "R$ 120,00"},
        {name: "Penteado", duration: "2h", price: "R$ 150,00"},
        {name: "Manicure/Pedicure", duration: "2h", price: "R$ 60,00"},
        {name: "Maquiagem", duration: "1.30h", price: "R$ 130,00"},
        {name: "Alongamento de cilios", duration: "2.30h", price: "R$ 230,00"},
        {name: "Corte Masculino", duration: "1h", price: "R$ 80,00"},
        {name: "escova Masculino", duration: "1h", price: "R$ 80,00"},
        {name: "Skincare", duration: "1h", price: "R$ 120,00"},
        {name: "Barbearia", duration: "2h", price: " à partir de R$ 60,00"},
        {name: "fotodepilação", duration: "2.30h", price: "R$ 150,00"},
        {name: "Tatoo", duration: "1h/3h", price: "à partir de R$ 80,00"},
        {name: "Podologia", duration: "2h", price: " à partir de R$ 80,00"},
        {name: "Depilação a laser", duration: "2h", price: " à partir de R$ 80,00"},
        {name: "Design de sombrancelhas", duration: "1h", price: "R$ 180,00"},
        {name: "Estética Facial", duration: "1h", price: "R$ 120,00"},
        {name: "Massagem Terapêutica", duration: "2h", price: "à partir de R$ 150,00"},
        {name: "Spa Day", duration: "8h", price: "R$ 580,00"},
        // ... (seu array de serviços continua aqui)
    ];

    // Função para renderizar a tabela de preços
    function renderPriceTable() {
        var table = document.querySelector(".service-prices table");
        for (var i = 0; i < services.length; i++) {
            var row = document.createElement("tr");
            row.innerHTML = "<td>" + services[i].name + "</td><td>" + services[i].duration + "</td><td>" + services[i].price + "</td>";
            table.appendChild(row);
        }
    }

    // Função para renderizar as opções do formulário de agendamento
    function renderBookingOptions() {
        var select = document.querySelector("#selectedService");
        for (var i = 0; i < services.length; i++) {
            var option = document.createElement("option");
            option.value = services[i].name.toLowerCase().replace(" ", "");
            option.text = services[i].name;
            select.appendChild(option);
        }
    }

    // Chame as funções quando a página for carregada
    renderPriceTable();
    renderBookingOptions();
});
