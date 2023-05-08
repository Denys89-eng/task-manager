function select() {
    let navLink = document.querySelectorAll('.link')

    navLink.forEach(function (elem) {
        elem.addEventListener('click', activeLink)
    })

    function activeLink() {
        navLink.forEach(function (elem) {
            elem.classList.remove('active_link');
        })
        this.classList.add('active_link')
        let getAtr = this.getAttribute('data-tab')
        selectContent(getAtr)
    }

    function selectContent(getAtr) {
        let tabBlock = document.querySelectorAll('.tab-block')


        tabBlock.forEach(function (elem) {
            elem.classList.contains(getAtr) ? elem.classList.add('active_tab') : elem.classList.remove('active_tab')
        })
    }
}

export {select}
