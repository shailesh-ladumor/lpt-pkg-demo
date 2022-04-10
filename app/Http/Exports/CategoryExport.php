<?php
namespace App\Http\Exports;

use App\Models\Category;
use Maatwebsite\Excel\Concerns\FromCollection;

class CategoryExport implements FromCollection {
    public function collection()
    {
         return Category::all();
    }
}