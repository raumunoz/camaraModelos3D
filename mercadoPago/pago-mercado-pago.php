<?php  
    MercadoPago\SDK::setAccessToken("TEST-88f24e5f-def7-4d5d-a159-74a2c29dfa43");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 100;
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "Intelligent Marble Table";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
    "email" => "maryjane@yahoo.com"
    );
    // Save and posting the payment
    $payment->save();
    //...
    // Print the payment status
    echo $payment->status;
    //...
?>