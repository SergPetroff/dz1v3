var writemeValidateModule = (function(){
    
        //Инициализирует наш модуль
    var init = function(){
        _setUpListners();
    };
    


//Прослушка событий

    var _setUpListners = function(){
    	$('#content-form').on('submit',_validateField); //перехват отправки формы
    };

		var _validateField = function(ev){
			ev.preventDefault();

			console.log('нажата')
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

				// Проверяем textarea
				if(!$('#textmessage').val()){
					$('#textmessage').addClass('no-valide')
				}

				//убираем класс предупреждения у textarea
			    if($('#textmessage').hasClass('no-valide')){
			    	$('#textmessage').on('keydown',function(){
			    		$('#textmessage').removeClass('no-valide');
			    	})
			    }


			    //Проверяем URL
			    var inputEmail = $('#email');
			    if(inputEmail.val()){
			    	var rgxEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/ ;
			    	if(!rgxEmail.test(inputEmail.val())){
			    		inputEmail.addClass('no-valide');
			    		
			    	}
	    			
    		}
			});



	    };

    return{
        init : init
    };
})();

writemeValidateModule.init();



