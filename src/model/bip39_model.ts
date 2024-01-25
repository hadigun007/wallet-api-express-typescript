import { Wordlist } from "ethers/lib.commonjs/wordlists"

export class Bip39Model {
    id!:string 
    name!:string 
    entropy!:string 
    wordList!:Wordlist 
    password!:string 
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
    setPassword(password:string){
        this.password = password
    }
    setEntrophy(name:string){
        this.name = name
    }
    setWordList(wordList:Wordlist){
        this.wordList = wordList
    }

    getMnemonic():string{
        return this.mnemonic
    }

    getName():string{
        return this.name
    }
    
    getPassword():string{
        return this.password
    }
    getEntropy():string{
        return this.password
    }
    getWordList():string{
        return this.password
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