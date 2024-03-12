<?php

namespace App\Http\Controllers;

use App\Models\Roll;
use Illuminate\Http\Request;

class RollController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roll = Roll::all();
        return response()->json($roll);
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
            $request->validate(['name' => 'required']);
            $roll = Roll::create($request->all());

            $bitacora = Roll::add("A new roll was created with the id: {$roll->id}");


            if (!$bitacora) {
                throw new \Exception('Error creating log.');
            }



            return response()->json(['roll' => $roll]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $roll = Roll::findOrFail($id);
        return response()->json($roll);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Roll $roll)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $request->validate(['name' => 'required' . $id]);

        $user = Roll::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Roll::findOrFail($id);
        $user->delete();
        return 'El registro se borro correctamente';
    }
}
