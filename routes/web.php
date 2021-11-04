<?php

use App\Http\Controllers\UserController;
use App\Models\Category;
use App\Models\DaimondFeed;
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
    return view('welcome');
});

Route::get('/search', function () {
    return DaimondFeed::whereBetween('carats', ['0.15','15'])
        ->whereBetween('price', [0,1000000])
        ->whereIn('col', ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'et'])
        ->whereIn('clar', ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'])
        ->paginate(10);
//    return view('welcome');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::resource('users', UserController::class)->middleware('auth');


Route::resource('categories', App\Http\Controllers\CategoryController::class);


Route::resource('tags', App\Http\Controllers\TagController::class);
