export interface Query {
    index():string
    create(data:any):string
    show(data:any):string
    delete(data:any):string
}