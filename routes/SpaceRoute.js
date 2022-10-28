import express from 'express';
import { cacheData, getSpacesData  } from '../controllers/SpaceController'
const router = express.Router();
router.get('/space', cacheData ,getSpacesData)

export default router