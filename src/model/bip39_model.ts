export class Bip39Model {
    id!:string 
    name!:string 
    mnemonic!:string 

    setId(id:string){
        this.id = id
    }
    
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
    
    static validateStore(data:Bip39Model):boolean{
        if(data.getName() == null ||data.getName().length == 0){
            return false
        }
        return true
    }
    static validateUpdate(data:Bip39Model):boolean{
        if(data.getName() == null ||data.getName().length == 0){
            return false
        }
        return true
    }
}