const hamburg = document.getElementById('hamburg');
const burger = document.getElementById('burger');

hamburg.addEventListener('click', () => {
    if(burger.dataset.muncul === 'no') {
        burger.dataset.muncul = 'yes';
    } else {
        burger.dataset.muncul = 'no';
    }
});