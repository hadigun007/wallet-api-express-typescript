import express from 'express';
import middleware from '../midleware/middleware';
import { UserController } from '../controller/user_controller';
import { Bip39 } from '../controller/bip39_controller';

const private_route = express.Router()
const userc = new UserController()
const bip39 = new Bip39()

private_route.use(middleware)

private_route.post('/user/create', userc.store)

private_route.post('/bip39/generate', bip39.generate)


export default private_route