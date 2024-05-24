let balisehHeader = document.querySelector("header");
console.log(balisehHeader) ;

window.addEventListener("scroll",(e) =>{
    balisehHeader.classList.toggle('sticky',window.scrollY > 0); // if (scrollY) > 0 { add class 'sticky' } else { remove class 'sticky' } 

    console.log(window.scrollY);
})
