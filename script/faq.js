var faqPergunta1 = document.getElementById('faqPergunta1')
var faqResponse1 = document.getElementById('faqResponse1')

var faqPergunta2 = document.getElementById('faqPergunta2')
var faqResponse2 = document.getElementById('faqResponse2')

var faqPergunta3 = document.getElementById('faqPergunta3')
var faqResponse3 = document.getElementById('faqResponse3')

var faqPergunta4 = document.getElementById('faqPergunta4')
var faqResponse4 = document.getElementById('faqResponse4')

faqPergunta1.addEventListener('click', () => {
    if(faqResponse1.classList.contains('hide')) {
        faqResponse1.classList.remove('hide')
    } else {
        faqResponse1.classList.add('hide')
    }
})

faqPergunta2.addEventListener('click', () => {
    if(faqResponse2.classList.contains('hide')) {
        faqResponse2.classList.remove('hide')
    } else {
        faqResponse2.classList.add('hide')
    }
})

faqPergunta3.addEventListener('click', () => {
    if(faqResponse3.classList.contains('hide')) {
        faqResponse3.classList.remove('hide')
    } else {
        faqResponse3.classList.add('hide')
    }
})

faqPergunta4.addEventListener('click', () => {
    if(faqResponse4.classList.contains('hide')) {
        faqResponse4.classList.remove('hide')
    } else {
        faqResponse4.classList.add('hide')
    }
})