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

if(banner){
    bannerObserver.observe(banner)
}

// nav bar classlist toggling ends here


// menu items observer starts here
const menuItems = document.querySelectorAll('.menu_item')


const menuItemCb = (entries, observer) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade_in")
            observer.unobserve(entry.target)
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

if(menuItems){
    menuItems.forEach(item => {
        menuItemsObserver.observe(item)
    })
}

// menu items observer ends here

// menu specialty items observer starts here
const specialtyItems = document.querySelectorAll('.specialty')
const specialtyContainer = document.querySelector('.menu_specialties')

const specialtyCb = (entries, observer) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("slide_in")
        }else{
            if(entry.target.classList.contains("slide_in")){
                entry.target.classList.remove("slide_in")
            }
        }
    })

}

const specialtyItemOptions = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-75px 0px "
}

const specialtyItemObserver = new IntersectionObserver(specialtyCb, specialtyItemOptions)

if (specialtyItems){
    specialtyItems.forEach(item => {
        specialtyItemObserver.observe(item)
    })
}


// menu specialty items observer end here


// about observer section observer starts here

const aboutItems = document.querySelectorAll('.about_item')
const aboutContainer = document.querySelector('.about')


const aboutCb = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            aboutItems.forEach(item => item.classList.add('slide_down'))
            observer.unobserve(entry.target)
        }
    })

}

const aboutItemOptions = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-225px 0px"
}

const aboutItemObserver = new IntersectionObserver(aboutCb, aboutItemOptions)

if(aboutContainer){
    aboutItemObserver.observe(aboutContainer)
}

// about observer section observer ends here

// video observer section observer starts here

const videoItems = document.querySelectorAll('.video_el')
const videoContainer = document.querySelector('.video_container')


const videoCb = (entries, observer) => {
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

const videoItemOptions = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-160px 0px"
}

const videoItemObserver = new IntersectionObserver(videoCb, videoItemOptions)

if(videoItems){
    videoItems.forEach(item => {
        videoItemObserver.observe(item)
    })
}

// video observer section observer ends here

// testimonial observer section observer starts here

const testimonials = document.querySelector('.testimonials')


const testimonialCb = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("slide_in")
        }
    })

}

const testimonialOptions = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-240px 0px"
}

const testimonialObserver = new IntersectionObserver(testimonialCb, testimonialOptions)

if(testimonials){
    testimonialObserver.observe(testimonials)
}

// testimonial observer section observer ends here







