let hamburgerButton = document.querySelector('.mobile_menu_icon')
let mobileLinks =  document.querySelector('.mobile-nav-links')
let menuItems = document.querySelectorAll('.menu_item')
let menuContainer = document.querySelector('.menu')

// toggle mobile menu
hamburgerButton.addEventListener('click', (e) => {
    
    const isShown = mobileLinks.classList.contains('show')

    if(isShown){
        mobileLinks.classList.remove('show')
    }else{
        mobileLinks.classList.add('show')
    }
    
})
