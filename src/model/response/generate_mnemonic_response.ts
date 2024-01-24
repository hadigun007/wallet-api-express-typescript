export class GenerateMnemonicResponse {
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
}