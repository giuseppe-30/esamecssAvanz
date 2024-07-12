const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    breakPoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }

    }
})
const hideSecion = document.querySelector(".hide-secion");
let posionScroll = 0
const ShowSecion = (actualScrollPosicion)=>{
  if(actualScrollPosicion > 100)  {
    hideSecion.classList.remove("hider-secion")

  }
}
document.addEventListener("scroll",()=>{
    posionScroll = window.scrollY
    ShowSecion(posionScroll)
})
