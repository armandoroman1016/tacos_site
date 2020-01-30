let hamburgerButton = document.querySelector('.mobile_menu_icon')
let mobileLinks =  document.querySelector('.mobile-nav-links')
let menuItems = document.querySelectorAll('.menu_item')
let menuContainer = document.querySelector('.menu')

console.log(menuItems)
// toggle mobile menu
hamburgerButton.addEventListener('click', (e) => {
    
    const isShown = mobileLinks.classList.contains('show')

    if(isShown){
        mobileLinks.classList.remove('show')
    }else{
        mobileLinks.classList.add('show')
    }
    
})



let containerDimensions = menuContainer.getBoundingClientRect()
const windowHeight = window.innerHeight

window.addEventListener('scroll', () => {
    if((window.scrollY + windowHeight) < containerDimensions.bottom && (window.scrollY + windowHeight) > containerDimensions.top){
        if(menuItems){
            for(let i =0; i < menuItems.length; i++){
                if ((window.scrollY + windowHeight) > (menuItems[i].offsetTop + 10)){

                    // console.log(menuItems[i].getBoundingClientRect())
                    menuItems[i].classList.add('show_item')
                }
            }
        }
    }
})