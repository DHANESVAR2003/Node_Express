import express from 'express';

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();



router.get('/',getUsers);


router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id',deleteUser);

router.patch('/:id', updateUser);

export default router;