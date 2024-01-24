import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from '../../config.json'
import { FailedResponse } from "../response/failed_response";


export function jwtCheck(req:Request, res:Response, next:Function){

    const api_key = req.headers["x-api-key"]
    if(api_key != config["api-key"]) FailedResponse.apiKeyFailed(res,'')
    const jwt_token = req.headers["authorization"]?.split(" ")[1]
    jwt.verify(jwt_token as string, config.jwt.key, (err: any, user: any) => {
        if (err) return FailedResponse.jwtFailed(res, '') 
        next()
    });
}