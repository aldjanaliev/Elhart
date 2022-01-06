$(document).ready(function() {

	//===== header slider========
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
	//=======header slider end=========

	//===========header menu===========
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
	//===========header menu end===========

	//===========lang-choose===========
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
	//===========lang-choose end===========

	//===========search===========
		$('.head_search-btn').on('click', function(event){
			$('.head_search-input-wrap').slideToggle(100);
		});
	//===========search end===========

	//===========policy===========
		$('.policy_title').on('click', function(event){
			$(this).toggleClass('policy_title__active');
			$(this).next('.policy_content').slideToggle(300);
		});
	//===========policy end===========

	//============validate form=================
		let selector = document.querySelectorAll('input[type="tel"]');
				let im = new Inputmask('+7 (999) 999-99-99');
				im.mask(selector);

		const validation = new JustValidate('#form');

		validation
			.addField('#name', [
				{
					rule: 'required',
					errorMessage: 'Введите имя!',
				},
				{
					rule: 'minLength',
					value: 3,
					errorMessage: 'Слишком короткое имя!',
				},
				{
					rule: 'maxLength',
					value: 30,
					errorMessage: 'Слишком длинное имя!',
				},
			])
			.addField('#tel', [
				{
					rule: 'required',
					errorMessage: 'Введите номер телефона!',
				},
				{
					rule: 'minLength',
					value: 15,
					errorMessage: 'Введите корректный номер!',
				},
			])
			.addField('#email', [
				{
					rule: 'required',
					errorMessage: 'Введите адрес почты!',
				},
				{
					rule: 'email',
					errorMessage: 'Неверный адрес почты!',
				},
			]);

	//===== tripple_slider========
	  $('.tripple_slider').slick({
	  	dots: false,
	    infinite: false,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 3 ,
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 790,
	      settings: {
	        slidesToShow: 2,
    	  	dots: true,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	        dots: true
	      }
	    }]
	  });
	//=======tripple_slider end=========


  // $('.head_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //  	let indexSubMenu = $('.head_slider').find(".slick-current").attr('data-slick-index');
  //  	$('.sub-submenu_list').removeClass('sub-submenu_list__active')
  //  	$('.sub-submenu_list').eq(indexSubMenu).addClass('sub-submenu_list__active');
  // });

});

	// =============== pagination =============
		if(document.querySelector('.pagination_btn__prev')){
			let paginationPrev = document.querySelector('.pagination_btn__prev')
			let paginationNext = document.querySelector('.pagination_btn__next')
			let paginationInputAll = document.querySelector('.pagination_all')
			let paginationInputCurrent = document.querySelector('.pagination_current')
			paginationNext.onclick = function () {
				if(+paginationInputCurrent.value < +paginationInputAll.value - 1){
					paginationInputCurrent.value++
				}
				else if(+paginationInputCurrent.value == +paginationInputAll.value - 1){
					paginationInputCurrent.value++
					paginationNext.classList.add("btn-disabled")
				}
				if(+paginationInputCurrent.value > 1){
					paginationPrev.classList.remove("btn-disabled")
				}
				else{
					paginationPrev.classList.add("btn-disabled")
				}
			}
			paginationPrev.onclick = function () {
				if(+paginationInputCurrent.value > 2){
					paginationInputCurrent.value--
				}
				else if(+paginationInputCurrent.value == 2){
					paginationInputCurrent.value--
					paginationPrev.classList.add("btn-disabled")
				}
				if(+paginationInputCurrent.value < 14){
					paginationNext.classList.remove("btn-disabled")
				}
			}
		}

	// =============== filter for news.html =============
		if(document.querySelector('.news_in')){
			let newsFilter = document.querySelectorAll('.news_list')
			newsFilter.forEach(item => {
				item.onclick = function () {
					if(this.classList.contains('news_list__active')){
						this.classList.remove('news_list__active')
					}
					else{
						this.classList.add('news_list__active')
					}
				}
			});
			let newsFilterReset = document.querySelector('.news_list__reset')
			newsFilterReset.onclick = function () {
				newsFilter.forEach(item => {
					item.classList.remove('news_list__active')
				})
			}
		}


	// =============== "read all" btn for laboratory.html =============
		if(document.querySelectorAll('.read-all')){
			let readAllBtn = document.querySelectorAll('.read-all')
			let readAllTxt = [...document.querySelectorAll('.lab_txt')]

				readAllBtn.forEach(item => {
					item.onclick = function () {
						let readAllIndex = [...readAllBtn].indexOf(this)
						readAllTxt[readAllIndex].style.height = "100%"
						this.style.display = "none"
					}
			})
		}

	// ============ change - city ===============
		if(document.querySelector('#change_city')){
			let changeCityParrent = document.querySelector('#change_city')
			let changeCityItem = [...document.querySelectorAll('.choose_item')]
			let changeCityItemTitle = document.querySelector('.choose_item__title')
			changeCityItem.forEach(item => {
				item.onclick = function () {
					if(changeCityParrent.classList.contains('choose_items__close')){
						changeCityParrent.classList.remove('choose_items__close')
					}
					else if(!changeCityParrent.classList.contains('choose_items__close')){
						changeCityItemTitle.style.display = "none"
						changeCityItem.forEach(item => {
							item.classList.remove('choose_item__active')
						})
						this.classList.add('choose_item__active')
						changeCityParrent.classList.add('choose_items__close')
						changeCityParrent.scrollTop = 0



					}
				}
			})
		}

	// ============== upload file to form ===============
		if(document.querySelector('.form_file-input')){
			const uploadFileInput = document.querySelector('.form_file-input')
			const uploadFileName = document.querySelector('.form_file-name')
			const uploadFileLabel = document.querySelector('.form_file-label')
			uploadFileInput.addEventListener('change', function(){
				uploadFileName.innerText = this.files[0].name
				uploadFileName.style.display = "block"
				uploadFileLabel.classList.add('form_file-label__active')
			})
			function hightlightLabel(event){
				event.preventDefault()
				this.style.borderColor = "#20906d"
			}
			function unHightlightLabel(event){
				event.preventDefault()
				this.style.borderColor = "#E3E3E3"
			}
			uploadFileLabel.addEventListener('dragover', hightlightLabel)
			uploadFileLabel.addEventListener('dragenter', hightlightLabel)
			uploadFileLabel.addEventListener('dragleave', unHightlightLabel)
			uploadFileLabel.addEventListener('drop', (event) => {
				uploadFileName.innerText = event.dataTransfer.files[0].name
				uploadFileName.style.display = "block"
				uploadFileLabel.classList.add('form_file-label__active')
				unHightlightLabel.call(uploadFileLabel, event)
			})
		}

	// ============== link to to form ===============
		if(document.querySelector('#to-form')){
				document.querySelectorAll('a[href^="#"').forEach(link => {
			    link.addEventListener('click', function(e) {
			        e.preventDefault()
			        let href = this.getAttribute('href').substring(1)
			        const scrollTarget = document.getElementById(href)
			        const topOffset = document.querySelector('header').offsetHeight
			        const elementPosition = scrollTarget.getBoundingClientRect().top
			        const offsetPosition = elementPosition - topOffset
			        window.scrollBy({
			            top: offsetPosition,
			            behavior: 'smooth'
			        })
			    })
			})
		}
	
	// 

	


	//===========yandex map===========
	// ymaps.ready(function () {
	//     var myMap = new ymaps.Map('map_office', {
	//             center: [45.034808074593755,38.98482599999996],
	//             zoom: 18
	//         }, {
	//             searchControlProvider: 'yandex#search'
	//         }),
	//         // Создаём макет содержимого.
	//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	//             '<img src="img/map_office.svg" alt="" class="contacts_img">'
	//         ),

	//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	//             hintContent: 'Собственный значок метки',
	//             balloonContent: 'Это красивая метка'
	//         }, {
	//             // Опции.
	//             // Необходимо указать данный тип макета.
	//             iconLayout: 'default#image',
	//             // Своё изображение иконки метки.
	//             iconImageHref: 'images/myIcon.gif',
	//             // Размеры метки.
	//             iconImageSize: [30, 42],
	//             // Смещение левого верхнего угла иконки относительно
	//             // её "ножки" (точки привязки).
	//             iconImageOffset: [-5, -38]
	//         }),

	//         myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
	//             hintContent: 'Собственный значок метки с контентом',
	//             balloonContent: 'А эта — новогодняя',
	//             iconContent: '12'
	//         }, {
	//             // Опции.
	//             // Необходимо указать данный тип макета.
	//             iconLayout: 'default#imageWithContent',
	//             // Своё изображение иконки метки.
	//             iconImageHref: 'images/ball.png',
	//             // Размеры метки.
	//             iconImageSize: [48, 48],
	//             // Смещение левого верхнего угла иконки относительно
	//             // её "ножки" (точки привязки).
	//             iconImageOffset: [-24, -24],
	//             // Смещение слоя с содержимым относительно слоя с картинкой.
	//             iconContentOffset: [15, 15],
	//             // Макет содержимого.
	//             iconContentLayout: MyIconContentLayout
	//         });

	//     myMap.geoObjects
	//         .add(myPlacemark)
	//         .add(myPlacemarkWithContent);
	// });
	//===========yandex map end===========

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



// let loginInput = modalLogin.querySelectorAll('.form_input')
// let loginBtn = modalLogin.querySelector('.head_btn--login')
// loginBtn.onclick = function () {
// 	if(loginInput[0].value !== '' && loginInput[1].value !== ''){
// 		modalLogin.style.display = "none"
// 	}
// }



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