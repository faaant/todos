import { Router } from 'express';

import { dataValidationMiddleware } from '../../middlewares/data-validation.middleware';
import authController from '../../controllers/auth.controller';

const router: Router = Router();

router.post('/sign-up', dataValidationMiddleware, authController.signUp);
router.post('/sign-in', dataValidationMiddleware, authController.signIn);
router.post('/refresh', authController.refresh);
router.post('/logout', authController.logout);

export default router;
