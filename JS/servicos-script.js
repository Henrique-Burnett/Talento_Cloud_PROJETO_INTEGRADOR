// script.js

// Função para criar e renderizar os cards dinamicamente
function renderizarCards(servicos, secao) {
    const divSecao = document.querySelector(`.${secao}`);
    divSecao.innerHTML = ''; // Limpa o conteúdo da div antes de renderizar os cards

    servicos.forEach((servico) => {
        const card = document.createElement('div');
        card.classList.add(`${secao}-div-card`);

        const titulo = document.createElement('h3');
        titulo.textContent = servico.titulo;

        const imagem = document.createElement('img');
        imagem.src = servico.imagem;
        imagem.alt = servico.alt;

        const descricao = document.createElement('p');
        descricao.textContent = servico.descricao;

        card.appendChild(titulo);
        card.appendChild(imagem);
        card.appendChild(descricao);

        divSecao.appendChild(card);
    });
}

// Dados para os cards
const servicosMulher = [
    { titulo: 'Corte', imagem: './img/corte-feminino.jpg', alt: 'profissional realizando corte de cabelo em cliente', descricao: 'Seja qual for o seu estilo, nossa equipe está sempre preparada para te atender!' },
    { titulo: 'ESCOVA', imagem: './img/img-servicos/escovação.jpg', alt:'profissional escovando cabelo de uma cliente.', descricao: 'Transforme seu dia com um cabelo liso e brilhante.' },
    { titulo: 'COLORAÇÃO', imagem: './img/img-servicos/coloração.jpg',alt:'profissional colorindo os cabelos de cliente.', descricao: 'Expresse sua personalidade com uma nova cor de cabelo.' },
    { titulo: 'MECHAS', imagem: './img/img-servicos/mechas.jpg',alt:'imagem de mulheres com cabelos com mechas.', descricao: 'Ilumine seu visual com mechas deslumbrantes.' },
    { titulo: 'TRATAMENTO CAPILAR', imagem: './img/img-servicos/trat-cap-fem.jpg',alt:'profissional realizando tratamento capilar em cliente.', descricao: 'Revitalize seus cabelos com nossos tratamentos nutritivos.' },
    { titulo: 'PENTEADOS', imagem: './img/img-servicos/penteados.jpg',alt:'profissional fazendo um lindo penteado em uma cliente.', descricao: 'Deixe-nos criar o penteado perfeito para qualquer ocasião.' },
    { titulo: 'MANICURE/PEDICURE', imagem: './img/img-servicos/manic-pedic.jpg',alt:'imagem de unhas dos pes e mãos com esmalte.', descricao: 'Relaxe enquanto transformamos suas unhas em uma obra de arte.' },
    { titulo: 'MAQUIAGEM', imagem: './img/img-servicos/maquiajem1.webp',alt:'imagem de mulher maquiada.', descricao: 'Realce sua beleza natural com nossa maquiagem profissional.' },
    { titulo: 'ALONGAMENTO DE CÍLIOS', imagem: './img/img-servicos/alongam-de cilios.jpg',alt: 'PROFISSIONAL FAZENDO ALONGAMENTO DE CILIOS EM CLIENTE.',descricao: 'Destaque seus olhos com cílios longos e volumosos.'},
        // Adicione mais serviços conforme necessário
    ];
    // Adicione mais serviços conforme necessário


const servicosHomem = [
    { titulo: 'CORTE', imagem: './img/img-servicos/corte-cabelo-homem.jpg',alt:'profissional realizando corte em cliente masculino', descricao: 'Estilo e precisão em cada corte.' },
    { titulo: 'ESCOVA', imagem: './img/img-servicos/escova-homem.jpg',alt:'profissional fazendo escova em cliente masculino', descricao: 'Alinhe seu estilo com uma escova perfeita.' },
    { titulo: 'SKINCARE', imagem: './img/img-servicos/skincare masculina.jpg',alt:'profissional realizando skincare em cliente', descricao: 'Cuidado e proteção para a pele masculina.' },
    { titulo: 'BARBEARIA', imagem: './img/img-servicos/cliente-fazendo-a-barba.jpg',alt:'profissional em barbearia fazendo a barba de um cliente', descricao: 'Transforme sua barba em um símbolo de estilo.' },
    { titulo: 'FOTODEPILAÇÃO', imagem: './img/img-servicos/doctor-performing-laser-hair-removal-male-patient-skin.jpg',alt:'profissional realizando procedimentod para remoção de pelos com fototerapia em um cliente.', descricao: 'Tecnologia a serviço de uma pele mais lisa' },
    { titulo: 'ESTUDIO DE TATOO', imagem: './img/img-servicos/master-doing-tattoo-with-iron-salon.jpg',alt:'profissional fazendo tatuagem em braço de cliente.', descricao: 'Expresse sua individualidade com nossas tatuagens personalizadas' },
        // Adicione mais serviços conforme necessário
    ];


