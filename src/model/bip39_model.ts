import { Wordlist } from "ethers/lib.commonjs/wordlists"

export class Bip39Model {
     id!:string 
     name!:string 
     entropy!:string 
    //  wordList!:Wordlist 
     password!:string 
     mnemonic!:string 

    public setId(id:string){
        this.id = id
    }
    public getId(){
        return this.id
    }
    
    public setMnemonic(mnemonic:string){
        this.mnemonic = mnemonic
    }

    public setName(name:string){
        this.name = name
    }
    public setPassword(password:string){
        this.password = password
    }
    public setEntrophy(name:string){
        this.name = name
    }
    // public setWordList(wordList:Wordlist){
    //     this.wordList = wordList
    // }

    public getMnemonic():string{
        return this.mnemonic
    }

    getName():string{
        return this.name
    }
    
    public getPassword():string{
        return this.password
    }
    public getEntropy():string{
        return this.entropy
    }
    // public getWordList():string{
    //     return this.wordList
    // }

    public getPayload(){
        return this
    }
    
    static  validateStore(data:Bip39Model):boolean{
        if(data.getName() == null ||data.getName().length == 0 || data.getPassword() == null ||data.getPassword().length == 0){
            return false
        }
        return true
    }
    static validateUpdate(data:Bip39Model):boolean{
        if(data.getPassword() == null ||data.getName().length == 0){
            return false
        }
        return true
    }
}