export class GenerateOTPRequest {
    verify_token!:string

    setVerifyToken(verify_token:string){
        this.verify_token = verify_token
    }

    getVerifyToken():string{
        return this.verify_token
    }

    getPayload():GenerateOTPRequest{
        return this
    }

    validate(data:GenerateOTPRequest):boolean{
        if(data.verify_token == null) return false
        return true
    }
}