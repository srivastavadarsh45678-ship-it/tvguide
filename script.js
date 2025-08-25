// FAQ Accordion
const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
    q.addEventListener('click', () => {
        q.classList.toggle('active');
        const ans = q.nextElementSibling;
        if(ans.style.display === 'block'){ans.style.display='none';}else{ans.style.display='block';}
    });
});