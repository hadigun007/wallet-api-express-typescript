import express from 'express';
import { UserController } from '../controller/user_controller';
import middleware from '../midleware/middleware';

const private_route = express.Router()
const userc = new UserController()

private_route.use(middleware)

private_route.post('/user/create', middleware, userc.store)

export default private_route