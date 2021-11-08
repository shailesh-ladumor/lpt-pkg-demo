<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDaimondData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $faker = \Faker\Factory::create();
        for ($x = 0; $x <= 50; $x++) {
            $input = [
                'stock_id' => $faker->word,
                'ReportNo' => $faker->word,
                'shape' => $faker->word,
                'carats' => 0.40,
                'col' => $faker->word,
                'clar' => $faker->word,
                'cut' => $faker->word,
                'pol' => $faker->word,
                'symm' => $faker->word,
                'flo' => $faker->word,
                'floCol' => $faker->word,
                'lwratio' => 1.6,
                'length' => 6.49,
                'width' => 4.05,
                'height' => $faker->word,
                'depth' => 2.56,
                'table' => 63.30,
                'culet' => $faker->word,
                'lab' => $faker->word,
                'girdle' => $faker->word,
                'eyeclean' => $faker->word,
                'brown' => $faker->word,
                'green' => $faker->word,
                'milky' => $faker->word,
                'actual_supplier' => $faker->word,
                'discount' => $faker->word,
                'price' => 100,
                'price_per_carat' => $faker->word,
                'video' => $faker->word,
                'video_frames' => $faker->word,
                'image' => $faker->word,
                'pdf' => $faker->word,
                'mine_of_origin' => $faker->word,
                'canada_mark_eligble' => $faker->word,
                'supplier_name' => $faker->word,
                'location' => $faker->word,
                'is_returnable' => $faker->word,
                'supplier_id' => $faker->word,
                'active' => $faker->numberBetween(0, 2),
                'video_url' => $faker->word,
                'img_url' => $faker->word,
                'pdf_url' => $faker->word,
                'uniqueId' => $faker->word
            ];
            $category = \App\Models\DaimondFeed::create($input);
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
