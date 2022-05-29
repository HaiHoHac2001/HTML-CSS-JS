var searchBtn = document.querySelector('.search__btn')

searchBtn.addEventListener('click', function(){
    // lấy ra cái element cha từ thằng con
    this.parentElement.classList.toggle('open')
    // khi click vào search thì tự động focus cho người dùng
    this.previousElementSibling.focus()
})