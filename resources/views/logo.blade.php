<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #dfc0fb!important;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
            overflow: hidden
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: absolute;
            top: 46px;
        }

        .content {
            text-align: center;
        }

        .m-b-md {
            margin-bottom: 30px;
            margin-left: 650px;
        }
        img {
            mix-blend-mode: multiply;
        }
    </style>
</head>
<body>

<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            <img src="{{asset('lpt.png')}}" height="240">
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="{{mix('js/app.js')}}"></script>
</html>
