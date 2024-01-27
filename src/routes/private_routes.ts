import express from 'express';
import middleware from '../midleware/middleware';
import { UserController } from '../controller/user_controller';
import { Bip39Controller } from '../controller/bip39_controller';
import { WalletController } from '../controller/wallet_controller';
import { ChainController } from '../controller/chain_controller';
import { TransactionController } from '../controller/transaction_controller';

const private_route = express.Router()
const userc = new UserController()
const bip39 = new Bip39Controller()
const wallet = new WalletController()
const chains = new ChainController()
const transaction = new TransactionController()

private_route.use(middleware)

private_route.post('/user/create', userc.store)

private_route.get('/bip39s', bip39.index)
private_route.post('/bip39/store', bip39.store)
private_route.post('/bip39/show', bip39.show)
private_route.post('/bip39/edit', bip39.update)

private_route.get('/wallets', wallet.index)
private_route.post('/wallet/store', wallet.store2)
private_route.post('/wallet/show', wallet.show)

private_route.post('/chains/show', chains.show)


private_route.post('/transaction/store', transaction.store2)


export default private_route