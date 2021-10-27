<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Category
 * @package App\Models
 * @version October 16, 2021, 1:39 pm UTC
 *
 * @property string $name
 */
class DaimondFeed extends Model
{
    use SoftDeletes;

    use HasFactory;

    public $table = 'diamond_feeds';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'stock_id',
        'ReportNo',
        'shape',
        'carats',
        'col',
        'clar',
        'cut',
        'pol',
        'symm',
        'flo',
        'floCol',
        'lwratio',
        'length',
        'width',
        'height',
        'depth',
        'table',
        'culet',
        'lab',
        'girdle',
        'eyeclean',
        'brown',
        'green',
        'milky',
        'actual_supplier',
        'discount',
        'price',
        'price_per_carat',
        'video',
        'video_frames',
        'image',
        'pdf',
        'mine_of_origin',
        'canada_mark_eligble',
        'supplier_name',
        'location',
        'is_returnable',
        'supplier_id',
        'active',
        'video_url',
        'img_url',
        'pdf_url',
        'uniqueId',
        'created_by',
        'updated_by',
        'managed_by',
        'is_active',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required'
    ];

}
