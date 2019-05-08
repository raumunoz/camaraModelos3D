<?php include 'getToken.php'?>;
<?php include 'getWebExperience.php'?>;
<?php
$ch = curl_init();
$idWeb;

//setup the request, you can also use CURLOPT_URL
$ch = curl_init('https://api.sandbox.paypal.com/v1/payment-experience/web-profiles');

// Returns the data/output as a string instead of raw data
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$data = '{
    
  ';

curl_setopt($ch, CURLOPT_URL, "https://api.sandbox.paypal.com/v1/payments/payment");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json","Authorization: Bearer ".$token));

$result = curl_exec($ch);


if(empty($result))die("Error: No response.");
else
{
    $json = json_decode($result);
    print_r($json);
}
?>