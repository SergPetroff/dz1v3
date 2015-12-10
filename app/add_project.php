<?php 
	$data = array();
	$name = $_POST['nameproject'];
	

	if($name ===''){
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя!';
	}else{
		$data['text'] = 'Вы молодец';
		$data['status'] = 'OK';
	}

	header("Content-type:application/json");
	echo json_encode($data);
	exit;
 ?>