import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./controller";
import config from '../../config.json'
import { Bip39Query } from "../database/query/bip39_query";
import { Keyval } from "../model/keyval_model";
import { ProviderQuery } from "../database/query/provider_query";
import { ProviderModel } from "../model/provider_model";

export class ProviderController implements Controller {
    public index(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    public store(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    public show(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    static async show2(key: string, id: string): Promise<any> {
        const mysql = require('mysql2/promise');
        const conn = await mysql.createConnection({ 
            host: config.database.host,
            user: config.database.user.name,
            password:  config.database.user.password,
            database: config.database.database
         });
        const key_val = new Keyval()
        const providerq = new ProviderQuery()
        const provider = new ProviderModel()
        
        key_val.setKey(key)
        key_val.setVal(id)

        const [rows] = await conn.execute(providerq.show(key_val));
        provider.setId(rows[0].id)
        provider.setName(rows[0].name)
        provider.setTag(rows[0].tag)
        provider.setEndpoint(rows[0].endpoint)
        provider.setEnvirontment(rows[0].environtment)
        provider.setCreated_at(rows[0].created_at)
        provider.setUpdated_at(rows[0].updated_at)
        await conn.end();
        return provider
    }
    public update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    public destroy(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    
}