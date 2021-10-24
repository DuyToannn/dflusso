let formpop = {
    run: function() {
        this.show()
        this.close()
    },
    show: function() {
        let btnPopup = document.querySelector('.btn-popup')
        let formPopup = document.querySelector('.popup-form')
        btnPopup.addEventListener('click', () => {
            formPopup.classList.add('show')
        })
    },
    close: function() {
        let closePopup = document.querySelector('.popup-close')
        let formPopup = document.querySelector('.popup-form')
        closePopup.addEventListener('click', () => {
            formPopup.classList.remove('show')
        })
    }
}
formpop.run()
    // auto popup