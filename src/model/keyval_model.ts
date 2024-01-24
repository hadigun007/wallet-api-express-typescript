export class Keyval {
    key!:string
    val!:string

    setKey(key:string){
     this.key = key
    }
    setVal(val:string){
     this.val = val
    }

    getKey():string{
        return this.key
    }

    getVal():string{
        return this.val
    }

    getPayload():Keyval{
        return this
    }

    static validate(data:Keyval):boolean{
        if(data.getKey() == null || data.getKey() == undefined || data.getKey() == "" ||
        data.getVal() == null || data.getVal() == undefined || data.getVal() == "") return false
        return true
    }
}