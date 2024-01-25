import { Bip39Model } from "./bip39_model"

export class BlockchainModel {
    id!:number 
    name!:string 
    symbol!:string 
    base_path!:string 
    created_at!:string 
    updated_at!:string 

    setId(id:number){
        this.id = id
    }

    setName(name:string){
        this.name = name
    }
    
    setSymbol(symbol:string){
        this.symbol = symbol
    }
    setBasePath(base_path:string){
        this.base_path = base_path
    }


    getId():number{
        return this.id
    }

    getName():string{
        return this.name
    }

    getSymbol():string{
        return this.symbol
    }

    getBasePath():string{
        return this.base_path
    }
    getPayload(){
        return this
    }
    
    static validateStore(data:BlockchainModel):boolean{
        if(
            data.getId() == null ||data.getId() == undefined ||
            data.getName() == null ||data.getName().length == 0 || data.getName() == "" ||
            data.getBasePath() == null ||data.getBasePath().length == 0 || data.getBasePath() == ""){
            return false
        }
        return true
    }
}