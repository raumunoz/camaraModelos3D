
<?php include 'getToken.php'?>
<?php
$ch = curl_init();
$idWeb;
//setup the request, you can also use CURLOPT_URL
$ch = curl_init('https://api.sandbox.paypal.com/v1/payment-experience/web-profiles');
//echo "el token es".$access_token;
// Returns the data/output as a string instead of raw data
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//Set your auth headers
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
   'Content-Type: application/json',
   'Authorization: Bearer ' . $access_token
   ));

// get stringified data/output. See CURLOPT_RETURNTRANSFER
$data = curl_exec($ch);
$err = curl_error($ch);

if($err){
    //echo "cURL Error #:" . $err;   
}else{
    $info = curl_getinfo($ch);
//echo $data;
    $obj = json_decode($data,true);
    $idWeb=$obj[0]["id"];
   //s echo "webID".$idWeb;
}
/*
if(curl_errno($ch)){
    //echo 'Request Error:' . curl_error($ch);
}*/
// get info about the request

//echo "<pre>";
//print_r($obj);
//print_r($idWeb["id"]);

//$idWeb =$data->id;
// close curl resource to free up system resources
//echo $idWeb;
curl_close($ch);
?>