export class Bip39Model {
    mnemonic!:string 
    name!:string 

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
    
    static validateGenerateMnemonic(data:Bip39Model):boolean{
        if(data.getName() == null ||data.getName().length == 0){
            return false
        }
        return true
    }
}