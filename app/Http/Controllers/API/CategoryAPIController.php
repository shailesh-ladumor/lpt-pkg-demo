<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateCategoryAPIRequest;
use App\Http\Requests\API\UpdateCategoryAPIRequest;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Response;

/**
 * Class CatgoryController
 * @package App\Http\Controllers\API
 */

class CategoryAPIController extends AppBaseController
{
    /** @var  CategoryRepository */
    private $catgoryRepository;

    public function __construct(CategoryRepository $catgoryRepo)
    {
        $this->catgoryRepository = $catgoryRepo;
    }

    /**
     * Display a listing of the Catgory.
     * GET|HEAD /catgories
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $catgories = $this->catgoryRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse($catgories->toArray(), 'Catgories retrieved successfully');
    }

    /**
     * Store a newly created Catgory in storage.
     * POST /catgories
     *
     * @param CreateCategoryAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateCategoryAPIRequest $request)
    {
        $input = $request->all();

        $catgory = $this->catgoryRepository->create($input);

        return $this->sendResponse($catgory->toArray(), 'Catgory saved successfully');
    }

    /**
     * Display the specified Catgory.
     * GET|HEAD /catgories/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Category $catgory */
        $catgory = $this->catgoryRepository->find($id);

        if (empty($catgory)) {
            return $this->sendError('Catgory not found');
        }

        return $this->sendResponse($catgory->toArray(), 'Catgory retrieved successfully');
    }

    /**
     * Update the specified Catgory in storage.
     * PUT/PATCH /catgories/{id}
     *
     * @param int $id
     * @param UpdateCategoryAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateCategoryAPIRequest $request)
    {
        $input = $request->all();

        /** @var Category $catgory */
        $catgory = $this->catgoryRepository->find($id);

        if (empty($catgory)) {
            return $this->sendError('Catgory not found');
        }

        $catgory = $this->catgoryRepository->update($input, $id);

        return $this->sendResponse($catgory->toArray(), 'Catgory updated successfully');
    }

    /**
     * Remove the specified Catgory from storage.
     * DELETE /catgories/{id}
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Category $catgory */
        $catgory = $this->catgoryRepository->find($id);

        if (empty($catgory)) {
            return $this->sendError('Catgory not found');
        }

        $catgory->delete();

        return $this->sendSuccess('Catgory deleted successfully');
    }
}
