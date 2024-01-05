<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["feedback-name"]);
    $phone = htmlspecialchars($_POST["feedback-phone"]);
    $email = htmlspecialchars($_POST["feedback-email"]);

    $from_email = "info@ampir-stroi.kz"; 
    $to_email = "admin@ampir-stroi.kz"; 
    $subject = 'Новая заявка с формы';
    $message = "
        <html>
        <head>
            <title>$subject</title>
        </head>
        <body>
            <p><strong>Имя:</strong> $name</p>
            <p><strong>Телефон:</strong> $phone</p>
            <p><strong>E-mail:</strong> $email</p>
        </body>
        </html>
    ";

    $headers = "From: $from_email\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    if (mail($to_email, $subject, $message, $headers)) {
        header("HTTP/1.1 200 OK");
        echo json_encode(["status" => "success"]);
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode(["status" => "error", "message" => "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."]);
    }
} else {
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(["status" => "error", "message" => "Неверный метод запроса"]);
}
?>
