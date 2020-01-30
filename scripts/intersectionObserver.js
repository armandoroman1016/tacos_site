// nav bar classlist toggling starts here
const nav = document.querySelector('nav')
const banner = document.querySelector('.banner')

const bannerCb = (entries, observer) => {

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("scrolled")
        }else if(entry.isIntersecting){

            if(nav.classList.contains('scrolled')){

                nav.classList.remove('scrolled')

            }else{
                return;

            }

        }
    })

}

const bannerOptions = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-100px 0px"
}

const bannerObserver = new IntersectionObserver(bannerCb, bannerOptions);

bannerObserver.observe(banner)

// nav bar classlist toggling ends here


// menu items observer starts here
const menuItems = document.querySelectorAll('.menu_item')


const menuItemCb = (entries, observer) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade_in")
        }else{
            if(entry.target.classList.contains("fade_in")){
                entry.target.classList.remove("fade_in")
            }
        }
    })

}

const menuItemOptions = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-200px 0px -100px 0px"
}

const menuItemsObserver = new IntersectionObserver(menuItemCb, menuItemOptions)

menuItems.forEach(item => {
    menuItemsObserver.observe(item)
})
