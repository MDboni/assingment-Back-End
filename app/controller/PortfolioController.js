import PortfolioModel from "../model/PortfolioModel.js";
import mongoose from "mongoose";


// CREATE API 

export const CreateTask=async(req,res)=>{

    try {
        let user_id=req.headers['user_id'];
        let reqBody=req.body;
        reqBody.user_id=user_id;
        await PortfolioModel.create(reqBody);
        return res.json({status:"success","Message":"User CreateTask successfully"})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}

//  READ 

export const ReadTask = async (req, res) => {
    try {
        let user_id = req.headers['user_id'];  
        let portfolios = await PortfolioModel.find({ user_id }); 

        return res.json({ status: "success", data: portfolios });
    } catch (err) {
        return res.json({ status: "fail", Message: err.toString() });
    }
};

// UPDATE

export const UpdateTaskStatus=async(req,res)=>{

try{

    let id=req.params.id;
    let status=req.params.status;
    let user_id=req.headers['user_id']
    await PortfolioModel.updateOne({"_id":id,"user_id":user_id},{status})

    return res.json({status:"success","Message":"User UpdateTaskStatus successfully"})

}catch(e){
    return res.json({status:"fail","Message":e.toString()})
}


}

// DELETE 

export const DeleteTask=async(req,res)=>{
    try {
        let id=req.params.id;
        let user_id=req.headers['user_id']
        await PortfolioModel.deleteOne({"_id":id,"user_id":user_id})
        return res.json({status:"success","Message":"User DeleteTask successfully"})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}



