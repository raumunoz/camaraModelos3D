<?php
  $token = $_REQUEST["token"];
  $payment_method_id = $_REQUEST["payment_method_id"];
  $installments = $_REQUEST["installments"];
  $issuer_id = $_REQUEST["issuer_id"];
?>
<?php 
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken(" TEST-8946992860655551-050601-65f8280dfaa2b5f556bc3380bd70239e-212962075");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 115;
    $payment->token = $token;
    $payment->description = "Ergonomic Cotton Bag";
    $payment->installments = $installments;
    $payment->payment_method_id = $payment_method_id;
    $payment->issuer_id = $issuer_id;
    $payment->payer = array(
    "email" => "roman@gmail.com"
    );
    // Guarda y postea el pago
    $payment->save();
    //...
    // Imprime el estado del pago
    Log::alert('message');
    echo $payment->status;
    //...
?>
