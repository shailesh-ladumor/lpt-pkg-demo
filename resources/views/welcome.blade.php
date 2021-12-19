<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Package Tutorial</title>
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
            overflow: hidden
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .position-ref {
            position: absolute;
            top: 46px;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
            margin-bottom: 30px;
        }

        .title {
            font-size: 104px;
            font-weight: 900;
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
        .imgg {
            background-image: url('b.png');
            background-repeat: no-repeat;̥
            background-position: 50% 0;
            -ms-background-size: cover;
            -o-background-size: cover;
            -moz-background-size: cover;
            -webkit-background-size: cover;
            background-size: cover;
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
            opacity:0.1;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
        #hideMe {
            position: absolute;
            right: 20px;
            bottom: 110px;
    -moz-animation: cssAnimation 0s ease-in 15s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 0s ease-in 15s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 0s ease-in 15s forwards;
    /* Opera */
    animation: cssAnimation 0s ease-in 15s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
@keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}
    </style>
</head>
<body>

<div class="imgg"></div>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            How To Install
            {{-- <a style="color: #61dafb"  href="https://github.com/rap2hpoutre/laravel-log-viewer">Log Viewer</a> in --}}
            <span style="color: #ff2d20">
                <strong>Laravel</strong>
            </span>
        </div>
        <br>
        <div class="links">
            <a href="#"><strong style="font-size: 60px">- By Shailesh Ladumor</strong></a>
        </div>
      
        {{-- <marquee direction="down" width="950" height="300" behavior="alternate" style="border:none">
            <marquee behavior="alternate">
                <div class="links" style="margin-top: 50px">
                    <a href="#"><strong style="font-size: 80px; color:red; font-weight: bold">Subscribe Now</strong></a>
                </div>
            </marquee>
        </marquee> --}}
        <img style="margin-left:1565px" id="hideMe" src="https://cliply.co/wp-content/uploads/2020/01/372001730_SUBSCRIBE_BUTTON_400px.gif">
    </div>
</div>
</body>

</html>
