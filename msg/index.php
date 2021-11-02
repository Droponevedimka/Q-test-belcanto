<?php

require("PHPMailer.php");
require("SMTP.php");

$homepage = file_get_contents("web-email.html");


$getMail = empty($_GET['mail']) ? '' : $_GET['mail'];


// // Запрос на создание скидки 
$data = json_encode(array(
    'data' => array(
        "is_active"      => 1,
        "discount_id"    => 4159,
        "code"           => "",
        "max_uses_count" => 1,
        "active_from"    => null,
        "active_to"      => null,
    ),
));$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://qtickets.ru/api/rest/v1/promo-codes');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer b3lcAnt0',
    'Content-Type: application/json',
));
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$out = curl_exec($ch);
curl_close($ch);

$res = json_decode($out, true);
print_r($out);
print_r($res['data']['code']);






// получить список скидок
// if( $curl = curl_init() ){
// curl_setopt($curl, CURLOPT_URL, 'https://qtickets.ru/api/rest/v1/discounts');
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
//     curl_setopt($curl, CURLOPT_HTTPHEADER, array(
//             'Authorization: Bearer b3lcAnt0',
//             'Content-Type: application/json',
//         ));
//     $out = curl_exec($curl);
//     echo $out;
//     curl_close($curl);
//     }






/**
* smtp_mail() - Отправка электронной почты с авторизацией через SMTP сервер
* v1.0.0
*
* smtp_read(); smtp_write() - вторичные
* Подключаемая пользовательская функция для отправки сообщений по электронной почте 
* с использованием аутентификации пользователя на почтовом сервере SMTP.
* Рекомендуется использовать в том случае, если стандартная функция mail()
* на хостинге работает неправильно или с ошибками. Данная функция корректно 
* работает на PHP 4 и выше с установленным модулем расширения php_sockets
* 
*
* http://koks-host.ru
* Оригинальная кодировка UTF-8
*/

// smtp_mail('smtp.yandex.ru',465,'no-reply@belcantofund.com','Belcantofund','no-reply@belcantofund.com','Belcanto',$mail,'Проверка севера','Твой промо КОД', 'всё ОК');




 $mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->CharSet = 'UTF-8';
 
// // Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Port = 465;
$mail->Username = 'no-reply@belcantofund.com';
$mail->Password = 'Belcantofund';
 
// // От кого
$mail->setFrom('no-reply@belcantofund.com', 'Фонд "Бельканто"');		
 
// // Кому
$mail->addAddress($getMail);
 
// // Тема письма
$mail->Subject = 'Фонд "Бельканто" приветствует вас!';
 
// // Тело письма
$bodyTo = str_ireplace("####", $res['data']['code'], $homepage);
$body = $bodyTo;
$mail->msgHTML($body);
 
// Приложение
// $mail->addAttachment(__DIR__ . '/image.jpg');
 
if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }


?>