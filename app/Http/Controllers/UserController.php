<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        // 1. Get data from DB
        $users = User::all();

        // 2. Pass it to the React Component
        // The first argument 'Users/Index' is the file path: resources/js/Pages/Users/Index.tsx
        return Inertia::render('UserIndex', [
            'users' => $users,
            'status' => 'Directory Loaded'
        ]);
    }
}
