<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\Category;

class CatgoryApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_catgory()
    {
        $catgory = Category::factory()->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/catgories', $catgory
        );

        $this->assertApiResponse($catgory);
    }

    /**
     * @test
     */
    public function test_read_catgory()
    {
        $catgory = Category::factory()->create();

        $this->response = $this->json(
            'GET',
            '/api/catgories/'.$catgory->id
        );

        $this->assertApiResponse($catgory->toArray());
    }

    /**
     * @test
     */
    public function test_update_catgory()
    {
        $catgory = Category::factory()->create();
        $editedCatgory = Category::factory()->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/catgories/'.$catgory->id,
            $editedCatgory
        );

        $this->assertApiResponse($editedCatgory);
    }

    /**
     * @test
     */
    public function test_delete_catgory()
    {
        $catgory = Category::factory()->create();

        $this->response = $this->json(
            'DELETE',
             '/api/catgories/'.$catgory->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/catgories/'.$catgory->id
        );

        $this->response->assertStatus(404);
    }
}
