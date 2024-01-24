import { generateMnemonic } from 'bip39'
import { SuccessResponse } from '../response/success_response';
import { GenerateMnemonicResponse } from '../model/response/generate_mnemonic_response';
import { Request, Response } from "express";
import { FailedResponse } from '../response/failed_response';
import { AuthController } from './auth_controller';
import { Bip39Model } from '../model/bip39_model';
import { JwtUtil } from '../util/jwt_util';

export class Bip39 {
    generate(req:Request, res:Response) {
        const request_data = new Bip39Model()
        const response_data = new GenerateMnemonicResponse()
        const email = AuthController.get_auth_user().getEmail()
        const token = JwtUtil.getJwt(email)
        
        request_data.setName(req.body["name"])

        if (Bip39Model.validateGenerateMnemonic(request_data) == false) return FailedResponse.bodyFailed(res, token)
        const mnemonic = generateMnemonic()

        response_data.setMnemonic(mnemonic)
        response_data.setName('hadi')

        SuccessResponse.generateSuccess(res, token, response_data)

    }
}
