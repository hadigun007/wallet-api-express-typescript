import express from 'express';
import { AuthController } from '../controller/auth_controller';
import { OTPController } from '../controller/otp_controller';

const public_route = express.Router()


public_route.post('/auth/login', AuthController.login)
public_route.get('/auth/generate_2fa/:vtoken', OTPController.generate)
public_route.post('/auth/verify_2fa', OTPController.verify)

export default public_route