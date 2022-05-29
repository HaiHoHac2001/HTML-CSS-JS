var openModal = document.querySelector('.btn_show')
var modal = document.querySelector('.modal_show')
var icon_close = document.querySelector('#icon_close')
var close_btn = document.querySelector('#close_btn')

function toggleModal() {
    modal.classList.toggle('hide')

}

openModal.addEventListener('click',toggleModal)
icon_close.addEventListener('click',toggleModal)
close_btn.addEventListener('click',toggleModal)

