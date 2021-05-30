<?php namespace Tests\Repositories;

use App\Models\Category;
use App\Repositories\CategoryRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class CatgoryRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var CategoryRepository
     */
    protected $catgoryRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->catgoryRepo = \App::make(CategoryRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_catgory()
    {
        $catgory = Category::factory()->make()->toArray();

        $createdCatgory = $this->catgoryRepo->create($catgory);

        $createdCatgory = $createdCatgory->toArray();
        $this->assertArrayHasKey('id', $createdCatgory);
        $this->assertNotNull($createdCatgory['id'], 'Created Catgory must have id specified');
        $this->assertNotNull(Category::find($createdCatgory['id']), 'Catgory with given id must be in DB');
        $this->assertModelData($catgory, $createdCatgory);
    }

    /**
     * @test read
     */
    public function test_read_catgory()
    {
        $catgory = Category::factory()->create();

        $dbCatgory = $this->catgoryRepo->find($catgory->id);

        $dbCatgory = $dbCatgory->toArray();
        $this->assertModelData($catgory->toArray(), $dbCatgory);
    }

    /**
     * @test update
     */
    public function test_update_catgory()
    {
        $catgory = Category::factory()->create();
        $fakeCatgory = Category::factory()->make()->toArray();

        $updatedCatgory = $this->catgoryRepo->update($fakeCatgory, $catgory->id);

        $this->assertModelData($fakeCatgory, $updatedCatgory->toArray());
        $dbCatgory = $this->catgoryRepo->find($catgory->id);
        $this->assertModelData($fakeCatgory, $dbCatgory->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_catgory()
    {
        $catgory = Category::factory()->create();

        $resp = $this->catgoryRepo->delete($catgory->id);

        $this->assertTrue($resp);
        $this->assertNull(Category::find($catgory->id), 'Catgory should not exist in DB');
    }
}
