import jwt from 'jsonwebtoken'
import config from '../../config.json'
import { FailedResponse } from '../response/failed_response';
export class JwtUtil {
    static getJwt(email:string):string{
        return jwt.sign({
            email: email
        }, config.jwt.key, { expiresIn: config.jwt.age });
    }

    static verify(jwt_token:string, ){
       
    }
}

