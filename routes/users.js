import express from 'express';


import { createUser,getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';


const router =express.Router();


router.get ('/',getUsers);


router.post('/',createUser);

router.get('/:id',getUser);

// deleting users

router.delete('/:id',deleteUser);

//patch user update user//

router.patch('/:id',updateUser);

export default router;