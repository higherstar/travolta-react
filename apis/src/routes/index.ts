import { Router } from 'express';
import { hotelController } from '../controllers/HotelController';

const router = Router();

router.get('/hotels', hotelController.list);

export default router;
