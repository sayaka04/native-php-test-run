<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';


use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('About', [
        'title' => 'About Our App',
        'description' => 'Built with Laravel, React, and TypeScript!'
    ]);
});


Route::get('/state-testing', function () {
    return Inertia::render('StateTesting');
});

Route::get('/component-and-props-testing', function () {
    return Inertia::render('ComponentsAndPropsTesting');
});

Route::get('/conditional-testing', function () {
    return Inertia::render('ConditionalTesting');
});

Route::get('/lifecycle-testing', function () {
    return Inertia::render('LifecycleTesting');
});

use App\Models\User;

Route::get('/users-direct', function () {
    return Inertia::render('UserDirectory', [
        'users' => User::all() // This sends the entire users table as an array
    ]);
});

use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);
