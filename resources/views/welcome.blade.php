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
    <link rel="icon" type="image/x-icon" href="{{asset('/b.png')}}">
</head>
<body>

<div class="imgg"></div>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            {{--             <a style="color: #61dafb" href="https://github.com/MohmmedAshraf/blade-flags">Blade Flags</a> in--}}
            <span style="color: #ff2d20" onclick="hideShowEl()" id="title">
                <strong>Layouts in Laravel</strong>
            </span>
        </div>
        <br>
        <img id="wayImage" src="{{asset('./layout.PNG')}}">
        <div class="links">
            <a href="{{route('home')}}"><strong style="font-size: 60px">- By Shailesh Ladumor</strong></a>
        </div>

        {{-- <marquee direction="down" width="950" height="300" behavior="alternate" style="border:none">
            <marquee behavior="alternate">
                <div class="links" style="margin-top: 50px">
                    <a href="#"><strong style="font-size: 80px; color:red; font-weight: bold">Subscribe Now</strong></a>
                </div>
            </marquee>
        </marquee> --}}
        <img style="margin-left:1565px" id="hideMe"
             src="https://cliply.co/wp-content/uploads/2020/01/372001730_SUBSCRIBE_BUTTON_400px.gif">
    </div>
</div>
</body>
<script>
    function hideShowEl(){
        document.getElementById('title').style.display = 'none';
        document.getElementById('wayImage').style.display = 'block';
    }
</script>
</html>
