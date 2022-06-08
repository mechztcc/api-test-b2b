import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { UniversityController } from '../http/controllers/UniversityController';

const universityController = new UniversityController();

const universityRouter = Router();

universityRouter.post(
  '/populate-database',
  universityController.populateDataBase
);

universityRouter.get('/:id', universityController.findById);
universityRouter.get('/', universityController.index);
universityRouter.delete('/:id', universityController.deleteById);
universityRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      alpa_two_code: Joi.string().required(),
      domains: Joi.array(),
      country: Joi.string().required(),
      state_province: Joi.string(),
      web_pages: Joi.array(),
      name: Joi.string(),
    },
  }),
  universityController.store
);
universityRouter.put('/:id', universityController.update);

export default universityRouter;
