export class UserModel {
    private id!:string 
    private name!:string 
    private email!:string 
    private password!:string 
    private verify_token!:string 
    private secret_key!:string 
    private otpauth_url!:string 
    private status_id!:string 
    private role!:string
    private created_at!:string
    private updated_at!:string

    setId(id:string){
        this.id = id
    }
    setName(name:string){
        this.name = name
    }
    setEmail(email:string){
        this.email = email
    }
    setPassword(password:string){
        this.password = password
    }
    setVToken(vtoken:string){
        this.verify_token = vtoken
    }
    setSecretKey(secret_key:string){
        this.secret_key = secret_key
    }
    setOtpauthUrl(otpauth_url:string){
        this.otpauth_url = otpauth_url
    }
    setStatusId(status_id:string){
        this.status_id = status_id
    }
    setRole(role:string){
        this.role = role
    }
    setCreatedAt(created_at:string){
        this.created_at = created_at
    }
    setUpdatedAt(updated_at:string){
        this.updated_at = updated_at
    }
    
    getId():string{
        return this.id
    }
    getName():string{
        return this.name
    }
    getEmail():string{
        return this.email
    }
    getPassword():string{
        return this.password
    }
    getVToken():string{
        return this.verify_token
    }
    getSecretKey():string{
        return this.secret_key
    }
    getOtpauthUrl():string{
        return this.otpauth_url
    }
    getStatusId():string{
        return this.status_id
    }
    getRole():string{
        return this.role
    }
    getCreatedAt():string{
        return this.created_at
    }
    getUpdatedAt():string{
        return this.updated_at
    }

    getpayload():UserModel{
        return this
    }

    valaidateCreate(user:UserModel):boolean{
        if(
            user.getName().length == 0 ||
            user.getEmail().length == 0 ||
            user.getPassword().length == 0 ||
            user.getRole().length == 0
        ) return false
        return true
    }
}