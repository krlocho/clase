<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


Route::get('/auth/github/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/github/callback', function () {
    $user = Socialite::driver('github')->user();
    dd($user);

    // $user->token
});

Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('/auth/google/callback', function () {
    $user = Socialite::driver('google')->user();
    dd($user);

    // $user->token
});

Route::get('/auth/linkedin/redirect', function () {
    return Socialite::driver('linkedin')->redirect();
});

Route::get('/auth/linkedin/callback', function () {
    $user = Socialite::driver('linkedin')->user();
    dd($user);

    // $user->token
});

Route::get('/auth/facebook/redirect', function () {
    return Socialite::driver('facebook')->redirect();
});

Route::get('/auth/facebook/callback', function () {
    $user = Socialite::driver('facebook')->user();
    dd($user);

    // $user->token
});

Route::get('/auth/spotify/redirect', function () {
    return Socialite::driver('spotify')->redirect();
});

Route::get('/auth/spotify/callback', function () {
    $user = Socialite::driver('spotify')->user();
    dd($user);

    // $user->token
});