export class LoginResponse {
    verify_token!:string 
    status!:string 

    setVerifyToken(verify_token:string){
        this.verify_token = verify_token
    }

    setStatus(status:string){
        this.status = status
    }

    getVerifyToken():string{
        return this.verify_token
    }

    getStatus():string{
        return this.status
    }

    getPayload(){
        return this
    }
}