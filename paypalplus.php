<?php
$comida;
$approval_url="direcion";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://www.paypalobjects.com/webstatic/ppplusdcc/ppplusdcc.min.js" type="text/javascript"></script>
    <title>PLUS</title>

</head>
<body>
paypal plus
<script language="JavaScript">
    var url='<?php echo $approval_url ?>';
function initiateCheckout() {
var ppp = PAYPAL.apps.PPP({ 
    "approvalUrl": url,
    "placeholder": "ppplus",
    "mode": "sandbox",}); 
}
</script>
<button type="submit" id="miniBrowserInitiateCheckout"
class="btn btn-lg btn-primary btn-block"
onclick=" initiateCheckout(); return false;">
Checkout
</button>    
</body>
</html>