const servicosTodos = [
    { titulo: 'PODOLOGIA', imagem: './img/img-servicos/podologia.jpg',alt:'profissional podologo realizando cuidados em pes de cliente.', descricao: 'Cuidado especializado para seus pés.' },
    { titulo: 'DEPILAÇÃO A LASER', imagem: './img/img-servicos/laser-epilation-hair-removal-therapy_1303-23661.jpg',alt:'profissionalrealizando depilação a laser em cliente.', descricao: 'Tecnologia avançada para uma pele suave e sem pelos.' },
    { titulo: 'DESIGN DE SOMBRANCELHAS', imagem: './img/img-servicos/design-de-sombrancelhas.jpg',alt:"imagem de mulher fazendo as sombrancelhas", descricao: 'Realce seu olhar com sobrancelhas perfeitamente desenhadas.' },
    { titulo: 'ESTÉTICA fACIAL', imagem: './img/img-servicos/trat-facial.jpg',alt:'imagem de mulher recebendo tratamento facial.' ,descricao: 'Tratamentos personalizados para realçar sua beleza natural.' },
    { titulo: 'MASSAGEM TERAPÊUTICA', imagem: './img/img-servicos/massagem-terapêutica.jpg',alt:'imagem de mulher realizando massagem no corpo.', descricao: 'Alivie o estresse e relaxe com nossas massagens terapêuticas.' },
    { titulo: 'SPA DAY', imagem: './img/img-servicos/spa-day.jpg',alt:'imagem de mulher em um spa.', descricao: 'Um dia de mimos e relaxamento esperam por você.' },
    // Adicione serviços para todos conforme necessário
];

// Renderizar os cards
renderizarCards(servicosMulher, 'secao4');
renderizarCards(servicosHomem, 'secao5');
renderizarCards(servicosTodos, 'secao6');

// Função para criar e renderizar a lista de preços
function renderizarListaPrecos(servicosPrecos) {
    const tabela = document.querySelector('.service-prices table');

    servicosPrecos.forEach((servicoPreco) => {
        const row = tabela.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = servicoPreco.servico;
        cell2.textContent = servicoPreco.duracao;
        cell3.textContent = servicoPreco.preco;
    });
}

// Dados para a lista de preços
const servicosPrecos = [
    { servico: 'Corte Feminino', duracao: '1h', preco: 'R$ 80,00' },
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
    {name: "Fotodepilação", duration: "2.30h", price: "R$ 150,00"},
    {name: "Tatoo", duration: "1h/3h", price: "à partir de R$ 80,00"},
    {name: "Podologia", duration: "2h", price: " à partir de R$ 80,00"},
    {name: "Depilação a laser", duration: "2h", price: " à partir de R$ 80,00"},
    {name: "Design de sombrancelhas", duration: "1h", price: "R$ 180,00"},
    {name: "Estética Facial", duration: "1h", price: "R$ 120,00"},
    {name: "Massagem Terapêutica", duration: "2h", price: "à partir de R$ 150,00"},
    {name: "Spa Day", duration: "8h", price: "R$ 580,00"},

    // Adicione mais serviços conforme necessário
];

// Renderizar a lista de preços
renderizarListaPrecos(servicosPrecos);

// Função para validar o formulário
function validarFormulario() {
    const form = document.getElementById('bookingForm');
    const selectedService = form.querySelector('#selectedService');
    const appointmentDate = form.querySelector('#appointmentDate');
    const appointmentTime = form.querySelector('#appointmentTime');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Adicione aqui as suas condições de validação, por exemplo:
    if (selectedService.value === '' || appointmentDate.value === '' || appointmentTime.value === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    // Aqui você pode enviar o formulário para o servidor ou exibir uma mensagem de confirmação
    confirmationMessage.style.display = 'block';
    return true;
}

// Adiciona o evento de clique ao botão de agendar
document.querySelector('#bookingForm button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    validarFormulario();
});
