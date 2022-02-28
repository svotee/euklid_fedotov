let search = document.querySelector('.img-svg');
let closeSearch = document.querySelector('#closesearch');
let button1 = document.querySelector('#nav1');
let button2 = document.querySelector('#nav2');
let button3 = document.querySelector('#nav3');
let button4 = document.querySelector('#nav4');
let button5 = document.querySelector('#nav5');
let searchbar = document.querySelector('.search');
let nav = document.querySelector('.nav')

let openSearch = function(){
    button1.classList.toggle('displaynone');
    button2.classList.toggle('displaynone');
    button3.classList.toggle('displaynone');
    button4.classList.toggle('displaynone');
    button5.classList.toggle('displaynone');
    searchbar.classList.toggle('displaynone');
    closeSearch.classList.toggle('displaynone')
    nav.classList.toggle('width')
}

search.addEventListener('click',openSearch)
closeSearch.addEventListener('click',openSearch)

let swiper = new Swiper('.swiper',{
    loop:false, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})