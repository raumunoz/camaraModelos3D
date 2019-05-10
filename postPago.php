<?php include 'getWebExperience.php'?>;
<?php
$ch = curl_init();


//setup the request, you can also use CURLOPT_URL
$data = '{
  "intent": "sale",
  "payer": {
    "payment_method": "paypal"
  },
  "transactions": [{
    "amount": {
      "currency": "BRL",
      "total": "95.00",
      "details": {
        "shipping": "11",
        "subtotal": "75",
        "shipping_discount": "1.00",
        "insurance": "1.00",
        "handling_fee": "1.00",
        "tax": "6.00"
      }
    },
    "description": "This is the payment transaction description",
    "payment_options": {
      "allowed_payment_method": "IMMEDIATE_PAY"
    },
    "item_list": {
      "shipping_address": {
        "recipient_name": "PP Plus Recipient",
        "line1": "Gregório Rolim de Oliveira, 42",
        "line2": "JD Serrano II",
        "city": "Votorantim",
        "country_code": "BR",
        "postal_code": "18117-134",
        "state": "São Paulo",
        "phone": "0800-761-0880"
      },
      "items": [{
        "name": "handbag",
        "description": "red diamond",
        "quantity": "1",
        "price": "75",
        "tax": "6",
        "sku": "product34",
        "currency": "BRL"
      }]
    }
  }],
  "redirect_urls": {
    "return_url": "https://example.com/return",
    "cancel_url": "https://example.com/cancel"
  }
}';

curl_setopt($ch, CURLOPT_URL, "https://api.sandbox.paypal.com/v1/payments/payment");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_SSLVERSION , 6); //NEW ADDITION
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json","Authorization: Bearer ".$token));

$resul =curl_exec($ch);

if(empty($resul))die("Error: No response.");
else
{
    $obj = json_decode($resul);
    //print_r($json->access_token);
    $links=$obj->links;
}

print_r($links[0]->rel);
echo "<br>";
print_r($links[1]->rel);
echo "<br>";
print_r($links[2]->rel);
echo "<br>";

foreach($links as $item) {
  if($item->rel=="approval_url"){

    echo '<pre>'; var_dump($item);
    echo " <a href='".$item->href."'>ENlace</a>";
  }

  // to know what's in $item
}
curl_close($ch); //THIS CODE IS NOW WORKING!
?>