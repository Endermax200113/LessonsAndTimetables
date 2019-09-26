<?php

//Сборка данных
$fio = $_POST['fio'];
$email = $_POST['email'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);

$fio = urldecode($fio);
$email = urldecode($email);

$fio = trim($fio);
$email = trim($email);

echo $fio;
echo "<br>";
echo $email;

//Отправка
if (mail($email, "Проверка на отправление почты", "Ваше ФИО: ".$fio.". Ваш E-mail: ".$email, "Откуда: какая-то там почта \r\n")) {
	echo "Почта успешно отправлена!";
} else {
	echo "Возникла ошибка при отправки почты";
}

?>