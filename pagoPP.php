<?php include 'getWebExperience.php'?>

<?php
//echo "POSTAL".$codigoPostal."numero";
$aprovalUrl;
$paymentID;

$data1 = '
{
    "redirect_urls": {
        "cancel_url": "http://www.mypage.de/index.php?s=119&a=return&r=false",
        "return_url": "http://www.mypage.de/index.php?s=119&a=return&r=true"
    },
    "experience_profile_id": "XP-KSPD-88KU-4GXY-3MWC",
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    
    "transactions": [
        {
            "item_list": {
                "items": [
                    {
                        "currency": "EUR",
                        "price": "3.95",
                        "name": "Lucky Paw",
                        "quantity": 50
                    },
                    {
                        "currency": "EUR",
                        "price": "17",
                        "name": "Lucky Tail",
                        "quantity": 1
                    }
                ]
            },
            "amount": {
                "currency": "EUR",
                "total": "214.50",
                "details": {
                    "shipping_discount": "0",
                    "handling_fee": "0",
                    "subtotal": "214.50",
                    "tax": "0",
                    "shipping": "0"
                }
            },
            "description": "Payment"
        }
    ]
}
';
$data = '
{
    "redirect_urls": {
        "cancel_url": "http://www.mypage.de/index.php?s=119&a=return&r=false",
        "return_url": "http://www.mypage.de/index.php?s=119&a=return&r=true"
    },
    "experience_profile_id": "XP-KSPD-88KU-4GXY-3MWC",
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
}
';

/*
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
}'*/
$data2=
'{
    "intent": "sale",
    "payer": {
      "payment_method": "paypal",
      "payer_info": {
        "email": "'.$email.'"
      }
    },
    "transactions": [{
      "amount": {
        "total": "'.$tot.'",
        "currency": "MXN",
        "details": {
          "subtotal": "'.$tot.'",
          "tax": "0",
          "shipping": "0",
          "handling_fee": "0",
          "shipping_discount": "0",
          "insurance": "0"
        }
      },
      "description": "PAGO PUFFINO",
      "payment_options": {
        "allowed_payment_method": "IMMEDIATE_PAY"
      },
      "soft_descriptor": "puffinos",
      "item_list": {
        "items": '.$items.',
        "shipping_address": {
          "recipient_name": "'.$nombre.' '.$apellidos.'",
          "line1": "'.$direccion.'",
          "line2": "'.$colonia.'",
          "city": "'.$ciudad.'",
          "country_code": "'.$pais.'",
          "postal_code": "'.$codigoPostal.'",
          "phone": "'.$telefono.'",
          "state": "'.$estado.'"
        }
      }
    }],
    "note_to_payer": "Contactanos para cualqueir duda sobre el pedido",
    "redirect_urls": {
      "return_url": "http://protoweb.zacsoft.com/campomarte/completo2.php",
      "cancel_url": "http://protoweb.zacsoft.com/campomarte/"
    }
  }';
$ch = curl_init();
//echo $items;
//echo "<br> WEB".$idWeb."<br>";
//echo "<br> ACCES token ".$access_token."<br>";
//setup the request, you can also use CURLOPT_URL


curl_setopt($ch, CURLOPT_URL, "https://api.sandbox.paypal.com/v1/payments/payment");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_SSLVERSION , 6); //NEW ADDITION
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data2); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json","Authorization: Bearer ".$access_token));

$resul =curl_exec($ch);
$err = curl_error($ch);

if($err){
    //echo "cURL Error #:" . $err;   
}else {
  $obj = json_decode($resul);
    //print_r($json->access_token);
    $links=$obj->links;
    $paymentID=$obj->id;
   
    echo "<pre>";
    print_r($obj);
    echo "</pre>";
}
if(empty($resul))die("Error: No response.");
else
{
    
}

//print_r($links[0]->rel);
//echo "<br>";
//print_r($links[1]->rel);
//echo "<br>";
//print_r($links[2]->rel);
//echo "<br>";

foreach($links as $item) {
  if($item->rel=="approval_url"){

   //echo '<pre>'; var_dump($item);
    $aprovalUrl=$item->href;
    //echo '<a href="'.$aprovalUrl.'">paypalEnlace</a>';
  }

  // to know what's in $item
}
curl_close($ch); //THIS CODE IS NOW WORKING!
?>