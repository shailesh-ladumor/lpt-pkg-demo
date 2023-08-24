<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Package Tutorial</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <!-- Styles -->
    <link href="{{asset('app.css')}}" rel="stylesheet">
</head>
<body>

<div class="imgg"></div>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
             <a target="_blank" style="color: #61dafb" href="#">Package name</a> in
            <span style="color: #ff2d20">
                <strong>Laravel</strong>
            </span>
        </div>
        <br>
        <div class="links">
            <a href="{{route('demo')}}"><strong style="font-size: 60px">- By Shailesh Ladumor</strong></a>
        </div>
        <img style="margin-left:1565px" id="hideMe" src="https://cliply.co/wp-content/uploads/2020/01/372001730_SUBSCRIBE_BUTTON_400px.gif">
    </div>
</div>
</body>

</html>
