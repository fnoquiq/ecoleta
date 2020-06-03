import express from 'express';

import itemsController from './controllers/ItemsController';
import pointsController from './controllers/PointsController';

const routes = express.Router();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
