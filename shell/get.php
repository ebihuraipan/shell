<html>
<head>
<style>
.row{display:flex;flex-direction:row;}
.col{display:flex;flex-direction:column;}
.red{background-color:red;}
</style>
</head>
<body>

<!--getその１-->
<hr>
<a href="get.php?query_01=aaa">query_01</a><br>
<a href="get.php?query_02=bbb">query_02</a><br>
<?php
if(!empty($_GET['query_01'])){
    echo '<b>' . $_GET['query_01'] . '</b>';
}else if(!empty($_GET['query_02'])){
    echo '<b>' . $_GET['query_02'] . '</b>';
}
?>

<!--getその２-->
<hr>
<form method="GET" action="get.php">
<input type="radio" name="r001" value="xxx"/>xxx1
<input type="radio" name="r001" value="yyy"/>yyy2
<input type="hidden" name="h001" value="zzz">
<input type="submit" value="query_03">
</form>

<?php
if(!empty($_GET['h001'])){
    if(empty($_GET['r001'])){
        echo '<b class="red">赤背景</b>';
    }
    echo $_GET['h001'];
    echo $_GET['r001'];
}

?>

<!--デフォ-->
<hr>
<a href="get.php">デフォ</a><br>

<body>
</html>
