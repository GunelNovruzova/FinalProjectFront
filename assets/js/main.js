$(document).ready(function () {
    $('.images').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $('.aboutimage').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });

	$('input[name="paymentmethod"]').on('click', function () {
		var $value = $(this).attr('value');
		$('.payment-method-details').slideUp();
		$('[data-method="' + $value + '"]').slideDown();
	});

    $("#create_pwd").on("change", function () {
		$(".account-create").slideToggle("100");
	});

	$("#ship_to_different").on("change", function () {
		$(".ship-to-different").slideToggle("100");
	});
});
AOS.init();
// var search = document.querySelector(".searchglass");
// var closeIcon = document.querySelector(".mark");
// search.addEventListener("click",function(e){
//     e.preventDefault();
//     var myinput = document.querySelector(".searchinput");
//     myinput.classList.toggle("forsearch");
// })
// closeIcon.addEventListener("click",function(){
//     var myinput = document.querySelector(".searchinput");
//     myinput.classList.add("forsearch");
// })

// var searchBtn = document.querySelector(".searchglass");
// searchBtn.addEventListener("click",function(e){
//     e.preventDefault();
//     var secFor = document.querySelector(".forsearch");
//     secFor.style.height = "100%";
//     secFor.style.opacity = "1";
//     secFor.style.top = "0";
//     secFor.style.visibility = "visible";
// })

// var closeIcon = document.querySelector(".mark");
// closeIcon.addEventListener("click",function(){
//     var secFor = document.querySelector(".forsearch");
//     secFor.style.height = "0%";
//     secFor.style.top = "0%";
//     secFor.style.opacity = "0";
//     secFor.style.visibility = "hidden";
// })
  
// var basket =document.querySelector(".basket");
// basket.addEventListener("click",function(e){
//     e.preventDefault();
//     var basketfor=document.querySelector(".forbasket");
//    basketfor.style.opacity="1";
//     basketfor.style.visibility="visible";
//     basketfor.style.right="1%"
// })
// var closebasket=document.querySelector(".closebasket");
// closebasket.addEventListener("click",function(e){
//     e.preventDefault();
//     var basketfor= document.querySelector(".forbasket");
//     basketfor.style.visibility="hidden";
//     basketfor.style.right="-100%";
//     basketfor.style.opacity="0";
// })

