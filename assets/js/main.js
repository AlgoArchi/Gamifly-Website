
window.addEventListener("scroll",() => {

    if(window.scrollY > 80){
        document.querySelector("header").classList.add("header")
        document.querySelector("#download").classList.add("d-block")
        document.querySelector("#download").classList.remove("d-none")
    }
    else{
        document.querySelector("header").classList.remove("header")
        document.querySelector("#download").classList.remove("d-block")
        document.querySelector("#download").classList.add("d-none")
    }
})


const players = Array.from(document.querySelectorAll('#player')).map((p) => new Plyr(p,{
    captions: { active: false, language: 'auto', update: false },
    youtube: { noCookie: false, rel: false, showinfo: false, iv_load_policy: 3, modestbranding: 1 }
}));



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

var splide = new Splide( '.splide', {
  type   : 'loop',  
  drag   : 'free',
  focus  : 'center',
  rewind     : true,
  rewindSpeed: 1000,
  snap   : true,
  perPage: 1,
  start: 1,
  autoWidth: true,
  gap: '2rem',
  autoScroll: {
    speed: 1,
  },
  // pagination: false
} );

splide.mount(window.splide.Extensions);

const game_arrow_next = document.querySelector("#game_arrow_next")
const game_arrow_prev = document.querySelector("#game_arrow_prev")
const game_cards = Array.from(document.querySelectorAll(".game_slider ul li"))
const game_dots = Array.from(document.querySelectorAll(".game-dot"))

game_arrow_prev.addEventListener("click",prevGameSlide);
game_arrow_next.addEventListener("click",nextGameSlide);

let index = 0;

function prevGameSlide(){

    game_cards[index].classList.remove("game-active");
    game_dots[index].classList.remove("active");

    if(index === 0){
        index = game_cards.length - 1;
        game_cards[index].classList.add("game-active");
        game_dots[index].classList.add("active");
    }
    else{
        index--;
        game_cards[index].classList.add("game-active");
        game_dots[index].classList.add("active");
    }
}

// setInterval(nextGameSlide,3000);


function nextGameSlide(){
    game_cards[index].classList.remove("game-active");
    game_dots[index].classList.remove("active");

    if(index === game_cards.length - 1){
        index = 0;
        game_cards[index].classList.add("game-active");
        game_dots[index].classList.add("active");
    }
    else{
        index++;
        game_cards[index].classList.add("game-active");
        game_dots[index].classList.add("active");
    }
}


const winner_arrow_next = document.querySelector("#winner_arrow_next")
const winner_arrow_prev = document.querySelector("#winner_arrow_prev")
const winner_cards = Array.from(document.querySelectorAll(".winner_slider ul li"))
const winner_dots = Array.from(document.querySelectorAll(".winner-dot"))

winner_arrow_prev.addEventListener("click",prevWinnerSlide);
winner_arrow_next.addEventListener("click",nextWinnerSlide);

let windex = 0;

function prevWinnerSlide(){

    winner_cards[windex].classList.remove("winner-active");
    winner_dots[windex].classList.remove("active");

    if(windex === 0){
        windex = winner_cards.length - 1;
        winner_cards[windex].classList.add("winner-active");
        winner_dots[windex].classList.add("active");
    }
    else{
        windex--;
        winner_cards[windex].classList.add("winner-active");
        winner_dots[windex].classList.add("active");
    }
}

// setInterval(nextWinnerSlide,3000);


function nextWinnerSlide(){
    winner_cards[windex].classList.remove("winner-active");
    winner_dots[windex].classList.remove("active");

    if(windex === winner_cards.length - 1){
        windex = 0;
        winner_cards[windex].classList.add("winner-active");
        winner_dots[windex].classList.add("active");
    }
    else{
        windex++;
        winner_cards[windex].classList.add("winner-active");
        winner_dots[windex].classList.add("active");
    }
}


const guide_arrow_next = document.querySelector("#guide_arrow_next")
const guide_arrow_prev = document.querySelector("#guide_arrow_prev")
const guide_cards = Array.from(document.querySelectorAll(".guide_slider ul li"))
const guide_dots = Array.from(document.querySelectorAll(".guide-dot"))

guide_arrow_prev.addEventListener("click",prevGuideSlide);
guide_arrow_next.addEventListener("click",nextGuideSlide);

let gindex = 0;

function prevGuideSlide(){

    guide_cards[gindex].classList.remove("guide-active");
    guide_dots[gindex].classList.remove("active");

    if(gindex === 0){
        gindex = guide_cards.length - 1;
        guide_cards[gindex].classList.add("guide-active");
        guide_dots[gindex].classList.add("active");
    }
    else{
        gindex--;
        guide_cards[gindex].classList.add("guide-active");
        guide_dots[gindex].classList.add("active");
    }
}

// setInterval(nextGuideSlide,3000);


function nextGuideSlide(){
    guide_cards[gindex].classList.remove("guide-active");
    guide_dots[gindex].classList.remove("active");

    if(gindex === guide_cards.length - 1){
        gindex = 0;
        guide_cards[gindex].classList.add("guide-active");
        guide_dots[gindex].classList.add("active");
    }
    else{
        gindex++;
        guide_cards[gindex].classList.add("guide-active");
        guide_dots[gindex].classList.add("active");
    }
}


$("#downloadEvent").on('click',downloadProgress)


function downloadProgress(){
    
    document.querySelector('#secure-section').classList.remove('d-none')

    const goto = document.querySelector('.go-to-installation')
    goto.click()
    document.querySelector("#progress").classList.remove('d-none')
    const link = document.querySelector('.download-app')
    link.click()
    setTimeout(() => {
        document.querySelector("#progress").classList.add('d-none')
    },4000)

    setTimeout(() => {
        document.querySelector('#secure-section').classList.add('d-none')
    },7000)
}

console.log(Array.from(document.querySelectorAll(".downloadable")))

Array.from(document.querySelectorAll(".downloadable")).map(download => {
    download.addEventListener('click', e => {
        console.log(e.target)
        if(!e.target.classList.contains('guide-next', 'guide-prev')){
            const link = document.querySelector('.download-app')
            link.click()    
        }
    })
})