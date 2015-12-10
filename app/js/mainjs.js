var Module = (function () {
	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		//Прослушка событий
		$('#link-addnew-item').on('click', _showModal); //ОТкрыть попап форму
		$('.popup-add-content').on('submit', _addProject);

	};

	var _showModal = function (ev) {
		console.log('вызов модального окна');
		$('.popup-add-content').bPopup();

		ev.preventDefault();
	};

	var _addProject = function(ev){
		ev.preventDefault(); // делать обязательно для отправки формы, иначе не будет работать ajax
		//Обьявлем переменные
		var form = $(this),
			url = 'app/add_project.php',
			data = form.serialize();
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
			}else{
				$( ".error-send").show();
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

