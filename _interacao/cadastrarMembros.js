function meuEscopo() {
    
    const membros = [];
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    form.addEventListener('submit',recebeEventoForm);    
    
    function recebeEventoForm(e){
        e.preventDefault();
        const nome = form.querySelector('#nomeCompleto').value;
        const rg = form.querySelector('#rg').value;
        const cpf = form.querySelector('#cpf').value;
        const nomeLogradouro = form.querySelector('#nomeLog').value;
        const numeroLog = form.querySelector('#numLog').value;
        const cep = form.querySelector('#cep').value;
        
        const bairro = form.querySelector('#numLog').value;
        const pontoDeRef = form.querySelector('#dotRef').value;
    
        membros.push({
            nome,
            rg,
            cpf,
            nomeLogradouro,numeroLog, cep,bairro, pontoDeRef

        });
        console.log(membros)
        resultado.innerHTML+= `<p>${nome} ${rg} ${cpf}</p>`
    };
    
};
meuEscopo();