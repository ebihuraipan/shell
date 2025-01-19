<html>
<head>
<style>
.row{display:flex;flex-direction:row;}
.col{display:flex;flex-direction:column;}
.red{background-color:red;}
</style>
</head>
<body>

<!--cookieその１-->
<?php
$_cast = $_COOKIE['c001'];
$cast = (int)$_cast;
echo "カウント" . $cast;
setCookie("c001", $cast + 1, time() + 3600);

?>


<!--デフォ-->
<hr>
<a href="cookie.php">デフォ</a><br>

<body>
</html>
