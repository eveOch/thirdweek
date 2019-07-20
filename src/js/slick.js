$('.slick-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slick-right'
});

$('.slick-right').slick({
    vertical: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slick-left',
    focusOnSelect: true,
    // centerMode: true,
    // centerPadding: 0
});


$('.slick-center').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    //centerMode: true
    //centerPadding: '5px',
    //autoplay: true,
    //autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
});


// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//