$(document).ready(function() {

	//===== nav slider========
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
	//=======nav slider end=========

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
		$('.acc_title').on('click', function(event){
			$(this).toggleClass('acc_title__active');
			$(this).next('.acc_body').slideToggle(300);
		});
	//===========policy end===========

	//===========news_list-sm===========
		$('.toggle_list').on('click', function(event){
			if($(this).hasClass('open_list')){
				$('.close_list').addClass('active_list')
				$(this).removeClass('active_list')
				$('.news_menu').slideDown(300)
			}
			else{
				$('.open_list').addClass('active_list')
				$(this).removeClass('active_list')
				$('.news_menu').slideUp(300)
			}
		});
		$( window ).resize(function() {
		  if($( window ).width() > 790){
		  	$( ".news_menu" ).css( "display", "flex" );
		  }
		  else{
		  	$( ".news_menu" ).css( "display", "none" );
		  	$('.close_list').removeClass('active_list')
		  	$('.open_list').addClass('active_list')
		  }
		});

	//===========news_list-sm===========

	//============validate form=================
		if(document.querySelector('#form')){
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
				// .addField('#email', [
				// 	{
				// 		rule: 'required',
				// 		errorMessage: 'Введите адрес почты!',
				// 	},
				// 	{
				// 		rule: 'email',
				// 		errorMessage: 'Неверный адрес почты!',
				// 	},
				// ])
				// .addField('#company', [
				// 	{
				// 		rule: 'required',
				// 		errorMessage: 'Введите наименование организации!',
				// 	},
				// 	{
				// 		rule: 'minLength',
				// 		value: 3,
				// 		errorMessage: 'Слишком коротко!',
				// 	},
				// 	{
				// 		rule: 'maxLength',
				// 		value: 30,
				// 		errorMessage: 'Слишком длинно!',
				// 	},
				// ])
		}

	//===== catalog-detail slider========
	  $('.detail_slider').slick({
	    infinite: true,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 1,
	  	arrows: false,
	    slidesToScroll: 1,
	    dots: false,
	    asNavFor: '.detail_slider-nav',
	    responsive: [
	    {
	      breakpoint: 790,
	      settings: {
    	  	dots: true
	      }
	    }]
	  });

	  $('.detail_slider-nav').slick({
		  slidesToShow: 4,
		  asNavFor: '.detail_slider',
		  infinite: true,
		  focusOnSelect: true,
	  	arrow: true,
		  responsive: [
	    {
	      breakpoint: 790,
	      settings: {
    	  	arrow: false
	      }
	    }]
		});
	//=======catalog-detail slider end=========

	//===== tripple_slider========
	  $('.tripple_slider').slick({
	  	dots: false,
			arrows: true,
	    infinite: false,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 3 ,
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 980,
	      settings: {
    	  	arrows: false,
	      }
	    },
	    {
	      breakpoint: 790,
	      settings: {
	        slidesToShow: 2,
    	  	dots: true,
    	  	arrows: false,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        dots: true,
	        arrows: false,
	      }
	    }]
	  });
	//=======tripple_slider end=========

	//===== db_slider========
	  $('.db_slider').slick({
	  	dots: true,
	    infinite: false,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 2 ,
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 980,
	      settings: {
    	  	arrows: false,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	  		  adaptiveHeight: true,
	        dots: true
	      }
	    }]
	  });
	//=======db_slider end=========

	//===== about_slider========
	  $('.about_slider').slick({
	  	dots: true,
	    infinite: false,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 2 ,
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 980,
	      settings: {
    	  	arrows: false,
	      }
	    },
	    {
	      breakpoint: 791,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	  		  adaptiveHeight: true,
	        dots: true
	      }
	    }]
	  });
	//=======about_slider end=========

	//===== single_slider========
	  $('.single_slider').slick({
	  	dots: true,
	  	arrows: false,
	    infinite: false,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 1 ,
	    slidesToScroll: 1,
	  });
	//=======single_slider end=======

	//===== min_catalog========
		$('.min_catalog').slick({
	  	dots: true,
	  	arrows: false,
	    infinite: false,
	    adaptiveHeight: true,
	    speed: 300,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 790,
	      settings: {
	      	slidesToShow: 1,
    	  	arrows: false,
	      }
	    }]
  	})
	//=======min_catalog end=========

	//=============catalog-detail-btn=================
		$('.catalog-detail_btn').on('click', function(event){
			$('.catalog-detail_btn').removeClass('catalog-detail_btn__close');
			$(this).addClass('catalog-detail_btn__close');
			$('.modify_close').slideToggle(300);
		});
	//=============catalog-detail-btn end=================

	//=============catalog-detail-filter=================
		$('.modify-choose_btn').on('click', function(event){
			$(this).css('display', 'none')
			$('.filter-modify').slideToggle(300);
		});
	//=============catalog-detail-filter end=================

  // $('.head_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //  	let indexSubMenu = $('.head_slider').find(".slick-current").attr('data-slick-index');
  //  	$('.sub-submenu_list').removeClass('sub-submenu_list__active')
  //  	$('.sub-submenu_list').eq(indexSubMenu).addClass('sub-submenu_list__active');
  // });

});

	// ================ ques_menu =============
	if(document.querySelector('.ques_menu')){
		let mainListClose = [...document.querySelectorAll('.main_list__close')]
		let mainListBtn = document.querySelector('.ques_btn')
		mainListBtn.onclick = function() {
			mainListClose.forEach(item => {
				let mainListH = item.offsetHeight
				item.classList.remove('main_list__close')
				this.style.display = 'none'
			})
		}

	}

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

	// =============== filter for catalog.html =============
		if(document.querySelector('.filter')){
			let simpleFilter = document.querySelectorAll('.filter_list')
			let simpleFilterAll = document.querySelector('.filter_list__all')
			simpleFilter.forEach(item => {
				item.onclick = function () {
					let thisSiblings = [...this.parentNode.querySelectorAll('li')]
					let thisSiblingsActive = [...this.parentNode.querySelectorAll('.filter_list__active')]
					if(this.classList.contains('filter_list__active')){
						if(!this.classList.contains('filter_list__all')){
							if(thisSiblingsActive.length > 1 ){
								this.classList.remove('filter_list__active')
								this.parentNode.querySelector('.filter_list__all').classList.remove('filter_list__active')
							}
						}
						else{
							thisSiblings.forEach(item => item.classList.remove('filter_list__active'))
							thisSiblings[1].classList.add('filter_list__active')
						}
					}
					else{
						if(this.classList.contains('filter_list__all')){
							thisSiblings.forEach(item => item.classList.add('filter_list__active'))
						}
						else{
							this.classList.add('filter_list__active')
						}

					}
				}
			})

		// =============== filter-btn for catalog.html =============
			if(document.querySelector('.filter-btns')){
				let filterBtnOpen = document.querySelector('.filter-btn__open')
				let filterBtnClose = document.querySelector('.filter-btn__close')
				let filterBlock = document.querySelector('.filter_body')
					filterBtnClose.onclick = function () {
						this.classList.remove('filter-btn__active')
						filterBtnOpen.classList.add('filter-btn__active')
						filterBlock.classList.add('filter_body__active')
						filterBlock.style.height = 0
					}
					filterBtnOpen.onclick = function () {
						filterBtnClose.classList.add('filter-btn__active')
						this.classList.remove('filter-btn__active')
						filterBlock.classList.remove('filter_body__active')
						let filterBlockHeight = document.querySelector('.filter-wrap').offsetHeight
						filterBlock.style.height = filterBlockHeight + 'px'
					}
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
					else {
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
			        const offsetPositionFixed = elementPosition - topOffset - 20
			        const offsetPositionStatic = elementPosition - 20
			        const headerStyle = getComputedStyle(document.querySelector('header')).position
			        if(headerStyle == 'fixed'){
			        	window.scrollBy({
			            top: offsetPositionFixed,
			            behavior: 'smooth'
			        	})
			        }
			        else{
			        	window.scrollBy({
			            top: offsetPositionStatic,
			            behavior: 'smooth'
			        	})
			        }
			        
			    })
			})
		}
	
	// ============== tabs ===============
		if(document.querySelector('.tabs')){
			let tab = function(){
				let tabBtn = [...document.querySelectorAll('.tabs_item')]
				let tabBody = [...document.querySelectorAll('.tabs_body-in')]
				let tabsWrap = document.querySelector('.tabs')
				tabBtn.forEach(item => {
					item.addEventListener('click', selectTab)
				})
				function selectTab() {
					let tabBtnH = getComputedStyle(this).height
					if(!this.classList.contains('tabs_item__active')) {
						tabBtn.forEach(item => {
							item.classList.remove('tabs_item__active')
						})
						tabBody.forEach(item => {
							item.classList.remove('tabs_body-in__active')
						})
						this.classList.add('tabs_item__active')
						tabBody[tabBtn.indexOf(this)].classList.add('tabs_body-in__active')
						if(getComputedStyle(tabsWrap).flexDirection == 'column'){
							
							tabsWrap.style.height = tabBtnH
						}

					}
					else if(this.classList.contains('tabs_item__active') && getComputedStyle(tabsWrap).flexDirection == 'column'){
						if(tabsWrap.offsetHeight < 70){
							let tabsWrapH = 0
							for(let i = 0; i < tabBtn.length; i++){
								tabsWrapH =  tabsWrapH + tabBtn[i].offsetHeight
							}
							tabsWrap.style.height = tabsWrapH + 'px'
						}
						else{
							tabsWrap.style.height = tabBtnH
						}
					}
				}
			}
			tab()
		}

	//=============== catalog-details-modify-filter =============	
		if(document.querySelector('.filter-modify_choose')){
			let filterModifyBtn = [...document.querySelectorAll('.filter-modify_txt')]
			let filterModel = document.querySelector('.model_insert')
			let filterSubModel = document.querySelector('.sub-model_insert')
			filterModifyBtn.forEach(item => {
				item.onclick = function () {
					filterModifyBtn.forEach(item => {
						item.classList.remove('filter-modify_txt__active')
					})
					this.classList.add('filter-modify_txt__active')
					filterSubModel.innerText = this.innerText
					let filterModelToInsert = this.closest('.filter-modify_type').querySelector('.filter-modify_model')
					filterModel.innerText = filterModelToInsert.innerText
				}
			})
		}

	//=============== modal-form =============	
		if(document.querySelector('#modal-form')){
			let modalBtn = document.querySelector('#modal-form_btn')
			let modalBody = document.querySelector('#modal-form')
			let modalClose = document.querySelector('.form-close_btn')
				modalBtn.onclick = function(){
					modalBody.style.display = 'block'
					document.querySelector('.footer_mid-in').style.position = 'static'
				}
				modalClose.onclick = function(){
					modalBody.style.display = 'none'
					document.querySelector('.footer_mid-in').style.position = 'relative'
				}
		}

	// ============ change - city ===============
		if(document.querySelectorAll('.filter_item')){
			let filterCityItem = [...document.querySelectorAll('.filter_item')]
			filterCityItem.forEach(item => {
				item.onclick = function () {
					let filterCityBroItem = [...this.closest('.filter_item-wrap').children]
					filterCityBroItem.forEach(item => {
						item.classList.remove('filter_item__active')
						this.classList.add('filter_item__active')
					})
					console.log(window.innerWidth)

					if(window.innerWidth <= 790){
						let filterCityParrent = this.closest('.filter_item-in')
						let filterCityParrentHeight = this.closest('.filter_item-wrap').offsetHeight
						if(filterCityParrent.offsetHeight == 52){
							filterCityParrent.style.height = filterCityParrentHeight + 'px'
						}
						else{
							filterCityParrent.style.height = '52px'
						}
					}
				}
			})
		}

	// ============ distribution_card ===============
		if(document.querySelectorAll('.distribution_card-show')){
			let distributionCardBtn = [...document.querySelectorAll('.distribution_card-show')]
			distributionCardBtn.forEach(item => {
				item.onclick = function () {
					let distributionCard = this.closest('.distribution_card-wrap')
					let distributionCardMap = distributionCard.querySelector('.distribution_map')
					let distributionCardMapH = distributionCard.querySelector('.contacts_content').offsetHeight
					console.log(distributionCardMap)

					if(this.classList.contains('distribution_card-show__active')){
						this.classList.remove('distribution_card-show__active')
						distributionCardMap.style.height = 0
						distributionCardMap.style.marginTop = 0
					}
					else{
						this.classList.add('distribution_card-show__active')
						distributionCardMap.style.height = distributionCardMapH + 'px'
						distributionCardMap.style.marginTop = '30px'
					}

					// if(window.innerWidth <= 790){
					// 	let filterCityParrent = this.closest('.filter_item-in')
					// 	let filterCityParrentHeight = this.closest('.filter_item-wrap').offsetHeight
					// 	if(filterCityParrent.offsetHeight == 52){
					// 		filterCityParrent.style.height = filterCityParrentHeight + 'px'
					// 	}
					// 	else{
					// 		filterCityParrent.style.height = '52px'
					// 	}
					// }
				}
			})
		}


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