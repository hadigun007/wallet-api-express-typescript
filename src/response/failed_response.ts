import {Response} from 'express'

export class FailedResponse {
    static indexFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2000,
            message: "failed",
            status: "Index data failed",
            token: token
        })
    }
    static storeFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2001,
            message: "failed",
            status: "Store data failed",
            token: token
        })
    }
    static showFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2002,
            message: "failed",
            status: "Show data failed",
            token: token
        })
    }
    static updateFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2003,
            message: "failed",
            status: "Update data failed",
            token: token
        })
    }
    static deleteFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2004,
            message: "failed",
            status: "Delete data failed",
            token: token
        })
    }
    
    static bodyFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2005,
            message: "failed",
            status: "Request data is incomplete",
            token: token
        })
    }
    
    static queryFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2006,
            message: "failed",
            status: "Failed when processing data (quey error)",
            token: token
        })
    }
    
    static userFreezed(res: Response, token:string){
        return res.status(500).json({
            code: 2007,
            message: "failed",
            status: "User is freezed",
            token: token
        })
    }
    
    static loginFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2008,
            message: "failed",
            status: "User credentials failed",
            token: token
        })
    }
    static verifyOTPFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2008,
            message: "failed",
            status: "Verify OTP failed",
            token: token
        })
    }
    static jwtFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2009,
            message: "failed",
            status: "JWT failed",
            token: token
        })
    }
    static apiKeyFailed(res: Response, token:string){
        return res.status(500).json({
            code: 2010,
            message: "failed",
            status: "Api Key failed",
            token: token
        })
    }
}