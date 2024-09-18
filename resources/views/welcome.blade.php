<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Package Tutorial</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700&amp;lang=en"/>
    <!-- Styles -->
    <link href="{{asset('app.css')}}" rel="stylesheet">
</head>
<body>

<div class="imgg"></div>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            <a style="color: #61dafb"
               target="_blank"
               href="https://github.com/rappasoft/laravel-authentication-log">Auth Log</a> in
            <span style="color: #ff2d20">
                <strong>Laravel?</strong>
            </span>
        </div>
        <br>
        <div class="links">
            <strong style="font-size: 60px">- By Shailesh Ladumor</strong>
        </div>
        <img style="margin-left:1565px" id="hideMe"
             src="https://cliply.co/wp-content/uploads/2020/01/372001730_SUBSCRIBE_BUTTON_400px.gif">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
                integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
                crossorigin="anonymous"></script>
        @include('share-model');
    </div>
</div>
<script>
    $('#btn').click(function () {
        $('#shareModel').modal('show');
    })
</script>
</body>
</html>
