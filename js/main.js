const header = document.getElementById("header");
const search_book = document.getElementById("search-book");
const sticky = search_book.offsetTop;

const menu_btn2 = document.querySelector("#mobile-menu-btn2");

function stickyHeader(){
    if(window.pageYOffset > 10){
        header.classList.add("header-scrolled");
    }
    else{
        header.classList.remove("header-scrolled");
    }
}


function stick(){
    if(window.pageYOffset >= sticky){
        search_book.classList.add("sticky-search-book");
        header.classList.add("sticky-header");
        header.style.display = "none";
        menu_btn2.style.display = "initial";
    }
    else{
        search_book.classList.remove("sticky-search-book");
        header.classList.remove("sticky-header");
        header.style.display = "flex";
        menu_btn2.style.display = "none";
    }
}

window.onscroll = function(){
    stickyHeader();
    stick();
}

const openMenu  = function(event){
    const menu_btn = document.querySelector("#mobile-menu-btn");
    const exit_btn = document.querySelector("#exit-btn");
    const mobile_nav = document.querySelector(".mobile-nav-links");

    const menu_btn2 = document.querySelector("#mobile-menu-btn2");

    menu_btn.addEventListener("click", function(event){
        mobile_nav.classList.add("show-mobile-menu");
    });

    exit_btn.addEventListener("click", function(event){
        mobile_nav.classList.remove("show-mobile-menu");
    });

    menu_btn2.addEventListener("click", function(event){
        mobile_nav.classList.add("show-mobile-menu");
    })
}

openMenu();

