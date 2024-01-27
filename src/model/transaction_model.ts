import { ProviderModel } from "./provider_model"
import { WalletModel } from "./wallet_model"

export class TransactionModel {
    private id!: number
    private tx_hash!: string
    private block!: number
    private type_id!: number
    private sender!: WalletModel
    private receiver!: string
    private amount!: string
    private gass_fee!: string
    private provider!: ProviderModel
    private created_at!: Date
    private updated_at!: Date

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
    public getProvider(): ProviderModel {
        return this.provider;
    }

    public setProvider(provider_id: ProviderModel): void {
        this.provider = provider_id;
    }

    public getType_id(): number {
        return this.type_id;
    }

    public setType_id(type_id: number): void {
        this.type_id = type_id;
    }

    public getSender(): WalletModel {
        return this.sender;
    }

    public setSender(sender: WalletModel): void {
        this.sender = sender;
    }

    public getReciever(): string {
        return this.receiver;
    }

    public setReciver(receiver: string): void {
        this.receiver = receiver;
    }

    public getAmount(): string {
        return this.amount;
    }

    public setAmount(amount: string): void {
        this.amount = amount;
    }

    public getGass_fee(): string {
        return this.gass_fee;
    }

    public setGass_fee(gass_fee: string): void {
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

    static validateStore(data: TransactionModel): boolean {
        if (
            data.sender == null || data.sender == undefined ||
            data.receiver == null || data.receiver == undefined || data.receiver == "" ||
            data.receiver == null || data.receiver == undefined ||
            data.provider == null || data.provider == undefined
        ) return false
        return true
    }

}