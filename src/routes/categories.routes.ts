import { Router } from 'express';

import {CreateCategoryService } from '../services/CreateCategoryService';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const CreateCategoryService = new CreateCategoryService(categoriesRepository);

    CreateCategoryService.execute({name, description});
  
    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});

export { categoriesRoutes };
