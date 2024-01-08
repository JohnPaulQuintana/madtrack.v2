<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Administrator extends Controller
{
    public function dashboard(){
        return view('administrator.components.content');
    }
}
