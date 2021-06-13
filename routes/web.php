<?php

use Illuminate\Support\Facades\Route;
use Vedmant\FeedReader\Facades\FeedReader;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/read-rss', function () {
    /** @var \SimplePie $f */
    $f = FeedReader::read('https://www.theringer.com/rss/ringer-fc/index.xml');
        $result = [
            'title' => $f->get_title(),
            'description' => $f->get_description(),
            'permalink' => $f->get_permalink(),
            'link' => $f->get_link(),
            'copyright' => $f->get_copyright(),
            'language' => $f->get_language(),
            'image_url' => $f->get_image_url(),
            'author' => $f->get_author()
        ];
        foreach ($f->get_items(0, $f->get_item_quantity()) as $item) {
            $i['title'] = $item->get_title();
            $i['description'] = $item->get_description();
            $i['id'] = $item->get_id();
            $i['content'] = $item->get_content();
            $i['thumbnail'] = $item->get_thumbnail();
            $i['category'] = $item->get_category();
            $i['categories'] = $item->get_categories();
            $i['author'] = $item->get_author();
            $i['authors'] = $item->get_authors();
            $i['contributor'] = $item->get_contributor();
            $i['copyright'] = $item->get_copyright();
            $i['date'] = $item->get_date();
            $i['updated_date'] = $item->get_updated_date();
            $i['local_date'] = $item->get_local_date();
            $i['permalink'] = $item->get_permalink();
            $i['link'] = $item->get_link();
            $i['links'] = $item->get_links();
            $i['enclosure'] = $item->get_enclosure();
            $i['audio_link'] = $item->get_enclosure()->get_link();
            $i['enclosures'] = $item->get_enclosures();
            $i['latitude'] = $item->get_latitude();
            $i['longitude'] = $item->get_longitude();
            $i['source'] = $item->get_source();

            $result['items'][] = $i;
        }

        return \Response::json([
            'data' => $result,
            'message' => 'Done',
        ], 200);
});
