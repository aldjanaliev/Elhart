$(document).ready(function() {

  $('.head_slider').slick({
  	dots: true,
    infinite: false,
    // adaptiveHeight: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.head_slider-nav',
  });

  let headSliderNavLength = $('.sub-submenu_list').length;

  $('.head_slider-nav').slick({
	  slidesToShow: headSliderNavLength,
	  asNavFor: '.head_slider',
	  infinite: false,
	  vertical: true,
	  focusOnSelect: true,
	});

	var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
	
	$('.head_menu-burger').on('click', function(event){
		$('.head_nav').slideToggle(300);
		$('header').toggleClass('header__static');
		if($('header').hasClass('header__static')){
			$('header').css('padding-right', scrollWidth);
			$('.head_nav').css('padding-right', scrollWidth + 20 + 'px');
			$('body').css({'overflow':'hidden', 'padding-right':scrollWidth});
		}
		else{
			$('header').css('padding-right', '0px');
			$('.head_nav').css('padding-right', '20px');
			$('body').css({'overflow':'visible', 'padding-right':'0px'});
		}
	});

	$('.head_menu-arrow').on('click', function(event){
		$(this).toggleClass('head_menu-arrow__active');
		$(this).prev('.head_submenu').slideToggle(300);
	});


	$('#lang-choose .head_langs').on('click', f_lang);
    function f_lang(){
	    if ($(this).hasClass('head_lang--passive')) {
	        $('.head_langs').removeClass('head_lang--active');
	        $('.head_langs').addClass('head_lang--passive');
	        $(this).removeClass('head_lang--passive');
	        $(this).addClass('head_lang--active');
	        $('.head_lang--passive').slideUp(300);
	    }
	    else if ($(this).hasClass('head_lang--active')) {
	        $('.head_lang--passive').slideToggle(300);
	    }
	    return false;
	};

	$('.head_search-btn').on('click', function(event){
		$('.head_search-input-wrap').slideToggle(100);
	});





  // $('.head_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //  	let indexSubMenu = $('.head_slider').find(".slick-current").attr('data-slick-index');
  //  	$('.sub-submenu_list').removeClass('sub-submenu_list__active')
  //  	$('.sub-submenu_list').eq(indexSubMenu).addClass('sub-submenu_list__active');
  // });



});

// // ================ modals ===============
// let modalLogin = document.querySelector('#form_login')
// let modalLoginBtn = document.querySelector('#btn_login')
// let modalSign = document.querySelector('#form_sign')
// let modalSignBtn = document.querySelector('#btn_sign')
// let modalCloseBtn = document.querySelectorAll('.modal_close')
// modalLoginBtn.onclick = function (){
// 	modalLogin.style.display = "block"
// }
// modalSignBtn.onclick = function (){
// 	modalSign.style.display = "block"
// }
// modalCloseBtn.onclick = function(){
// 	console.log("ass")
// }
// let close = function(){
// 	modalCloseBtn.forEach(item => {
// 		item.addEventListener('click', closeModal)
// 	})
// 	function closeModal(){
// 		modalSign.style.display = "none"
// 		modalLogin.style.display = "none"
// 		repeatPass.style.display = "none"
// 	}
// }
// close()

// // ============== simple validate ============
// let passValFirst = modalSign.querySelectorAll('.form_input__pass')[0]
// let passValSecond = modalSign.querySelectorAll('.form_input__pass')[1]
// let signBtn = modalSign.querySelector('.head_btn--sign')
// let repeatPass = modalSign.querySelector('#repeat-pass')
// signBtn.onclick = function () {
// 	if(passValFirst.value !== passValSecond.value || passValFirst.value == ''){
// 		repeatPass.style.display = "inline"
// 	} else {
// 		repeatPass.style.display = "none"
// 		modalSign.style.display = "none"
// 	}
// }

// let loginInput = modalLogin.querySelectorAll('.form_input')
// let loginBtn = modalLogin.querySelector('.head_btn--login')
// loginBtn.onclick = function () {
// 	if(loginInput[0].value !== '' && loginInput[1].value !== ''){
// 		modalLogin.style.display = "none"
// 	}
// }

// // ============ change - city ===============
// let changeCityBtn = document.querySelector('#change-city_btn')
// let changeCityList = document.querySelector('#change-city_list')
// changeCityBtn.onclick = () => {
// 	changeCityList.classList.toggle("city_list__active")
// }
// document.addEventListener('click', function(e) {
//   if (e.target.id !== 'change-city_btn') {
//     changeCityList.classList.remove("city_list__active")
//   }
// })

// let choosedCity = document.querySelector('#choosed-city')
// let selectCity = document.querySelectorAll('.choosed_city')
// let changeCityName = function(){
// 	selectCity.forEach(item => {
// 		item.addEventListener('click', changeName)
// 	})
// 	function changeName() {
// 		[this.textContent, choosedCity.textContent] = [choosedCity.textContent, this.textContent]
// 	}
// }
// changeCityName()

// // ============ search btn ============
// let searchBtn = document.querySelector('#search_btn')
// let searchIn = document.querySelector('#search_in')
// searchBtn.onclick = () =>	searchIn.classList.toggle("search_in__active")

// // =============== tabs =============
// let tab = function(){
// 	let tabBtn = document.querySelectorAll('.tab_item')
// 	tabBtn.forEach(item => {
// 		item.addEventListener('click', selectTab)
// 	})
// 	function selectTab() {
// 		tabBtn.forEach(item => {
// 			item.classList.remove('tab_item__active')
// 		})
// 		this.classList.add('tab_item__active')
// 	}
// }
// tab()