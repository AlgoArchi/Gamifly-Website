
window.addEventListener("scroll",() => {

    if(window.scrollY > 100){
        document.querySelector("header").classList.add("header")
    }
    else{
        document.querySelector("header").classList.remove("header")
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

var splide = new Splide( '.splide', {
  type   : 'loop',  
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
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

const player1 = new Plyr(document.getElementById('player-1'));
const player2 = new Plyr(document.getElementById('player-2'));
const player3 = new Plyr(document.getElementById('player-3'));

