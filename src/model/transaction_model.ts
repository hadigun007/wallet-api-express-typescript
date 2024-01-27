class TransactionModel {
    private id!:number
    private tx_hash!:string
    private block!:number
    private type_id!:number
    private sender!:string
    private from!:string
    private amount!:number
    private gass_fee!:number
    private created_at!:Date 
    private updated_at!:Date 

    public getId(): number {
        return this.id!;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTx_hash(): string {
        return this.tx_hash;
    }

    public setTx_hash(tx_hash: string): void {
        this.tx_hash = tx_hash;
    }

    public getBlock(): number {
        return this.block;
    }

    public setBlock(block: number): void {
        this.block = block;
    }

    public getType_id(): number {
        return this.type_id;
    }

    public setType_id(type_id: number): void {
        this.type_id = type_id;
    }

    public getSender(): string {
        return this.sender;
    }

    public setSender(sender: string): void {
        this.sender = sender;
    }

    public getFrom(): string {
        return this.from;
    }

    public setFrom(from: string): void {
        this.from = from;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getGass_fee(): number {
        return this.gass_fee;
    }

    public setGass_fee(gass_fee: number): void {
        this.gass_fee = gass_fee;
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