export class WalletModel {
    id!:string 
    chain!:string
    name!:string 
    mnemonic!:string 
    private_key!:string 
    path!:string 
    created_at!:string 
    updated_at!:string 

    setMnemonic(mnemonic:string){
        this.mnemonic = mnemonic
    }

    setName(name:string){
        this.name = name
    }

    getMnemonic():string{
        return this.mnemonic
    }

    getName():string{
        return this.name
    }

    getPayload(){
        return this
    }
    
    static validateGenerateMnemonic(data:WalletModel):boolean{
        if(data.getName() == null ||data.getName().length == 0){
            return false
        }
        return true
    }
}