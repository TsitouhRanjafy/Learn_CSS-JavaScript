const listOfCardElements = document.querySelectorAll(".card");
const cardContainer = document.querySelector('.card-container');

listOfCardElements.forEach((cardElement,index) => {
    cardElement.addEventListener('click',(e) =>{
        const scrollLeft = index * listOfCardElements[0].offsetWidth; 
        cardContainer.scrollTo({left:scrollLeft,behavior:'smooth'});
    })
});

/**
 * offsetWidth : pour avoir le width d'un element;
 * scrollTo : défiler la fênetre du navigateur vers un position spécifique ("scrollTo({top: 100})");
 * behavior : pour définir le comportement du défilement (auto,instant,smooth);
 * 
 */