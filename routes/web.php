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
Route::get('/docs', function () {
    return view('docs');
})->name('docs');

Route::get('laracasts', function () {
    return view('laracasts');
})->name('laracasts');

Route::get('news', function () {
    return view('news');
})->name('news');

Route::get('vibrant', function () {
    return view('vibrant');
})->name('vibrant');


Route::group(['prefix' => '{locale}', 'middleware' => 'setLocale'], function () {
    Route::get('/', function () {
        return view('welcome');
    });
});
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
