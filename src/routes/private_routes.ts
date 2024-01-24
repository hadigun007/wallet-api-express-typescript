import express from 'express';
import middleware from '../midleware/middleware';
import { UserController } from '../controller/user_controller';
import { Bip39Controller } from '../controller/bip39_controller';

const private_route = express.Router()
const userc = new UserController()
const bip39 = new Bip39Controller()

private_route.use(middleware)

private_route.post('/user/create', userc.store)

private_route.get('/bip39/index', bip39.index)
private_route.post('/bip39/store', bip39.store)
private_route.post('/bip39/show', bip39.show)
private_route.post('/bip39/edit', bip39.update)


export default private_route