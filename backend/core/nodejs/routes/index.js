import express from 'express';
const router = express.Router();
import datos from '../routes/datos.js';

router.use('/datos', datos);

export default router;