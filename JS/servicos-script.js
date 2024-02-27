document.addEventListener('DOMContentLoaded', function () {
    // Função para validar o formulário
    function validarFormulario() {
        document.querySelector('form').addEventListener('submit', function (event) {
            var selectedService = document.getElementById('selectedService').value;
            var appointmentDate = document.getElementById('appointmentDate').value;
            var appointmentTime = document.getElementById('appointmentTime').value;

            if (selectedService === "" || appointmentDate === "" || appointmentTime === "") {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault();
            } else {
                document.getElementById("confirmationMessage").style.display = "block";
                event.preventDefault();
            }
        });
    }

    // Lista de serviços
    var services = [
        { name: "Corte Feminino", duration: "1h", price: "R$ 80,00" },
        { name: "Escova Feminino", duration: "1h", price: " à partir de R$ 100,00" },
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
        
    ];

    // Função para renderizar a tabela de preços
    function renderizarListaPrecos() {
        var table = document.querySelector(".service-prices table");
        for (var i = 0; i < services.length; i++) {
            var row = document.createElement("tr");
            row.innerHTML = "<td>" + services[i].name + "</td><td>" + services[i].duration + "</td><td>" + services[i].price + "</td>";
            table.appendChild(row);
        }
    }

    // Função para renderizar as opções do formulário de agendamento
    function renderizarOpcoesAgendamento() {
        var select = document.querySelector("#selectedService");
        for (var i = 0; i < services.length; i++) {
            var option = document.createElement("option");
            option.value = services[i].name.toLowerCase().replace(" ", "");
            option.text = services[i].name;
            select.appendChild(option);
        }
    }

    // Função para renderizar os cards para mulheres
    function renderizarCardsMulheres() {
        const cardsContainerMulheres = document.getElementById('cardsContainerMulheres');

        const servicosMulheres = [
            { title: 'CORTE', image: './img/img-servicos/corte-feminino.jpg',alt: 'profissional realizando corte de cabelo em cliente', description: 'Seja qual for o seu estilo, nossa equipe está sempre preparada para te atender!' },
            { title:'ESCOVA', image: './img/img-servicos/escovação.jpg', alt: 'profissional escovando cabelo de uma cliente.', description: 'Transforme seu dia com um cabelo liso e brilhante.'},
            { title:'COLORAÇÃO', image: './img/img-servicos/coloração.jpg', alt: 'profissional colorindo os cabelos de cliente', description: 'Expresse sua personalidade com uma nova cor de cabelo.'},
            { title:'MECHAS', image: './img/img-servicos/mechas.jpg', alt: 'imagem de mulheres com cabelos com mechas', description: 'Ilumine seu visual com mechas deslumbrantes.'},
            { title:'TRATAMENTO CAPILAR', image: './img/img-servicos/trat-cap-fem.jpg', alt: 'profissional realizando tretamento capilar em cliente.', description: 'Revitalize seus cabelos com nossos tratamentos nutritivos.'},
            { title:'PENTEADOS', image: './img/img-servicos/penteados.jpg', alt: 'profissional fazendo um lindo penteado em uma cliente.', description: 'Deixe-nos criar o penteado perfeito para qualquer ocasião.'},
            { title:'MANICURE/PEDICURE', image: './img/img-servicos/manic-pedic.jpg', alt: 'imagem de unhas dos pes e mãos com esmalte.', description: 'Relaxe enquanto transformamos suas unhas em uma obra de arte.'},
            { title:'MAQUIAGEM', image: './img/img-servicos/maquiagem1.webp', alt: 'imagem de mulher maquiada.', description: 'Realce sua beleza natural com nossa maquiagem profissional.'},
            { title:'ALONGAMENTO DE CÍLIOS', image: './img/img-servicos/alongam-de-cilios.jpg', alt: 'imagem contendo demonstração de alongamento de cílios sendo realizado.', description: 'Destaque seus olhos com cílios longos e volumosos.'},
            // Adicione mais serviços conforme necessário
        ];

        servicosMulheres.forEach(servico => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('secao4-div-card');

            cardElement.innerHTML = `
                <h3>${servico.title}</h3>
                <img decoding="async" src="${servico.image}" alt="${servico.title}">
                <p>${servico.description}</p>
            `;

            cardsContainerMulheres.appendChild(cardElement);
        });
    }

    // Função para renderizar os cards para homens
    function renderizarCardsHomens() {
        const cardsContainerHomens = document.getElementById('cardsContainerHomens');

        const servicosHomens = [
            { title: 'CORTE', image: './img/img-servicos/corte-cabelo-homem.jpg', alt:'imagem de um cabelereiro cortando o cabelo de um cliente.', description: 'Estilo e precisão em cada corte.' },
            { title: 'ESCOVA', image: './img/img-servicos/escova-homem.jpg', alt:'imagem mostra o cabelereiro escovando os cabelos de um cliente.', description:'Alinhe seu estilo com uma escova perfeita.'},
            { title: 'SKINCARE', image: './img/img-servicos/skincare masculina.jpg', alt:'profissional realizando skincare em cliente', description:'Cuidado e proteção para a pele masculina.'},
            { title: 'BARBEARIA', image: './img/img-servicos/handsome-man-cutting-beard-barber-salon_1303-20972.jpg', alt:'profissional em barbearia fazendo a barba de um cliente', description:'Transforme sua barba em um símbolo de estilo.'},
            { title: 'FOTODEPILAÇÃO', image: './img/img-servicos/doctor-performing-laser-hair-removal-male-patient-skin.jpg', alt:'profissional realizando procedimento para remoção de pelos com fototerapia em um cliente.', description:'Tecnologia a serviço de uma pele mais lisa'},
            { title: 'ESTUDIO DE TATOO', image: './img/img-servicos/master-doing-tattoo-with-iron-salon.jpg', alt:'profissional fazendo tatuagem em braço de cliente.', description:'Expresse sua individualidade com nossas tatuagens personalizadas.'},
            // Adicione mais serviços conforme necessário
        ];

        servicosHomens.forEach(servico => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('secao5-div-card');

            cardElement.innerHTML = `
                <h3>${servico.title}</h3>
                <img decoding="async" src="${servico.image}" alt="${servico.title}">
                <p>${servico.description}</p>
            `;

            cardsContainerHomens.appendChild(cardElement);
        });
    }

    // Função para renderizar os cards para todos
    function renderizarCardsTodos() {
        const cardsContainerTodos = document.getElementById('cardsContainerTodos');

        const servicosTodos = [
            { title: 'PODOLOGIA', image: './img/img-servicos/podologia.jpg',alt:'profissional podologo realizando cuidados em pes de cliente.', description: 'Cuidado especializado para seus pés' },
            { title: 'DEPILAÇÃO A LASER', image: './img/img-servicos/laser-epilation-hair-removal-therapy_1303-23661.jpg',alt:'imagem mostra como é feita a remoção de pelos corporais à laser', description: 'Tecnologia avançada para uma pele suave e sem pelos.' },
            { title: 'DESIGN DE SOMBRANCELHAS', image: './img/img-servicos/design-de-sombrancelhas.jpg',alt:'imagem mostra como é feito o design de sombrancelhas', description: 'Realce seu olhar com sobrancelhas perfeitamente desenhadas.' },
            { title: 'ESTÉTICA FACIAL', image: './img/img-servicos/trat-facial.jpg',alt:'imagem de profissional realizando tratamento facial em cliente.', description: 'Tratamentos personalizados para realçar sua beleza natural.' },
            { title: 'MASSAGEM TERAPÊUTICA', image: './img/img-servicos/massagem-terapêutica.jpg',alt:'imagem de profissional realizando massagem teraêutica em cliente.', description: 'Alivie o estresse e relaxe com nossas massagens terapêuticas.' },
            { title: 'SPA DAY', image: './img/img-servicos/spa-day.jpg',alt:'imagem de mulher em um ambiente de spa, relaxando', description: 'Um dia de mimos e relaxamento esperam por você.' },
            
            // Adicione mais serviços conforme necessário
        ];

        servicosTodos.forEach(servico => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('secao6-div-card');

            cardElement.innerHTML = `
                <h3>${servico.title}</h3>
                <img decoding="async" src="${servico.image}" alt="${servico.title}">
                <p>${servico.description}</p>
            `;

            cardsContainerTodos.appendChild(cardElement);
        });
    }

    // Chamar as funções ao carregar a página
    window.onload = function () {
        renderizarCardsMulheres();
        renderizarCardsHomens();
        renderizarCardsTodos();
        renderizarListaPrecos();
        renderizarOpcoesAgendamento();
        validarFormulario();
    };
});
