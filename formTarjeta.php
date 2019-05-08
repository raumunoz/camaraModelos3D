<!--https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-2CX66980VC575644L-->
<?php
$approval_url="https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-2CX66980VC575644L"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pago tarjeta</title>
    <script src="https://www.paypalobjects.com/webstatic/ppplusdcc/ppplusdcc.min.js" type="text/javascript"></script>
</head>
<body>

<div id="ppplus">
</div> 
<script type="application/javascript">
var ppp = PAYPAL.apps.PPP({ 
"approvalUrl": "",
    "placeholder": "ppplus",
    "mode": "sandbox",});
</script>
</body>
</html>