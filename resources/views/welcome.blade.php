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
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
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
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 104px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 25px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
          How Generate <a href="https://github.com/SimpleSoftwareIO/simple-qrcode/tree/develop/docs/en"> QR</a> code in Laravel
        </div>
        <br>
        <img src="data:image/png;base64,{{ base64_encode(SimpleSoftwareIO\QrCode\Facades\QrCode::size(300)->format('png')->merge(public_path('logo.PNG'),.3, true)->generate('Make me into a QrCode!') ) }}">
       
        <div class="links">
            <a href="#"><strong>- By Shailesh Ladumor</strong></a>
        </div>
    </div>
</div>
</body>
</html>
