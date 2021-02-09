let header = document.querySelector('.header'),
    nav = header.querySelector('.nav-col'),
    hamburger = header.querySelector('.hamburger')

function setPos(el, target) {
    if (window.innerWidth <= 520) {
        target.style.cssText = `top: ${el.offsetHeight}px;
                            min-height: calc(100vh - ${el.offsetHeight}px);`
    } else {
        target.style.cssText = ''
    }

}

function setFixedOnScroll(target) {
    if (window.innerWidth >= 520) {
        window.pageYOffset >= window.innerHeight ?
            target.classList.add('fixed') :
            target.classList.remove('fixed')
    }
}

function toggleNav() {
    if (hamburger.classList.contains('hamburger-active')) {
        hamburger.classList.remove('hamburger-active')
        nav.classList.remove('nav-active')

    } else {
        hamburger.classList.add('hamburger-active')
        nav.classList.add('nav-active')
    }
}

function hideNav(ev) {
    let target = ev.target
    if (target.closest('.hamburger')) {
        setPos(header, nav)
        toggleNav()
    }
    if (target.closest('.nav-col a')) {
        toggleNav()
    }
}

function toggleActiveLink(ev) {
    let target = ev.target
    if (target.closest('.nav-li')) {
        for (let li of document.querySelectorAll('.nav-li')) {
            li.classList.remove('active')
        }
        target.closest('.nav-li').classList.add('active')
    }
}



window.onload = () => {
    setPos(header, nav)
    setFixedOnScroll(header)

}
window.onresize = () => {
    setPos(header, nav)
}
window.onscroll = () => {
    setFixedOnScroll(header)
}
document.onclick = (ev) => {
    hideNav(ev)
    toggleActiveLink(ev)

}


