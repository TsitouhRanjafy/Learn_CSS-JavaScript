const progressBar = document.getElementById("progressbar");


console.log(document.body.scrollHeight);
console.log(window.innerHeight);
window.addEventListener("scroll", () =>{
    let y = window.scrollY;
    let x = (y * 100) / (document.body.scrollHeight - window.innerHeight);
    if (y > 0){
        progressBar.style.height = x + '%';
    }
    console.log(`X : ${x}`);
    console.log(`Y : ${y}`);
})