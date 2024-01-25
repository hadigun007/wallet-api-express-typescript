export interface Model {
    validateStore(data:any):boolean
    validateShow(data:any):boolean
    validateEdit(data:any):boolean
    validateDelet(data:any):boolean
}