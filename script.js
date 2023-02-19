
//Youtube Solution

const link = document.querySelectorAll('.js-link')
const hoverReveal = document.querySelectorAll('.hover-reveal')
const linkImages = document.querySelectorAll('.hidden-img')

for (let i =0; i< link.length; i++){
    link[i].addEventListener('.mousemove', (e) =>{
        hoverReveal[i].style.opacity =1;
        hoverReveal[i].style.transform = 'translate(-100%, -50%), rotate (5deg)';
        linkImages[i].style.transform =scale(1,1);
        hoverReveal[i].style.left = e.clientX + "px";

    })
    link[i].addEventListener('.mouseleave', (e) =>{
        hoverReveal[i].style.opacity =0;
        hoverReveal[i].style.transform = 'translate(-50%, -50%), rotate (-5deg)';
        linkImages[i].style.transform =scale(0.8,0.8);
        hoverReveal[i].style.left = e.clientX + "px";

    })
}


// Codepen Solution


const items = document.querySelectorAll('.js-link')
const image = document.querySelector('img')

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-image')
    console.log(imageData)
    e.target.style.zIndex = 99
    image.setAttribute('src', imageData)
  })
  el.addEventListener('mousemove', (e) => {
    image.style.top = e.clientY + 'px'
    image.style.left = e.clientX + 'px'
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1
    image.setAttribute('src', '')
  })
})
