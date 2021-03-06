import { Router } from 'express';
import {
    createProfile,
    deleteProfile,
    getAllProfile,
    getMyProfile,
    getProfileById,
    updateProfile,
} from '../controllers/profile.controller';
import uploadFiles from '../helpers/initMulter';

import isValid from '../middlewares/isValid';
import profileValidation from '../validations/profile.validation';

const router = Router();

router.post('/user-profile', isValid(profileValidation.profile, 'body'), createProfile);

router.get('/user-profile', getAllProfile);

router.get('/user-profile/me', getMyProfile);

router.get('/user-profile/:profileId', getProfileById);

router.put('/user-profile/me', uploadFiles, isValid(profileValidation.profile, 'body'), updateProfile);

router.delete('/user-profile/me', deleteProfile);

export default router;
