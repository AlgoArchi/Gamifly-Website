
window.addEventListener("scroll",() => {

    if(window.scrollY > 100){
        document.querySelector("header").classList.add("d-none")
    }
    else{
        document.querySelector("header").classList.remove("d-none")
    }
})

let faqLists = document.querySelectorAll("#blog .list .list-item")
let mediumLink = document.querySelector("#medium-link-btn")

Array.from(faqLists).map((item,index) => {
  item.addEventListener('click',li => {
    Array.from(faqLists).map(i => {
      i.style.backgroundColor = "#151515"
      i.firstElementChild.nextElementSibling.style.display = 'none'
      i.firstElementChild.firstElementChild.nextElementSibling.style.display = 'none'
    })
    li.target.style.backgroundColor = "#232323"
    li.target.firstElementChild.nextElementSibling.style.display = 'block'
    li.target.firstElementChild.firstElementChild.nextElementSibling.style.display = 'block'
    mediumLink.href = li.target.id
  })
})