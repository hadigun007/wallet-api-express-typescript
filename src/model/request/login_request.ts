export class LoginRequest {
    email!:string
    password!:string

    setEmail(email:string){
        this.email = email
    }

    setPassword(password:string){
        this.password = password
    }

    getEmail():string{
        return this.email
    }

    getPassword():string{
        return this.password
    }

    getPayload():LoginRequest{
        return this
    }

    validate(data:LoginRequest):boolean{
        if(data.getEmail() == null || data.getPassword() == null) return false
        return true
    }
}