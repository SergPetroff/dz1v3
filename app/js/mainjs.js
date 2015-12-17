$(document).ready(function() {
	if(!Modernizr.input.placeholder){
		$('input, #textmessage').placeholder();
		console.log('не поддерживает')
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
			}
		});

		ev.preventDefault();
	};
	// ОТправка проекта и проверка данных от сервера
	var _addProject = function(ev){
		ev.preventDefault(); // делать обязательно для отправки формы, иначе не будет работать ajax
		

		var thisForm = $(ev.target), // Получаем фомру
		inputs = thisForm.find('input'); //Ищем все инппуты
			inputs.each(function(index){
				var input = inputs.eq(index)
				
				//убираем класс предупреждения у input
					input.on('focus',function () {
			        var thisInput = $(this);
			        if(thisInput.hasClass('no-valide')){
			        thisInput.on('keydown',function () {
			        input.removeClass('no-valide');

			            });
			         }

			    });


				// проверяем все input
				if(!input.val()){
					input.addClass('no-valide');
				};


				//проверяем input file
				var file = $('#addfile')[0].files[0]
					if(!file){
					  input.parent(".lbl-addfile").addClass('no-valide');
					}
			});


			// Проверяем textarea
			if(!$('#Description').val()){
				$('#Description').addClass('no-valide')
			}

			//

			//убираем класс предупреждения у textarea
		    if($('#Description').hasClass('no-valide')){
		    	$('#Description').on('keydown',function(){
		    		$('#Description').removeClass('no-valide');
		    	})
		    }


		    //Проверяем URL
		    var inputURL = $('#urlfield');
		    if(inputURL.val()){
		    	var regexpURL = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;
		    	if(!regexpURL.test(inputURL.val())){
		    		inputURL.addClass('no-valide');
		    	}
    			
    		}
			

	};

	return{
		init : init
	};
})();

Module.init();