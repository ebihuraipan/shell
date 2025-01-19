<html>
<head>
<style>
.row{display:flex;flex-direction:row;}
.col{display:flex;flex-direction:column;}
.red{background-color:red;}
.post_after{background-color:lightgray;padding:10px;}
</style>
</head>
<body>

<!--postその１-->
<hr>
<form method="POST" action="post.php">
<input type="text" name="title" value=""><br>
<textarea name="message" rows="5" cols="10">
<?php
if( !empty($_POST["message"]) ){
    echo $_POST["message"];
}
?>
</textarea>
<br>
<label><input type="checkbox" name="cb1" value="111">ON</label>
<label><input type="checkbox" name="cb2" value="222">OFF</label>
<input type="submit" value="POST送信">
</form>

<div class="post_after">

<?php
if( !empty($_POST["title"]) && !empty($_POST["message"]) ){
    echo "<h3>". $_POST["title"] . "</h3>";
    echo "<pre>". $_POST["message"] . "</pre>";
    if( !empty($_POST["cb1"]))echo "<p>ON</p>";
    if( !empty($_POST["cb2"]))echo "<p>OFF</p>";
}
?>

</div>


<!--デフォ-->
<hr>
<a href="post.php">デフォ</a><br>

<body>
</html>
