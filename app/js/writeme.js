var writemeValidateModule = (function(){
    
        //Инициализирует наш модуль
    var init = function(){
        _setUpListners();
    };
    


//Прослушка событий

    var _setUpListners = function(){
    	$('#content-form').on('submit',_validateField); //перехват отправки формы
    	$(".bt-reset").on('click',_clearerror);
    };

    var _clearerror = function(ev){
    	$('*').qtip('destroy');
    	$('*').removeClass('no-valide');
    }

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
			        thisInput.on('keydown',function () {
			        // input.removeClass('no-valide');
			        input.removeClass('no-valide');
			         input.qtip('destroy');
			        });
			    });



				// проверяем все input
				if(!input.val()){
					input.addClass('no-valide');
						if(input.attr('id') ==="firstname"){
							input.qtip({
									content: 'Вы не ввели имя!',
										style: {
											classes: 'qtip-red qtip-shadow'
										},
										position: {
											my: 'center right',
											at: 'center left'
											},
										show: {
												/*when: false,*/ // Don't specify a show event
												ready: true // Show the tooltip when ready
											},
										hide: false, // Don't specify a hide event
								})
						}else if(input.attr('id') ==="capcha"){
										input.qtip({
											content: 'Вы не ввели код!',
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
								}else if(input.attr('id') ==="email"){
										input.qtip({
											content: 'Вы не ввели email!',
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

				// Проверяем textarea
				if(!$('#textmessage').val()){
					$('#textmessage').addClass('no-valide');
					$('#textmessage').qtip({
									content: 'Ваш вопрос!',
										style: {
											classes: 'qtip-red qtip-shadow'
										},
										position: {
											my: 'center right',
											at: 'center left'
											},
										show: {
												when: false, // Don't specify a show event
												ready: true // Show the tooltip when ready
											},
										hide: false, // Don't specify a hide event
								})
				}

				//убираем класс предупреждения у textarea

			    	$('#textmessage').on('keydown',function(){
			    		$('#textmessage').removeClass('no-valide');
			    		$('#textmessage').qtip('destroy');
			    	})
			    


			    //Проверяем Email
			    var inputEmail = $('#email');
			    if(inputEmail.val()){
			    	var rgxEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/ ;
			    	if(!rgxEmail.test(inputEmail.val())){
			    		console.log('ссылка не валидна')
			    		/*inputEmail.addClass('no-valide');*/
		    				inputEmail.qtip({
								content: 'Укажите правильный Email!',
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
			});



	    };

    return{
        init : init
    };
})();

writemeValidateModule.init();



