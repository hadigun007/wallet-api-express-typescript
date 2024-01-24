export class VerifyOTPRequest {
    otp_code!:string
    verify_token!:string

    setOTPCode(otp_code:string){
        this.otp_code = otp_code
    }
    setVerifyToken(verify_token:string){
        this.verify_token = verify_token
    }

    getOTPCode():string{
        return this.otp_code
    }
   
    getVerifyToken():string{
        return this.verify_token
    }

    getPayload():VerifyOTPRequest{
        return this
    }

    validate(data:VerifyOTPRequest):boolean{
        if(data.otp_code == null || data.verify_token == null) return false
        return true
    }
}