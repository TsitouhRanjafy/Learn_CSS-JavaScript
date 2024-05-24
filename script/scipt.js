const observer = new IntersectionObserver( function (entries){
    // entries est un tableau contenant des IntersectionObserverEntry
    entries.forEach(element => {
        if (element.isIntersecting){
            element.target.classList.add("show"); 
        }else{
            element.target.classList.remove("show");
        }
    });
},{
    threshold:0.5 // permet d'indiquer la zone à partir de laquelle l'élément devient 'visible'
});

const hiddenElement = document.querySelectorAll(".text,.paragraphe");
hiddenElement.forEach(element => {
    observer.observe(element);
});


