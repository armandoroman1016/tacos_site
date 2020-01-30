let hamburgerButton = document.querySelector('.mobile_menu_icon')
let mobileLinks =  document.querySelector('.mobile-nav-links')

// toggle mobile menu
hamburgerButton.addEventListener('click', (e) => {
    
    const isShown = mobileLinks.classList.contains('show')

    if(isShown){
        mobileLinks.classList.remove('show')
    }else{
        mobileLinks.classList.add('show')
    }
    
})
