const questions = document.querySelectorAll('.questions__answer');

questions.forEach(question => {
    const arrow = question.querySelector('.questions__arrow');
    arrow.addEventListener('click', () => {
        toggleAnswer(question);
    });
});

function toggleAnswer(question) {
    const answer = question.querySelector('.questions__show');
    const isOpen = answer.classList.contains('show');


    if (isOpen) {
        answer.classList.remove('show');
    } else {
        questions.forEach(q => {
            q.querySelector('.questions__show').classList.remove('show');
        });
        answer.classList.add('show');
    }
}

//parte de los iconos 
document.querySelectorAll('.questions__arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        const answer = this.parentElement.nextElementSibling;
        answer.classList.toggle('show');
    });
});


