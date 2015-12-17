$(document).ready(function() {
	if(!Modernizr.input.placeholder){
		$('input, #textmessage').placeholder();
	}
	
});

var Module = (function () {
	//Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};
	//Прослушка событий
	var _setUpListners = function(){
	
		$('#link-addnew-item').on('click', _showModal); //ОТкрыть попап форму
		$('.popup-add-content').on('submit', _addProject); // Отправка данных на сервер
		$('#addfile').on('change', _addFile); // добавление файла для загрузки


	};

	// Заполняем поле загрузки
	var _addFile = function(ev){
		var file = $('#addfile')[0].files[0];

		if(file.name){
			$('.textfile').text(file.name);
			$('.lbl-addfile').css({
				'color':'#959AA8',
				'font-size' : '18px'
			});

			$(".lbl-addfile").removeClass('no-valide');
		}
	}


	//Работает с модельными окнами
	var _showModal = function (ev) {
		console.log('вызов модального окна');
		$('.popup-add-content').bPopup({ //открытие popup окна
			speed: 650,
			transition: 'slideDown',
			onClose:function(){
				$( ".error-send").hide(); //скрытие окна ошибки
				$(".valid-send").hide();
				$('*').qtip('hide');

			}
		});

		ev.preventDefault();
	};
	// ОТправка проекта и проверка данных от сервера
	var _addProject = function(ev){
		var checkvalid = true;
		ev.preventDefault(); // делать обязательно для отправки формы, иначе не будет работать ajax
		

		var thisForm = $(ev.target), // Получаем фомру
		inputs = thisForm.find('input'); //Ищем все инппуты
			inputs.each(function(index){
				var input = inputs.eq(index)
				
				//убираем класс предупреждения у input
				input.on('focus',function () {
			        var thisInput = $(this);

			        thisInput.on('keydown',function () {
			        	input.qtip('hide');

			            });
			         

			    });


				// проверяем все input
				if(!input.val()){
					checkvalid = false;
					$( ".error-send").show();
					if(input.attr('id') != "addfile"){
						input.qtip({
								content: 'Заполните поле!',
									style: {
										classes: 'qtip-red qtip-shadow'
									},
									position: {
										my: 'center left',
										at: 'center right'
										},
									show: {
											when: false, // Don't specify a show event
											ready: true // Show the tooltip when ready
										},
									hide: false, // Don't specify a hide event
							})
					} 
				};


				//проверяем input file
				var file = $('#addfile')[0].files[0]
				console.log(file.name);
					if(!file){
						checkvalid = false;
					  input.parent(".lbl-addfile").qtip({
								content: 'Заполните поле!',
									style: {
										classes: 'qtip-red qtip-shadow'
									},
									position: {
										my: 'center left',
										at: 'center right'
										},
									show: {
											when: false, // Don't specify a show event
											ready: true // Show the tooltip when ready
										},
									hide: false, // Don't specify a hide event
							});
					}
			});


			// Проверяем textarea
			if(!$('#Description').val()){
				checkvalid = false;
				$('#Description').qtip({
								content: 'Заполните поле!',
									style: {
										classes: 'qtip-red qtip-shadow'
									},
									position: {
										my: 'center left',
										at: 'center right'
										},
									show: {
											when: false, // Don't specify a show event
											ready: true // Show the tooltip when ready
										},
									hide: false, // Don't specify a hide event
							});
			};

			//

			//убираем класс предупреждения у textarea
		    
		    	$('#Description').on('keydown',function(){
		    		$('#Description').qtip('hide');
		    	})
		    


		    //Проверяем URL
		    var inputURL = $('#urlfield');
		    if(inputURL.val()){
		    	var regexpURL = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;
		    	if(!regexpURL.test(inputURL.val())){
		    		checkvalid = false;
		    		inputURL.qtip({
								content: 'Укажите URL адресс сайта!',
									style: {
										classes: 'qtip-red qtip-shadow'
									},
									position: {
										my: 'center left',
										at: 'center right'
										},
									show: {
											when: false, // Don't specify a show event
											ready: true // Show the tooltip when ready
										},
									hide: false, // Don't specify a hide event
							});
		    	}
    			
    		}
			console.log(checkvalid);
			if(checkvalid){
				$(".error-send").hide();
	    		$(".valid-send").show();
    		}


	};

	return{
		init : init
	};
})();

Module.init();