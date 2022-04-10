<?php
namespace App\Http\Exports;

use App\Models\Category;
use Maatwebsite\Excel\Concerns\FromQuery;

class CategoryQueryExport implements FromQuery{
    public function query()
    {
         return Category::query()->where('name', '=','Non');
    }
}