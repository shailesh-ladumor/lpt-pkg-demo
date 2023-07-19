<x-layout>
    <x-slot name="title">
        Home
    </x-slot>
    <div class="container">
        <h3 class="text-center">TOUR DATES</h3>
        <p class="text-center">Lorem ipsum we'll play you some music.<br> Remember to book your tickets!</p>
        <div class="row text-center">
            <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="{{asset("surt.jpg")}}" alt="Paris" width="400" height="300">
                    <p><strong>Surat</strong></p>
                    <p>Saturday 29 November 2002</p>
                    <button class="btn">Buy Tickets</button>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="{{asset("mumbai.jpg")}}" alt="New York" width="400" height="300">
                    <p><strong>Mumbai</strong></p>
                    <p>Saturday 29 November 2002</p>
                    <button class="btn">Buy Tickets</button>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="{{asset("delhi.jpg")}}" alt="San Francisco" width="400" height="300">
                    <p><strong>Delhi</strong></p>
                    <p>Saturday 29 November 2002</p>
                    <button class="btn">Buy Tickets</button>
                </div>
            </div>
        </div>
    </div>
</x-layout>
