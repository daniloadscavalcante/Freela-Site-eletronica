const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () =>{
    document.querySelector('.c-modal').style.display = 'none';
})
if (window.innerWidth <= 550){
    $('.slide-ofertas').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
}else{
    $('.slide-ofertas').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      });
    
}