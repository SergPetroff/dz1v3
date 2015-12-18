var Module = (function(){
    
        //Инициализирует наш модуль
    var init = function(){
        _setUpListners();
    };
    


//Прослушка событий

    var _setUpListners = function(){
    	$('.lock').on('click', _showLoginForm); //Открытие попап формы логина
        $('#login-form').on('submit',showVal); //перехват события и вызов собственной функции
    };


    	    var _showLoginForm = function(e){
		    	$('#login-form').bPopup({ //открытие popup окна
						speed: 650,
						transition: 'slideDown',
						onClose: function(){
			                  console.log('closed');
			                  $('*').qtip('destroy');
			               }
					});
				e.preventDefault();
	    	}

			 var showVal = function(ev){
		        ev.preventDefault();

		        var thisForm = $(ev.target), // Получаем фомру
		        inputs = thisForm.find('input'); //Ищем все инппуты
		        inputs.each(function(index, el) {
		            var input = inputs.eq(index), // Получаем ссылку на каждый input
		            type =input.attr('type');

		            //проверяем наличие и убираем css класс
		            input.on('focus',function () {
		                var thisInput = $(this);
		                /*if(thisInput.hasClass('no-valide')){*/
		                    thisInput.on('keydown',function () {
		                        /*input.removeClass('no-valide');*/
		                       input.qtip('destroy');

		                    });
		                //}

		            });

		            //Устанавливаем класс
		            if(!input.val()){
		            	console.log('тут должна быть ошибка')
		                /*input.addClass('no-valide');*/
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
		        });
		    };

    return{
        init : init
    };
})();

Module.init();



