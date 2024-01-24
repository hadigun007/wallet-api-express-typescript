import {Response} from 'express'
import { LoginResponse } from '../model/response/login_response'
import { GenerateOTPResponse } from '../model/response/generate_response'

export class SuccessResponse {
    static indexSuccess(res: Response, token:string, data:any){
        return res.status(200).json({
            code: 1000,
            message: "success",
            status: "Index data success",
            token: token,
            data: data
        })
    }
    static storeSuccess(res: Response, token:string, data:any){
        return res.status(201).json({
            code: 1001,
            message: "success",
            status: "Store data success",
            token: token,
            data: data
        })
    }
    static showSuccess(res: Response, token:string, data:any){
        return res.status(200).json({
            code: 1002,
            message: "success",
            status: "Show data success",
            token: token,
            data: data
        })
    }
    static updateSuccess(res: Response, token:string, data:any){
        return res.status(200).json({
            code: 1003,
            message: "success",
            status: "Update data success",
            token: token,
            data: data
        })
    }
    static deleteSuccess(res: Response, token:string, data:any){
        return res.status(200).json({
            code: 1004,
            message: "success",
            status: "Delete data success",
            token: token,
            data: data
        })
    }
    static loginSuccess(res: Response, token:string, data:LoginResponse){
        return res.status(200).json({
            code: 1005,
            message: "success",
            status: "Login success",
            token: token,
            data: data
        })
    }
    
    static generateOTPResponse(res: Response, token:string, data:GenerateOTPResponse){
        return res.status(200).json({
            code: 1006,
            message: "success",
            status: "Generate OTP success",
            token: token,
            data: data
        })
    }
    static verifyOTPSuccess(res: Response, token:string){
        return res.status(200).json({
            code: 1007,
            message: "success",
            status: "Verify OTP success",
            token: token,
            data: null
        })
    }
}