var modal = document.querySelector('.modal')
var btn = document.querySelector('.button')
var close = document.querySelector('.fechar')

function modalGo(){
    modal.style.display ='flex';
    close.style.display = 'flex';
    btn.style.display = 'none';
}
function closed() {
    modal.style.display = 'none';
    close.style.display = 'none';
    btn.style.display = 'block';
}