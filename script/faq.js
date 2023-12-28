for (let i = 1; i <= 4; i++) {
    const faqPergunta = document.getElementById(`faqPergunta${i}`);
    const faqResponse = document.getElementById(`faqResponse${i}`);
    
    addClickListener(faqPergunta, faqResponse);
}

function addClickListener(pergunta, resposta) {
    pergunta.addEventListener('click', () => {
        if (resposta.classList.contains('hide')) {
            resposta.classList.remove('hide');
        } else {
            resposta.classList.add('hide');
        }
    });
}