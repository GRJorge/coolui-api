import { Router } from 'express';
import uploadProfilePicture from '../middlewares/uploadProfilePicture.middleware';
import optimizePicture from '../middlewares/optimizePicture.middleware';
import controller from '../controllers/user.controller';

const router = Router();

router.post('/create', uploadProfilePicture.single('profilePicture'), optimizePicture, controller.createUser);

export default router;
