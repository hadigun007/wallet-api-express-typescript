export class ProviderModel {
    private id!:number
    private name!:string
    private tag!:string
    private endpoint!:string
    private chain_id!:number 
    private environtment!:string 
    private created_at!:Date
    private updated_at!:Date

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getTag(): string {
        return this.tag;
    }

    public setTag(tag: string): void {
        this.tag = tag;
    }

    public getEndpoint(): string {
        return this.endpoint;
    }

    public setEndpoint(endpoint: string): void {
        this.endpoint = endpoint;
    }

    public getChain_id(): number {
        return this.chain_id;
    }

    public setChain_id(chain_id: number): void {
        this.chain_id = chain_id;
    }

    public getEnvirontment(): string {
        return this.environtment;
    }

    public setEnvirontment(environtment: string): void {
        this.environtment = environtment;
    }

    public getCreated_at(): Date {
        return this.created_at;
    }

    public setCreated_at(created_at: Date): void {
        this.created_at = created_at;
    }

    public getUpdated_at(): Date {
        return this.updated_at;
    }

    public setUpdated_at(updated_at: Date): void {
        this.updated_at = updated_at;
    }

}