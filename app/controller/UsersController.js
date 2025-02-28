import UsersModel from "../model/PortfolioModel.js";
import { TokenEncode , TokenDecode} from "../utility/tokenUtility.js";

export const Registration=async(req,res)=>{

    try{
        let reqBody =   req.body ;
        await UsersModel.create(reqBody)
        return res.json({status:"success","Message":"User registered successfully"})
    }catch(e){
        return res.json({status:"fail","Message":e.toString()})
    }
  

}

export const Login=async(req,res)=>{

    try{
        let reqBody = req.body ;
        let data = await UsersModel.findOne(reqBody)
        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }else{
            let token = TokenEncode(data['email'],data['_id'])
            return res.json({status:"success",Token:token,"Message":"User Login successfully"})
        }

    }catch(e){
        return res.json({status:"fail","Message":e.toString()})
    }

}


export const ProfileDetails=async(req,res)=>{

    try{
        let user_id = req.headers['user_id'];
        let data = await UsersModel.findOne({"_id":user_id})
        
        return res.json({status:"success","Message":"User ProfileDetails successfully",data:data})
    }catch(e){
        return res.json({status:"fail","Message":e.toString()})

    }

}



export const ProfileUpdate=async(req,res)=>{
    try{
        let reqBody = req.body ;
        let user_id = req.headers['user_id'] ;
        await UsersModel.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User Update successfully"})
        
    }catch(e){

    }
}

