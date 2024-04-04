var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
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