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
		$('.popup-add-content').on('submit', _addProject);

	};
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
		//Обьявлем переменные
		var form = $(this),
			url = 'app/add_project.php',
			data = form.serialize(); // Получаем данные из полей
		console.log(data);
		// ОТправляем данные на сервер
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log("success");
			console.log(ans);
			if(ans.status === "OK"){
				console.log('Все прошло успешно')
						$('.popup-add-content')[0].reset(); // Очистка полей
						var bPopup = $('.popup-add-content').bPopup();
						bPopup.close(); //Закрытие формы
						$( ".error-send").hide();
						$('.info-popup').bPopup({ //открытие popup окна
							speed: 650,
							transition: 'slideDown',
						});

			}else{
				$(".error-send").show();
			}

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	};

	return{
		init : init
	};
})();

Module.init();

