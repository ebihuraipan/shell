<html>
<head>
<style>
.row{display:flex;flex-direction:row;}
.col{display:flex;flex-direction:column;}
.red{background-color:red;}
</style>
</head>
<body>

<!--sessionその１-->
<?php
session_start();
if (empty($_SESSION['counter'])) {
    $_SESSION['counter'] = 1;
} else if($_SESSION['counter'] >= 3) {
    $_SESSION['counter'] = 1;
} else {
    $_SESSION['counter']++;
}
echo session_id() . "<br>";
echo $_SESSION['counter'];
?>


<!--デフォ-->
<hr>
<a href="session.php">デフォ</a><br>

<body>
</html>
