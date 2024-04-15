
    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });


const scrollers = document.querySelectorAll('.scroller')

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();

}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true)
  
    const scrollerInner = scroller.querySelector('.scroller__inner')
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);

      scrollerInner.appendChild(duplicatedItem);
    })
  })
}

let mobilebutton = document.querySelector('.mobile-nav-button')
let mobilenav = document.querySelector('.nav-container-list')
let sections = document.querySelectorAll('.section')
let displayed

 function displayNav() {
  console.log('sent')
    if (mobilenav.style.display === "flex") {
      mobilenav.style.display = "none"
      sections.forEach(i => {
        i.classList.add = 'blurred'
        console.log(i)
      });

    } else {
      mobilenav.style.display = "flex"

    }
 }