import { Router } from 'express';
import healthRouter from './health.route';

const router = Router();

router.use('/health', healthRouter);

export default router;
