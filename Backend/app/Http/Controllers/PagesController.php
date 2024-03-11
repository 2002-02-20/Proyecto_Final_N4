<?php

namespace App\Http\Controllers;

use App\Models\Pages;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = Pages::all();
        return response()->json($pages);
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
        $request->validate(['URL' => 'required', 'name' => 'required', 'description' => 'required' 
        ]);
        $pages = Pages::create($request->all());
        return response()->json(['pages' => $pages]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pages $id)
    {
      

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pages $pages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pages $pages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $pages = Pages::findOrFail($id);
        $pages->delete();
        return 'El registro se borro correctamente';

    }
}
