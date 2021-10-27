<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoryData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $faker = \Faker\Factory::create();
        for ($x = 0; $x <= 500000; $x++) {
            $input = [
                'name' => ucfirst($faker->word),
                'description' => $faker->text,
                'sub_title' => $faker->name,
                'slug' => $faker->slug,
                'created_by' => $faker->firstName,
                'updated_by' => $faker->lastName,
                'managed_by' => $faker->name,
                'is_active' => $faker->boolean,
            ];
            $category = Category::create($input);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
