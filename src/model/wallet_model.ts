import { Bip39Model } from "./bip39_model"
import { BlockchainModel } from "./blockchain_model"

export class WalletModel {
    private id!: number
    private chain!: BlockchainModel
    private name!: string
    private bip39!: Bip39Model
    private address!: string
    private public_key!: string
    private private_key!: string
    private fingerprint!: string
    private parentFingerprint!: string
    private path!: string
    private created_at!: string
    private updated_at!: string

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getChain(): BlockchainModel {
        return this.chain;
    }

    public setChain(chain: BlockchainModel): void {
        this.chain = chain;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getBip39(): Bip39Model {
        return this.bip39;
    }

    public setBip39(bip39: Bip39Model): void {
        this.bip39 = bip39;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getPublic_key(): string {
        return this.public_key;
    }

    public setPublic_key(public_key: string): void {
        this.public_key = public_key;
    }

    public getPrivate_key(): string {
        return this.private_key;
    }

    public setPrivate_key(private_key: string): void {
        this.private_key = private_key;
    }

    public getFingerprint(): string {
        return this.fingerprint;
    }

    public setFingerprint(fingerprint: string): void {
        this.fingerprint = fingerprint;
    }

    public getParentFingerprint(): string {
        return this.parentFingerprint;
    }

    public setParentFingerprint(parentFingerprint: string): void {
        this.parentFingerprint = parentFingerprint;
    }

    public getPath(): string {
        return this.path;
    }

    public setPath(path: string): void {
        this.path = path;
    }

    public getCreated_at(): string {
        return this.created_at;
    }

    public setCreated_at(created_at: string): void {
        this.created_at = created_at;
    }

    public getUpdated_at(): string {
        return this.updated_at;
    }

    public setUpdated_at(updated_at: string): void {
        this.updated_at = updated_at;
    }

    static validateStore(data: WalletModel): boolean {
        if (
            data.getId() == null || data.getId() == undefined ||
            data.getName() == null || data.getName().length == 0 || data.getName() == "" ||
            data.getChain() == null ||
            data.getBip39() == null ||
            data.getPath() == null || data.getPath().length == 0 || data.getPath() == "") {
            return false
        }
        return true
    }
}