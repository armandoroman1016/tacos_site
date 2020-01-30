const nav = document.querySelector('nav')

const cb = (entries, observer) => {

    console.log(observer)
    entries.forEach(entry => {
        console.log('inside cb:', entry.target)
    })

}

const options = {
    root: null, // is the viewport
    threshold: 0,
    rootMargin: "-50px"
}

const observer = new IntersectionObserver(cb, options);

observer.observe(nav)
