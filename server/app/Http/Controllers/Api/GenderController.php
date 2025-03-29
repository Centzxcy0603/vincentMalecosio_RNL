<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gender;
use Illuminate\Http\Request;

class GenderController extends Controller
{
    public function loadGenders()
    {
        $genders = Gender::all();
        return response()->json([
            'genders' => $genders
        ], 200);
    }

    public function getGender($genderId)
    {
        $gender = Gender::find($genderId);
        return response()->json([
            'gender' => $gender
        ], 200);
    }

    public function storeGender(Request $request)
    {
        $validated = $request->validate([
            'gender' => ['required', 'min:4', 'max:10']
        ]);

        Gender::create([
            'gender' => $validated['gender']
        ]);

        return response()->json([
            'message' => 'Gender Successfully Added.'
        ], 200);
    }

    public function updateGender(Request $request, Gender $gender)
    {
        $validated = $request->validate([
            'gender' => ['required', 'min:4', 'max:10']
        ]);

        $gender->update([
            'gender' => $validated['gender']
        ]);

        return response()->json([
            'message' => 'Gender Successfully Updated.'
        ], 200);
    }
}
