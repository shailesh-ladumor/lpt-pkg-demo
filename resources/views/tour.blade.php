@extends('app')
@section('title')
    Tour
@endsection
@section('content')
    <!-- The Band Section -->
    <div class="container text-center">
        <h3>THE BAND</h3>
        <p><em>We love music!</em></p>
        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        <br>
        <div class="row">
            <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br>
                <a href="#demo" data-toggle="collapse">
                    <img src="{{asset('bandmember.jpg')}}" class="img-circle person" alt="Random Name" width="255"
                         height="255">
                </a>
                <div id="demo" class="collapse">
                    <p>Guitarist and Lead Vocalist</p>
                    <p>Loves long walks on the beach</p>
                    <p>Member since 1988</p>
                </div>
            </div>
            <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br>
                <a href="#demo2" data-toggle="collapse">
                    <img src="{{asset('bandmember.jpg')}}" class="img-circle person" alt="Random Name" width="255"
                         height="255">
                </a>
                <div id="demo2" class="collapse">
                    <p>Drummer</p>
                    <p>Loves drummin'</p>
                    <p>Member since 1988</p>
                </div>
            </div>
            <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br>
                <a href="#demo3" data-toggle="collapse">
                    <img src="{{asset('bandmember.jpg')}}" class="img-circle person" alt="Random Name" width="255"
                     height="255">
            </a>
            <div id="demo3" class="collapse">
                <p>Bass player</p>
                <p>Loves math</p>
                <p>Member since 2005</p>
            </div>
        </div>
    </div>
</div>
<!--  TOUR Section -->
@endsection
