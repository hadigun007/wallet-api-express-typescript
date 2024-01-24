export class GenerateOTPResponse {
    verify_token!:string 
    secret_key!:string 

    setVerifyToken(verify_token:string){
        this.verify_token = verify_token
    }

    setSecretKey(secret_key:string){
        this.secret_key = secret_key
    }

    getVerifyToken():string{
        return this.verify_token
    }

    getSecretKey():string{
        return this.secret_key
    }

    getPayload(){
        return this
    }
}