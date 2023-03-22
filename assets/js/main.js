
window.addEventListener("scroll",() => {

    if(window.scrollY > 100){
        document.querySelector("header").classList.add("d-none")
    }
    else{
        document.querySelector("header").classList.remove("d-none")
    }
})