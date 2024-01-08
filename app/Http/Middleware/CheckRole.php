<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // dd($role);
        if ($request->user() && $request->user()->role === $role) {
            return $next($request);
        }
    
        // Redirect or return an unauthorized response
        // return response()->with('error', 'Unauthorized action.');

        
    }
}
