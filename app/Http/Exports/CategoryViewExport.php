<?php
namespace App\Http\Exports;

use App\Models\Category;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;

class CategoryViewExport implements FromView{
    public function view(): view
    {
         $categories = Category::all();
         return view('categories.export', ['categories'=> $categories]);
    }
}