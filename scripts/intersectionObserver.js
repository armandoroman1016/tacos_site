const nav = document.querySelector('nav')
const banner = document.querySelector('.banner')

const bannerCb = (entries, observer) => {

    console.log(observer)
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
