import { Router } from 'express';
import upload from '../middlewares/uploadProfilePicture.middleware';

const router = Router();

router.post('/uploadPicture', upload.single('picture'), (req, res) => {
    res.json(req.file);
});

export default router;
