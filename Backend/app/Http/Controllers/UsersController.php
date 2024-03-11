<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email|unique:users',
            ]);
    
           
            if (empty($request->password)) {
                $hashedPassword = Hash::make($request->apellido);
            } else {
                $hashedPassword = Hash::make($request->password);
            }
    
            $userData = $request->all();
            $userData['password'] = $hashedPassword;
    
            $user = User::create($userData);
    
            return response()->json(['user' => $user]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al crear el usuario: ' . $e->getMessage()], 500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $users = User::findOrFail($id);
        return response()->json($users);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $users)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate(['nombres' => 'required', 'apellidos' => 'required', 'email' => 'required|email|unique:alumnos,email,' . $id,]);

        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return 'El registro se borro correctamente';
    }
}
