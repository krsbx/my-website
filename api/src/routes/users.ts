import { Router } from 'express';
import * as user from '../middleware/users';
import profile from './profile';

const router = Router();

// POST /users/login
router.post('/login', user.loginMw);

// POST /users
router.post('/', user.authMw, user.createUserMw, user.returnUserMw);

// GET /users
router.get('/', user.authMw, user.getUsersMw, user.returnUsersMw);

// GET /users/:id
router.get('/:id', user.authMw, user.getUserMw, user.returnUserMw);

// PATCH /users/:id
router.patch(
  '/:id',
  user.authMw,
  user.getUserMw,
  user.updateUserMw,
  user.getUserMw,
  user.returnUserMw
);

// DELETE /users/:id
router.delete('/:id', user.authMw, user.getUserMw, user.deleteUserMw);

// ALL /users/:id/profile
router.use('/:id/profile', user.authMw, user.getUserMw, profile);

export default router;
