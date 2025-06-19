import { Router } from 'express';
import { register, login, logout, me} from '../controllers/AuthController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me',authMiddleware, me);

export default router;