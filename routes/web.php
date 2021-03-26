<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $im = new Imagick(public_path('logo.PNG'));

  /* Thumbnail the image */
  $im->thumbnailImage(200, null);

    return view('welcome', compact('im'));
});
