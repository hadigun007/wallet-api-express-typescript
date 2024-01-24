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
}