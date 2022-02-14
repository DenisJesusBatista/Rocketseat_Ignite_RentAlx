import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
    const { name, descrption } = request.body;

    categories.push({ name, descrption });

    return response.status(201).send();
});

export { categoriesRoutes };
