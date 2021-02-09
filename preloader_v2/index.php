<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/preloader.css">
    <script src="js/preloader.js" defer></script>
</head>
<body>

<div class="preloader-cont">
    <?php for ($i=0; $i<1; $i++):?>
    <div class="preloader-wrapper">
        <ul class="preloader">
            <li class="el"></li>
            <li class="el"></li>
            <li class="el"></li>
            <li class="dot"></li>
        </ul>
    </div>
   <? endfor;?>
</div>
</body>
</html>